"use client";

import { CircleCheck, Eye, MessageCircleQuestion, MousePointer2 } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

/**
 * The four verbs that separate an executable recording from a video: watch,
 * ask, follow, complete. Ordered as the recipient experiences them, so the row
 * reads as one arc rather than four unrelated features.
 */
const STEPS = [
  {
    icon: Eye,
    label: "Watch",
    body: "See the original explanation, screen, voice, and context.",
  },
  {
    icon: MessageCircleQuestion,
    label: "Ask",
    body: "Ask a question and get an answer grounded in the recording and approved sources.",
  },
  {
    icon: MousePointer2,
    label: "Follow",
    body: "Let the second cursor point to the next step in the product already open.",
  },
  {
    icon: CircleCheck,
    label: "Complete",
    body: "Take control, confirm important actions, and finish the real workflow.",
  },
];

export function OutcomeStrip() {
  return (
    <section id="outcomes" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            Watch · ask · follow · complete
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            A recording that
            <br />
            <span className="text-muted-foreground">stays to help.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-2xl bg-brand-muted text-brand-ink">
                    <step.icon className="size-4" />
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-medium tracking-tight">{step.label}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
