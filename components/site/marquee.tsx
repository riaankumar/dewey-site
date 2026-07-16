import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Duplicates its children once and slides the rail by -50%, so the loop is
 * seamless. Pauses on hover; respects prefers-reduced-motion (see globals.css).
 */
export function Marquee({
  children,
  duration = "40s",
  reverse = false,
  className,
}: {
  children: React.ReactNode;
  duration?: string;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "marquee-paused group relative flex overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div
        className="animate-marquee flex w-max shrink-0 items-stretch"
        style={
          {
            "--marquee-duration": duration,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {children}
        {children}
      </div>
    </div>
  );
}
