"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  LockKeyhole,
  Menu,
  MousePointer2,
  Play,
  ShieldCheck,
  Video,
  X,
} from "lucide-react";

import { Logo } from "@/components/site/logo";
import { CUSTOMER_DASHBOARD_URL } from "@/lib/customer-dashboard";

import styles from "./editorial-home.module.css";

const DEMO_EMAIL =
  "mailto:hello@useemulate.com?subject=Emulate%20design%20partner%20demo";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#process" },
  { label: "Run evidence", href: "#evidence" },
  { label: "Pricing", href: "#pricing" },
];

const processSteps = [
  {
    id: "01",
    label: "Record",
    icon: Video,
    title: "Record the task in its real browser.",
    body: "Start a capture and complete the task normally. Emulate identifies the clicks, fields, decisions, and screen changes that make up the workflow.",
    detail: "Actions converted into structured steps",
  },
  {
    id: "02",
    label: "Guide",
    icon: MousePointer2,
    title: "Turn the recording into live guidance.",
    body: "Users follow the workflow inside their own software. Emulate can answer questions from the recording, locate the next control, and guide the next action.",
    detail: "Guidance stays inside the live application",
  },
  {
    id: "03",
    label: "Verify",
    icon: ShieldCheck,
    title: "Check the result, not the view count.",
    body: "Each guided run records the steps taken and validates the final state. Your team gets completion evidence instead of a video view or self-reported checkbox.",
    detail: "A run record is attached to the finished workflow",
  },
];

const pricing = [
  {
    id: "01",
    name: "Starter",
    description: "For individuals and small teams",
    monthly: 15,
    annual: 12,
    features: [
      "5 interactive demos",
      "Recording-to-guide conversion",
      "Completion tracking",
      "Community support",
    ],
    cta: "Start a pilot",
  },
  {
    id: "02",
    name: "Growth",
    description: "For onboarding, support, and SaaS teams",
    monthly: 39,
    annual: 32,
    features: [
      "Unlimited demos",
      "Interactive execution steps",
      "Verified completion",
      "Analytics and drop-off insights",
      "App and CRM integrations",
      "Priority support",
    ],
    cta: "Talk to sales",
    featured: true,
  },
  {
    id: "03",
    name: "Enterprise",
    description: "For regulated and large organizations",
    monthly: null,
    annual: null,
    features: [
      "Everything in Growth",
      "Detailed run history",
      "Organization-wide workflow library",
      "Team rollout support",
      "Dedicated success manager",
      "Custom integrations",
    ],
    cta: "Contact sales",
  },
];

const evidenceCells = [
  { label: "SOURCE", detail: "Original recording", icon: Video },
  { label: "STEPS", detail: "Ordered actions", icon: MousePointer2 },
  { label: "RESULT", detail: "Completion check", icon: CheckCircle2 },
  { label: "RUN", detail: "What happened", icon: CircleDot },
];

