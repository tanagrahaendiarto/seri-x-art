"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { hoverTransition } from "@/lib/motion";

type GalleryCardProps = {
  image: string;
  title: string;
  category: string;
};

export default function GalleryCard({
  image,
  title,
  category,
}: GalleryCardProps) {
  return (
    <motion.div
      className="group"
      whileHover={{ y: -4 }}
      transition={hoverTransition}
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-xl border border-white/10 bg-[#171D2D] transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-black/30">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
        />
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A0A3B1]">
          {category}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#A171D5]">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
