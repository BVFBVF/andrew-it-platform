import Image from "next/image";
import { cn } from "@/lib/utils";
import { Candidate } from "@/lib/types";
import { READINESS_STATUS } from "@/lib/dictionaries";
import { MapPin, CheckCircle2, Clock, Search, X, Copy } from "lucide-react";

interface CandidateCardProps {
  candidate: Candidate & { stackMatch: number };
  copiedId: string | null;
  onCopyProfile: (candidate: Candidate & { stackMatch: number }) => void;
}

export function CandidateCard({ candidate, copiedId, onCopyProfile }: CandidateCardProps) {
  return (
    <div className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 md:p-6 transition-all shadow-lg hover:shadow-xl flex flex-col md:flex-row gap-6 md:items-center">
      {/* Left Column: Avatar & Basic Info */}
      <div className="flex items-center gap-4 min-w-60">
        <Image
          src={candidate.avatarUrl || "https://i.pravatar.cc/150"}
          alt={candidate.name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover border-2 border-neutral-800"
        />
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
            {candidate.name}
          </h3>
          <p className="text-sm text-neutral-400 font-medium">
            {candidate.role} · <span className="text-neutral-300">{candidate.grade}</span>
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {candidate.format}
            </span>
          </div>
        </div>
      </div>

      {/* Middle Column: Stats */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <div className="space-y-1">
          <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
            Stack Match
          </p>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-lg font-semibold",
                candidate.stackMatch >= 80
                  ? "text-emerald-400"
                  : candidate.stackMatch >= 50
                    ? "text-amber-400"
                    : "text-rose-400",
              )}
            >
              {candidate.stackMatch}%
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
            Readiness Status
          </p>

          <div className="flex items-center gap-1.5">
            {candidate.readinessStatus === READINESS_STATUS.READY &&
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
            {candidate.readinessStatus === READINESS_STATUS.IN_2_WEEKS && (
              <Clock className="w-4 h-4 text-amber-500" />
            )}
            {candidate.readinessStatus === READINESS_STATUS.LOOKING_FOR_OFFERS &&
              <Search className="w-4 h-4 text-blue-500" />}
            {candidate.readinessStatus === READINESS_STATUS.BUSY && (
              <X className="w-4 h-4 text-rose-500" />
            )}
            <span className="text-sm font-medium text-neutral-300">
              {candidate.readinessStatus}
            </span>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Rate</p>
          <p className="text-sm font-medium text-neutral-300 mt-1">
            ${candidate.rate} <span className="text-neutral-500">/hr</span>
          </p>
        </div>
      </div>

      {/* Right Column: Action */}
      <div className="shrink-0 pt-4 md:pt-0 border-t border-neutral-800 md:border-0 md:pl-6">
        <button
          onClick={() => onCopyProfile(candidate)}
          className={cn(
            "w-full md:w-auto px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2",
            copiedId === candidate.id
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              : "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-900/20"
          )}
        >
          {copiedId === candidate.id ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Offer to Client
            </>
          )}
        </button>
      </div>
    </div>
  );
}
