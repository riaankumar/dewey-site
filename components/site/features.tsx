"use client";

import { BadgeCheck, FileCheck2, Radio, ShieldCheck, Wand2 } from "lucide-react";
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
import { CursorDemo } from "@/components/site/cursor-demo";
import { cn } from "@/lib/utils";

function StepNumber({ n }: { n: string }) {
  return (
    <Badge
      variant="outline"
      className="h-6 rounded-2xl border-brand/30 px-2 font-mono text-[10px] text-brand-ink"
    >
      {n}
    </Badge>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex max-w-2xl flex-col gap-4">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            Capabilities
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Not another video.
            <br />
            <span className="text-muted-foreground">A demonstration that acts.</span>
          </h2>
        </div>

        {/* Bento */}
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-[repeat(2,minmax(15rem,auto))]">
          {/* Tall left — spans both rows */}
          <Card className="group/f relative overflow-hidden lg:row-span-2 lg:col-start-1">
            <CardHeader className="gap-2">
              <div className="flex items-center gap-2">
                <StepNumber n="03" />
                <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Execute
                </span>
              </div>
              <CardTitle className="text-xl">Execute in the live app</CardTitle>
              <CardDescription className="leading-relaxed">
                Users don&apos;t just watch — they do. Emulate runs interactive
                steps in the actual product, so learning happens by completing
                real work.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-end">
              <CursorDemo className="w-full" />
            </CardContent>
          </Card>

          {/* Wide top-right */}
          <Card className="relative overflow-hidden lg:col-span-2 lg:col-start-2 lg:row-start-1">
            <CardHeader className="gap-2">
              <div className="flex items-center gap-2">
                <StepNumber n="01" />
                <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Record
                </span>
              </div>
              <CardTitle className="text-xl">Record once, convert instantly</CardTitle>
              <CardDescription className="max-w-md leading-relaxed">
                Capture any workflow with a screen recording. Emulate turns it into
                a structured, interactive demonstration automatically — no manual
                authoring.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-end pb-1">
              <RecordingTimeline />
            </CardContent>
          </Card>

          {/* Bottom-right split — two cards */}
          <Card className="relative overflow-hidden lg:col-start-2 lg:row-start-2">
            <CardHeader className="gap-2">
              <div className="flex items-center gap-2">
                <StepNumber n="02" />
                <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Guide
                </span>
              </div>
              <CardTitle className="text-xl">Guide users step by step</CardTitle>
              <CardDescription className="leading-relaxed">
                Emulate highlights exactly where to click and what to type, right
                inside the real interface.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-end">
              <GuideVisual />
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden lg:col-start-3 lg:row-start-2">
            <CardHeader className="gap-2">
              <div className="flex items-center gap-2">
                <StepNumber n="04" />
                <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Verify
                </span>
              </div>
              <CardTitle className="text-xl">Verify work got done</CardTitle>
              <CardDescription className="leading-relaxed">
                Every step is validated, producing an audit-ready record for
                onboarding, support, and compliance.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 items-end">
              <VerifyVisual />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

/** 01 — a recording being parsed into discrete steps. */
function RecordingTimeline() {
  const bars = Array.from({ length: 44 });
  const chips = ["Open account", "Fill details", "Attach quote", "Submit"];

  return (
    <div className="w-full rounded-3xl bg-muted/40 p-4 ring-1 ring-foreground/10">
      <div className="flex items-center gap-2">
        <Radio className="size-3.5 text-brand-ink" />
        <span className="text-[11px] text-muted-foreground">
          workflow-capture.mov
        </span>
        <Badge variant="brand" className="ml-auto h-5 px-2 text-[10px]">
          14 steps generated
        </Badge>
      </div>

      {/* waveform */}
      <div className="mt-3 flex h-12 items-center gap-[3px]">
        {bars.map((_, i) => (
          <motion.span
            key={i}
            className="w-full flex-1 rounded-full bg-brand/50"
            initial={{ height: 4 }}
            whileInView={{ height: [4, 8 + ((i * 37) % 34), 6] }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              delay: i * 0.02,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1.6,
            }}
          />
        ))}
      </div>

      <Separator className="my-3" />

      <div className="flex flex-wrap gap-1.5">
        {chips.map((chip, i) => (
          <motion.span
            key={chip}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i, duration: 0.4 }}
          >
            <Badge variant="secondary" className="h-6 gap-1 rounded-2xl px-2 text-[10px]">
              <Wand2 className="size-2.5 text-brand-ink" />
              {chip}
            </Badge>
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/** 02 — a coach mark pointing at a control. */
function GuideVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-muted/40 p-4 ring-1 ring-foreground/10">
      <div className="flex flex-col gap-2">
        <div className="h-2 w-1/3 rounded-full bg-foreground/10" />
        <div className="relative flex h-9 items-center rounded-2xl bg-background px-3 ring-2 ring-brand">
          <span className="text-[11px] text-muted-foreground/60">
            Invoice reference
          </span>
          <motion.span
            className="absolute -inset-px rounded-2xl ring-2 ring-brand/40"
            animate={{ opacity: [0.9, 0.2, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-3 flex w-fit items-center gap-1.5 rounded-2xl bg-gradient-to-r from-brand-from via-brand-via to-brand-to px-2.5 py-1 text-[10px] font-medium text-brand-foreground"
      >
        Type the invoice number here
      </motion.div>
    </div>
  );
}

/** 04 — an immutable, timestamped completion trail. */
function VerifyVisual() {
  const rows = [
    { label: "Account created", icon: BadgeCheck },
    { label: "Quote attached", icon: FileCheck2 },
    { label: "Approval logged", icon: ShieldCheck },
  ];

  return (
    <div className="w-full rounded-3xl bg-muted/40 p-4 ring-1 ring-foreground/10">
      <div className="flex flex-col gap-2">
        {rows.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className={cn(
              "flex items-center gap-2 rounded-2xl bg-background px-3 py-2 ring-1 ring-foreground/10"
            )}
          >
            <row.icon className="size-3.5 shrink-0 text-brand-ink" />
            <span className="truncate text-[11px]">{row.label}</span>
            <span className="ml-auto font-mono text-[9px] text-muted-foreground">
              0{i + 1}:1{i}
            </span>
          </motion.div>
        ))}
      </div>
      <p className="mt-3 text-[10px] leading-relaxed text-muted-foreground">
        Time-stamped, immutable, exportable.
      </p>
    </div>
  );
}
