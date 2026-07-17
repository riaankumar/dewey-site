import { cn } from "@/lib/utils";

export function Logo({
  className,
  showTm = true,
}: {
  className?: string;
  showTm?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-start gap-1", className)}>
      <span
        aria-hidden
        className="grid size-7 place-items-center rounded-2xl bg-foreground text-background"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none">
          <path
            d="M5 6.5A1.5 1.5 0 0 1 6.5 5h5a6.5 6.5 0 0 1 0 13h-5A1.5 1.5 0 0 1 5 16.5v-10Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="11" cy="11.5" r="1.6" fill="currentColor" />
        </svg>
      </span>
      <span className="font-primary text-lg leading-7 font-light tracking-tight">
        Emulate
      </span>
      {showTm ? (
        <span className="mt-0.5 text-[9px] leading-none text-muted-foreground">
          TM
        </span>
      ) : null}
    </span>
  );
}
