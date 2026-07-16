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

const mobileLinks = [
  { label: "Product", href: "#features" },
  { label: "How it works", href: "#process" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Developers", href: "#developers" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left — logo */}
        <Link href="/" aria-label="Dewey home" className="shrink-0">
          <Logo />
        </Link>

        {/* Center — nav */}
        <NavigationMenu className="hidden lg:flex" align="center">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
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
                className="px-2.5 py-1.5 text-sm font-medium"
              >
                How it works
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Use cases</NavigationMenuTrigger>
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
              <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[24rem] gap-1">
                  {[
                    { title: "Documentation", icon: BookOpen, href: "#developers" },
                    { title: "API reference", icon: Code2, href: "#developers" },
                    { title: "SDK & embeds", icon: Blocks, href: "#developers" },
                  ].map((item) => (
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
                className="px-2.5 py-1.5 text-sm font-medium"
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right — auth */}
        <div className="flex shrink-0 items-center gap-2">
          <Button variant="ghost" size="lg" className="hidden sm:inline-flex px-4">
            Sign in
          </Button>
          <Button variant="accent" size="lg" className="hidden px-4 sm:inline-flex">
            Book a demo
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
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
                <Button variant="ghost" size="lg">
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
