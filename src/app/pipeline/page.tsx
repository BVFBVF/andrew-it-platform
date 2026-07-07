import { PipelineBoard } from "@/components/pipeline/PipelineBoard";
import { PipelineFilters } from "@/components/pipeline/PipelineFilters";
import { PageHeader } from "@/components/PageHeader";

export default function PipelinePage() {
  return (
    <>
      <PageHeader
        title="Воронка кандидатов"
        description="Управление этапами найма и процессом работы с кандидатами"
      />
      <PipelineFilters />
      <PipelineBoard />
    </>
  );
}
