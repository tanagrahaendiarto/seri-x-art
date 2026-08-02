import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CompetitionDetailContent from "@/components/CompetitionDetailContent";
import { competitions, getCompetition } from "@/data/competitions";
import { siteName, siteUrl } from "@/lib/site";

type CompetitionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return competitions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CompetitionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const competition = getCompetition(slug);

  if (!competition) {
    return {};
  }

  const title = "Seri X Art Exhibition 2026";
  const url = `/competition/${competition.slug}`;

  return {
    title,
    description: competition.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName,
      title,
      description: competition.description,
      images: [{ url: competition.image, alt: competition.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: competition.description,
      images: [competition.image],
    },
  };
}

export default async function CompetitionDetailPage({
  params,
}: CompetitionPageProps) {
  const { slug } = await params;
  const competition = getCompetition(slug);

  if (!competition) {
    notFound();
  }

  const competitionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${competition.title} Competition`,
    description: competition.description,
    image: `${siteUrl}${competition.image}`,
    url: `${siteUrl}/competition/${competition.slug}`,
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(to_bottom,#20283A_0%,#171D2D_48%)] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(competitionJsonLd) }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#A171D5]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#DF9621]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-12 lg:py-16">
        <Link
          href="/#gallery"
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
          Kembali ke Competition
        </Link>

        <div className="mt-12 lg:mt-16">
          <CompetitionDetailContent competition={competition} priority />
        </div>
      </div>
    </main>
  );
}
