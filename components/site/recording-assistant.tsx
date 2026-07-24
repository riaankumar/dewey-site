"use client";

import type { ComponentType, ReactNode } from "react";
import { MousePointer2, Play, Quote, ShieldCheck, Sparkles, User } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PROMPTS = [
  "Why do I need this permission?",
  "Show me where to click.",
  "What changes after I connect this?",
  "My screen looks different. What now?",
];

export function RecordingAssistant() {
  return (
    <section id="assistant" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 h-80 bg-[radial-gradient(50%_50%_at_50%_50%,var(--brand-glow),transparent_70%)]"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14 lg:px-8">
        {/* Copy */}
        <div className="flex flex-col gap-5">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            One assistant, every screen
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            An assistant you can
            <br />
            <span className="text-muted-foreground">send to anyone.</span>
          </h2>
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            It lives on your screen — ask it what you&apos;re looking at. Then
            you send it to a customer, and the same assistant guides them on
            theirs: &ldquo;Avi sent you this emulate.&rdquo; Every answer stays
            grounded in your recording, transcript, workflow, and approved
            sources. When it isn&apos;t supported, it says so and hands off to a
            person.
          </p>

          <div className="flex flex-wrap gap-2">
            {PROMPTS.map((prompt) => (
              <span
                key={prompt}
                className="rounded-2xl bg-muted/60 px-3 py-1.5 text-xs text-foreground/80 ring-1 ring-foreground/10"
              >
                {prompt}
              </span>
            ))}
          </div>

          <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-brand-ink" />
            Answers cite the recording or an approved source. Emulate never
            pretends the creator said something that is not supported.
          </p>
        </div>

        {/* Answer card mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="gap-4 bg-card/80 backdrop-blur">
            {/* The recipient's question */}
            <div className="flex items-start justify-end gap-2">
              <span className="max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-brand-from via-brand-via to-brand-to px-3 py-2 text-sm text-brand-foreground">
                Why do I need this permission?
              </span>
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground">
                <User className="size-3.5" />
              </span>
            </div>

            {/* The grounded answer */}
            <div className="flex items-start gap-2">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-muted text-brand-ink">
                <Sparkles className="size-3.5" />
              </span>
              <div className="flex max-w-[85%] flex-col gap-3 rounded-2xl rounded-tl-sm bg-muted/60 p-3 ring-1 ring-foreground/10">
                <p className="text-sm leading-relaxed">
                  HubSpot needs read access so Northstar can sync contacts and
                  company activity. Avi explains this at 0:42. Review the
                  requested scopes before you connect.
                </p>

                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <Quote className="size-3 text-brand-ink" />
                  Grounded in the recording · 0:42
                </div>

                <Separator />

                <div className="flex flex-wrap gap-1.5">
                  <ActionChip icon={MousePointer2}>Show me</ActionChip>
                  <ActionChip icon={Play}>Open 0:42</ActionChip>
                  <ActionChip icon={User}>Ask Avi</ActionChip>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ActionChip({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-2xl bg-background px-2.5 py-1 text-[11px] font-medium ring-1 ring-foreground/10">
      <Icon className="size-3 text-brand-ink" />
      {children}
    </span>
  );
}
