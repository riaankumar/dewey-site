"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Marquee } from "@/components/site/marquee";

const stats = [
  { value: "73%", label: "faster time-to-competency", tag: "Onboarding" },
  { value: "100%", label: "completion verified", tag: "Compliance" },
  { value: "58%", label: "fewer support tickets", tag: "Helpdesk" },
  { value: "4x", label: "higher task completion", tag: "SaaS" },
];

/**
 * Every verb has to name something a recording does *to* the live app. The
 * whole pitch is that these aren't videos, so passive verbs ("show", "explain")
 * are off the list — they'd concede the point.
 */
const VERBS = ["execute", "verify", "onboard", "teach", "prove", "guide"];
const VERB_MS = 2200;

function RotatingVerb() {
  const [index, setIndex] = React.useState(0);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    const id = setInterval(
      () => setIndex((n) => (n + 1) % VERBS.length),
      VERB_MS
    );
    return () => clearInterval(id);
  }, []);

  const word = VERBS[index];

  return (
    <motion.span
      layout={!reduced}
      transition={{ type: "spring", stiffness: 240, damping: 28 }}
      /* The padding/negative-margin pair widens the clip box past the baseline
         so the descender on "verify" survives the overflow-hidden. */
      /* --brand, not --brand-ink: the ink tone is tuned to sit on white and
         goes muddy against the dark plate. */
      className="relative inline-flex -mb-[0.14em] overflow-hidden pb-[0.14em] align-bottom text-brand"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={word}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: "80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: "-80%" }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-nowrap"
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* The plate is scoped to the copy block, not the whole section, so the
          stat ticker below lands on flat black instead of on the artwork. */}
      <div className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* Stands in until /bg.png lands, and backstops it if it ever 404s. */}
          <div className="absolute inset-0 bg-[linear-gradient(150deg,var(--brand-from),var(--brand-via)_45%,var(--brand-to))] opacity-25" />

          <Image
            src="/bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Legibility veil — the copy has to hold up over an image we can't
              predict, so the plate never reads at full strength. Heaviest behind
              the headline, easing off at the edges so the art still breathes. */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_42%,rgb(0_0_0/0.5),transparent_75%)]" />
          {/* Melts the banner into the page. */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="relative mx-auto flex min-h-[38rem] w-full max-w-7xl flex-col items-center justify-center px-4 pt-20 pb-10 sm:px-6 lg:min-h-[44rem] lg:px-8 lg:pt-28">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="brand" className="h-7 gap-1.5 px-3">
              <Sparkles className="size-3" />
              Executable screen recordings
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            /*
              One line, always. The verb swaps on a timer and the words differ
              in width, so a wrapping headline would reflow between one and two
              lines mid-rotation. nowrap pins it; the fluid size is what keeps
              the longest verb ("onboard") inside the viewport on small screens
              — a fixed ramp would overflow instead of wrapping.
            */
            className="w-full whitespace-nowrap text-[clamp(1.5rem,7.1vw,4.5rem)] leading-[1.05] tracking-tight text-white"
          >
            {/* The visible line swaps its last word on a timer, which would
                make a screen reader re-announce the heading every 2.2s. */}
            <span className="sr-only">Recordings that execute.</span>
            <span aria-hidden>
              Recordings that <RotatingVerb />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Record a workflow like a Loom. Emulate turns it into a guided replay
            your customer can follow in their own browser, ask questions about,
            and complete step by step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button variant="accent" size="lg" className="group px-5">
              Join the design partner program
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            {/* The outline variant borrows border/foreground tokens, which read
                as grey-on-grey over the banner art. Pinned to white instead. */}
            <Button
              variant="outline"
              size="lg"
              className="group border-white/25 bg-white/10 px-5 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Play className="fill-current" />
              Watch a 60-second replay
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="w-full max-w-3xl"
          >
            <Separator className="mb-4 bg-white/15" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <p className="mx-auto max-w-xl cursor-help text-xs leading-relaxed text-white/55 underline decoration-dotted underline-offset-4">
                      Attestations are runtime-observed completions — not
                      cryptographic proof a human did the task. Org AI runs
                      through Emulate, so no employee API keys are required.
                    </p>
                  }
                />
                <TooltipContent className="max-w-xs">
                  Emulate observes each step at runtime inside the live app and
                  records what completed.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
          </div>
        </div>
      </div>

      {/* Stat ticker */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Marquee duration="38s">
          {stats.map((stat, i) => (
            <Card
              key={`${stat.tag}-${i}`}
              size="sm"
              className="mr-3 w-64 shrink-0 justify-between bg-card/60 backdrop-blur"
            >
              <div className="flex items-baseline gap-2 px-(--card-spacing)">
                <span className="font-primary text-3xl leading-none font-light text-brand-ink">
                  {stat.value}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 px-(--card-spacing)">
                <span className="text-sm text-foreground/80">{stat.label}</span>
                <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  {stat.tag}
                </span>
              </div>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
