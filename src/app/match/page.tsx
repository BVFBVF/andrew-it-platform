import { MatchedCandidates } from "@/components/match/MatchedCandidates";
import { MatchFilters } from "@/components/match/MatchFilters";
import { PageHeader } from "@/components/PageHeader";

export default function MatchPage() {
  return (
    <>
      <PageHeader
        title="Поиск кандидатов"
        description="Мгновенный поиск идеального кандидата на вашу вакансию."
      />
      <MatchFilters />
      <MatchedCandidates />
    </>
  );
}
