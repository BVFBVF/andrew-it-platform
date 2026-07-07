"use client";

import { Search, Briefcase, MapPin, DollarSign } from "lucide-react";
import { useMatchStore } from "@/store/use-match-store";
import { GRADE, FORMAT } from "@/lib/dictionaries";

export function MatchFilters() {
  const {
    stack, setStack,
    grade, setGrade,
    format, setFormat,
    rateLimit, setRateLimit
  } = useMatchStore();

  return (
    <section className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2 col-span-1 md:col-span-2">
          <label className="text-sm font-medium text-neutral-300">Стек (через запятую)</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="React, Node.js, Python..."
              value={stack}
              onChange={(e) => setStack(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-neutral-200 placeholder:text-neutral-600"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Грейд</label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none text-neutral-200 transition-all"
            >
              <option value={GRADE.ANY}>Любой грейд</option>
              <option value={GRADE.JUNIOR}>{GRADE.JUNIOR}</option>
              <option value={GRADE.MIDDLE}>{GRADE.MIDDLE}</option>
              <option value={GRADE.SENIOR}>{GRADE.SENIOR}</option>
              <option value={GRADE.LEAD}>{GRADE.LEAD}</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Формат работы</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none text-neutral-200 transition-all"
            >
              <option value={FORMAT.ANY}>Любой формат</option>
              <option value={FORMAT.REMOTE}>{FORMAT.REMOTE}</option>
              <option value={FORMAT.OFFICE}>{FORMAT.OFFICE}</option>
              <option value={FORMAT.HYBRID}>{FORMAT.HYBRID}</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300">Макс. ставка ($/час)</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="number"
              placeholder="Без лимита"
              value={rateLimit}
              onChange={(e) => setRateLimit(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-neutral-200 placeholder:text-neutral-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
