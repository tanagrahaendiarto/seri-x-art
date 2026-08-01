import { notFound } from "next/navigation";
import CompetitionModal from "@/components/CompetitionModal";
import RecruitmentDetailContent from "@/components/RecruitmentDetailContent";
import { getOpenRecruitmentItem } from "@/data/openRecruitment";

type InterceptedRecruitmentPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function InterceptedRecruitmentPage({
  params,
}: InterceptedRecruitmentPageProps) {
  const { slug } = await params;
  const item = getOpenRecruitmentItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <CompetitionModal
      titleId="recruitment-title"
      backLabel="Kembali ke Open Recruitment"
    >
      <RecruitmentDetailContent item={item} />
    </CompetitionModal>
  );
}
