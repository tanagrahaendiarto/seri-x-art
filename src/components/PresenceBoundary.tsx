"use client";

import { AnimatePresence } from "motion/react";
import { useState, type ReactNode } from "react";

type PresenceBoundaryProps = {
  children: ReactNode;
};

/**
 * Keeps rendering the last non-null `children` it received for as long as
 * an AnimatePresence exit animation needs, even after the parent starts
 * passing `null`. Generic: knows nothing about what it renders or why the
 * parent removed it.
 */
export default function PresenceBoundary({ children }: PresenceBoundaryProps) {
  const [content, setContent] = useState(children);

  // Adjusting state during render (React-supported pattern) instead of an
  // effect, so newly-entering content is visible in the same commit — no
  // extra render or flicker before it appears.
  if (children !== null && children !== content) {
    setContent(children);
  }

  return (
    <AnimatePresence>{children !== null ? content : null}</AnimatePresence>
  );
}
