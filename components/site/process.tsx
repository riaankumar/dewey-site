"use client";

import { Rocket, ScanLine, Video } from "lucide-react";
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
    title: "Record the workflow",
    body: "Capture any process with a screen recording. Dewey parses each click, input, and screen into structured steps automatically.",
  },
  {
    numeral: "II",
    icon: ScanLine,
    title: "Turn it interactive",
    body: "Dewey converts the recording into a guided demonstration that runs inside your live app — no editing required.",
  },
  {
    numeral: "III",
    icon: Rocket,
    title: "Deploy and verify",
    body: "Publish to any surface. Every completion is validated and logged, giving you proof that work actually got done.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-72 bg-[radial-gradient(50%_50%_at_50%_50%,var(--brand-glow),transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            Process
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Recording to result.
            <br />
            <span className="text-muted-foreground">In three steps.</span>
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

          <div className="grid gap-4 lg:grid-cols-3">
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
                        whileInView={{ width: `${(i + 1) * 33.3}%` }}
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
