"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative isolate w-full overflow-hidden py-24 sm:py-32"
    >
      {/* Sits on the page's dark background like every other section. A single
          brand glow keeps the band from reading as a flat slab — no light
          backdrop, so the type stays in theme tokens instead of pinned darks. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_75%_at_50%_50%,var(--brand-glow),transparent_70%)]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch justify-between gap-8 px-4 text-left sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-balance text-4xl leading-[1.02] tracking-tight text-foreground sm:text-6xl"
          >
            Stop showing.
            <br />
            <span className="text-brand">Start proving.</span>
          </motion.h2>

          <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Turn your first recording into an interactive demonstration today.
            Guide, execute, and verify — with proof the work got done.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 text-brand" />
            Org AI included via Emulate — no employee API keys
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:items-center">
          <Button variant="accent" size="lg" className="group px-5">
            Book a demo
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button variant="outline" size="lg" className="px-5">
            Talk to sales
          </Button>
        </div>
      </div>
    </section>
  );
}
