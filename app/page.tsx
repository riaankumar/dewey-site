import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  MousePointer2,
  Play,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ProductReplay } from "@/components/site/product-replay";
import { CUSTOMER_DASHBOARD_URL } from "@/lib/customer-dashboard";
import "./emulate.css";

const receivingModes = [
  {
    icon: Play,
    title: "Watch",
    copy: "See the original screen, narration, and reasoning exactly as the sender demonstrated it.",
    status: "Smart playback",
  },
  {
    icon: MousePointer2,
    title: "Guide me",
    copy: "A second cursor points through the workflow in the recipient’s real application and context.",
    status: "Live guidance",
  },
  {
    icon: MessageCircle,
    title: "Ask",
    copy: "Question the demonstration in your own words and get an answer grounded in what the sender showed.",
    status: "Conversational",
  },
];

const workflow = [
  {
    number: "01",
    title: "Demonstrate the work",
    copy: "Use the product normally and explain the decisions that matter. Emulate captures the screen, voice, clicks, and context.",
  },
  {
    number: "02",
    title: "Send the assistant",
    copy: "Share one link. The assistant knows who taught the workflow, who is receiving it, and what outcome they need to reach.",
  },
  {
    number: "03",
    title: "Learn inside the task",
    copy: "The recipient watches, asks, or follows the second cursor without translating a stale recording into the screen in front of them.",
  },
];

const useCases = [
  ["Employee onboarding", "Give every new hire a patient guide to the tools and processes their team actually uses."],
  ["Customer onboarding", "Turn setup calls into assistants customers can revisit while they configure their own account."],
  ["Product demos", "Let buyers explore a seller’s demonstration and ask the questions that come up after the call."],
  ["Support", "Send a fix that can explain itself and point through the resolution on the customer’s screen."],
  ["Implementation", "Preserve the reasoning behind configuration, migration, and handoff workflows."],
  ["Team enablement", "Make a senior teammate’s demonstrated judgment available when the next person needs it."],
];

