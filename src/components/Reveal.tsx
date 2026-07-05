"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeInUp, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** "viewport" (default) reveals on scroll into view; "mount" reveals once on initial page load. */
  mode?: "viewport" | "mount";
};

export default function Reveal({
  children,
  className,
  mode = "viewport",
}: RevealProps) {
  const trigger =
    mode === "viewport"
      ? { whileInView: "visible" as const, viewport: viewportOnce }
      : { animate: "visible" as const };

  return (
    <motion.div className={className} initial="hidden" variants={fadeInUp} {...trigger}>
      {children}
    </motion.div>
  );
}
