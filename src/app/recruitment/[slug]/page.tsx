import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RecruitmentDetailContent from "@/components/RecruitmentDetailContent";
import { getOpenRecruitmentItem, openRecruitment } from "@/data/openRecruitment";
import { siteName, siteUrl } from "@/lib/site";

type RecruitmentPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return openRecruitment.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RecruitmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getOpenRecruitmentItem(slug);

  if (!item) {
    return {};
  }

  const title = `${item.title} — Open Recruitment`;
  const description = item.description.join(" ");
  const url = `/recruitment/${item.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName,
      title,
      description,
      images: [{ url: item.image, alt: item.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [item.image],
    },
  };
}

export default async function RecruitmentDetailPage({
  params,
}: RecruitmentPageProps) {
  const { slug } = await params;
  const item = getOpenRecruitmentItem(slug);

  if (!item) {
    notFound();
  }

  const recruitmentJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${item.title} — Open Recruitment`,
    description: item.description.join(" "),
    image: `${siteUrl}${item.image}`,
    url: `${siteUrl}/recruitment/${item.slug}`,
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(to_bottom,#20283A_0%,#171D2D_48%)] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recruitmentJsonLd) }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#A171D5]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#DF9621]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-12 lg:py-16">
        <Link
          href="/#open-recruitment"
          className="inline-flex items-center gap-3 rounded-full text-sm font-semibold text-[#A0A3B1] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#20283A]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
          </svg>
          Kembali ke Open Recruitment
        </Link>

        <div className="mt-12 lg:mt-16">
          <RecruitmentDetailContent item={item} priority />
        </div>
      </div>
    </main>
  );
}
