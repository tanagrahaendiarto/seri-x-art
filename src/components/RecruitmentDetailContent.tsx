import Image from "next/image";
import type { OpenRecruitmentItem } from "@/data/openRecruitment";
import { guidebookUrls } from "@/lib/site";

type RecruitmentDetailContentProps = {
  item: OpenRecruitmentItem;
  priority?: boolean;
};

export default function RecruitmentDetailContent({
  item,
  priority = false,
}: RecruitmentDetailContentProps) {
  const { title, category, description, image, cta, href, locked } = item;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-20">
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-[#171D2D] shadow-2xl shadow-black/20 lg:order-2">
        <div className="relative aspect-4/5">
          <Image
            src={image}
            alt={`Poster ${title}`}
            fill
            priority={priority}
            sizes="(max-width:1024px) 100vw, (max-width:1280px) 40vw, 28rem"
            className="object-cover"
          />
        </div>
      </div>

      <div className="lg:order-1">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A0A3B1]">
          {category}
        </p>
        <h1
          id="recruitment-title"
          className="mt-4 text-5xl font-bold leading-[1.05] sm:text-6xl"
        >
          {title}
        </h1>

        <div className="mt-12 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-semibold">About</h2>
          <div className="mt-4 max-w-xl space-y-4 text-lg leading-8 text-[#A0A3B1]">
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {locked ? (
            <button
              type="button"
              disabled
              className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full bg-[#DF9621] px-7 py-3.5 text-sm font-semibold text-[#171D2D] opacity-50 sm:w-auto lg:px-8 lg:py-4"
            >
              {cta}
            </button>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#DF9621] px-7 py-3.5 text-sm font-semibold text-[#171D2D] transition-transform duration-300 hover:scale-105 hover:bg-[#DF9621]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#20283A] sm:w-auto lg:px-8 lg:py-4"
            >
              {cta}
            </a>
          )}

          <a
            href={guidebookUrls[item.slug]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#20283A] sm:w-auto lg:px-8 lg:py-4"
          >
            Guidebook
          </a>
        </div>
      </div>
    </div>
  );
}
