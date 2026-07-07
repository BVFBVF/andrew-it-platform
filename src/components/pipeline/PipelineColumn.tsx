import { PipelineCandidate, PipelineStage } from "@/lib/types";
import { PipelineCard } from "./PipelineCard";

interface PipelineColumnProps {
  title: PipelineStage;
  candidates: PipelineCandidate[];
}

export function PipelineColumn({ title, candidates }: PipelineColumnProps) {
  return (
    <div className="flex flex-col min-w-70 max-w-70 bg-neutral-950/50 rounded-2xl border border-neutral-800/60 overflow-hidden h-full">
      <div className="p-4 border-b border-neutral-800/60 bg-neutral-900/30 flex items-center justify-between sticky top-0 backdrop-blur-sm z-10">
        <h3 className="font-semibold text-neutral-200 text-sm">
          {title}
        </h3>
        <span className="bg-neutral-800 text-neutral-300 text-xs font-medium px-2 py-0.5 rounded-full">
          {candidates.length}
        </span>
      </div>
      <div className="p-3 flex flex-col gap-3 overflow-y-auto flex-1 min-h-40">
        {candidates.map((candidate) => (
          <PipelineCard key={candidate.id} candidate={candidate} />
        ))}
        {candidates.length === 0 && (
          <div className="flex items-center justify-center h-24 text-neutral-600 text-sm border border-dashed border-neutral-800 rounded-xl">
            Пусто
          </div>
        )}
      </div>
    </div>
  );
}
