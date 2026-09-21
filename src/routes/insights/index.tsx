import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { InsightCard } from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";
import { insightCategories, insights } from "@/data/insights";
import { pageSeo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/insights/")({
  head: () =>
    pageSeo({
      title: "Insights — Aurum Haven | Dubai Property Intelligence",
      description:
        "Editorial notes on Dubai real estate: market discipline, investment strategy, off-plan assessment and practical buying guidance.",
      path: "/insights",
      keywords:
        "Dubai property insights, real estate market intelligence Dubai, investment strategy Dubai, off-plan guide",
    }),
  component: InsightsPage,
});

function InsightsPage() {
  const [category, setCategory] = useState<string>("All");
  const shown =
    category === "All" ? insights : insights.filter((i) => i.category === category);
  const [lead, ...rest] = shown;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={"Market intelligence,\nwithout the theatre."}
        body="Qualitative editorial notes. We publish reasoning rather than projected figures, and we do not state statistics we have not verified."
        image="materials"
      />

      <Section tone="light">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="The journal" title={"Reading room."} />
          <Reveal delay={150}>
            <div
              className="flex flex-wrap gap-x-6 gap-y-3"
              role="group"
              aria-label="Filter insights by category"
            >
              {insightCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={cn(
                    "label-eyebrow border-b pb-2 transition-colors duration-400",
                    category === c
                      ? "border-gold text-gold"
                      : "border-transparent text-muted-foreground hover:text-ink",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {lead ? (
          <div className="mt-16">
            <InsightCard insight={lead} variant="feature" />
          </div>
        ) : (
          <p className="mt-16 text-sm text-muted-foreground">
            No articles in this category yet.
          </p>
        )}

        {rest.length > 0 ? (
          <div className="mt-20 grid gap-14 md:grid-cols-3">
            {rest.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        ) : null}
      </Section>

      <CTASection
        eyebrow="Discuss"
        title={"Apply this to\nyour own decision."}
        body="General reading only goes so far. A conversation about specifics goes considerably further."
      />
    </>
  );
}