export function EditorialHome() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [annual, setAnnual] = React.useState(true);

  React.useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  const active = processSteps[activeStep];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" aria-label="Emulate home" className={styles.logoLink}>
            <Logo />
          </a>

          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <a
              className={styles.signIn}
              href={CUSTOMER_DASHBOARD_URL}
              target="_blank"
              rel="noreferrer"
            >
              Sign in
            </a>
            <a className={styles.primaryButton} href="#demo-request">
              Request a demo
            </a>
            <button
              className={styles.menuButton}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ChevronRight aria-hidden />
              </a>
            ))}
            <a
              href={CUSTOMER_DASHBOARD_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <span>Customer sign in</span>
              <ChevronRight aria-hidden />
            </a>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrowRow} aria-label="Platform capabilities">
              <span>
                <LockKeyhole aria-hidden /> No employee API keys
              </span>
              <span>
                <ShieldCheck aria-hidden /> Action-level verification
              </span>
              <span>
                <CircleDot aria-hidden /> Guides live software
              </span>
            </div>

            <h1>
              Record the workflow.
              <br />
              Emulate guides <em>the rest.</em>
            </h1>

            <p>
              Record a workflow like a Loom. Emulate converts it into a live,
              askable guide that follows users inside their software and
              verifies the completed result.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#demo-request">
                Turn a recording into a guide <ArrowRight aria-hidden />
              </a>
              <a className={styles.textButton} href="#process">
                <Play aria-hidden /> Follow an Emulate run
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <p className={styles.panelLabel}>[ RECORD → GUIDE → VERIFY ]</p>
            <Image
              src="/images/emulate-workflow-editorial.png"
              alt="Emulate converts a recorded workflow into guided steps and a verified completion trail."
              width={1536}
              height={1024}
              priority
              loading="eager"
              sizes="(max-width: 900px) 100vw, 1400px"
            />
          </div>

          <div className={styles.statRail}>
            <div>
              <strong>73%</strong>
              <span>faster time to competency</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>completion verified</span>
            </div>
            <div>
              <strong>58%</strong>
              <span>fewer support tickets</span>
            </div>
            <div>
              <strong>4×</strong>
              <span>higher task completion</span>
            </div>
          </div>
        </section>

        <section id="product" className={styles.darkFeature}>
          <div className={styles.darkCopy}>
            <p className={styles.panelLabel}>[ BROWSER-NATIVE COMPUTER USE ]</p>
            <h2>
              Emulate drives the software.
              <br />
              Your team keeps the context.
            </h2>
            <a className={styles.lightButton} href="#process">
              See the execution model <ArrowRight aria-hidden />
            </a>

            <ul>
              <li>
                <strong>Works from screen state, not API coverage.</strong>{" "}
                Emulate can locate controls and guide actions in the same
                interfaces your team already uses.
              </li>
              <li>
                <strong>The recording carries the intent.</strong> Each step
                keeps the original context, expected value, and reason for the
                action attached.
              </li>
              <li>
                <strong>Every run returns evidence.</strong> Emulate records
                what it found, what happened, and whether the workflow reached
                the expected result.
              </li>
            </ul>
          </div>

          <div className={styles.darkVisual}>
            <p className={styles.panelLabel}>[ LIVE APP + EMULATE EXECUTION ]</p>
            <Image
              src="/images/emulate-dark-automation.png"
              alt="A dark enterprise application interface with Emulate locating, acting on, and verifying a workflow step."
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </section>

        <section id="process" className={styles.process}>
          <div className={styles.processHeading}>
            <p className={styles.panelLabel}>[ HOW A RECORDING BECOMES A RUN ]</p>
            <h2>From screen capture to guided completion.</h2>
            <p>
              No timeline editing, hotspot rebuilding, or separate help center
              article.
            </p>
          </div>

          <div className={styles.processBody}>
            <div className={styles.processTabs} role="tablist" aria-label="How Emulate works">
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={activeStep === index}
                  aria-controls={`process-panel-${step.id}`}
                  className={activeStep === index ? styles.activeTab : undefined}
                  onClick={() => setActiveStep(index)}
                >
                  <span>{step.id}</span>
                  <step.icon aria-hidden />
                  <strong>{step.label}</strong>
                  <ChevronRight aria-hidden />
                </button>
              ))}
            </div>

            <div
              className={styles.processPanel}
              role="tabpanel"
              id={`process-panel-${active.id}`}
            >
              <div className={styles.processPanelCopy}>
                <span className={styles.monoAccent}>
                  {active.label.toUpperCase()} / {active.id}
                </span>
                <h3>{active.title}</h3>
                <p>{active.body}</p>
                <div>
                  <CheckCircle2 aria-hidden />
                  {active.detail}
                </div>
              </div>

              <div className={styles.processProof} aria-label="Emulate completion record">
                <div className={styles.proofChrome}>
                  <span />
                  <span />
                  <span />
                  <small>EMULATE RUN / Q3 SALES ONBOARDING</small>
                </div>
                <div className={styles.proofBody}>
                  <p>WORKFLOW STATUS</p>
                  <strong>{active.label} in progress</strong>
                  {processSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={index <= activeStep ? styles.proofDone : undefined}
                    >
                      <span>{step.id}</span>
                      <p>{step.title}</p>
                      {index <= activeStep ? (
                        <Check aria-label="Complete" />
                      ) : (
                        <span aria-hidden>—</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.editorialFeature}>
          <div className={styles.editorialCopy}>
            <span className={styles.monoAccent}>
              EMBED WHERE USERS NEED THE NEXT STEP
            </span>
            <h2>
              Put an Emulate guide inside the product, message, or ticket that
              started the work.
            </h2>
            <p>
              Publish the same recorded workflow to your product, a landing
              page, Slack, an LMS, or a support reply. Users can ask the guide a
              question and continue without rebuilding the process for every
              channel.
            </p>
          </div>

          <div className={styles.peachPanel}>
            <Image
              src="/images/emulate-workflow-editorial.png"
              alt="An Emulate guided workflow with contextual steps and completion data."
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className={styles.guideCaption}>
              <span>
                <MousePointer2 aria-hidden />
              </span>
              <p>
                <strong>Emulate found the customer record</strong>
                Next, it checks the live value against the recorded workflow.
              </p>
            </div>
          </div>
        </section>

        <section id="evidence" className={styles.security}>
          <div className={styles.securityIntro}>
            <p className={styles.panelLabel}>[ WHAT EMULATE RECORDS ]</p>
            <h2>Every Emulate run explains itself.</h2>
            <p>
              Emulate stores the ordered steps, screen state, user or agent
              action, completion check, and outcome together. Product and
              operations teams can review the actual run instead of trusting a
              view count.
            </p>
          </div>

          <div className={styles.certGrid}>
            {evidenceCells.map((cell) => (
              <div key={cell.label} className={styles.certCell}>
                <span>[{cell.label}]</span>
                <cell.icon aria-hidden />
                <strong>{cell.label}</strong>
                <p>{cell.detail}</p>
              </div>
            ))}

            <div className={styles.slaCell}>
              <p>[ EMULATE RUN MODEL ]</p>
              <strong>1:1</strong>
              <span>RUN → EVIDENCE TRAIL</span>
              <small>
                The instructions, actions, completion checks, and outcome for a
                workflow stay attached to the same run record.
              </small>
            </div>

            <div className={styles.proofCell}>
              <p>[ VERIFIED COMPLETION ]</p>
              <CheckCircle2 aria-hidden />
              <strong>A completion record for every guided workflow.</strong>
              <span>
                See where the user started, which steps ran, what Emulate
                checked, and whether the expected outcome was reached.
              </span>
            </div>
          </div>
        </section>

        <section id="pricing" className={styles.pricingSection}>
          <div className={styles.pricingHeader}>
            <div>
              <p className={styles.panelLabel}>
                [ PLANS FOR EXECUTABLE GUIDES ]
              </p>
              <h2>Choose how your team publishes and verifies Emulate runs.</h2>
            </div>

            <div className={styles.billingToggle} aria-label="Billing period">
              <button
                type="button"
                className={!annual ? styles.billingActive : undefined}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
              <button
                type="button"
                className={annual ? styles.billingActive : undefined}
                onClick={() => setAnnual(true)}
              >
                Annual <span>save 17%</span>
              </button>
            </div>
          </div>

          <div className={styles.pricingGrid}>
            {pricing.map((tier) => (
              <article
                key={tier.id}
                className={tier.featured ? styles.featuredTier : undefined}
              >
                <div className={styles.tierHeader}>
                  <span>[ {tier.id} ]</span>
                  {tier.featured ? <small>RECOMMENDED</small> : null}
                </div>
                <h3>{tier.name}</h3>
                <p>{tier.description}</p>
                <div className={styles.price}>
                  {tier.monthly === null ? (
                    <strong>Custom</strong>
                  ) : (
                    <>
                      <strong>${annual ? tier.annual : tier.monthly}</strong>
                      <span>/ month</span>
                    </>
                  )}
                </div>
                <ul>
                  {tier.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={DEMO_EMAIL}>
                  {tier.cta} <ArrowRight aria-hidden />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="demo-request" className={styles.cta}>
          <p className={styles.panelLabel}>
            [ TURN YOUR PROCESS INTO AN EMULATE RUN ]
          </p>
          <h2>
            Send us one workflow.
            <br />
            We&apos;ll return an executable guide.
          </h2>
          <p>
            Record the process in your browser. Emulate will structure the
            steps, create the in-app guidance, and attach verification to the
            completed run.
          </p>
          <div>
            <a className={styles.lightButton} href={DEMO_EMAIL}>
              Request a demo <ArrowRight aria-hidden />
            </a>
            <span>
              <ShieldCheck aria-hidden />
              Org AI included. No employee API keys.
            </span>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Logo showTm={false} />
          <p>
            Interactive demonstrations that guide, execute, and verify —
            replacing passive video with proof.
          </p>
        </div>

        <div className={styles.footerLinks}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={CUSTOMER_DASHBOARD_URL} target="_blank" rel="noreferrer">
            Customer login
          </a>
        </div>

        <div className={styles.footerMeta}>
          <span>© {new Date().getFullYear()} Emulate</span>
          <span>
            <i aria-hidden /> All systems operational
          </span>
        </div>
      </footer>
    </div>
  );
}
