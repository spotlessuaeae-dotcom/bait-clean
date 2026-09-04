"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

type Step = {
  n: string;
  title: string;
  line: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Tell us what you need",
    line: "The space, the scope, and a time that suits you.",
  },
  {
    n: "02",
    title: "We match a vetted cleaner",
    line: "Trained, background-checked, and briefed on your home.",
  },
  {
    n: "03",
    title: "We clean to a standard",
    line: "The same thorough work, done the same way every visit.",
  },
  {
    n: "04",
    title: "You check, we stand behind it",
    line: "Not right? Tell us and we make it right — guaranteed.",
  },
];

export function HowItWorks() {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const lineVariants: Variants = {
    hidden: { scaleX: reduceMotion ? 1 : 0 },
    visible: {
      scaleX: 1,
      transition: { duration: reduceMotion ? 0 : 1.1, ease },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : 0.2 + i * 0.26,
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

        <div className="mb-14 max-w-xl lg:mb-20">
          <h2
            id="how-heading"
            className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.01em] text-balance text-foreground"
          >
            What happens when
            <br />
            you book.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            No forms to wrestle with, no strangers you didn&apos;t choose. Four
            plain steps from first message to a home you&apos;re happy to walk
            back into.
          </p>
        </div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="relative grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8"
        >
          {/* Connecting line — horizontal on desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[2.15rem] hidden lg:block"
          >
            <motion.span
              variants={lineVariants}
              style={{ transformOrigin: "left center" }}
              className="block h-px w-full bg-gradient-to-r from-brass/70 via-brass/40 to-transparent"
            />
          </div>

          {steps.map((step, i) => (
            <motion.li
              key={step.n}
              custom={i}
              variants={stepVariants}
              className="relative flex flex-col"
            >
              {/* Oversized outline numeral */}
              <span
                aria-hidden="true"
                className="pointer-events-none select-none font-serif text-[4.5rem] font-light leading-none tracking-tight text-transparent lg:text-[5.5rem]"
                style={{
                  WebkitTextStroke: "1px color-mix(in oklch, var(--brass) 55%, transparent)",
                }}
              >
                {step.n}
              </span>

              <div className="mt-5 lg:mt-8 lg:pr-6">
                <h3 className="font-serif text-xl font-medium leading-snug tracking-[-0.01em] text-foreground text-balance">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.975rem] leading-relaxed text-muted-foreground text-pretty">
                  {step.line}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
