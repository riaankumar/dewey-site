"use client";

import {
  CircleCheck,
  Hand,
  MessageCircleQuestion,
  Play,
  Timer,
  TrendingDown,
  TriangleAlert,
  UsersRound,
} from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

/**
 * Metric names only — no values. The spec is explicit that ROI and completion
 * percentages stay off the site until measured in real pilots, so these render
 * as product concepts, never as benchmarks.
 */
const METRICS = [
  { icon: Play, label: "Guided sessions started" },
  { icon: CircleCheck, label: "Workflow completion" },
  { icon: Timer, label: "Time to complete" },
  { icon: TrendingDown, label: "Step-level drop-off" },
  { icon: MessageCircleQuestion, label: "Questions asked" },
  { icon: UsersRound, label: "Human handoffs" },
  { icon: Hand, label: "Viewer takeover" },
  { icon: TriangleAlert, label: "Failure reason" },
];

export function OutcomeAnalytics() {
  return (
    <section id="analytics" className="relative py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-8">
        <div className="flex flex-col gap-5">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            Outcome analytics
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Know whether the
            <br />
            <span className="text-muted-foreground">work got done.</span>
          </h2>
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Video views show attention. Emulate shows progress: where the
            recipient started, asked a question, took control, became stuck, or
            completed the workflow.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="gap-4 bg-card/80 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Session outcomes</span>
              <Badge variant="secondary" className="h-5 px-2 text-[10px]">
                Illustrative
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center gap-2.5 rounded-2xl bg-muted/50 px-3 py-2.5 ring-1 ring-foreground/10"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-xl bg-background text-brand-ink ring-1 ring-foreground/10">
                    <metric.icon className="size-3.5" />
                  </span>
                  <span className="text-xs leading-tight text-foreground/85">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Shown as product concepts. Real completion and ROI figures are
              published only once measured in pilots.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
