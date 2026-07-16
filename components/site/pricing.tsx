"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    id: "01",
    name: "Starter",
    description: "For small teams getting started",
    monthly: 0,
    annual: 0,
    cta: "Book a demo",
    variant: "outline" as const,
    features: [
      "Up to 5 interactive demos",
      "Screen recording to demo",
      "Guided walkthroughs",
      "Basic completion tracking",
      "Community support",
    ],
  },
  {
    id: "02",
    name: "Growth",
    description: "For onboarding, support & SaaS teams",
    monthly: 39,
    annual: 32,
    cta: "Talk to sales",
    variant: "accent" as const,
    popular: true,
    features: [
      "Unlimited demos",
      "Interactive execution steps",
      "Verified completion",
      "Analytics & drop-off insights",
      "App & CRM integrations",
      "Embeddable SDK",
      "Priority support",
    ],
  },
  {
    id: "03",
    name: "Enterprise",
    description: "For regulated & large organizations",
    monthly: null,
    annual: null,
    cta: "Contact sales",
    variant: "outline" as const,
    features: [
      "Everything in Growth",
      "Compliance-grade audit trail",
      "SSO & SCIM provisioning",
      "SOC 2, HIPAA & GDPR",
      "Dedicated success manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = React.useState(false);

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="brand" className="h-6 px-2.5">
            Pricing
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Simple, transparent{" "}
            <span className="text-muted-foreground">pricing</span>
          </h2>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Sold to organizations — book a pilot and we provision your org,
            seats, and Mac builds. No public self-serve download.
          </p>

          {/* Billing toggle */}
          <div className="mt-2 flex items-center gap-3">
            <Label
              htmlFor="billing"
              className={cn(
                "text-sm transition-colors",
                !annual ? "text-foreground" : "text-muted-foreground"
              )}
            >
              Monthly
            </Label>
            <Switch
              id="billing"
              checked={annual}
              onCheckedChange={setAnnual}
              className="data-checked:bg-brand"
            />
            <Label
              htmlFor="billing"
              className={cn(
                "text-sm transition-colors",
                annual ? "text-foreground" : "text-muted-foreground"
              )}
            >
              Annual
            </Label>
            <Badge variant="brand" className="h-5 px-2 text-[10px]">
              Save 17%
            </Badge>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-4 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <Card
                className={cn(
                  "relative h-full",
                  tier.popular && "ring-2 ring-brand lg:-mt-3 lg:pb-3"
                )}
              >
                {tier.popular ? (
                  <Badge
                    variant="accent"
                    className="absolute top-4 right-4 h-5 px-2 text-[10px]"
                  >
                    Most popular
                  </Badge>
                ) : null}

                <CardHeader className="gap-2">
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {tier.id}
                  </span>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-5">
                  <div className="flex items-baseline gap-1">
                    {tier.monthly === null ? (
                      <span className="font-primary text-4xl leading-none font-light">
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="font-primary text-4xl leading-none font-light">
                          ${annual ? tier.annual : tier.monthly}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          /month
                        </span>
                      </>
                    )}
                  </div>

                  <Separator />

                  <ul className="flex flex-col gap-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-brand-ink" />
                        <span className="text-sm leading-snug text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto bg-transparent pt-4">
                  <Button
                    variant={tier.variant}
                    size="lg"
                    className="w-full px-4"
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          All plans include unlimited viewers, completion tracking, and
          encryption in transit.{" "}
          <a href="#cta" className="text-brand-ink underline-offset-4 hover:underline">
            Org pilot details
          </a>
        </p>
      </div>
    </section>
  );
}
