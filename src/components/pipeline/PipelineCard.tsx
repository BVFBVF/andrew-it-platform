import { PipelineCandidate } from "@/lib/types";
import { usePipelineStore } from "@/store/use-pipeline-store";
import { pipelineStages } from "@/lib/dictionaries";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

export function PipelineCard({ candidate }: { candidate: PipelineCandidate }) {
  const moveCandidate = usePipelineStore((state) => state.moveCandidate);

  const currentIndex = pipelineStages.indexOf(candidate.pipelineStage);
  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex < pipelineStages.length - 1;

  // Format date
  const dateObj = new Date(candidate.lastUpdated);
  const formattedDate = dateObj.toLocaleDateString("ru-RU", { month: "short", day: "numeric" });

  return (
    <div
      className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 shadow-sm hover:border-neutral-700 transition-colors flex flex-col gap-3 shrink-0">
      <div>
        <h4 className="text-white font-medium text-sm">{candidate.name}</h4>
        <p className="text-xs text-neutral-400 mt-0.5">{candidate.grade}</p>
      </div>

      <div className="flex flex-wrap gap-1">
        {candidate.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="px-1.5 py-0.5 bg-neutral-800 rounded-md text-xs text-neutral-300"
          >
            {skill}
          </span>
        ))}
        {candidate.skills.length > 3 && (
          <span className="px-1.5 py-0.5 bg-neutral-800 rounded-md text-xs text-neutral-500">
            +{candidate.skills.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center gap-1.5 mt-1 text-xs text-neutral-500">
        <Clock className="w-3 h-3" />
        <span>Обновлено {formattedDate}</span>
      </div>

      <div className="flex items-center justify-between mt-2 pt-3 border-t border-neutral-800/50">
        <button
          disabled={!canMoveLeft}
          onClick={() => moveCandidate(candidate.id, "prev")}
          className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-xs font-medium text-neutral-400 truncate px-2 uppercase tracking-wider">
          {candidate.pipelineStage}
        </span>
        <button
          disabled={!canMoveRight}
          onClick={() => moveCandidate(candidate.id, "next")}
          className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
