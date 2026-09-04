"use client";

import { ArrowUpIcon } from "lucide-react";

/**
 * Isolated client component so `Footer` itself can stay a Server Component —
 * same pattern as the mobile drawer / sticky header split.
 */
export function BackToTop() {
  const handleClick = () => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group inline-flex items-center gap-1.5 text-sm text-background/70 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
    >
      Back to top
      <ArrowUpIcon
        className="size-3.5 text-brass transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </button>
  );
}
