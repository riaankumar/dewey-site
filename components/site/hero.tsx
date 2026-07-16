"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "motion/react";

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
import { SplineEmbed } from "@/components/site/spline-embed";

const stats = [
  { value: "73%", label: "faster time-to-competency", tag: "Onboarding" },
  { value: "100%", label: "completion verified", tag: "Compliance" },
  { value: "58%", label: "fewer support tickets", tag: "Helpdesk" },
  { value: "4x", label: "higher task completion", tag: "SaaS" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient brand wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[36rem] bg-[radial-gradient(60%_50%_at_50%_50%,var(--brand-glow),transparent_70%)]"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-6 pb-8 sm:px-6 lg:px-8 lg:pt-10">
        {/*
          The headline is artwork inside the Spline scene, so it is invisible to
          screen readers and crawlers. This carries the real <h1>.
        */}
        <h1 className="sr-only">
          Recordings that prove — Dewey turns screen recordings into interactive
          demonstrations that guide, execute, and verify.
        </h1>

        {/* 3D model — centred, carries the main text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[20rem] w-full sm:h-[26rem] lg:h-[32rem]"
        >
          <SplineEmbed />
        </motion.div>

        {/* Everything below the model */}
        <div className="flex max-w-2xl flex-col items-center gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Badge variant="brand" className="h-7 gap-1.5 px-3">
              <Sparkles className="size-3" />
              Interactive demos for enterprise teams
            </Badge>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Dewey turns screen recordings into interactive demonstrations that
            guide, execute, and verify — replacing passive video with proof that
            work actually got done.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button variant="accent" size="lg" className="group px-5">
              Book a demo
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button variant="outline" size="lg" className="group px-5">
              <Play className="fill-current" />
              See it in action
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full"
          >
            <Separator className="mb-4" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <p className="mx-auto max-w-xl cursor-help text-xs leading-relaxed text-muted-foreground/80 underline decoration-dotted underline-offset-4">
                      Attestations are runtime-observed completions — not
                      cryptographic proof a human did the task. Org AI runs
                      through Dewey, so no employee API keys are required.
                    </p>
                  }
                />
                <TooltipContent className="max-w-xs">
                  Dewey observes each step at runtime inside the live app and
                  records what completed.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
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
