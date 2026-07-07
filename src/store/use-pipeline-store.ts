import { create } from "zustand";
import { useMemo } from "react";
import { GRADE, pipelineStages } from "@/lib/dictionaries";
import { PipelineCandidate, PipelineStage } from "@/lib/types";
import { mockPipelineCandidates } from "@/lib/mock-data";

interface PipelineState {
  candidates: PipelineCandidate[];
  stack: string;
  grade: string;
  setStack: (val: string) => void;
  setGrade: (val: string) => void;
  moveCandidate: (id: string, direction: "prev" | "next") => void;
}

export const usePipelineStore = create<PipelineState>((set) => ({
  candidates: mockPipelineCandidates,
  stack: "",
  grade: GRADE.ANY,
  setStack: (val) => set({ stack: val }),
  setGrade: (val) => set({ grade: val }),
  moveCandidate: (id, direction) =>
    set((state) => {
      const candidates = state.candidates.map((c) => {
        if (c.id !== id) return c;
        const currentIndex = pipelineStages.indexOf(c.pipelineStage);
        let newIndex = currentIndex;

        if (direction === "next" && currentIndex < pipelineStages.length - 1) {
          newIndex = currentIndex + 1;
        } else if (direction === "prev" && currentIndex > 0) {
          newIndex = currentIndex - 1;
        }

        if (newIndex !== currentIndex) {
          return {
            ...c,
            pipelineStage: pipelineStages[newIndex] as PipelineStage,
            lastUpdated: new Date().toISOString(),
          };
        }
        return c;
      });
      return { candidates };
    }),
}));

export const useFilteredCandidates = () => {
  const { candidates, stack, grade } = usePipelineStore();
  return useMemo(() => {
    return candidates.filter((c) => {
      const matchStack = stack
        ? c.skills.some((s) => s.toLowerCase().includes(stack.toLowerCase()))
        : true;
      const matchGrade = grade !== GRADE.ANY ? c.grade === grade : true;
      return matchStack && matchGrade;
    });
  }, [candidates, stack, grade]);
};
