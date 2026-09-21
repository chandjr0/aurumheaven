import { User } from "lucide-react";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

/** Professional placeholder for founder / CEO portrait until a verified photo is supplied. */
export function FounderPortrait({ className }: { className?: string }) {
  return (
    <figure className={cn("relative overflow-hidden bg-charcoal", className)}>
      <div
        className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-5 bg-gradient-to-b from-graphite to-ink"
        role="img"
        aria-label={`${site.founder.name}, ${site.founder.role} — portrait placeholder`}
      >
        <span className="flex h-28 w-28 items-center justify-center rounded-full border border-gold/40 bg-ink/60 text-gold md:h-36 md:w-36">
          <User className="h-14 w-14 md:h-16 md:w-16" strokeWidth={1.25} aria-hidden />
        </span>
        <figcaption className="text-center">
          <span className="label-eyebrow block text-gold">{site.founder.role}</span>
          <span className="mt-3 block font-display text-xl text-ivory md:text-2xl">
            {site.founder.name}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
