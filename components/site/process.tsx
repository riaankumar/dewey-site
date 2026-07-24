"use client";

import { BarChart3, MousePointer2, Send, Video } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const STEPS = [
  {
    numeral: "I",
    icon: Video,
    title: "Record naturally",
    body: "Talk through the task and use the product as usual. Emulate captures the screen, camera, voice, clicks, sequence, and context in one pass.",
  },
  {
    numeral: "II",
    icon: Send,
    title: "Share one link",
    body: "The recipient can watch immediately. Guided mode is an explicit upgrade when they are ready to perform the workflow in their own browser.",
  },
  {
    numeral: "III",
    icon: MousePointer2,
    title: "Guide and answer",
    body: "The second cursor adapts to the recipient's screen while the recording assistant answers questions from approved knowledge.",
  },
  {
    numeral: "IV",
    icon: BarChart3,
    title: "Measure completion",
    body: "See whether the workflow started, completed, failed, required takeover, or created a new question for the team.",
  },
];

export function Process() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-72 bg-[radial-gradient(50%_50%_at_50%_50%,var(--brand-glow),transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            How it works
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Record once. Hand off
            <br />
            <span className="text-muted-foreground">the whole workflow.</span>
          </h2>
        </div>

        <div className="relative mt-12">
          {/* connecting rail */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[3.25rem] right-0 left-0 hidden h-px origin-left bg-gradient-to-r from-brand-from/60 via-brand-to/30 to-transparent lg:block"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.numeral}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Card className="h-full bg-card/70 backdrop-blur">
                  <CardHeader className="gap-3">
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-from via-brand-via to-brand-to text-brand-foreground">
                        <span className="font-primary text-sm leading-none font-light">
                          {step.numeral}
                        </span>
                      </span>
                      <Separator orientation="vertical" className="h-5" />
                      <step.icon className="size-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {step.body}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(i + 1) * 25}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.12 }}
                        className="h-full rounded-full bg-brand"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
