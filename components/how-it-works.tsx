"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

type Step = {
  n: string;
  title: string;
  line: string;
  meta: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Tell us what you need",
    line: "The space, the scope, and a time that suits you.",
    meta: "Two minutes to book",
  },
  {
    n: "02",
    title: "We match a vetted cleaner",
    line: "Trained, background-checked, and briefed on your home.",
    meta: "Matched same day",
  },
  {
    n: "03",
    title: "We clean to a standard",
    line: "The same thorough work, done the same way every visit.",
    meta: "Every single visit",
  },
  {
    n: "04",
    title: "You check, we stand behind it",
    line: "Not right? Tell us and we make it right — guaranteed.",
    meta: "100% guaranteed",
  },
];

// Progressive indent per row — a literal staircase, not an even grid.
const indent = ["", "sm:ml-10 lg:ml-14", "sm:ml-20 lg:ml-28", "sm:ml-[7.5rem] lg:ml-[10.5rem]"];

export function HowItWorks() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const railVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: {
      scaleX: 1,
      transition: { duration: reduceMotion ? 0 : 1, ease },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 18 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : 0.15 + i * 0.16,
        ease,
      },
    }),
  };

  return (
    <section
      className="relative border-t border-border/70 bg-background"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-28">
        {/* Section header */}
        <div className="mb-10 flex items-center gap-3 lg:mb-16">
          <span className="h-px w-8 bg-brass" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            How It Works
          </span>
        </div>

        <div className="mb-16 flex flex-col gap-6 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id="how-heading"
            className="max-w-xl font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.01em] text-balance text-foreground"
          >
            What happens when
            <br />
            you book.
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-muted-foreground text-pretty lg:text-right">
            No forms to wrestle with, no strangers you didn&apos;t choose. Four
            plain steps from first message to a home you&apos;re happy to walk
            back into.
          </p>
        </div>

        <div className="relative">
          {/* Opening rule that draws in above the list */}
          <motion.span
            aria-hidden="true"
            variants={railVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            style={{ transformOrigin: "left center" }}
            className="block h-px w-full bg-border/70"
          />

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="divide-y divide-border/70"
          >
            {steps.map((step, i) => (
              <motion.li
                key={step.n}
                custom={i}
                variants={stepVariants}
                className={cn("py-9 sm:py-10 lg:py-12", indent[i])}
              >
                <div className="grid grid-cols-[2.75rem_1fr] gap-x-5 sm:grid-cols-[3.5rem_1fr] sm:gap-x-8 lg:grid-cols-[4rem_1fr]">
                  <span
                    aria-hidden="true"
                    className="select-none pt-1 font-serif text-3xl italic leading-none tracking-tight text-brass sm:text-4xl lg:text-[2.75rem]"
                  >
                    {step.n}
                  </span>

                  <div className="lg:pr-16">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
                      <h3 className="font-serif text-xl font-medium leading-snug tracking-[-0.01em] text-foreground text-balance sm:text-2xl">
                        {step.title}
                      </h3>
                      <span className="whitespace-nowrap text-[0.68rem] font-medium uppercase tracking-[0.16em] text-brass/85">
                        {step.meta}
                      </span>
                    </div>
                    <p className="mt-2.5 max-w-md text-[0.975rem] leading-relaxed text-muted-foreground text-pretty">
                      {step.line}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
