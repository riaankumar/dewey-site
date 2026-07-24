import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Privacy — Emulate",
  description: "How Emulate handles your data during the design-partner phase.",
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy."
      intro="A plain-language summary of how we handle data while Emulate is in its design-partner phase. This is preliminary and will be replaced by a full policy before general availability."
    >
      <h2>What we collect</h2>
      <p>
        When you request access we collect the email and any details you submit
        (company, the workflow you want to bring). When you use Emulate, we
        process the recordings, transcripts, and workflow context you choose to
        capture, plus the approved sources you connect.
      </p>
      <h2>How we use it</h2>
      <p>
        To operate the product, contact you about your pilot, and improve how the
        assistant guides and answers. We do not sell your data.
      </p>
      <h2>Sensitive fields</h2>
      <p>
        Emulate is designed to block sensitive fields from capture and replay,
        and to keep an auditable history of guided actions and their sources.
      </p>
      <h2>Your choices</h2>
      <p>
        You can ask us to access or delete your data at any time. Email{" "}
        <a href="mailto:hello@useemulate.com">hello@useemulate.com</a> or reach
        out via the <Link href="/contact">contact page</Link>.
      </p>
      <p>
        <strong>Last updated:</strong> July 2026.
      </p>
    </PageShell>
  );
}
