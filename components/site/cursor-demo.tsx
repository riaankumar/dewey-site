"use client";

import * as React from "react";
import { Check, ChevronDown, MousePointer2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type TargetId = "field" | "plan" | "submit";

const TYPED_TEXT = "Northwind Trading";

const SEQUENCE: {
  target: TargetId;
  hint: string;
  hold: number;
}[] = [
  { target: "field", hint: "Click the account field", hold: 1100 },
  { target: "field", hint: "Type the customer name", hold: 2100 },
  { target: "plan", hint: "Choose the plan", hold: 1400 },
  { target: "submit", hint: "Verify and submit", hold: 1300 },
  { target: "submit", hint: "Completion verified", hold: 2400 },
];

export function CursorDemo({ className }: { className?: string }) {
  const [index, setIndex] = React.useState(0);
  const [typedCount, setTypedCount] = React.useState(0);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [ready, setReady] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const fieldRef = React.useRef<HTMLDivElement>(null);
  const planRef = React.useRef<HTMLDivElement>(null);
  const submitRef = React.useRef<HTMLDivElement>(null);

  const refs = React.useMemo(
    () => ({ field: fieldRef, plan: planRef, submit: submitRef }),
    []
  );

  const step = SEQUENCE[index];
  const planSelected = index >= 2;
  const submitted = index >= 4;

  // Derived rather than stored, so the effect below never sets state on render.
  const typed =
    index === 0 ? "" : index > 1 ? TYPED_TEXT : TYPED_TEXT.slice(0, typedCount);

  // Only animate while the demo is on screen.
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Park the cursor on the current target, and follow it on resize.
  React.useLayoutEffect(() => {
    const place = () => {
      const container = containerRef.current;
      const target = refs[step.target].current;
      if (!container || !target) return;
      const c = container.getBoundingClientRect();
      const t = target.getBoundingClientRect();
      setPos({
        x: t.left - c.left + Math.min(t.width * 0.42, 120),
        y: t.top - c.top + t.height * 0.62,
      });
      setReady(true);
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [index, refs, step.target]);

  // Drive the sequence.
  React.useEffect(() => {
    if (!active) return;
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % SEQUENCE.length),
      step.hold
    );
    return () => window.clearTimeout(id);
  }, [index, active, step.hold]);

  // Type the customer name on the typing step only.
  React.useEffect(() => {
    if (index !== 1) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTypedCount(i);
      if (i >= TYPED_TEXT.length) window.clearInterval(id);
    }, 85);
    return () => {
      window.clearInterval(id);
      setTypedCount(0);
    };
  }, [index]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative isolate overflow-hidden rounded-3xl bg-muted/40 ring-1 ring-foreground/10",
        className
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border/60 bg-background/60 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
        </span>
        <span className="ml-1 truncate text-[11px] text-muted-foreground">
          crm.internal — New account
        </span>
        <Badge variant="brand" className="ml-auto h-5 gap-1 px-2 text-[10px]">
          <span className="size-1.5 rounded-full bg-brand" />
          Emulate live
        </Badge>
      </div>

      {/* Mock app surface — the cursor acts on these */}
      <div className="flex flex-col gap-4 p-5 pb-6">
        <Field
          ref={fieldRef}
          label="Account name"
          focused={index <= 1}
          value={typed}
          caret={index === 1}
        />

        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-medium text-muted-foreground">
            Plan
          </span>
          <div
            ref={planRef}
            className={cn(
              "flex h-9 items-center justify-between rounded-2xl bg-background px-3 text-xs ring-1 transition-all duration-300",
              index === 2
                ? "ring-2 ring-brand"
                : "ring-foreground/10"
            )}
          >
            <span
              className={cn(
                "transition-colors",
                planSelected ? "text-foreground" : "text-muted-foreground/60"
              )}
            >
              {planSelected ? "Enterprise — annual" : "Select a plan"}
            </span>
            <ChevronDown className="size-3.5 text-muted-foreground" />
          </div>
        </div>

        <div
          ref={submitRef}
          className={cn(
            "mt-1 flex h-9 items-center justify-center gap-1.5 rounded-3xl text-xs font-medium transition-all duration-300",
            submitted
              ? "bg-brand/15 text-brand-ink ring-1 ring-brand/30"
              : "bg-foreground text-background",
            index === 3 && "ring-2 ring-brand ring-offset-2 ring-offset-background"
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.span
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1.5"
              >
                <Check className="size-3.5" />
                Completion verified
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Verify &amp; submit
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-1 flex flex-col gap-2">
          <div className="flex items-center justify-between text-[10px] tracking-wide text-muted-foreground uppercase">
            <span>Step {Math.min(index + 1, SEQUENCE.length)} of {SEQUENCE.length}</span>
            <span className="tabular-nums">
              {Math.round(((index + 1) / SEQUENCE.length) * 100)}%
            </span>
          </div>
          <Progress
            value={((index + 1) / SEQUENCE.length) * 100}
            className="[&_[data-slot=progress-indicator]]:bg-brand"
          />
        </div>
      </div>

      {/* Coach mark + cursor */}
      {ready ? (
        <motion.div
          className="pointer-events-none absolute top-0 left-0 z-20"
          animate={{ x: pos.x, y: pos.y }}
          transition={{ type: "spring", stiffness: 140, damping: 20, mass: 0.7 }}
        >
          <div className="relative">
            <MousePointer2 className="size-5 fill-foreground text-background drop-shadow-md" />
            {/* click pulse on each new step */}
            <motion.span
              key={index}
              initial={{ scale: 0, opacity: 0.55 }}
              animate={{ scale: 2.6, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
              className="absolute top-3 left-1 size-4 rounded-full bg-brand"
            />
            <AnimatePresence mode="wait">
              <motion.span
                key={step.hint}
                initial={{ opacity: 0, y: 4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="absolute top-6 left-4 w-max max-w-[12rem] rounded-2xl bg-gradient-to-r from-brand-from via-brand-via to-brand-to px-2.5 py-1 text-[10px] leading-tight font-medium text-brand-foreground shadow-lg"
              >
                {step.hint}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}

const Field = React.forwardRef<
  HTMLDivElement,
  { label: string; value: string; focused: boolean; caret: boolean }
>(function Field({ label, value, focused, caret }, ref) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[11px] font-medium text-muted-foreground">
        {label}
      </span>
      <div
        ref={ref}
        className={cn(
          "flex h-9 items-center rounded-2xl bg-background px-3 text-xs ring-1 transition-all duration-300",
          focused ? "ring-2 ring-brand" : "ring-foreground/10"
        )}
      >
        {value ? (
          <span className="text-foreground">{value}</span>
        ) : (
          <span className="text-muted-foreground/50">Acme Corporation</span>
        )}
        {caret ? (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            className="ml-px inline-block h-3.5 w-px bg-brand"
          />
        ) : null}
      </div>
    </div>
  );
});
