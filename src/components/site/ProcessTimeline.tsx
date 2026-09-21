import { Reveal } from "./primitives";
import { stages } from "@/data/process";
import { cn } from "@/lib/utils";

/**
 * Stage identifiers (01–06) are editorial content markers only.
 * They never appear in site navigation.
 */
export function ProcessTimeline({
  tone = "light",
  detailed = false,
}: {
  tone?: "light" | "dark";
  detailed?: boolean;
}) {
  return (
    <ol className="mt-4">
      {stages.map((stage, i) => (
        <Reveal as="li" key={stage.id} delay={i * 60}>
          <div
            className={cn(
              "grid gap-5 border-t py-9 md:grid-cols-12 md:gap-10 md:py-12",
              tone === "dark" ? "border-sand/15" : "border-border",
            )}
          >
            <span
              className={cn(
                "label-eyebrow md:col-span-1",
                tone === "dark" ? "text-gold" : "text-gold",
              )}
              aria-hidden
            >
              {stage.id}
            </span>
            <h3 className={cn("display-sm md:col-span-4", tone === "dark" && "text-ivory")}>
              {stage.title}
            </h3>
            <div className="md:col-span-7">
              <p
                className={cn(
                  "text-base",
                  tone === "dark" ? "text-sand/90" : "text-foreground/80",
                )}
              >
                {stage.summary}
              </p>
              {detailed ? (
                <p
                  className={cn(
                    "mt-4 max-w-xl text-sm leading-relaxed",
                    tone === "dark" ? "text-sand/60" : "text-muted-foreground",
                  )}
                >
                  {stage.detail}
                </p>
              ) : null}
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
