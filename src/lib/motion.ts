import type { Transition, Variants } from "motion/react";

// Single shared easing curve + durations — reused everywhere so every
// animation in the app moves with the same "premium" feel.
export const EASE = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  reveal: 0.6,
  hover: 0.3,
  modal: 0.2,
  // Exit intentionally shorter than enter — receding reads as quicker and
  // lighter than arriving.
  modalExit: 0.15,
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

// Backdrop is the environment, not the subject — it resolves first and
// faster than the panel, as a plain fade with no physicality of its own.
// `hidden` doubles as the exit target, so its own transition governs how
// the backdrop leaves.
export const modalBackdrop: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: DURATION.modal, ease: EASE },
  },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.modal, ease: EASE },
  },
};

// Panel is the physical surface the user is being handed — a spring gives
// it natural, weighted deceleration instead of a fixed-duration tween, and
// settles a beat after the backdrop so the entrance reads as layered depth
// rather than both elements resolving in lockstep. Leaving is simpler: a
// quick tween back to `hidden`, no spring needed to recede from view.
export const modalPanel: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.97,
    transition: { duration: DURATION.modalExit, ease: EASE },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 32, mass: 0.9 },
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
