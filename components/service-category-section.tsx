"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { CheckIcon, ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/lib/services-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function ServiceCategorySection({
  slug,
  number,
  name,
  tagline,
  description,
  inclusions,
  image,
  secondaryImage,
  reverse = false,
}: ServiceCategory & { reverse?: boolean }) {
  const reduceMotion = useReducedMotion();

  const rise: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease },
    },
  };

  return (
    <section
      id={slug}
      className="scroll-mt-28 border-b border-border/70 py-14 last:border-b-0 lg:py-20"
      aria-labelledby={`${slug}-heading`}
    >
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:items-center lg:gap-x-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={rise}
          className={cn(reverse ? "lg:order-2" : "lg:order-1")}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="font-serif text-2xl italic text-brass" aria-hidden="true">
              {number}
            </span>
            <span className="h-px w-10 bg-border" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Service
            </span>
          </div>

          <h2
            id={`${slug}-heading`}
            className="font-serif text-[clamp(1.65rem,3vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.01em] text-balance text-foreground"
          >
            {name}
          </h2>

          <p className="mt-3 text-lg leading-relaxed text-muted-foreground text-pretty">
            {tagline}
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/80 text-pretty">
            {description}
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {inclusions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
              >
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 font-serif text-lg text-foreground transition-colors hover:text-primary"
          >
            Ask about this service
            <ArrowUpRightIcon
              className="size-5 text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={rise}
          className={cn("relative", reverse ? "lg:order-1" : "lg:order-2")}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted sm:aspect-[6/5]">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          {secondaryImage ? (
            <div
              className={cn(
                "absolute -bottom-8 hidden w-[38%] overflow-hidden rounded-xl border-4 border-background shadow-lg sm:block",
                reverse ? "-left-8" : "-right-8",
              )}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={secondaryImage.src || "/placeholder.svg"}
                  alt={secondaryImage.alt}
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
