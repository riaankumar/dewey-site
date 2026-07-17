"use client";

import type { ComponentType, SVGProps } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  ChromeIcon,
  IntercomIcon,
  Microsoft365Icon,
  NotionIcon,
  OktaIcon,
  SalesforceIcon,
  SapIcon,
  SlackIcon,
  ZendeskIcon,
  ZoomIcon,
} from "@/components/site/brand-icons";

type Chip = {
  name: string;
  /** null = no freely licensed mark (ServiceNow, Workday) → monogram chip. */
  icon: ComponentType<SVGProps<SVGSVGElement>> | null;
  top: string;
  left: string;
  size: keyof typeof SIZES;
};

const SIZES = {
  sm: "size-14 [&_svg]:size-6",
  md: "size-16 [&_svg]:size-7",
  lg: "size-20 [&_svg]:size-9",
} as const;

/**
 * Two side clusters with the centre left clear for the copy, echoing the
 * "plays nice with your stack" logo-field layout.
 */
const CHIPS: Chip[] = [
  { name: "Salesforce", icon: SalesforceIcon, top: "12%", left: "7%", size: "lg" },
  { name: "Zendesk", icon: ZendeskIcon, top: "8%", left: "22%", size: "md" },
  { name: "Slack", icon: SlackIcon, top: "40%", left: "4%", size: "lg" },
  { name: "SAP", icon: SapIcon, top: "44%", left: "18%", size: "md" },
  { name: "Notion", icon: NotionIcon, top: "80%", left: "9%", size: "md" },
  { name: "Chrome", icon: ChromeIcon, top: "84%", left: "23%", size: "sm" },
  { name: "Zoom", icon: ZoomIcon, top: "8%", left: "73%", size: "md" },
  { name: "Microsoft 365", icon: Microsoft365Icon, top: "13%", left: "87%", size: "lg" },
  { name: "Intercom", icon: IntercomIcon, top: "42%", left: "77%", size: "lg" },
  { name: "Okta", icon: OktaIcon, top: "46%", left: "91%", size: "md" },
  { name: "Workday", icon: null, top: "82%", left: "72%", size: "sm" },
  { name: "ServiceNow", icon: null, top: "78%", left: "86%", size: "md" },
];

function ChipFace({ chip }: { chip: Chip }) {
  const Icon = chip.icon;
  return Icon ? (
    <Icon />
  ) : (
    <span className="text-xs font-bold tracking-tight text-muted-foreground">
      {chip.name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export function IntegrationsCloud() {
  return (
    <section id="integrations" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-muted/40 ring-1 ring-foreground/10">
          {/* Floating logo field — desktop only; mobile gets the wrap row below. */}
          <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
            {CHIPS.map((chip, i) => (
              <motion.div
                key={chip.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: chip.top, left: chip.left }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                {/* Outer handles entrance; inner floats forever. */}
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{
                    duration: 5 + (i % 4) * 1.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (i % 5) * 0.7,
                  }}
                  className={`grid place-items-center rounded-full bg-card shadow-sm ring-1 ring-foreground/5 ${SIZES[chip.size]}`}
                >
                  <ChipFace chip={chip} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Centre copy */}
          <div className="relative z-10 mx-auto flex min-h-[26rem] max-w-xl flex-col items-center justify-center gap-5 px-4 py-16 text-center md:min-h-[34rem]">
            <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Plays nice with
              <br />
              <span className="text-muted-foreground">your stack.</span>
            </h2>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              Emulate drives the tools your teams already use — no rip-and-replace,
              no plugins to maintain.
            </p>
            <Button size="lg" className="group px-5">
              See full list
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Button>

            {/* Mobile fallback: wrapped chip row instead of the floating field. */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:hidden">
              {CHIPS.map((chip) => (
                <span
                  key={chip.name}
                  className="grid size-12 place-items-center rounded-full bg-card shadow-sm ring-1 ring-foreground/5 [&_svg]:size-5"
                >
                  <ChipFace chip={chip} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
