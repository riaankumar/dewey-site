"use client";

import { Check, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";

/**
 * The trust contract, stated as commitments rather than compliance claims.
 * SOC 2 / HIPAA / GDPR are deliberately absent until those controls are
 * implemented and verified.
 */
const REQUIREMENTS = [
  "Show actions before they happen.",
  "Require explicit confirmation for consequential steps.",
  "Allow pause and takeover at any time.",
  "Block sensitive fields from capture and replay.",
  "Ground assistant answers in approved sources.",
  "Disclose when the viewer is speaking with AI.",
  "Escalate unsupported or low-confidence answers.",
  "Require explicit consent before using cloned voice or likeness.",
  "Keep an auditable history of guided actions and answer sources.",
];

export function Safety() {
  return (
    <section id="safety" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-72 bg-[radial-gradient(50%_50%_at_50%_50%,var(--brand-glow),transparent_70%)]"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
        <div className="flex flex-col gap-5">
          <Badge variant="brand" className="h-6 w-fit gap-1.5 px-2.5">
            <ShieldCheck className="size-3" />
            Safety
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Guidance first.
            <br />
            <span className="text-muted-foreground">Action with permission.</span>
          </h2>
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Emulate is a visible guide, not an invisible bot. The viewer always
            knows what is happening and remains in control.
          </p>
        </div>

        <ul className="grid gap-2.5 sm:grid-cols-2 lg:content-center">
          {REQUIREMENTS.map((req, i) => (
            <motion.li
              key={req}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
              className="flex items-start gap-2.5 rounded-2xl bg-card/60 px-3.5 py-3 ring-1 ring-foreground/10 backdrop-blur"
            >
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-muted text-brand-ink">
                <Check className="size-3" />
              </span>
              <span className="text-sm leading-relaxed">{req}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
