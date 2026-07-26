import CompetitionDetailContent from "@/components/CompetitionDetailContent";
import CompetitionModal from "@/components/CompetitionModal";
import { getCompetition } from "@/data/competitions";
import { notFound } from "next/navigation";

type InterceptedCompetitionPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function InterceptedCompetitionPage({
  params,
}: InterceptedCompetitionPageProps) {
  const { slug } = await params;
  const competition = getCompetition(slug);

  if (!competition) {
    notFound();
  }

  return (
    <CompetitionModal>
      <CompetitionDetailContent competition={competition} />
    </CompetitionModal>
  );
}
