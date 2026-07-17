"use client";

import * as React from "react";
import {
  BarChart3,
  Check,
  ChevronDown,
  Circle,
  CircleCheck,
  LayoutDashboard,
  MousePointer2,
  Settings,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const TYPED = "Q3 Sales onboarding";

type TargetKey =
  | "navWorkflows"
  | "runBtn"
  | "nameField"
  | "modeSelect"
  | "acceptBtn"
  | "verifyArea";

/** The scripted flow. Each step parks the cursor on a target and holds. */
const SEQ: { target: TargetKey; tip: string; hold: number }[] = [
  { target: "navWorkflows", tip: "Open Workflows", hold: 1500 },
  { target: "runBtn", tip: "Run the interactive demo", hold: 1600 },
  { target: "nameField", tip: "Naming the rollout…", hold: 2400 },
  { target: "modeSelect", tip: "Interactive + verified", hold: 1600 },
  { target: "acceptBtn", tip: "Accept Emulate's suggestion", hold: 2000 },
  { target: "verifyArea", tip: "Capturing proof…", hold: 1800 },
  { target: "verifyArea", tip: "12 attestations recorded", hold: 2800 },
];

const PROGRESS = [0, 6, 22, 44, 58, 86, 100];
const BARS = [35, 52, 44, 62, 56, 74, 68, 92];

const CHECKLIST = [
  "Import screen recording",
  "Generate interactive steps",
  "Auto-verify completions",
  "Publish to Slack & LMS",
];

export function LaptopDemo() {
  const [index, setIndex] = React.useState(0);
  const [typedCount, setTypedCount] = React.useState(0);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [ready, setReady] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const stageRef = React.useRef<HTMLDivElement>(null);
  const navWorkflowsRef = React.useRef<HTMLDivElement>(null);
  const runBtnRef = React.useRef<HTMLDivElement>(null);
  const nameFieldRef = React.useRef<HTMLDivElement>(null);
  const modeSelectRef = React.useRef<HTMLDivElement>(null);
  const acceptBtnRef = React.useRef<HTMLDivElement>(null);
  const verifyAreaRef = React.useRef<HTMLDivElement>(null);

  const refs = React.useMemo(
    () => ({
      navWorkflows: navWorkflowsRef,
      runBtn: runBtnRef,
      nameField: nameFieldRef,
      modeSelect: modeSelectRef,
      acceptBtn: acceptBtnRef,
      verifyArea: verifyAreaRef,
    }),
    []
  );

  const step = SEQ[index];

  // Derived stage state — never stored, so effects only drive the clock.
  const workflowsOpen = index >= 1;
  const started = index >= 2;
  const modeChosen = index >= 4;
  const suggesting = index === 4;
  const accepted = index >= 5;
  const verified = index >= 6;
  const rowDone = [index >= 3, index >= 4, index >= 5, index >= 6];
  const typed =
    index < 2 ? "" : index > 2 ? TYPED : TYPED.slice(0, typedCount);

  // Run only while on screen.
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Park the cursor on the current target; rects are post-transform, so the
  // 3D tilt is accounted for. Skip hidden targets (e.g. sidebar on mobile).
  React.useLayoutEffect(() => {
    const place = () => {
      const stage = stageRef.current;
      const target = refs[step.target].current;
      if (!stage || !target) return;
      const t = target.getBoundingClientRect();
      if (!t.width && !t.height) return;
      const s = stage.getBoundingClientRect();
      setPos({
        x: t.left - s.left + t.width * 0.55,
        y: t.top - s.top + t.height * 0.7,
      });
      setReady(true);
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [index, refs, step.target]);

  // Advance the script.
  React.useEffect(() => {
    if (!active) return;
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % SEQ.length),
      step.hold
    );
    return () => window.clearTimeout(id);
  }, [index, active, step.hold]);

  // Typing happens on step 2 only.
  React.useEffect(() => {
    if (index !== 2) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTypedCount(i);
      if (i >= TYPED.length) window.clearInterval(id);
    }, 85);
    return () => {
      window.clearInterval(id);
      setTypedCount(0);
    };
  }, [index]);

  return (
    <section id="showcase" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 h-96 bg-[radial-gradient(50%_50%_at_50%_50%,var(--brand-glow),transparent_70%)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            Watch it drive
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Emulate takes the wheel.
            <br />
            <span className="text-muted-foreground">You take the credit.</span>
          </h2>
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            An interactive demonstration running end-to-end: opening the
            workflow, filling the rollout, accepting a suggestion, and verifying
            every completion — live in the software.
          </p>
        </div>

        {/* Stage: laptop + floating chips + cursor share this coordinate space */}
        <div className="mt-14" style={{ perspective: "1800px" }}>
          <div ref={stageRef} className="relative mx-auto max-w-4xl">
            <motion.div
              initial={{ rotateX: 24, y: 56, opacity: 0 }}
              whileInView={{ rotateX: 7, y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
            >
              {/* Screen */}
              <div className="rounded-3xl bg-neutral-900 p-2.5 shadow-2xl ring-1 ring-black/40 sm:p-3">
                <span className="mx-auto mb-1.5 block size-1.5 rounded-full bg-neutral-700" />
                <div className="overflow-hidden rounded-2xl bg-background ring-1 ring-foreground/10">
                  {/* App chrome */}
                  <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-3 py-2">
                    <span className="flex gap-1.5" aria-hidden>
                      <span className="size-2 rounded-full bg-foreground/15" />
                      <span className="size-2 rounded-full bg-foreground/15" />
                      <span className="size-2 rounded-full bg-foreground/15" />
                    </span>
                    <span className="ml-2 hidden truncate rounded-lg bg-background px-3 py-0.5 text-[10px] text-muted-foreground ring-1 ring-foreground/10 sm:block">
                      app.emulate.io — Enablement OS
                    </span>
                    <span className="ml-auto flex items-center -space-x-1.5">
                      {["SR", "MK", "AL"].map((initials) => (
                        <Avatar key={initials} className="size-5 ring-2 ring-background">
                          <AvatarFallback className="text-[7px]">{initials}</AvatarFallback>
                        </Avatar>
                      ))}
                    </span>
                    <Badge variant="accent" className="h-5 gap-1 px-2 text-[9px]">
                      <span className="size-1 animate-pulse rounded-full bg-white" />
                      Emulate driving
                    </Badge>
                  </div>

                  {/* App body */}
                  <div className="grid min-h-[24rem] grid-cols-[8.5rem_1fr] max-sm:grid-cols-1">
                    {/* Sidebar */}
                    <aside className="hidden flex-col gap-0.5 border-r border-border/60 bg-muted/30 p-2 sm:flex">
                      {[
                        { label: "Dashboard", icon: LayoutDashboard, key: "dash" },
                        { label: "Workflows", icon: Workflow, key: "wf" },
                        { label: "Analytics", icon: BarChart3, key: "an" },
                        { label: "Verify", icon: ShieldCheck, key: "ver" },
                        { label: "Settings", icon: Settings, key: "set" },
                      ].map((item) => {
                        const isWorkflows = item.key === "wf";
                        const activeItem = isWorkflows ? workflowsOpen : !workflowsOpen && item.key === "dash";
                        return (
                          <div
                            key={item.key}
                            ref={isWorkflows ? navWorkflowsRef : undefined}
                            className={cn(
                              "flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-[11px] font-medium transition-colors duration-300",
                              activeItem
                                ? "bg-background text-foreground shadow-sm ring-1 ring-foreground/10"
                                : "text-muted-foreground"
                            )}
                          >
                            <item.icon className="size-3.5" />
                            {item.label}
                          </div>
                        );
                      })}
                      <Separator className="my-2" />
                      <div className="px-2.5 text-[9px] tracking-widest text-muted-foreground/70 uppercase">
                        Rollouts
                      </div>
                      <div className="px-2.5 py-1 text-[11px] text-muted-foreground">
                        EMEA onboarding
                      </div>
                    </aside>

                    {/* Main */}
                    <div className="flex flex-col gap-3 p-3 sm:p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold">
                            {workflowsOpen ? "Workflows" : "Dashboard"}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {workflowsOpen
                              ? "Turn the recording into a verified rollout"
                              : "Team overview"}
                          </span>
                        </div>
                        <div ref={runBtnRef} className="inline-flex">
                          <Button
                            variant="accent"
                            size="sm"
                            className={cn(
                              "pointer-events-none px-3 text-[11px] transition-shadow",
                              index === 1 && "ring-2 ring-brand ring-offset-2 ring-offset-background"
                            )}
                          >
                            <Sparkles className="size-3" />
                            Run interactive demo
                          </Button>
                        </div>
                      </div>

                      <div className="grid flex-1 gap-3 lg:grid-cols-[1fr_1.15fr]">
                        {/* Form card */}
                        <div className="flex flex-col gap-2.5 rounded-2xl bg-muted/40 p-3 ring-1 ring-foreground/10">
                          <span className="text-[9px] tracking-widest text-muted-foreground uppercase">
                            Rollout
                          </span>
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-medium text-muted-foreground">Name</span>
                            <div
                              ref={nameFieldRef}
                              className={cn(
                                "flex h-8 items-center rounded-xl bg-background px-2.5 text-[11px] ring-1 transition-all duration-300",
                                index === 2 ? "ring-2 ring-brand" : "ring-foreground/10"
                              )}
                            >
                              {typed ? (
                                <span>{typed}</span>
                              ) : (
                                <span className="text-muted-foreground/50">Untitled rollout</span>
                              )}
                              {index === 2 ? (
                                <motion.span
                                  animate={{ opacity: [1, 0, 1] }}
                                  transition={{ duration: 0.9, repeat: Infinity }}
                                  className="ml-px inline-block h-3 w-px bg-brand"
                                />
                              ) : null}
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-medium text-muted-foreground">Mode</span>
                            <div
                              ref={modeSelectRef}
                              className={cn(
                                "flex h-8 items-center justify-between rounded-xl bg-background px-2.5 text-[11px] ring-1 transition-all duration-300",
                                index === 3 ? "ring-2 ring-brand" : "ring-foreground/10"
                              )}
                            >
                              <span className={cn(!modeChosen && "text-muted-foreground/50")}>
                                {modeChosen ? "Interactive + verify" : "Choose a mode"}
                              </span>
                              <ChevronDown className="size-3 text-muted-foreground" />
                            </div>
                          </div>

                          {/* Chart */}
                          <div className="mt-auto flex flex-col gap-1.5 rounded-xl bg-background p-2.5 ring-1 ring-foreground/10">
                            <div className="flex items-baseline justify-between">
                              <span className="text-[9px] tracking-widest text-muted-foreground uppercase">
                                Completion
                              </span>
                              <span className="font-primary text-lg leading-none text-brand-ink">
                                {verified ? "94%" : accepted ? "61%" : "—"}
                              </span>
                            </div>
                            <div className="flex h-14 items-end gap-1">
                              {BARS.map((h, i) => (
                                <span key={i} className="flex flex-1 items-end justify-center">
                                  <motion.span
                                    className="w-2 rounded-full bg-brand/60"
                                    animate={{ height: accepted ? `${(h / 100) * 3.5}rem` : "0.4rem" }}
                                    transition={{ duration: 0.7, delay: i * 0.05 }}
                                  />
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Checklist card */}
                        <div className="relative flex flex-col gap-2 rounded-2xl bg-muted/40 p-3 ring-1 ring-foreground/10">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] tracking-widest text-muted-foreground uppercase">
                              Steps
                            </span>
                            <span className="text-[10px] text-muted-foreground tabular-nums">
                              {PROGRESS[index]}%
                            </span>
                          </div>
                          <Progress
                            value={PROGRESS[index]}
                            className="[&_[data-slot=progress-indicator]]:bg-brand"
                          />
                          <div className="mt-1 flex flex-col gap-1.5">
                            {CHECKLIST.map((row, i) => (
                              <div
                                key={row}
                                className={cn(
                                  "flex items-center gap-2 rounded-xl bg-background px-2.5 py-2 text-[11px] ring-1 ring-foreground/10 transition-opacity duration-300",
                                  !started && "opacity-40"
                                )}
                              >
                                {rowDone[i] ? (
                                  <CircleCheck className="size-3.5 shrink-0 text-brand" />
                                ) : (
                                  <Circle className="size-3.5 shrink-0 text-muted-foreground/40" />
                                )}
                                <span className={cn(rowDone[i] && "text-muted-foreground line-through decoration-brand/40")}>
                                  {row}
                                </span>
                                {i === 2 && accepted ? (
                                  <Badge variant="brand" className="ml-auto h-4 px-1.5 text-[8px]">
                                    auto
                                  </Badge>
                                ) : null}
                              </div>
                            ))}
                          </div>

                          {/* Suggestion popover */}
                          <AnimatePresence>
                            {suggesting ? (
                              <motion.div
                                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute right-2 bottom-14 z-10 w-52 rounded-2xl bg-popover p-2.5 shadow-xl ring-1 ring-foreground/10"
                              >
                                <div className="flex items-center gap-1.5 text-[10px] font-semibold">
                                  <Sparkles className="size-3 text-brand-ink" />
                                  Emulate suggestion
                                </div>
                                <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
                                  Skip the manual check — I watched this step
                                  succeed 3 times in a row.
                                </p>
                                <div className="mt-2 flex gap-1.5">
                                  <div ref={acceptBtnRef} className="inline-flex">
                                    <Button
                                      variant="accent"
                                      size="xs"
                                      className="pointer-events-none px-2 text-[10px]"
                                    >
                                      <Check className="size-2.5" />
                                      Accept
                                    </Button>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="xs"
                                    className="pointer-events-none px-2 text-[10px]"
                                  >
                                    Skip
                                  </Button>
                                </div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>

                          {/* Verified stamp */}
                          <div ref={verifyAreaRef} className="mt-auto">
                            <AnimatePresence mode="wait" initial={false}>
                              {verified ? (
                                <motion.div
                                  key="done"
                                  initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                  exit={{ opacity: 0 }}
                                  className="flex items-center gap-2 rounded-xl bg-brand-muted px-2.5 py-2 text-[11px] font-medium text-brand-ink ring-1 ring-brand/30"
                                >
                                  <ShieldCheck className="size-3.5" />
                                  Completion verified — 12 attestations
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="pending"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="flex items-center gap-2 rounded-xl bg-background px-2.5 py-2 text-[11px] text-muted-foreground ring-1 ring-foreground/10"
                                >
                                  <span
                                    className={cn(
                                      "size-1.5 rounded-full",
                                      index === 5 ? "animate-pulse bg-brand" : "bg-muted-foreground/40"
                                    )}
                                  />
                                  {index === 5 ? "Verifying completions…" : "Awaiting run"}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deck + shadow */}
              <div className="relative left-1/2 h-3.5 w-[108%] -translate-x-1/2 rounded-b-3xl bg-gradient-to-b from-neutral-700 to-neutral-800">
                <span className="absolute top-0 left-1/2 h-1.5 w-20 -translate-x-1/2 rounded-b-xl bg-neutral-600" />
              </div>
            </motion.div>
            <div aria-hidden className="mx-auto mt-8 h-8 w-2/3 rounded-full bg-foreground/15 blur-2xl" />

            {/* Floating collaborator chips */}
            <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block" aria-hidden>
              <AnimatePresence>
                {index >= 1 && index <= 3 ? (
                  <FloatingChip key="c1" className="top-6 -left-10 -rotate-3">
                    Sandra — Let&apos;s roll this out to EMEA 🚀
                  </FloatingChip>
                ) : null}
                {index === 4 || index === 5 ? (
                  <FloatingChip key="c2" className="top-[38%] -right-14 rotate-2">
                    Suggestion ready ✦
                  </FloatingChip>
                ) : null}
                {index === 6 ? (
                  <FloatingChip key="c3" className="bottom-16 -left-6 rotate-1">
                    Proof synced to Slack ✓
                  </FloatingChip>
                ) : null}
              </AnimatePresence>
            </div>

            {/* Cursor */}
            {ready ? (
              <motion.div
                className="pointer-events-none absolute top-0 left-0 z-30"
                animate={{ x: pos.x, y: pos.y }}
                transition={{ type: "spring", stiffness: 130, damping: 19, mass: 0.8 }}
              >
                <div className="relative">
                  <span className="grid size-6 place-items-center rounded-full bg-gradient-to-r from-brand-from to-brand-to shadow-lg ring-2 ring-background">
                    <MousePointer2 className="size-3 fill-white text-white" />
                  </span>
                  <motion.span
                    key={index}
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2.8, opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                    className="absolute inset-0 rounded-full bg-brand"
                  />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={step.tip}
                      initial={{ opacity: 0, y: 4, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-7 left-3 w-max max-w-[13rem] rounded-2xl bg-gradient-to-r from-brand-from to-brand-to px-2.5 py-1 text-[10px] leading-tight font-medium text-white shadow-lg"
                    >
                      {step.tip}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "absolute w-max rounded-2xl bg-gradient-to-r from-brand-from to-brand-to px-3 py-1.5 text-[11px] font-medium text-white shadow-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
