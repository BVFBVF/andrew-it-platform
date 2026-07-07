"use client";

import { useFilteredCandidates } from "@/store/use-pipeline-store";
import { pipelineStages } from "@/lib/dictionaries";
import { PipelineColumn } from "./PipelineColumn";

export function PipelineBoard() {
  const filteredCandidates = useFilteredCandidates();

  return (
    <div className="flex-1 min-h-0">
      <div className="flex gap-4 overflow-x-auto pb-4 h-[calc(100vh-14rem)] min-h-125 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {pipelineStages.map((stage) => {
          const stageCandidates = filteredCandidates.filter((c) => c.pipelineStage === stage);
          stageCandidates.sort(
            (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime(),
          );

          return (
            <div key={stage} className="snap-start">
              <PipelineColumn
                title={stage}
                candidates={stageCandidates}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
