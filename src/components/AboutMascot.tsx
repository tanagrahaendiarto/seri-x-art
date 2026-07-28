"use client";

import Image from "next/image";
import { motion } from "motion/react";

const floatTransition = {
  duration: 9,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export default function AboutMascot() {
  return (
    <>
      {/* Ambient glow */}
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#A171D5]/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#DF9621]/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A171D5]/20 blur-3xl" />

      {/* Mascot */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -3, 0] }}
        transition={floatTransition}
      >
        <Image
          src="/images/maskot/maskot-seri-x.png"
          alt="Maskot resmi Seri X Art Exhibition 2026"
          fill
          sizes="(max-width: 1024px) 90vw, 40vw"
          className="object-contain p-4 drop-shadow-[0_18px_28px_rgba(0,0,0,0.3)] sm:p-5 lg:p-6"
          style={{ objectPosition: "46% 58%" }}
        />
      </motion.div>
    </>
  );
}
