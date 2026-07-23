"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type State = "idle" | "submitting" | "done" | "error";

export function Waitlist() {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState<State>("idle");
  const [message, setMessage] = React.useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "submitting") return;
    setState("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setState("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }
      setState("done");
    } catch {
      setState("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <section id="access" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_70%_at_50%_45%,var(--brand-glow),transparent_70%)]"
      />
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <Badge variant="brand" className="h-6 px-2.5">
          Early access
        </Badge>
        <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Request access to Emulate.
        </h2>
        <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          We&apos;re onboarding a first set of onboarding, implementation, and
          support teams. Join the waitlist and we&apos;ll reach out to set up
          your first executable recording.
        </p>

        {state === "done" ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2.5 rounded-2xl bg-brand-muted px-4 py-3 text-sm font-medium text-brand-ink ring-1 ring-brand/30"
          >
            <CheckCircle2 className="size-4" />
            You&apos;re on the list. We&apos;ll be in touch at {email}.
          </motion.div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex w-full max-w-md flex-col gap-2.5 sm:flex-row"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Work email
            </label>
            <Input
              id="waitlist-email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={state === "submitting"}
              aria-invalid={state === "error"}
              className="h-11 flex-1 rounded-2xl"
            />
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="group h-11 shrink-0 px-5"
              disabled={state === "submitting"}
            >
              {state === "submitting" ? (
                <>
                  <Loader2 className="animate-spin" />
                  Requesting…
                </>
              ) : (
                <>
                  Request access
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </Button>
          </form>
        )}

        <p
          aria-live="polite"
          className="min-h-[1.25rem] text-xs text-destructive"
        >
          {state === "error" ? message : ""}
        </p>
      </div>
    </section>
  );
}
