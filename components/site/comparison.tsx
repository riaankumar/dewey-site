"use client";

import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";

/**
 * Category labels, never competitor logos — the spec requires every claim in
 * this table to be substantiated before any named comparison ships. The last
 * column is Emulate; a value of "Yes" or "Core" reads as a positive.
 */
const COLUMNS = ["Passive video", "Interactive demo", "Digital adoption", "Emulate"];

const ROWS: [string, string, string, string, string][] = [
  ["Record a real workflow naturally", "Yes", "Sometimes", "No", "Yes"],
  ["Preserve camera, voice, and explanation", "Yes", "Limited", "No", "Yes"],
  ["Work in the recipient's real account", "No", "Usually no", "Yes", "Yes"],
  ["Guide with a visible second cursor", "No", "No", "Sometimes", "Yes"],
  ["Let the recipient ask the recording", "Limited", "Emerging", "Limited", "Core"],
  ["Ground answers in the creator's context", "Limited", "Emerging", "Limited", "Core"],
  ["Let the recipient take control", "No", "No", "Yes", "Yes"],
  ["Measure real workflow completion", "No", "Demo engagement", "Yes", "Yes"],
];

const POSITIVE = new Set(["Yes", "Core"]);

export function Comparison() {
  return (
    <section id="comparison" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <Badge variant="brand" className="h-6 w-fit px-2.5">
            Comparison
          </Badge>
          <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            More than a video.
            <br />
            <span className="text-muted-foreground">
              Less work than authoring a tour.
            </span>
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[46rem] border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr>
                <th className="w-[34%] pb-3 pr-4 align-bottom text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  Capability
                </th>
                {COLUMNS.map((col) => {
                  const isEmulate = col === "Emulate";
                  return (
                    <th
                      key={col}
                      className={
                        isEmulate
                          ? "rounded-t-2xl bg-brand-muted px-4 pb-3 pt-3 text-sm font-semibold text-brand-ink"
                          : "px-4 pb-3 pt-3 text-sm font-medium text-muted-foreground"
                      }
                    >
                      {col}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => {
                const [capability, ...cells] = row;
                return (
                  <tr key={capability} className="group/row">
                    <td className="border-t border-border/60 py-3 pr-4 font-medium">
                      {capability}
                    </td>
                    {cells.map((cell, i) => {
                      const isEmulate = i === cells.length - 1;
                      const positive = POSITIVE.has(cell);
                      return (
                        <td
                          key={i}
                          className={
                            isEmulate
                              ? "border-t border-brand/20 bg-brand-muted/40 px-4 py-3 font-medium text-brand-ink group-last/row:rounded-b-2xl"
                              : "border-t border-border/60 px-4 py-3 text-muted-foreground"
                          }
                        >
                          <span className="inline-flex items-center gap-1.5">
                            {isEmulate && positive ? (
                              <Check className="size-3.5 shrink-0" />
                            ) : null}
                            {cell}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
