import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "About — Emulate",
  description:
    "Emulate turns a screen recording into an executable workflow customers can follow, ask questions about, and complete.",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="An assistant you can send."
      intro="Emulate turns the walkthroughs your team repeats into executable screen recordings — an assistant that lives on your screen, travels to your customer's, and guides them through the real workflow until it's done."
    >
      <p>
        Every week, onboarding, implementation, and support teams re-record the
        same browser workflow and send it as a video. The recipient watches, gets
        stuck, and books another call. Emulate closes that loop: the recording
        keeps working after the play button — the viewer can ask it questions,
        follow a second cursor in their own account, and finish the task, with
        proof of what completed.
      </p>
      <h2>Built by people who&apos;ve shipped at scale</h2>
      <p>
        The team&apos;s backgrounds span Amazon, Berkeley, AppLovin, Meta, BAIR,
        E@B, and Databricks. We&apos;re a small group working closely with our
        first design partners.
      </p>
      <p>
        Want to put a workflow in front of us?{" "}
        <Link href="/#access">Request access</Link>.
      </p>
    </PageShell>
  );
}
