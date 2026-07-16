import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { DemoSection } from "@/components/site/demo-section";
import { Features } from "@/components/site/features";
import { LaptopDemo } from "@/components/site/laptop-demo";
import { Process } from "@/components/site/process";
import { IntegrationsCloud } from "@/components/site/integrations-cloud";
import { Pricing } from "@/components/site/pricing";
import { CTA } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LaptopDemo />
        <DemoSection />
        <Features />
        <Process />
        <IntegrationsCloud />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
