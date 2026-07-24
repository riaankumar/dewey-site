import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Terms — Emulate",
  description: "The terms for using Emulate during the design-partner phase.",
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Terms of use."
      intro="Preliminary terms for the design-partner phase. Formal terms will replace these before general availability; pilots are also covered by a separate agreement."
    >
      <h2>Using Emulate</h2>
      <p>
        Access is currently invite-based. Use the product only for workflows you
        are authorized to record and share, and don&apos;t use it to capture data
        you don&apos;t have the right to process.
      </p>
      <h2>Guidance, not autonomy</h2>
      <p>
        Emulate guides recipients and gates consequential actions behind explicit
        confirmation. You remain responsible for the workflows you publish and the
        actions completed in your and your customers&apos; accounts.
      </p>
      <h2>Availability</h2>
      <p>
        This is early software. Features may change and availability isn&apos;t
        guaranteed during the pilot.
      </p>
      <p>
        Questions? <Link href="/contact">Contact us</Link>.
      </p>
      <p>
        <strong>Last updated:</strong> July 2026.
      </p>
    </PageShell>
  );
}
