"use client";

import { motion } from "motion/react";
import { buttonHover, fadeInUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-7rem)] items-center justify-center bg-gradient-to-b from-[#20283A] to-[#171D2D]">
      <motion.div
        className="mx-auto max-w-4xl px-4 text-center sm:px-8"
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

        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.button
            type="button"
            {...buttonHover}
            className="w-full rounded-full bg-[#DF9621] px-8 py-4 font-semibold text-[#171D2D] transition-colors duration-300 hover:bg-[#DF9621]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171D2D] sm:w-auto"
          >
            Daftar Sekarang
          </motion.button>

          <motion.button
            type="button"
            {...buttonHover}
            className="w-full rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171D2D] sm:w-auto"
          >
            GUIDEBOOK
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
