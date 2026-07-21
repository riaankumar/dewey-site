"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  BookOpen,
  Code2,
  Menu,
  MousePointerClick,
  ShieldCheck,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/utils";

const productLinks = [
  {
    title: "Record to demo",
    description: "Turn any screen recording into an interactive demonstration.",
    href: "#features",
    icon: Video,
  },
  {
    title: "Guide & execute",
    description: "Walkthroughs that run inside your live application.",
    href: "#features",
    icon: MousePointerClick,
  },
  {
    title: "Verify completion",
    description: "Audit-ready proof that the work actually got done.",
    href: "#features",
    icon: BadgeCheck,
  },
  {
    title: "Security",
    description: "SOC 2 Type II, HIPAA and GDPR with an immutable trail.",
    href: "#features",
    icon: ShieldCheck,
  },
];

const useCaseLinks = [
  { title: "Enterprise onboarding", description: "Ramp new hires in days, not weeks.", href: "#use-cases" },
  { title: "SaaS onboarding", description: "Turn signups into activated users.", href: "#use-cases" },
  { title: "Customer support", description: "Interactive fixes instead of tickets.", href: "#use-cases" },
  { title: "Compliance training", description: "Verified completion with an audit trail.", href: "#use-cases" },
];

const developerLinks = [
  { title: "Documentation", icon: BookOpen, href: "#developers" },
  { title: "API reference", icon: Code2, href: "#developers" },
  { title: "SDK & embeds", icon: Blocks, href: "#developers" },
];

const mobileLinks = [
  { label: "Product", href: "#features" },
  { label: "How it works", href: "#process" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Developers", href: "#developers" },
  { label: "Pricing", href: "#pricing" },
];

const dashboardUrl =
  process.env.NEXT_PUBLIC_APP_DASHBOARD_URL ??
  "https://dewey-share.fly.dev/dashboard";

/* Translucent chrome shared by the left and right clusters. */
const cluster =
  "flex shrink-0 items-center gap-1 rounded-3xl bg-background/50 p-1 ring-1 ring-border/40 backdrop-blur-xl";

/* Nav hover/open states stay translucent so the page reads through them. */
const navItem =
  "bg-transparent hover:bg-foreground/5 focus:bg-foreground/5 data-popup-open:bg-foreground/5 data-popup-open:hover:bg-foreground/10 data-open:bg-foreground/5 data-open:hover:bg-foreground/10";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  /* Fixed, not sticky: sticky reserves 64px of layout space and the page
     background shows through it, which reads as a solid header bar. */
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-start justify-between gap-4 px-4 pt-3 sm:px-6 lg:px-8">
        {/* Left — logo + nav */}
        <div className={cn(cluster, "pl-3")}>
          <Link href="/" aria-label="Emulate home" className="shrink-0 pr-1">
            <Logo />
          </Link>

          <NavigationMenu className="hidden lg:flex" align="start">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItem}>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[34rem] grid-cols-2 gap-1">
                    {productLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink
                          render={<Link href={item.href} />}
                          className="items-start gap-3 rounded-2xl p-3"
                        >
                          <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-brand-muted text-brand-ink">
                            <item.icon className="size-4" />
                          </span>
                          <span className="flex flex-col gap-0.5">
                            <span className="text-sm font-medium">{item.title}</span>
                            <span className="text-xs leading-relaxed text-muted-foreground">
                              {item.description}
                            </span>
                          </span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="#process" />}
                  className={cn("px-2.5 py-1.5 text-sm font-medium", navItem)}
                >
                  How it works
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItem}>Use cases</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[26rem] gap-1">
                    {useCaseLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink
                          render={<Link href={item.href} />}
                          className="flex-col items-start gap-0.5 rounded-2xl p-3"
                        >
                          <span className="text-sm font-medium">{item.title}</span>
                          <span className="text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItem}>Developers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[24rem] gap-1">
                    {developerLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink
                          render={<Link href={item.href} />}
                          className="gap-3 rounded-2xl p-3"
                        >
                          <item.icon className="size-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{item.title}</span>
                          <ArrowUpRight className="ml-auto size-3.5 text-muted-foreground" />
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="#pricing" />}
                  className={cn("px-2.5 py-1.5 text-sm font-medium", navItem)}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right — auth */}
        <div className={cluster}>
          <Button
            render={<a href={dashboardUrl} />}
            variant="ghost"
            size="lg"
            className="hidden px-4 hover:bg-foreground/5 sm:inline-flex"
          >
            Sign in
          </Button>
          <Button variant="accent" size="lg" className="hidden px-4 sm:inline-flex">
            Book a demo
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-foreground/5 lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu />
                </Button>
              }
            />
            <SheetContent side="right" className="w-[min(22rem,90vw)]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
                <SheetDescription className="text-left">
                  Interactive demos for enterprise teams
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {mobileLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Separator className="my-2" />
              <div className="flex flex-col gap-2 px-4 pb-4">
                <Button
                  render={<a href={dashboardUrl} onClick={() => setOpen(false)} />}
                  variant="ghost"
                  size="lg"
                >
                  Sign in
                </Button>
                <Button variant="accent" size="lg">
                  Book a demo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
