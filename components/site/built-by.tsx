"use client";

import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import { motion } from "motion/react";

/**
 * Credential strip for the hero — where the team came from, not who we
 * integrate with. Deliberately separate from brand-icons.tsx: those marks
 * render in each brand's own colour, and these are monochrome by contract.
 *
 * Two kinds of mark, because they can't be sourced the same way:
 *
 * - Vector (Amazon, Meta, Databricks): path data from Simple Icons
 *   (https://simpleicons.org), CC0, filled with currentColor. Amazon's comes
 *   from an older release — it was pulled upstream, same story as the
 *   Salesforce/Slack marks noted in brand-icons.tsx.
 * - Raster (AppLovin, BAIR, E@B): supplied art under /public/builtby, forced
 *   white by `brightness-0 invert`. That filter keys off alpha, so the source
 *   has to be transparent — the *-mark.png files are derived for exactly that
 *   (eab's original ships an opaque white background, and applovin's original
 *   is the full wordmark lockup, which would double up on the name beside it).
 *
 * Berkeley has no mark available, so it rides as a plain name. That's
 * nominative use and needs no permission, which reproducing a logo would.
 */
type MarkProps = SVGProps<SVGSVGElement>;

function mark(path: string, title: string) {
  const Mark = (props: MarkProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d={path} />
    </svg>
  );
  Mark.displayName = title.replace(/\s/g, "") + "Mark";
  return Mark;
}

const AmazonMark = mark(
  "M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z",
  "Amazon"
);

const MetaMark = mark(
  "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z",
  "Meta"
);

const DatabricksMark = mark(
  "M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.974 2.647 6.681 12 1.388l7.76 4.368.668-.411v-.566L12 0 .95 6.27v.72L12 13.207l9.919-5.55v2.26L12 15.52 1.516 9.56l-.565.308Z",
  "Databricks"
);

type Origin = {
  name: string;
  /** Vector mark, inherits currentColor. */
  mark?: ComponentType<MarkProps>;
  /**
   * Raster mark; intrinsic size drives the aspect, height is normalised in CSS.
   * `sizeClass` overrides that height for optical balance — a solid shape reads
   * heavier than line art at the same measured height.
   */
  img?: { src: string; width: number; height: number; sizeClass?: string };
};

const ORIGINS: Origin[] = [
  { name: "Amazon", mark: AmazonMark },
  { name: "Berkeley" },
  {
    name: "AppLovin",
    img: { src: "/builtby/applovin-mark.png", width: 214, height: 183 },
  },
  { name: "Meta", mark: MetaMark },
  { name: "BAIR", img: { src: "/builtby/bair-mark.png", width: 205, height: 146 } },
  {
    name: "E@B",
    // The only filled mark in the row; full height turns it into a white blob.
    img: {
      src: "/builtby/eab-mark.png",
      width: 181,
      height: 180,
      sizeClass: "h-6",
    },
  },
  { name: "Databricks", mark: DatabricksMark },
];

export function BuiltBy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.44 }}
      className="mt-8 flex w-full flex-col items-center gap-5 sm:mt-12"
    >
      <p className="text-xs tracking-[0.18em] text-white/55 uppercase">
        Built by engineers from
      </p>

      {/* Every row item is mark-plus-name, so Berkeley (no mark) sits level with
          the rest instead of reading as a gap. Dimming via opacity on the row
          item — not text-white/65 — is what lets one value cover both the
          currentColor marks and the filtered images. */}
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-11">
        {ORIGINS.map(({ name, mark: Mark, img }) => (
          <li
            key={name}
            className="flex items-center gap-2.5 text-white opacity-80 transition-opacity hover:opacity-100"
          >
            {Mark ? <Mark className="size-7 shrink-0" /> : null}
            {img ? (
              <Image
                src={img.src}
                alt=""
                width={img.width}
                height={img.height}
                className={`w-auto shrink-0 brightness-0 invert ${img.sizeClass ?? "h-7"}`}
              />
            ) : null}
            <span className="text-base font-medium tracking-tight whitespace-nowrap">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
