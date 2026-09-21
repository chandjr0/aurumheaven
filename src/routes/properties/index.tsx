import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { PropertyCard } from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";
import { properties, propertyTypes } from "@/data/properties";
import { pageSeo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/properties/")({
  head: () =>
    pageSeo({
      title: "Properties — Aurum Haven | Dubai Property Stories",
      description:
        "An editorial view of Dubai property: residential, commercial, waterfront and off-plan studies, structured for verified inventory as it becomes available.",
      path: "/properties",
      keywords:
        "Dubai properties, Dubai apartments, Dubai villas, off-plan Dubai, commercial offices Dubai",
    }),
  component: PropertiesPage,
});

function PropertiesPage() {
  const [filter, setFilter] = useState<string>("All");
  const shown =
    filter === "All" ? properties : properties.filter((p) => p.type === filter);

  return (
    <>
      <PageHero
        eyebrow="Properties"
        title={"Property, read as\narchitecture first."}
        body="A considered selection rather than a listing feed. Each record is structured so verified inventory can replace it without redesign."
        image="villaWaterfront"
      />

      <Section tone="light">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected opportunities"
            title={"Sample records,\nhonestly labelled."}
            body="No prices, sizes, yields or availability are stated, because none have been verified. Enquire and we will confirm current opportunities directly."
          />
          <Reveal delay={150}>
            <div
              className="flex flex-wrap gap-x-6 gap-y-3"
              role="group"
              aria-label="Filter properties by category"
            >
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFilter(type)}
                  aria-pressed={filter === type}
                  className={cn(
                    "label-eyebrow border-b pb-2 transition-colors duration-400",
                    filter === type
                      ? "border-gold text-gold"
                      : "border-transparent text-muted-foreground hover:text-ink",
                  )}
                >
                  {type}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {shown.map((property, i) => (
            <div key={property.slug} className={cn(i % 3 === 0 && "md:col-span-2")}>
              <PropertyCard property={property} size={i % 3 === 0 ? "feature" : "default"} />
            </div>
          ))}
        </div>

        {shown.length === 0 ? (
          <p className="mt-16 text-sm text-muted-foreground">
            No records in this category yet.
          </p>
        ) : null}
      </Section>

      <CTASection
        eyebrow="Enquiries"
        title={"Looking for something\nspecific?"}
        body="Describe the requirement — community, asset type, horizon — and we will respond with what is genuinely available."
      />
    </>
  );
}
