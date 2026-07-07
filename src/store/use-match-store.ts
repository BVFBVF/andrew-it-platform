import { create } from "zustand";
import { GRADE, FORMAT } from "@/lib/dictionaries";

interface MatchState {
  stack: string;
  grade: string;
  format: string;
  rateLimit: string;
  setStack: (val: string) => void;
  setGrade: (val: string) => void;
  setFormat: (val: string) => void;
  setRateLimit: (val: string) => void;
}

export const useMatchStore = create<MatchState>((set) => ({
  stack: "",
  grade: GRADE.ANY,
  format: FORMAT.ANY,
  rateLimit: "",
  setStack: (val) => set({ stack: val }),
  setGrade: (val) => set({ grade: val }),
  setFormat: (val) => set({ format: val }),
  setRateLimit: (val) => set({ rateLimit: val }),
}));
