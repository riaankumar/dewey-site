import type { Metadata } from "next";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Safety } from "@/components/site/safety";

export const metadata: Metadata = {
  title: "Security — Emulate",
  description:
    "How Emulate keeps guidance visible and consequential actions gated: the trust commitments behind the product.",
};

export default function SecurityPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-28">
        <Safety />
        <p className="mx-auto -mt-8 w-full max-w-7xl px-4 pb-20 text-xs text-muted-foreground sm:px-6 lg:px-8">
          These are commitments, not certifications. We&apos;ll publish formal
          compliance status (SOC 2, GDPR, and others) once those controls are
          implemented and independently verified.
        </p>
      </main>
      <Footer />
    </div>
  );
}
