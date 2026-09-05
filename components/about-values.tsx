"use client";

import {
  ShieldCheckIcon,
  GraduationCapIcon,
  MapPinIcon,
  SparkleIcon,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    icon: ShieldCheckIcon,
    title: "Directly employed, always vetted",
    description:
      "No subcontractors and no agency rotation. Every cleaner is background-checked, insured, and hired by us before they ever hold a key.",
  },
  {
    icon: GraduationCapIcon,
    title: "Trained to a written standard",
    description:
      "The same checklist, the same technique, the same attention to grout lines and window tracks — visit after visit, house after house.",
  },
  {
    icon: MapPinIcon,
    title: "Local, and staying that way",
    description:
      "Sharjah and Ajman only. Staying local means faster scheduling, real accountability, and a team that actually knows the area.",
  },
  {
    icon: SparkleIcon,
    title: "Guaranteed, not just promised",
    description:
      "If a visit doesn't meet the standard we set for ourselves, tell us within 24 hours and we'll come back and make it right.",
  },
];

export function AboutValues() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease },
    },
  };

  return (
    <section
      className="relative overflow-hidden border-t border-border/70 bg-muted/40"
      aria-labelledby="values-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-28">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-brass" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            What We Hold Ourselves To
          </span>
        </div>

        <h2
          id="values-heading"
          className="max-w-lg font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.01em] text-balance text-foreground"
        >
          Four things we won&apos;t compromise on.
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2"
        >
          {values.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="border-t border-border/70 pt-6"
            >
              <Icon className="size-6 text-brass" aria-hidden="true" strokeWidth={1.75} />
              <h3 className="mt-4 font-serif text-xl font-medium text-foreground">
                {title}
              </h3>
              <p className="mt-2 max-w-sm text-base leading-relaxed text-muted-foreground text-pretty">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
