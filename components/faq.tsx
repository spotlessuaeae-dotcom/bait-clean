"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowUpRightIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { whatsappHref } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

type QA = {
  q: string;
  a: string;
};

const faqs: QA[] = [
  {
    q: "Do I need to be home during the cleaning?",
    a: "No — plenty of clients hand over a door code or a set of keys and go about their day. Every cleaner we send is vetted and insured, which is exactly why that arrangement works. If you'd rather be around, that's fine too; we work either way.",
  },
  {
    q: "Do you bring your own cleaning supplies and equipment?",
    a: "Yes, we arrive with our own — chosen for how well they work, not how strong they smell. If a surface in your home needs something specific, let us know beforehand and we'll bring it or use what you already have.",
  },
  {
    q: "How is my quote calculated, since there's no listed pricing?",
    a: "It depends on the home — its size, its condition, and how often you'd like us — which is why we quote after a short conversation rather than posting a figure that wouldn't hold up across every property. Message us and we'll talk it through.",
  },
  {
    q: "Can I book a one-time clean, or only a recurring visit?",
    a: "Either. Many clients start with a single clean to see how we work, then move to a weekly or fortnightly rhythm once they're comfortable. You can scale up, slow down, or stop whenever it suits you.",
  },
  {
    q: "What happens if I'm not fully satisfied?",
    a: "Tell us. Every visit is covered by our satisfaction guarantee — if something was missed, we come back and make it right. We'd rather hear about it directly than have you quietly decide not to book again.",
  },
  {
    q: "How far ahead do I need to book?",
    a: "Get in touch and we'll tell you what's available — short notice is often possible. For a recurring rhythm, it helps to book your first visit a little ahead, so we can find a regular slot that fits your week.",
  },
  {
    q: "Are the products you use safe around kids and pets?",
    a: "Yes. Our supplies are chosen with households in mind, not just surfaces, and we avoid anything with a heavy chemical residue. If your home has specific sensitivities, mention them and we'll talk through what we use.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export function FAQ() {
  const reduceMotion = useReducedMotion();

  const listVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.15,
        staggerChildren: reduceMotion ? 0 : 0.09,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease },
    },
  };

  return (
    <section
      className="relative border-t border-border/70 bg-background"
      aria-labelledby="faq-heading"
    >
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          {/* Heading — anchored in the left margin, not centered over the list */}
          <div className="lg:col-[1/4] lg:row-[1] lg:self-start lg:pt-2 lg:pr-6">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-brass" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Questions
              </span>
            </div>
            <h2
              id="faq-heading"
              className="max-w-xs font-serif text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.02] tracking-[-0.01em] text-balance text-foreground"
            >
              Before you book, a few honest answers.
            </h2>
            <p className="mt-5 max-w-xs text-lg leading-relaxed text-muted-foreground text-pretty">
              The practical questions that come up most, answered plainly —
              no price list, no fine print to decode.
            </p>
          </div>

          {/* Reading column — offset right, single fine-ruled list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={listVariants}
            className="border-t border-border/70 lg:col-[5/12] lg:row-[1]"
          >
            <Accordion defaultValue={[faqs[0].q]} className="w-full">
              {faqs.map((item) => (
                <motion.div key={item.q} variants={itemVariants}>
                  <AccordionItem
                    value={item.q}
                    className="border-b border-border/70"
                  >
                    <AccordionTrigger className="[&>svg]:mt-1.5">
                      <span className="font-serif text-[1.15rem] font-medium leading-snug tracking-[-0.005em] text-foreground sm:text-xl">
                        {item.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="max-w-2xl text-[0.975rem] leading-relaxed text-muted-foreground text-pretty">
                        {item.a}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* Quiet door left open — same weight as Services' and Service Areas' closing links */}
        <div className="mt-16 max-w-2xl border-t border-border/70 pt-8 lg:ml-[33.333%] lg:mt-20">
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            Something else on your mind?{" "}
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-foreground underline decoration-brass/50 decoration-1 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              Ask us on WhatsApp
              <ArrowUpRightIcon
                className="size-4 text-brass transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
