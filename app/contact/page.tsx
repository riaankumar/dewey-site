import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Contact — Emulate",
  description: "Get in touch with the Emulate team.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Talk to the team."
      intro="We're a small team and we read everything."
    >
      <p>
        The fastest way to reach us is to{" "}
        <Link href="/#access">request access</Link> — tell us the workflow you
        repeat most, and we&apos;ll follow up to set up your first executable
        recording.
      </p>
      <p>
        Prefer email? Reach us at{" "}
        <a href="mailto:hello@useemulate.com">hello@useemulate.com</a>.
      </p>
    </PageShell>
  );
}
