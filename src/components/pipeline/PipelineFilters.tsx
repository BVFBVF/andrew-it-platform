"use client";

import { usePipelineStore } from "@/store/use-pipeline-store";
import { GRADE, grades } from "@/lib/dictionaries";
import { Search } from "lucide-react";

export function PipelineFilters() {
  const { stack, grade, setStack, setGrade } = usePipelineStore();

  return (
    <div className="shrink-0">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Filter by Stack (e.g. React)..."
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
          />
        </div>

        <div className="w-full md:w-48">
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 appearance-none transition-all cursor-pointer"
          >
            {grades.map((g) => (
              <option key={g} value={g}>
                {g === GRADE.ANY ? "All Grades" : g}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
