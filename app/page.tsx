import { Navbar } from "@/components/site/navbar";
import { HeroBanner } from "@/components/site/hero-banner";
import { OutcomeStrip } from "@/components/site/outcome-strip";
import { LaptopDemo } from "@/components/site/laptop-demo";
import { RecordingAssistant } from "@/components/site/recording-assistant";
import { Process } from "@/components/site/process";
import { Waitlist } from "@/components/site/waitlist";
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
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
