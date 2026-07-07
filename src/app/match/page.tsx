"use client";

import { MatchedCandidates } from "@/components/match/MatchedCandidates";
import { MatchFilters } from "@/components/match/MatchFilters";

export default function MatchPage() {
  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-neutral-950 text-neutral-100 p-6 md:p-12 font-sans w-full">
      <div className="max-w-5xl mx-auto space-y-8">

        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Candidate Match
          </h1>
          <p className="text-neutral-400 text-lg">
            Find the perfect candidate for your vacancy instantly.
          </p>
        </header>

        <MatchFilters />
        <MatchedCandidates />

      </div>
    </div>
  );
}
