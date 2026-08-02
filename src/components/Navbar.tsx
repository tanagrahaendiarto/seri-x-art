"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { buttonHover, hoverTransition } from "@/lib/motion";
import { linktreeUrl } from "@/lib/site";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  // Competition menu hidden temporarily, awaiting final content. Uncomment to restore.
  // {
  //   label: "Competition",
  //   href: "#competition",
  // },
  {
    label: "Timeline",
    href: "#timeline",
  },
  {
    label: "Open Recruitment",
    href: "#open-recruitment",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#171D2D]/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8"
      >
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Seri X Art Logo"
            width={60}
            height={60}
          />

          <span className="font-display text-xl font-semibold tracking-wide text-white">
            Seri X Art
          </span>
        </div>

        {/* Menu (desktop) */}
        <ul className="hidden items-center gap-10 text-sm font-medium text-[#A0A3B1] md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="rounded-sm transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171D2D]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Daftar Button (desktop) */}
        <motion.a
          href={linktreeUrl}
          target="_blank"
          rel="noopener noreferrer"
          {...buttonHover}
          className="hidden rounded-full bg-[#DF9621] px-6 py-3 text-sm font-semibold text-[#171D2D] transition-colors duration-300 hover:bg-[#DF9621]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171D2D] md:inline-flex md:items-center md:justify-center"
        >
          Register
        </motion.a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5] md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu (mobile) */}
      <motion.div
        id="mobile-menu"
        inert={!isMenuOpen}
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={hoverTransition}
        style={{ overflow: "hidden" }}
        className="md:hidden"
      >
        <div className="border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-6 text-sm font-medium text-[#A0A3B1]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const target = document.querySelector(item.href);
                      target?.scrollIntoView({ behavior: "smooth" });
                    }, 350);
                  }}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <motion.a
            href={linktreeUrl}
            target="_blank"
            rel="noopener noreferrer"
            {...buttonHover}
            className="mt-6 flex w-full items-center justify-center rounded-full bg-[#DF9621] px-6 py-3 text-sm font-semibold text-[#171D2D] transition-colors duration-300 hover:bg-[#DF9621]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A171D5]"
          >
            Daftar
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
}
