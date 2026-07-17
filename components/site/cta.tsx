"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { SplineFrame } from "@/components/site/spline-embed";

export function CTA() {
  return (
    <section id="cta" className="relative isolate w-full overflow-hidden">
      {/*
        The Spline viewer scales the scene to COVER its frame, so a wide, short
        band crops the scene top and bottom. Holding a 16:9 box on desktop gives
        the scene the vertical room it was authored with; narrow screens fall
        back to a tall min-height. Content is layered over it, not inside a card.
      */}
      <div className="relative flex min-h-[42rem] w-full items-start justify-center lg:aspect-video lg:min-h-0">
        {/* Full-bleed backdrop. Decorative, so pointer-events-none — otherwise
            the iframe swallows clicks aimed at the buttons on top. */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <SplineFrame
            scene={process.env.NEXT_PUBLIC_SPLINE_CTA_SCENE}
            title="Satin ribbon"
            decorative
          />
        </div>

        {/*
          The scene is a fixed light backdrop in both themes, so the type is
          pinned to dark tones rather than theme tokens — those would invert in
          dark mode and disappear against the same pink.
        */}
        <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch justify-between gap-8 px-4 pt-12 text-left sm:px-6 lg:flex-row lg:px-8 lg:pt-16">
          <div className="flex flex-col items-start gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-balance text-4xl leading-[1.02] tracking-tight text-neutral-900 sm:text-6xl"
            >
              Stop showing.
              <br />
              <span className="text-brand-from">Start proving.</span>
            </motion.h2>

            <p className="max-w-xl text-pretty text-sm leading-relaxed text-neutral-700 sm:text-base">
              Turn your first recording into an interactive demonstration today.
              Guide, execute, and verify — with proof the work got done.
            </p>

            <p className="flex items-center gap-1.5 text-xs text-neutral-600">
              <ShieldCheck className="size-3.5 text-brand-from" />
              Org AI included via Emulate — no employee API keys
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:items-start">
            <Button variant="accent" size="lg" className="group px-5">
              Book a demo
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              size="lg"
              className="border border-neutral-900/15 bg-white/80 px-5 text-neutral-900 backdrop-blur-sm hover:bg-white"
            >
              Talk to sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
