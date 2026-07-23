"use client";

import * as React from "react";
import Link from "next/link";
import {
  BarChart3,
  MessageSquareText,
  Menu,
  MousePointerClick,
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
import { CUSTOMER_DASHBOARD_URL } from "@/lib/customer-dashboard";
import { cn } from "@/lib/utils";

const productLinks = [
  {
    title: "Executable recordings",
    description: "Record a workflow like a Loom, then let recipients complete it.",
    href: "#replay",
    icon: Video,
  },
  {
    title: "Recording assistant",
    description: "Recipients ask the recording and get grounded answers.",
    href: "#assistant",
    icon: MessageSquareText,
  },
  {
    title: "Guided replay",
    description: "A visible second cursor points to the next step in the product.",
    href: "#how-it-works",
    icon: MousePointerClick,
  },
  {
    title: "Completion analytics",
    description: "See whether the workflow started, stalled, or got done.",
    href: "#analytics",
    icon: BarChart3,
  },
];

const useCaseLinks = [
  { title: "Customer onboarding", description: "Get every account to its first useful outcome.", href: "#use-cases" },
  { title: "Customer support", description: "Turn a repeated fix into a guided walkthrough.", href: "#use-cases" },
  { title: "Implementation", description: "Capture an expert setup once, hand it to everyone.", href: "#use-cases" },
];

const mobileLinks = [
  { label: "Product", href: "#replay" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Safety", href: "#safety" },
  { label: "Pricing", href: "#pricing" },
];

const dashboardUrl = CUSTOMER_DASHBOARD_URL;

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
                  render={<Link href="#how-it-works" />}
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
                <NavigationMenuLink
                  render={<Link href="#safety" />}
                  className={cn("px-2.5 py-1.5 text-sm font-medium", navItem)}
                >
                  Safety
                </NavigationMenuLink>
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
            nativeButton={false}
            variant="ghost"
            size="lg"
            className="hidden px-4 hover:bg-foreground/5 sm:inline-flex"
          >
            Sign in
          </Button>
          <Button
            variant="accent"
            size="lg"
            className="hidden px-4 sm:inline-flex"
            nativeButton={false}
            render={<Link href="#access" />}
          >
            Request access
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
                  Executable screen recordings for onboarding and support
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
                  nativeButton={false}
                  variant="ghost"
                  size="lg"
                >
                  Sign in
                </Button>
                <Button
                  variant="accent"
                  size="lg"
                  nativeButton={false}
                  render={<Link href="#access" onClick={() => setOpen(false)} />}
                >
                  Request access
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
