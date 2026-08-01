"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { hoverTransition } from "@/lib/motion";

type FAQItemProps = {
  id: string;
  question: string;
  answer: ReactNode;
};

export default function FAQItem({ id, question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `${id}-panel`;

  return (
    <div
      className={`border-t py-6 transition-colors duration-300 ${
        isOpen ? "border-[#DF9621]/25" : "border-white/10"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5]"
        >
          <span
            className={`text-lg font-semibold transition-colors duration-300 sm:text-xl ${
              isOpen ? "text-white" : "text-white/80"
            }`}
          >
            {question}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 transition-all duration-300 ${
              isOpen ? "rotate-180 text-white" : "rotate-0 text-white/80"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </h3>

      <motion.div
        id={panelId}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={hoverTransition}
        style={{ overflow: "hidden" }}
      >
        <p lang="id" className="mt-4 leading-7 text-[#A0A3B1]">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}