export default function Home() {
  return (
    <main className="emulate-site">
      <header className="site-header">
        <div className="site-container nav-inner">
          <a className="wordmark" href="#top" aria-label="Emulate home">
            <span className="wordmark-symbol" aria-hidden="true">
              <MousePointer2 className="cursor-back" />
              <MousePointer2 className="cursor-front" />
            </span>
            Emulate
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#product">Product</a>
            <a href="#how-it-works">How it works</a>
            <a href="#use-cases">Use cases</a>
            <a href="#trust">Trust</a>
          </nav>

          <div className="nav-actions">
            <a className="nav-sign-in" href={CUSTOMER_DASHBOARD_URL}>Sign in</a>
            <a className="button button-small" href="#design-partner">Get early access</a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <p className="category">A teammate’s knowledge, sent as an assistant</p>
            <h1>Handoff the work.<br />Not another video.</h1>
            <p className="hero-description">
              Record a workflow once. Emulate turns how you did it—and why—into
              an assistant your teammate can watch, question, and follow inside
              the real application.
            </p>
            <div className="hero-actions">
              <a className="button" href="#design-partner">
                Join the private beta
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="text-link" href="#product">
                <Play aria-hidden="true" />
                See the handoff
              </a>
            </div>
            <p className="hero-note">Built for the workflows your team explains more than once.</p>
          </div>

          <div className="hero-proof" aria-label="Product summary">
            <div><span>Sender</span><strong>Avi demonstrates</strong></div>
            <ChevronRight aria-hidden="true" />
            <div><span>Emulate</span><strong>Captures how and why</strong></div>
            <ChevronRight aria-hidden="true" />
            <div><span>Recipient</span><strong>Maya learns by doing</strong></div>
          </div>
        </div>

        <div className="site-container" id="product">
          <ProductReplay />
        </div>
      </section>

      <section className="modes-section">
        <div className="site-container">
          <div className="section-heading split-heading">
            <h2>One demonstration.<br />Three ways to receive it.</h2>
            <p>
              A link adapts to what the recipient needs in the moment instead of
              forcing every handoff into a passive recording.
            </p>
          </div>
          <div className="mode-grid">
            {receivingModes.map((mode) => (
              <article className="mode-card" key={mode.title}>
                <div className="mode-title">
                  <mode.icon aria-hidden="true" />
                  <h3>{mode.title}</h3>
                </div>
                <p>{mode.copy}</p>
                <span>{mode.status}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section" id="how-it-works">
        <div className="site-container workflow-grid">
          <div className="section-heading workflow-intro">
            <h2>The explanation stays with the work.</h2>
            <p>
              The creator records naturally. The recipient gets help where the
              task happens. Emulate keeps the human source visible throughout.
            </p>
          </div>
          <div className="workflow-list">
            {workflow.map((step) => (
              <article className="workflow-row" key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="difference-section">
        <div className="site-container difference-grid">
          <div>
            <h2>The teammate stays in the handoff.</h2>
            <p>
              Screen recorders preserve what someone said. Documentation tools
              preserve the steps. Emulate preserves the relationship between
              the person who knows, the person learning, and the task they need
              to finish.
            </p>
          </div>
          <div className="difference-list">
            <div><span>Video</span><strong>“Watch what I did.”</strong></div>
            <div><span>Guide</span><strong>“Follow these steps.”</strong></div>
            <div className="difference-emulate">
              <span>Emulate</span><strong>“I’m here. Ask me, then do it with me.”</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases-section" id="use-cases">
        <div className="site-container">
          <div className="section-heading split-heading">
            <h2>Any workflow worth teaching is worth capturing.</h2>
            <p>
              Start with one high-frequency handoff. Expand wherever a person’s
              explanation and judgment matter.
            </p>
          </div>
          <div className="use-case-list">
            {useCases.map(([title, copy], index) => (
              <article className="use-case" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-layer-section">
        <div className="site-container team-layer-grid">
          <div>
            <Sparkles aria-hidden="true" />
            <h2>From one handoff to shared team knowledge.</h2>
          </div>
          <div>
            <p>
              The first Emulate is a reliable handoff from one person to
              another. Over time, permissioned demonstrations can form a shared
              knowledge layer: helping teammates understand what to do, why it
              matters, and how their work connects.
            </p>
            <ul>
              <li><Check aria-hidden="true" />Answers stay grounded in demonstrated work.</li>
              <li><Check aria-hidden="true" />The human source and recipient remain explicit.</li>
              <li><Check aria-hidden="true" />Teams control what knowledge is shared.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="trust-section" id="trust">
        <div className="site-container trust-grid">
          <div>
            <ShieldCheck aria-hidden="true" />
            <h2>Visible guidance.<br />Human control.</h2>
          </div>
          <div className="trust-copy">
            <p>
              Emulate is designed to make assistance legible. The recipient
              knows whose workflow they are following, what the assistant is
              suggesting, and when they are in control.
            </p>
            <div className="trust-points">
              <span>Source attribution</span>
              <span>Recipient context</span>
              <span>Pause and take over</span>
              <span>Permissioned sharing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="design-partner-section" id="design-partner">
        <div className="site-container partner-grid">
          <div>
            <h2>Bring us the workflow your team keeps explaining.</h2>
            <p>
              We’re inviting early teams to turn one real onboarding, support,
              implementation, demo, or internal process into an Emulate.
            </p>
          </div>
          <div className="partner-action">
            <a
              className="button button-light"
              href="mailto:hello@useemulate.com?subject=Emulate%20private%20beta"
            >
              Join the private beta
              <ArrowRight aria-hidden="true" />
            </a>
            <span>One workflow. One sender. One recipient. A real outcome.</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="site-container footer-inner">
          <a className="wordmark" href="#top">
            <span className="wordmark-symbol" aria-hidden="true">
              <MousePointer2 className="cursor-back" />
              <MousePointer2 className="cursor-front" />
            </span>
            Emulate
          </a>
          <p>Handoff the work. Not another video.</p>
          <div className="footer-links">
            <a href="#product">Product</a>
            <a href="#use-cases">Use cases</a>
            <a href="#trust">Trust</a>
            <a href="mailto:hello@useemulate.com">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
