"use client";

import { LifeBuoy, Rocket, Wrench } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * The onboarding-and-support wedge, kept to three. Sales engineering,
 * education, and internal training are deliberately left out here so the
 * initial positioning stays sharp — they belong on dedicated pages later.
 */
const CASES = [
  {
    icon: Rocket,
    tag: "Customer onboarding",
    body: "Help every new account connect integrations, configure a workspace, import data, and reach the first useful outcome without another scheduling loop.",
  },
  {
    icon: LifeBuoy,
    tag: "Support",
    body: "Turn a repeated troubleshooting recording into a guided fix customers can follow in the product they already have open.",
  },
  {
    icon: Wrench,
    tag: "Implementation",
    body: "Capture an expert configuration once, preserve the reasoning behind it, and hand it to every stakeholder with visible controls.",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            Use cases
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            For the recordings your
            <br />
            <span className="text-muted-foreground">team sends every week.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {CASES.map((item, i) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full bg-card/70 backdrop-blur">
                <CardHeader className="gap-3">
                  <span className="grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-from via-brand-via to-brand-to text-brand-foreground">
                    <item.icon className="size-5" />
                  </span>
                  <CardTitle className="text-xl">{item.tag}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
