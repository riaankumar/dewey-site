"use client";

import type { ComponentType, SVGProps } from "react";
import { FileText, Globe, LifeBuoy, Send, Users } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import {
  IntercomIcon,
  NotionIcon,
  SalesforceIcon,
  SlackIcon,
  ZendeskIcon,
} from "@/components/site/brand-icons";

type Tool = {
  name: string;
  /** Brand mark where one is freely licensed; null → the name carries it. */
  icon: ComponentType<SVGProps<SVGSVGElement>> | null;
};

type Group = {
  label: string;
  icon: ComponentType<{ className?: string }>;
  tools: Tool[];
};

/**
 * The ecosystem grouped by the job it does in a customer workflow, not a wall
 * of logos. Everything here is on the design-partner roadmap — the honesty
 * badge says so — so no logo implies a shipped partnership.
 */
const GROUPS: Group[] = [
  {
    label: "Capture & guide",
    icon: Globe,
    tools: [
      { name: "Browser extension", icon: null },
      { name: "Guided browser session", icon: null },
    ],
  },
  {
    label: "Share & alert",
    icon: Send,
    tools: [{ name: "Slack", icon: SlackIcon }],
  },
  {
    label: "Support handoff",
    icon: LifeBuoy,
    tools: [
      { name: "Zendesk", icon: ZendeskIcon },
      { name: "Intercom", icon: IntercomIcon },
    ],
  },
  {
    label: "Customer context",
    icon: Users,
    tools: [
      { name: "HubSpot", icon: null },
      { name: "Salesforce", icon: SalesforceIcon },
    ],
  },
  {
    label: "Knowledge sources",
    icon: FileText,
    tools: [
      { name: "Notion", icon: NotionIcon },
      { name: "Google Drive", icon: null },
      { name: "Help centers", icon: null },
    ],
  },
];

export function IntegrationsCloud() {
  return (
    <section id="integrations" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            Integrations
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Built for the tools
            <br />
            <span className="text-muted-foreground">behind customer work.</span>
          </h2>
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Emulate fits around the stack your onboarding and support teams
            already use — no rip-and-replace, no plugins to maintain.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-3 rounded-3xl bg-muted/40 p-5 ring-1 ring-foreground/10"
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                <group.icon className="size-4 text-brand-ink" />
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-1.5 rounded-2xl bg-card px-2.5 py-1.5 text-xs shadow-sm ring-1 ring-foreground/5 [&_svg]:size-3.5 [&_svg]:text-foreground/70"
                  >
                    {tool.icon ? <tool.icon /> : null}
                    {tool.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Logos and connectors shown are the design-partner roadmap. We stand up
          each integration with the first partners who need it.
        </p>
      </div>
    </section>
  );
}
