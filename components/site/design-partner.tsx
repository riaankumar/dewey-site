"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const INCLUDES = [
  "Five creators",
  "Three production workflows",
  "100–250 guided sessions",
  "White-glove setup",
  "Weekly workflow review",
  "Safety configuration",
  "Completion and follow-up report",
];

/** What the application asks — previewed here, captured on the form route. */
const ASKS = [
  "How many walkthroughs your team sends each week",
  "The workflow you repeat most often",
  "Where the recipient completes it",
];

export function DesignPartner() {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 h-80 bg-[radial-gradient(55%_60%_at_50%_50%,var(--brand-glow),transparent_70%)]"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14 lg:px-8">
        {/* Pitch */}
        <div className="flex flex-col gap-5">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            Founding design partners
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Bring the walkthrough you
            <br />
            <span className="text-muted-foreground">never want to repeat.</span>
          </h2>
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            We are working with onboarding, implementation, and support teams
            that repeatedly explain the same browser workflow. Bring one real
            workflow. We will turn it into an executable recording with you and
            measure whether customers finish it.
          </p>

          <div className="flex flex-col gap-2 pt-1">
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              The application asks
            </span>
            <ul className="flex flex-col gap-1.5">
              {ASKS.map((ask) => (
                <li
                  key={ask}
                  className="flex items-start gap-2 text-sm text-foreground/80"
                >
                  <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-brand-ink" />
                  {ask}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offer card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="gap-5 bg-card/80 ring-2 ring-brand/25 backdrop-blur">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground">
                Six-week founding design-partner pilot
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-primary text-4xl leading-none font-light">
                  $2,500
                </span>
                <span className="text-sm text-muted-foreground">pilot</span>
              </div>
              <span className="text-xs text-brand-ink">
                $1,250 credited toward an annual contract
              </span>
            </div>

            <Separator />

            <ul className="grid gap-2">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-muted text-brand-ink">
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              variant="accent"
              size="lg"
              className="group w-full"
              nativeButton={false}
              render={<Link href="#access" />}
            >
              Request access
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
