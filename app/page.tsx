import { Navbar } from "@/components/site/navbar";
import { HeroBanner } from "@/components/site/hero-banner";
import { OutcomeStrip } from "@/components/site/outcome-strip";
import { LaptopDemo } from "@/components/site/laptop-demo";
import { RecordingAssistant } from "@/components/site/recording-assistant";
import { Process } from "@/components/site/process";
import { UseCases } from "@/components/site/use-cases";
import { OutcomeAnalytics } from "@/components/site/outcome-analytics";
import { IntegrationsCloud } from "@/components/site/integrations-cloud";
import { Safety } from "@/components/site/safety";
import { Comparison } from "@/components/site/comparison";
import { DesignPartner } from "@/components/site/design-partner";
import { Waitlist } from "@/components/site/waitlist";
import { FAQ } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <OutcomeStrip />
        <LaptopDemo />
        <RecordingAssistant />
        <Process />
        <UseCases />
        <OutcomeAnalytics />
        <IntegrationsCloud />
        <Safety />
        <Comparison />
        <DesignPartner />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
