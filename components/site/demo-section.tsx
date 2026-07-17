"use client";

import * as React from "react";
import { CircleDot, Clapperboard, Play, ShieldCheck, Terminal } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CODE = `demo.build({
  mode: 'interactive',
  guide: true,
  execute: true,
})
// 14 steps generated`;

const TABS = [
  {
    value: "record",
    label: "Record",
    icon: Clapperboard,
    title: "Capture the workflow once",
    body: "Hit record and run the process like you always do. Emulate parses every click, input, and screen into structured steps.",
  },
  {
    value: "interactive",
    label: "Interactive",
    icon: Play,
    title: "Ship it as a demonstration",
    body: "The recording becomes a guided, executable walkthrough that runs inside your live app — no editing required.",
  },
  {
    value: "verify",
    label: "Verify",
    icon: ShieldCheck,
    title: "Prove the work got done",
    body: "Every completion is validated and logged, giving you an audit-ready record instead of a view count.",
  },
];

export function DemoSection() {
  return (
    <section id="demo" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-4">
            <Badge variant="brand" className="h-6 w-fit px-2.5">
              See it in action
            </Badge>
            <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Recording in.
              <br />
              <span className="text-muted-foreground">Demonstration out.</span>
            </h2>
          </div>
          <Button variant="outline" size="lg" className="px-4">
            <Play className="fill-current" />
            Watch the 2-min tour
          </Button>
        </div>

        <Tabs defaultValue="record" className="mt-10 gap-6">
          <TabsList className="h-9">
            {TABS.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="px-3">
                <tab.icon />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <Card className="overflow-hidden">
                <CardContent className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-primary text-2xl leading-snug font-light">
                      {tab.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {tab.body}
                    </p>
                    <Separator className="my-1" />
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CircleDot className="size-3.5 text-brand-ink" />
                      Runs on top of the tools your teams already use
                    </div>
                  </div>
                  <CodePane />
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

    </section>
  );
}

/** Typewriter code pane — types CODE out once in view. */
function CodePane() {
  const [shown, setShown] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStart(true),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (!start) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= CODE.length) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, [start]);

  const done = shown >= CODE.length;

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-3xl bg-muted/50 ring-1 ring-foreground/10"
    >
      <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
        <Terminal className="size-3.5 text-muted-foreground" />
        <span className="font-mono text-[11px] text-muted-foreground">demo.ts</span>
        <Badge
          variant={done ? "brand" : "secondary"}
          className="ml-auto h-5 gap-1 px-2 text-[10px]"
        >
          {done ? (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="size-1.5 rounded-full bg-brand"
            />
          ) : null}
          {done ? "Ready" : "Building…"}
        </Badge>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
        <code className="text-foreground/85">
          {CODE.slice(0, shown)}
          {!done ? (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-px inline-block h-3 w-1.5 translate-y-0.5 bg-brand"
            />
          ) : null}
        </code>
      </pre>
    </div>
  );
}
