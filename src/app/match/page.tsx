import { MatchedCandidates } from "@/components/match/MatchedCandidates";
import { MatchFilters } from "@/components/match/MatchFilters";
import { PageHeader } from "@/components/PageHeader";

export default function MatchPage() {
  return (
    <>
      <PageHeader
        title="Candidate Match"
        description="Find the perfect candidate for your vacancy instantly."
      />
      <MatchFilters />
      <MatchedCandidates />
    </>
  );
}
