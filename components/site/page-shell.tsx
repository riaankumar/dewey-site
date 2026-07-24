import type { ReactNode } from "react";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Badge } from "@/components/ui/badge";

/**
 * Shared frame for standalone routes (about, contact, legal). Keeps the fixed
 * navbar clear with top padding and centres a readable measure.
 */
export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-3xl px-4 pt-32 pb-24 sm:px-6 sm:pt-36 lg:px-8">
          {eyebrow ? (
            <Badge variant="brand" className="mb-4 h-6 px-2.5">
              {eyebrow}
            </Badge>
          ) : null}
          <h1 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          ) : null}
          {children ? (
            <div className="mt-10 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-4 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:text-foreground [&_strong]:text-foreground">
              {children}
            </div>
          ) : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}
