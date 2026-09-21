import { Link } from "@tanstack/react-router";

import logoMark from "@/assets/logo-mark.png";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  size?: "nav" | "footer";
  className?: string;
  link?: boolean;
};

/**
 * Professional lockup: transparent gold shield + typeset wordmark.
 * Reads cleanly on dark headers without a boxed badge.
 */
export function BrandLogo({ size = "nav", className, link = true }: BrandLogoProps) {
  const markClass = size === "nav" ? "h-10 w-10 md:h-11 md:w-11" : "h-14 w-14 md:h-[4.25rem] md:w-[4.25rem]";
  const titleClass =
    size === "nav"
      ? "text-[1.35rem] leading-none tracking-tight md:text-[1.5rem]"
      : "text-2xl leading-none tracking-tight md:text-[1.85rem]";

  const inner = (
    <span className="inline-flex items-center gap-3 md:gap-3.5">
      <img
        src={logoMark}
        alt=""
        width={88}
        height={88}
        decoding="async"
        className={cn("shrink-0 object-contain", markClass)}
      />
      <span className="flex min-w-0 flex-col justify-center gap-1.5">
        <span className={cn("font-display text-ivory", titleClass)}>
          Aurum <span className="text-gold">Haven</span>
        </span>
        <span
          className={cn(
            "label-eyebrow text-stone",
            size === "nav" && "hidden sm:inline",
          )}
        >
          {size === "footer" ? "Dubai · UAE" : "Dubai"}
        </span>
      </span>
    </span>
  );

  if (!link) {
    return <span className={cn("inline-flex", className)}>{inner}</span>;
  }

  return (
    <Link
      to="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "group inline-flex items-center transition-opacity duration-500 hover:opacity-90",
        className,
      )}
    >
      {inner}
    </Link>
  );
}
