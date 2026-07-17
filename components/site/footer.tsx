import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/site/logo";

/* lucide dropped brand marks in v1, so the social glyphs are inlined here. */
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.9 2.5h3.3l-7.2 8.2 8.5 11.2h-6.7l-5.2-6.8-6 6.8H2.3l7.7-8.8L1.9 2.5h6.8l4.7 6.2 5.5-6.2Zm-1.2 17.5h1.8L7.3 4.4H5.4l12.3 15.6Z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.75-2.05C21.6 8.65 22 11.3 22 14.2V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z" />
    </svg>
  );
}

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#process" },
      { label: "Use cases", href: "#use-cases" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#integrations" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "Documentation", href: "#developers" },
      { label: "API reference", href: "#developers" },
      { label: "SDK", href: "#developers" },
      { label: "Status", href: "#developers" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#", badge: "Hiring" },
      { label: "Contact", href: "#" },
      { label: "Org pilot", href: "#cta" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

const SOCIALS = [
  { label: "Twitter", icon: XIcon, href: "#" },
  { label: "GitHub", icon: GithubIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/30">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="flex max-w-sm flex-col gap-4">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Interactive demonstrations that guide, execute, and verify —
              replacing passive video with proof that work actually got done.
            </p>
            <div className="flex items-center gap-1">
              {SOCIALS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid size-8 place-items-center rounded-2xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <h3 className="font-secondary text-xs font-semibold tracking-widest text-foreground uppercase">
                {column.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                      {"badge" in link && link.badge ? (
                        <Badge variant="brand" className="h-4 px-1.5 text-[9px]">
                          {link.badge}
                        </Badge>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Emulate. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
