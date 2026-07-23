"use client";

import { useState } from "react";
import {
  Check,
  ChevronLeft,
  Database,
  MessageCircle,
  MousePointer2,
  Pause,
  Play,
  Send,
  Settings,
} from "lucide-react";

const steps = [
  { title: "Open integrations", detail: "Go to workspace settings" },
  { title: "Choose HubSpot", detail: "Select the team CRM" },
  { title: "Review access", detail: "Confirm before connecting" },
];

type Mode = "watch" | "guide" | "ask";

export function ProductReplay() {
  const [mode, setMode] = useState<Mode>("guide");
  const [step, setStep] = useState(1);
  const [paused, setPaused] = useState(false);

  const nextStep = () => {
    setPaused(false);
    setStep((current) => (current + 1) % steps.length);
  };

  return (
    <div className="replay-shell">
      <div className="replay-topbar">
        <div className="window-controls" aria-hidden="true"><i /><i /><i /></div>
        <div className="replay-title">
          <span className="avatar avatar-creator">A</span>
          <div>
            <strong>Avi sent you an Emulate</strong>
            <span>Connect HubSpot to the team workspace · 3 min</span>
          </div>
        </div>
        <button
          className="icon-button"
          aria-label={paused ? "Resume assistant" : "Pause assistant"}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play /> : <Pause />}
        </button>
      </div>

      <div className="replay-modebar" role="tablist" aria-label="Choose how to use this Emulate">
        <button className={mode === "watch" ? "active" : ""} onClick={() => setMode("watch")}>
          <Play /> Watch
        </button>
        <button className={mode === "guide" ? "active" : ""} onClick={() => setMode("guide")}>
          <MousePointer2 /> Guide me
        </button>
        <button className={mode === "ask" ? "active" : ""} onClick={() => setMode("ask")}>
          <MessageCircle /> Ask Avi&apos;s assistant
        </button>
      </div>

      <div className="replay-body">
        <aside className="replay-sidebar">
          <div className="replay-back"><ChevronLeft /> Team handoffs</div>
          <p>Connect HubSpot</p>
          <ol>
            {steps.map((item, index) => (
              <li className={index === step ? "active" : index < step ? "done" : ""} key={item.title}>
                <span>{index < step ? <Check /> : index + 1}</span>
                <button onClick={() => setStep(index)}>
                  <strong>{item.title}</strong>
                  <small>{item.detail}</small>
                </button>
              </li>
            ))}
          </ol>
          <div className="replay-source">
            <span className="avatar avatar-creator">A</span>
            <div>
              <strong>Grounded in Avi&apos;s demo</strong>
              <small>Recorded today · Product team</small>
            </div>
          </div>
        </aside>

        <div className="replay-app">
          <div className="app-rail" aria-hidden="true">
            <div className="mini-logo">N</div>
            <Database />
            <Settings className="selected" />
          </div>
          <div className="app-content">
            <div className="app-heading">
              <div><span>Workspace</span><h3>Integrations</h3></div>
              <span className="workspace-name">Northstar Inc.</span>
            </div>
            <div className="integration-list">
              <button className={step === 1 ? "integration active-target" : "integration"} onClick={nextStep}>
                <span className="integration-mark hubspot">H</span>
                <span><strong>HubSpot</strong><small>Sync contacts and company activity</small></span>
                <span className="connect-button">Connect</span>
              </button>
              <button className="integration">
                <span className="integration-mark salesforce">S</span>
                <span><strong>Salesforce</strong><small>Sync accounts and opportunities</small></span>
                <span className="connect-button">Connect</span>
              </button>
              <button className="integration">
                <span className="integration-mark slack">#</span>
                <span><strong>Slack</strong><small>Send workspace notifications</small></span>
                <span className="connect-button">Connect</span>
              </button>
            </div>

            {!paused && mode === "guide" && (
              <div className={`ghost-cursor ghost-step-${step}`} aria-hidden="true">
                <MousePointer2 />
                <span>Avi&apos;s cursor</span>
              </div>
            )}

            {mode === "watch" && (
              <div className="watch-card">
                <div className="watch-screen"><Play aria-hidden="true" /></div>
                <div><strong>Watch Avi explain this step</strong><span>00:42 / 02:51</span></div>
              </div>
            )}

            {mode === "guide" && (
              <div className="guide-message">
                <div className="guide-message-top">
                  <span className="avatar avatar-creator">A</span>
                  <strong>{step === 0 ? "Start in workspace settings" : step === 1 ? "Choose HubSpot" : "Review before connecting"}</strong>
                  <span>{step + 1} of 3</span>
                </div>
                <p>
                  {step === 0
                    ? "Open Integrations to see the tools available for this workspace."
                    : step === 1
                      ? "Select HubSpot first. Avi uses it as the source of truth before any historical data is imported."
                      : "Check the requested permissions, then confirm when you’re ready."}
                </p>
                <div className="guide-actions">
                  <button onClick={() => setPaused(true)}>Take control</button>
                  <button className="guide-next" onClick={nextStep}>Next step</button>
                </div>
              </div>
            )}

            {mode === "ask" && (
              <div className="chat-card">
                <div className="chat-message chat-user">
                  Why do we connect HubSpot before importing the old data?
                </div>
                <div className="chat-message chat-assistant">
                  <div><span className="avatar avatar-creator">A</span><strong>Avi&apos;s assistant</strong></div>
                  <p>
                    Avi connected the team CRM first so imported contacts can be
                    matched to the right accounts and owners. If you import first,
                    the workspace may create duplicates.
                  </p>
                  <small>Grounded in this demonstration</small>
                </div>
                <button className="chat-input" onClick={() => setMode("guide")}>
                  Ask about this workflow <Send />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="replay-status">
        <span><i /> {mode === "watch" ? "Smart playback" : mode === "guide" ? "Guided in your app" : "Assistant grounded in Avi’s demo"}</span>
        <span>You control every click</span>
      </div>
    </div>
  );
}
