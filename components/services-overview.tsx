"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRightIcon, PlusIcon } from "lucide-react";

type Category = {
  n: string;
  title: string;
  scope: string;
  description: string;
  image: string;
};

const categories: Category[] = [
  {
    n: "01",
    title: "Home & Villa Cleaning",
    scope: "House, apartment & villa cleaning",
    description:
      "Regular, room-by-room care for the whole home — dusted, wiped, and set right, so it always feels looked after.",
    image: "/service-home-villa.png",
  },
  {
    n: "02",
    title: "Deep & Detail Cleaning",
    scope: "Kitchens, washrooms, balconies, floors & appliances",
    description:
      "The intensive reset — behind, beneath, and inside the places an everyday clean tends to pass over.",
    image: "/service-deep-detail.png",
  },
  {
    n: "03",
    title: "Maid Services",
    scope: "Ongoing, recurring domestic help",
    description:
      "A vetted, familiar hand on a rhythm that suits your household — weekly, fortnightly, or as often as you like.",
    image: "/service-maid.png",
  },
  {
    n: "04",
    title: "Laundry & Fabric Care",
    scope: "Ironing, washing, mattress & rug cleaning",
    description:
      "Fresh linens and cared-for fabrics — washed, pressed, and returned looking as good as the day they arrived.",
    image: "/service-laundry.png",
  },
  {
    n: "05",
    title: "Office Cleaning",
    scope: "Commercial & workspace cleaning",
    description:
      "Presentable, healthy workspaces kept with the same discretion and consistency we bring to the home.",
    image: "/service-office.png",
  },
];

export function ServicesOverview() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(0);
  const panelIndex = active ?? 0;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      className="relative border-t border-border/70 bg-background"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        {/* Section header */}
        <div className="mb-10 flex items-center gap-3 lg:mb-14">
          <span className="h-px w-8 bg-brass" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            What We Offer
          </span>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-xl">
            <h2
              id="services-heading"
              className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.01em] text-balance text-foreground"
            >
              Five kinds of care,
              <br />
              one standard.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              A preview of what Bait Clean looks after across Sharjah and Ajman.
              Explore the range below — each opens onto the full detail on our
              services page.
            </p>
          </div>
        </div>

        {/* Editorial index */}
        <div className="mt-12 grid grid-cols-1 gap-x-16 lg:mt-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Numbered list */}
          <ul data-services-index className="border-t border-border">
            {categories.map((cat, i) => {
              const isActive = active === i;
              return (
                <li key={cat.title} className="border-b border-border">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`service-region-${i}`}
                    onClick={() => setActive((prev) => (prev === i ? null : i))}
                    onPointerEnter={(e) => {
                      if (e.pointerType === "mouse") setActive(i);
                    }}
                    onFocus={() => setActive(i)}
                    className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-4 py-6 text-left outline-none transition-opacity duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:gap-x-6 sm:py-7 lg:py-8"
                    // dim non-active rows on pointer-capable screens only
                    data-active={isActive}
                  >
                    <span
                      className="font-serif text-sm tabular-nums text-brass transition-colors sm:text-base"
                      aria-hidden="true"
                    >
                      {cat.n}
                    </span>

                    <span className="min-w-0">
                      <span className="block font-serif text-[clamp(1.4rem,2.6vw,2.05rem)] font-medium leading-tight tracking-[-0.01em] text-foreground transition-colors group-hover:text-primary group-data-[active=true]:text-primary">
                        {cat.title}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                        {cat.scope}
                      </span>
                    </span>

                    <PlusIcon
                      className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[active=true]:rotate-45 group-data-[active=true]:text-primary lg:hidden"
                      aria-hidden="true"
                    />
                  </button>

                  {/* Mobile / touch inline reveal */}
                  <div id={`service-region-${i}`} className="lg:hidden" role="region" aria-label={cat.title}>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                          exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7">
                            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
                              <Image
                                src={cat.image || "/placeholder.svg"}
                                alt={`${cat.title} — the finish Bait Clean leaves behind.`}
                                fill
                                sizes="100vw"
                                className="object-cover"
                              />
                            </div>
                            <p className="mt-4 text-base leading-relaxed text-foreground/80 text-pretty">
                              {cat.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Desktop sticky panel */}
          <div className="hidden lg:block" aria-hidden="true">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={panelIndex}
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0.2 : 0.55, ease }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={categories[panelIndex].image || "/placeholder.svg"}
                      alt=""
                      fill
                      sizes="45vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={panelIndex}
                      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0.2 : 0.45, ease }}
                      className="max-w-sm text-[0.95rem] leading-relaxed text-background/95 text-pretty"
                    >
                      {categories[panelIndex].description}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet handoff link */}
        <div className="mt-12 border-t border-border/70 pt-8">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-serif text-lg text-foreground transition-colors hover:text-primary"
          >
            View all services
            <ArrowUpRightIcon
              className="size-5 text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
