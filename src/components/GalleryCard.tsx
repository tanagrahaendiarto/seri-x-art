"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Competition } from "@/data/competitions";
import { hoverTransition } from "@/lib/motion";

type GalleryCardProps = {
  competition: Competition;
};

export default function GalleryCard({ competition }: GalleryCardProps) {
  return (
    <motion.div
      className="group h-full"
      whileHover={{ y: -4 }}
      transition={hoverTransition}
    >
      <Link
        href={`/competition/${competition.slug}`}
        scroll={false}
        aria-label={`View ${competition.title} competition details`}
        className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#20283A]"
      >
        <div className="relative aspect-4/5 overflow-hidden rounded-xl border border-white/10 bg-[#171D2D] transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-black/30">
          <Image
            src={competition.image}
            alt={competition.title}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A0A3B1]">
            {competition.category}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#A171D5]">
            {competition.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
