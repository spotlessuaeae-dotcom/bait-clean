"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type RailItem = {
  slug: string;
  number: string;
  name: string;
};

export function ServicesIndexRail({ items }: { items: RailItem[] }) {
  const [activeSlug, setActiveSlug] = useState(items[0]?.slug);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top <= b.boundingClientRect.top ? a : b,
        );
        setActiveSlug(topMost.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  function scrollToSection(slug: string) {
    return (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  return (
    <>
      {/* Desktop vertical rail */}
      <nav aria-label="Service categories" className="hidden lg:block">
        <ul className="sticky top-32 space-y-0.5 border-l border-border">
          {items.map((item) => {
            const isActive = item.slug === activeSlug;
            return (
              <li key={item.slug}>
                <a
                  href={`#${item.slug}`}
                  onClick={scrollToSection(item.slug)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "-ml-px flex items-baseline gap-3 border-l-2 py-3 pl-5 transition-colors",
                    isActive ? "border-brass" : "border-transparent hover:border-border",
                  )}
                >
                  <span
                    className={cn(
                      "font-serif text-sm tabular-nums transition-colors",
                      isActive ? "text-brass" : "text-muted-foreground/50",
                    )}
                  >
                    {item.number}
                  </span>
                  <span
                    className={cn(
                      "text-sm leading-snug transition-colors text-pretty",
                      isActive ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile sticky strip */}
      <nav
        aria-label="Service categories"
        className="sticky top-16 z-30 -mx-5 border-b border-border/70 bg-background/95 px-5 backdrop-blur-sm sm:-mx-8 sm:px-8 lg:hidden"
      >
        <ul className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const isActive = item.slug === activeSlug;
            return (
              <li key={item.slug} className="shrink-0">
                <a
                  href={`#${item.slug}`}
                  onClick={scrollToSection(item.slug)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground",
                  )}
                >
                  <span className="font-serif tabular-nums">{item.number}</span>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
