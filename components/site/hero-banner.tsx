"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BuiltBy } from "@/components/site/built-by";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
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
              <span className="hidden sm:inline">
                &nbsp;for B2B onboarding and support
              </span>
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="w-full text-[clamp(2.5rem,7.1vw,4.5rem)] leading-[1.05] tracking-tight text-white"
          >
            Recordings that <span className="text-brand">execute.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Record a workflow like a Loom. Emulate turns it into a guided replay
            your customer can follow inside their own browser, ask questions
            about, and complete step by step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              variant="accent"
              size="lg"
              className="group px-5"
              nativeButton={false}
              render={<Link href="#access" />}
            >
              Request access
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            {/* The outline variant borrows border/foreground tokens, which read
                as grey-on-grey over the banner art. Pinned to white instead. */}
            <Button
              variant="outline"
              size="lg"
              className="group border-white/25 bg-white/10 px-5 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              nativeButton={false}
              render={<Link href="#replay" />}
            >
              <Play className="fill-current" />
              Try the 60-second replay
            </Button>
          </motion.div>

          {/* The category's defensible line: this is a visible guide, not an
              autonomous bot. Kept in the hero so it frames everything below. */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <ShieldCheck className="size-4 shrink-0 text-brand" />
            No invisible automation. The viewer sees every step and controls
            every click.
          </motion.p>

          <BuiltBy />
          </div>
        </div>
      </div>
    </section>
  );
}
