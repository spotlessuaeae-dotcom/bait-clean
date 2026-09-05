"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowUpRightIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesAreaNote() {
  const reduceMotion = useReducedMotion();

  const rise: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease },
    },
  };

  return (
    <section
      className="border-b border-border/70 bg-muted/40"
      aria-labelledby="area-note-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={rise}
          className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-brass" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Where We Work
              </span>
            </div>
            <p
              id="area-note-heading"
              className="font-serif text-xl leading-snug text-balance text-foreground sm:text-2xl"
            >
              Every service above is finished to the same standard, on every
              visit, across Sharjah and Ajman.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 font-serif text-lg text-foreground transition-colors hover:text-primary"
          >
            Check availability near you
            <ArrowUpRightIcon
              className="size-5 text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
