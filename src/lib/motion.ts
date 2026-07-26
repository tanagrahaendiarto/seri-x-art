import type { Transition, Variants } from "motion/react";

// Single shared easing curve + durations — reused everywhere so every
// animation in the app moves with the same "premium" feel.
export const EASE = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  reveal: 0.6,
  hover: 0.3,
  modal: 0.2,
} as const;

export const revealTransition: Transition = {
  duration: DURATION.reveal,
  ease: EASE,
};

export const hoverTransition: Transition = {
  duration: DURATION.hover,
  ease: EASE,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

// Route changes use a shorter, subtler entrance than scroll reveals so the
// content change feels continuous without delaying navigation.
export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.modal, ease: EASE },
  },
};

export const modalPanel: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.modal, ease: EASE },
  },
};

// Viewport options for scroll-triggered reveals: trigger once, slightly
// before the section is fully in view, so it never replays while scrolling.
export const viewportOnce = { once: true, margin: "-80px" } as const;

// Shared hover/tap affordance for every button on the site.
export const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.97 },
  transition: hoverTransition,
} as const;

// Staggered entrance for a group of elements (used by Hero on page load).
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
