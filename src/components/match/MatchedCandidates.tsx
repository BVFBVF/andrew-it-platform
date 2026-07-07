"use client";

import { useState, useMemo } from "react";
import { AlertCircle } from "lucide-react";
import { CandidateCard } from "./CandidateCard";
import { Candidate } from "@/lib/types";
import { mockCandidates } from "@/lib/mock-data";
import { useMatchStore } from "@/store/use-match-store";
import { GRADE, FORMAT } from "@/lib/dictionaries";

export function MatchedCandidates() {
  const { stack, grade, format, rateLimit } = useMatchStore();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Parse stack tags
  const stackTags = useMemo(() => {
    return stack
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
  }, [stack]);

  // Filter and sort candidates
  const filteredCandidates = useMemo(() => {
    return mockCandidates
      .map((candidate) => {
        // Calculate stack match
        let stackMatch: number;
        if (stackTags.length > 0) {
          const matchedSkills = candidate.skills.filter((skill) =>
            stackTags.includes(skill.toLowerCase()),
          );
          stackMatch = Math.round((matchedSkills.length / stackTags.length) * 100);
        } else {
          stackMatch = 100; // if no tags specified, consider 100% match
        }

        return { ...candidate, stackMatch };
      })
      .filter((candidate) => {
        if (grade !== GRADE.ANY && candidate.grade !== grade) return false;
        if (format !== FORMAT.ANY && candidate.format !== format) return false;
        if (rateLimit && candidate.rate > Number(rateLimit)) return false;
        if (stackTags.length > 0 && candidate.stackMatch === 0) return false; // Filter out 0% match if tags are entered
        return true;
      })
      .sort((a, b) => {
        // Sort by readinessScore descending
        if (b.readinessScore !== a.readinessScore) {
          return b.readinessScore - a.readinessScore;
        }
        // Then by stackMatch descending
        return b.stackMatch - a.stackMatch;
      });
  }, [stackTags, grade, format, rateLimit]);

  const handleCopyProfile = (candidate: Candidate & { stackMatch: number }) => {
    const profileText = `
Name: ${candidate.name}
Role: ${candidate.role} (${candidate.grade})
Format: ${candidate.format}
Rate: $${candidate.rate}/hr
Skills: ${candidate.skills.join(", ")}
Readiness: ${candidate.readinessStatus}
Match: ${candidate.stackMatch}%
About: ${candidate.about}
    `.trim();

    navigator.clipboard.writeText(profileText);
    setCopiedId(candidate.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="space-y-4 pb-12 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-neutral-100">
          Matched Candidates ({filteredCandidates.length})
        </h2>
      </div>

      {filteredCandidates.length === 0 ? (
        <div className="bg-neutral-900 border border-neutral-800 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center">
          <AlertCircle className="w-12 h-12 text-neutral-600 mb-4" />
          <h3 className="text-lg font-medium text-neutral-300">No candidates found</h3>
          <p className="text-neutral-500 text-sm mt-1">
            Try adjusting your filters or stack requirements.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              copiedId={copiedId}
              onCopyProfile={handleCopyProfile}
            />
          ))}
        </div>
      )}
    </section>
  );
}
