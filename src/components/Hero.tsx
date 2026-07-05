"use client";

import { motion } from "motion/react";
import { buttonHover, fadeInUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#20283A] to-[#171D2D]">
      <motion.div
        className="mx-auto max-w-4xl px-8 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.p
          variants={fadeInUp}
          className="text-sm font-medium uppercase tracking-[0.35em] text-[#A0A3B1]"
        >
          SERI X ART 2026
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="mt-6 text-7xl font-black leading-tight text-white"
        >
          Create.
          <br />
          Inspire.
          <br />
          Compete.
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#A0A3B1]"
        >
          An art competition platform where creativity meets innovation.
          Showcase your talent, compete with the best, and inspire the world.
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
            Register Now
          </motion.button>

          <motion.button
            type="button"
            {...buttonHover}
            className="w-full rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171D2D] sm:w-auto"
          >
            Explore Competition
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
