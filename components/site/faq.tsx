"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Is Emulate a screen recorder?",
    a: "It begins like one. Emulate also captures the workflow behind the recording so the recipient can follow it in their own browser and complete the task.",
  },
  {
    q: "Does Emulate click for the viewer?",
    a: "Emulate guides by default. The viewer sees the proposed step, controls the session, and confirms consequential actions.",
  },
  {
    q: "Can I ask the recording questions?",
    a: "Yes. The recording assistant answers from the recording, transcript, workflow, and approved knowledge. Unsupported questions are escalated instead of invented.",
  },
  {
    q: "Does it work when the recipient's screen is different?",
    a: "Emulate matches page elements semantically rather than replaying fixed coordinates. Early pilots use supported browser workflows and include recovery when the interface has materially changed.",
  },
  {
    q: "Does the recipient need access to my account?",
    a: "No. The recipient performs the workflow in their own authenticated browser and controls their own data and permissions.",
  },
  {
    q: "What can I measure?",
    a: "Starts, completion, time to complete, step-level drop-off, questions asked, viewer takeover, and human handoffs.",
  },
  {
    q: "Who is Emulate for first?",
    a: "B2B software onboarding, implementation, and support teams that repeatedly send recordings for multi-step browser workflows.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
        <div className="flex flex-col gap-4">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            FAQ
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Questions,
            <br />
            <span className="text-muted-foreground">answered.</span>
          </h2>
        </div>

        <Accordion className="w-full">
          {FAQS.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="py-4 text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
