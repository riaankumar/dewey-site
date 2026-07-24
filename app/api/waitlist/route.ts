// Waitlist / request-access intake.
//
// This validates the submission and, if WAITLIST_WEBHOOK_URL is set, forwards
// it there (a Slack/Zapier/Make incoming webhook, or your own endpoint). That
// env var is the ONE wiring point to make requests actually land somewhere —
// until it is set, submissions are validated and logged but not stored, so
// hook it up before relying on this in production.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  email?: unknown;
  company?: unknown;
  workflow?: unknown;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const workflow = typeof body.workflow === "string" ? body.workflow.trim() : "";

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return Response.json(
      { error: "Enter a valid work email." },
      { status: 400 }
    );
  }

  const submission = {
    email,
    company: company.slice(0, 200),
    workflow: workflow.slice(0, 1000),
    at: new Date().toISOString(),
  };

  const webhook = process.env.WAITLIST_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (!res.ok) throw new Error(`webhook responded ${res.status}`);
    } catch (err) {
      console.error("waitlist: webhook forward failed", err);
      return Response.json(
        { error: "Could not reach the waitlist right now. Try again shortly." },
        { status: 502 }
      );
    }
  } else {
    // No destination configured yet — record it in the logs so nothing is
    // silently lost, and make the missing wiring obvious in dev.
    console.warn(
      "waitlist: WAITLIST_WEBHOOK_URL not set; submission not persisted:",
      submission.email
    );
  }

  return Response.json({ ok: true });
}
