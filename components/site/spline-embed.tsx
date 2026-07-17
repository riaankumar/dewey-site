"use client";

import { Box } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Spline viewer embeds.
 *
 * Scene URLs come from Spline's Export → Public URL, e.g.
 * https://my.spline.design/<slug>/. A full <iframe …> snippet is accepted too —
 * the src is extracted. Anything unrecognised is ignored rather than rendered.
 *
 *   NEXT_PUBLIC_SPLINE_SCENE      hero model
 *   NEXT_PUBLIC_SPLINE_CTA_SCENE  CTA background
 *
 * NEXT_PUBLIC_* is inlined at build time — restart the dev server after editing.
 * These must be referenced as full literals for Next to inline them, which is
 * why each scene is read at its own call site rather than by key lookup.
 */

/** Accepts a bare URL, or a full <iframe …> snippet pasted straight from Spline. */
export const readSceneUrl = (value?: string) => {
  if (!value) return undefined;
  const fromIframe = value.match(/<iframe[^>]*\ssrc=["']([^"']+)["']/i);
  const url = (fromIframe ? fromIframe[1] : value).trim();
  return /^https?:\/\/my\.spline\.design\/\S+/.test(url) ? url : undefined;
};

const HERO_SCENE = readSceneUrl(process.env.NEXT_PUBLIC_SPLINE_SCENE);

/**
 * Bare scene iframe.
 *
 * No opacity gate and no lazy loading: these sit above or near the fold, and
 * gating visibility on onLoad drops the scene whenever load beats hydration.
 */
export function SplineFrame({
  scene,
  title,
  className,
  decorative = false,
}: {
  scene?: string;
  title: string;
  className?: string;
  decorative?: boolean;
}) {
  const url = readSceneUrl(scene);
  if (!url) return null;

  return (
    <iframe
      src={url}
      title={title}
      // A decorative backdrop must not eat clicks meant for the content on top.
      className={cn("size-full border-0", decorative && "pointer-events-none", className)}
      {...(decorative ? { "aria-hidden": true, tabIndex: -1 } : {})}
    />
  );
}

export function SplineEmbed({ className }: { className?: string }) {
  if (!HERO_SCENE) {
    return <SplinePlaceholder className={className} />;
  }

  return (
    <SplineFrame
      scene={HERO_SCENE}
      title="Emulate — interactive product demonstration"
      className={className}
    />
  );
}

/** Stand-in when no scene URL is configured. */
function SplinePlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative grid size-full place-items-center overflow-hidden rounded-3xl",
        className
      )}
      aria-hidden
    >
      <motion.div
        className="absolute size-[70%] rounded-full bg-brand/25 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="relative grid size-40 place-items-center rounded-[2.5rem] bg-gradient-to-br from-brand-from via-brand-to to-brand-from/30 ring-1 ring-brand/30 backdrop-blur-sm sm:size-52"
      >
        <Box className="size-14 text-white/70 sm:size-20" strokeWidth={1} />
      </motion.div>
      <span className="absolute bottom-4 text-[10px] tracking-widest text-muted-foreground/70 uppercase">
        Spline scene slot
      </span>
    </div>
  );
}
