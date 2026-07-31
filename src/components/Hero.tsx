"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp, revealTransition, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-7rem)] items-center justify-center overflow-hidden bg-gradient-to-b from-[#20283A] to-[#171D2D]">
      {/* Decorative emblem — atmosphere only, never the focal point */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={revealTransition}
      >
        <div className="relative h-96 w-96 translate-y-[-36%] opacity-[0.14] sm:translate-y-[-8%] sm:opacity-[0.18] md:h-120 md:w-120 lg:h-160 lg:w-160 lg:opacity-[0.22] xl:h-192 xl:w-3xl">
          <Image
            src="/logo.png"
            alt=""
            fill
            sizes="(max-width: 768px) 384px, (max-width: 1024px) 480px, (max-width: 1280px) 640px, 768px"
            className="object-contain blur-[2px]"
          />
        </div>
      </motion.div>

      {/* Soft vignette — blends the emblem into the background and keeps text contrast */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(ellipse_85%_80%_at_50%_42%,transparent_0%,transparent_55%,rgba(23,29,45,0.5)_85%,rgba(23,29,45,0.85)_100%)]"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm font-medium uppercase tracking-[0.35em] text-[#A0A3B1]"
        >
          SERI X ART EXHIBITION 2026
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="mt-6 text-3xl font-black leading-snug text-white sm:mt-8 sm:text-5xl md:text-6xl"
        >
          <span className="block whitespace-nowrap">Memasuki Dunia Seni</span>
          <span className="block whitespace-nowrap">Wonderland Nusantara</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#A0A3B1] sm:mt-8 sm:text-lg sm:leading-8 md:mt-10"
        >
          Platform kompetisi seni bagi mahasiswa untuk berekspresi, berkarya,
          dan merayakan kreativitas Indonesia.
        </motion.p>
      </motion.div>

      {/* Scroll indicator — closes out the Hero, not a CTA */}
      <motion.a
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        href="#about"
        className="absolute inset-x-0 bottom-8 z-10 mx-auto flex w-fit flex-col items-center gap-3 rounded-sm text-sm font-light tracking-wide text-[#A0A3B1] transition-colors duration-300 hover:text-white/80 focus-visible:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171D2D] sm:bottom-10 lg:bottom-12"
      >
        <span>Mari Menjelajah</span>
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-xl"
        >
          ⌄
        </motion.span>
      </motion.a>
    </section>
  );
}
