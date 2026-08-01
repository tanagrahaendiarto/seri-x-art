"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { modalBackdrop, modalPanel } from "@/lib/motion";

type CompetitionModalProps = {
  children: ReactNode;
  titleId?: string;
  backLabel?: string;
};

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function CompetitionModal({
  children,
  titleId = "competition-title",
  backLabel = "Kembali ke Gallery",
}: CompetitionModalProps) {
  const router = useRouter();
  const dialogRef = useRef<HTMLElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const closeModal = useCallback(() => router.back(), [router]);

  useLayoutEffect(() => {
    const scrollY = window.scrollY;
    const body = document.body;
    const documentElement = document.documentElement;
    const originalBodyStyles = {
      paddingRight: body.style.paddingRight,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
    };
    const originalHtmlOverflow = documentElement.style.overflow;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
    const currentPaddingRight = Number.parseFloat(
      window.getComputedStyle(body).paddingRight,
    );

    documentElement.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
    }

    return () => {
      documentElement.style.overflow = originalHtmlOverflow;
      body.style.paddingRight = originalBodyStyles.paddingRight;
      body.style.position = originalBodyStyles.position;
      body.style.top = originalBodyStyles.top;
      body.style.width = originalBodyStyles.width;

      // Explicit "instant" so this restoration never inherits the global
      // `scroll-behavior: smooth` and animates back into position.
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
    };
  }, []);

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    backButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (previousFocusRef.current?.isConnected) {
        previousFocusRef.current.focus({ preventScroll: true });
      }
    };
  }, [closeModal]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end bg-[#171D2D]/70 p-4 sm:items-center sm:p-8"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={modalBackdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <motion.section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[calc(100dvh-2rem)] w-full overscroll-contain overflow-y-auto rounded-xl border border-white/10 bg-[#20283A] shadow-2xl shadow-black/40 sm:max-h-[calc(100dvh-4rem)]"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalPanel}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
          <button
            ref={backButtonRef}
            type="button"
            onClick={closeModal}
            className="inline-flex items-center gap-3 rounded-full text-sm font-semibold text-[#A0A3B1] transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#20283A]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 18-6-6 6-6"
              />
            </svg>
            {backLabel}
          </button>
        </div>

        <div className="p-6 sm:p-8 lg:p-12">{children}</div>
      </motion.section>
    </motion.div>
  );
}
