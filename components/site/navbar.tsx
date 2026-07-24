"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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

/* One lean set of links, shared by the desktop bar and the mobile sheet. */
const NAV = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "The assistant", href: "/#assistant" },
  { label: "See it", href: "/#replay" },
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
              {NAV.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className={cn("px-2.5 py-1.5 text-sm font-medium", navItem)}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
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
            render={<Link href="/#access" />}
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
                {NAV.map((item) => (
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
                  render={<Link href="/#access" onClick={() => setOpen(false)} />}
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
