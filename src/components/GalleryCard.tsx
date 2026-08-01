"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import type { OpenRecruitmentItem } from "@/data/openRecruitment";
import { hoverTransition } from "@/lib/motion";
import ComingSoonDialog from "@/components/ComingSoonDialog";
import PresenceBoundary from "@/components/PresenceBoundary";

type GalleryCardProps = {
  item: OpenRecruitmentItem;
};

export default function GalleryCard({ item }: GalleryCardProps) {
  const { slug, title, category, image, locked } = item;
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const cardContent = (
    <>
      <div className="relative aspect-4/5 overflow-hidden rounded-xl border border-white/10 bg-[#171D2D] transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-black/30">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
        />

        {locked && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#171D2D]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              aria-hidden="true"
              className="h-3 w-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Coming Soon
          </span>
        )}
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A0A3B1]">
          {category}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#A171D5]">
          {title}
        </h3>

        <span
          aria-hidden="true"
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#DF9621] px-4 py-1.5 text-xs font-semibold text-[#171D2D] transition-colors duration-300 group-hover:bg-[#DF9621]/90"
        >
          Lihat Detail
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </>
  );

  return (
    <>
      <motion.div
        className="group h-full"
        whileHover={{ y: -4 }}
        transition={hoverTransition}
      >
        {locked ? (
          <button
            type="button"
            onClick={() => setIsComingSoonOpen(true)}
            aria-label={`${title} — Coming Soon`}
            className="block h-full w-full rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#20283A]"
          >
            {cardContent}
          </button>
        ) : (
          <Link
            href={`/recruitment/${slug}`}
            scroll={false}
            aria-label={`View ${title} details`}
            className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#20283A]"
          >
            {cardContent}
          </Link>
        )}
      </motion.div>

      <PresenceBoundary>
        {isComingSoonOpen ? (
          <ComingSoonDialog onClose={() => setIsComingSoonOpen(false)} />
        ) : null}
      </PresenceBoundary>
    </>
  );
}
