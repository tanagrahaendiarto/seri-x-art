"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { modalBackdrop, modalPanel } from "@/lib/motion";

type ComingSoonDialogProps = {
  onClose: () => void;
};

// Small confirmation-style dialog for locked Open Recruitment cards — reuses
// the same backdrop/panel motion variants and focus/Escape handling as
// CompetitionModal, but manages its own open state instead of a route.
export default function ComingSoonDialog({ onClose }: ComingSoonDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (previousFocusRef.current?.isConnected) {
        previousFocusRef.current.focus({ preventScroll: true });
      }
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#171D2D]/70 p-4"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={modalBackdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <motion.section
        role="dialog"
        aria-modal="true"
        aria-labelledby="coming-soon-title"
        aria-describedby="coming-soon-description"
        className="w-full max-w-sm rounded-xl border border-white/10 bg-[#20283A] p-6 shadow-2xl shadow-black/40 sm:p-8"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalPanel}
      >
        <h2 id="coming-soon-title" className="text-xl font-semibold text-white">
          Segera Hadir
        </h2>

        <div
          id="coming-soon-description"
          className="mt-3 space-y-3 text-sm leading-6 text-[#A0A3B1]"
        >
          <p>Pendaftaran cabang perlombaan belum dibuka.</p>
          <p>
            Silakan nantikan pengumuman resmi melalui website dan media
            sosial Seri X Art Exhibition 2026.
          </p>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex rounded-full bg-[#DF9621] px-6 py-3 text-sm font-semibold text-[#171D2D] transition-colors duration-300 hover:bg-[#DF9621]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#20283A]"
        >
          Tutup
        </button>
      </motion.section>
    </motion.div>
  );
}
