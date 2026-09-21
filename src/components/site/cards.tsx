import { Link } from "@tanstack/react-router";

import { ArrowLink, Eyebrow, Reveal, ResponsiveImage } from "./primitives";
import type { Insight } from "@/data/insights";
import type { Property } from "@/data/properties";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

/* ---------------- Services ---------------- */

export function ServiceRow({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal as="li" delay={index * 50}>
      <Link
        to="/services/$service"
        params={{ service: service.slug }}
        className="group grid grid-cols-1 items-start gap-6 border-t border-border py-8 transition-colors duration-500 hover:border-gold md:grid-cols-12 md:gap-10 md:py-10"
      >
        <div className="md:col-span-5">
          <h3 className="display-sm transition-colors duration-500 group-hover:text-gold">
            {service.title}
          </h3>
        </div>
        <div className="md:col-span-5">
          <p className="text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        </div>
        <div className="flex md:col-span-2 md:justify-end">
          <span
            aria-hidden
            className="label-eyebrow inline-flex items-center gap-2 text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:text-gold"
          >
            View &#8594;
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Reveal as="article" className="group">
      <Link to="/services/$service" params={{ service: service.slug }} className="block">
        <ResponsiveImage
          name={service.image}
          ratio="tall"
          className="media-zoom"
          imgClassName="transition-transform duration-1000"
        />
        <div className="mt-6 transition-transform duration-500 ease-editorial group-hover:translate-y-[-2px]">
          <h3 className="display-sm transition-colors duration-500 group-hover:text-gold">
            {service.title}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {service.summary}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------------- Properties ---------------- */

export function PropertyCard({
  property,
  size = "default",
}: {
  property: Property;
  size?: "default" | "feature";
}) {
  return (
    <Reveal as="article" className="group">
      <Link
        to="/properties/$slug"
        params={{ slug: property.slug }}
        className="block"
        aria-label={`${property.name}, ${property.location}`}
      >
        <ResponsiveImage
          name={property.image}
          ratio={size === "feature" ? "cinema" : "landscape"}
          className="media-zoom"
        />
        <div
          className={cn(
            "mt-6 flex flex-col gap-3 transition-transform duration-500 ease-editorial group-hover:translate-y-[-2px] md:flex-row md:items-end md:justify-between",
            size === "feature" && "md:gap-12",
          )}
        >
          <div>
            <Eyebrow tone="gold">{property.type}</Eyebrow>
            <h3
              className={cn(
                "mt-4 transition-colors duration-500 group-hover:text-gold",
                size === "feature" ? "display-md" : "display-sm",
              )}
            >
              {property.name}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{property.location}</p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {property.descriptor}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}

/* ---------------- Insights ---------------- */

export function InsightCard({
  insight,
  variant = "default",
}: {
  insight: Insight;
  variant?: "default" | "compact" | "feature";
}) {
  if (variant === "compact") {
    return (
      <Reveal as="li">
        <Link
          to="/insights/$slug"
          params={{ slug: insight.slug }}
          className="group grid gap-3 border-t border-border py-7 transition-colors duration-500 hover:border-gold md:grid-cols-12 md:items-baseline md:gap-8"
        >
          <span className="label-eyebrow text-gold md:col-span-2">
            {insight.category}
          </span>
          <h3 className="display-sm md:col-span-7 group-hover:text-gold">
            {insight.title}
          </h3>
          <span className="label-eyebrow text-muted-foreground md:col-span-3 md:text-right">
            {insight.readingTime}
          </span>
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal as="article" className="group">
      <Link to="/insights/$slug" params={{ slug: insight.slug }} className="block">
        <ResponsiveImage
          name={insight.image}
          ratio={variant === "feature" ? "wide" : "landscape"}
          className="media-zoom"
        />
        <div className="mt-6 flex items-center gap-4 transition-transform duration-500 ease-editorial group-hover:translate-y-[-2px]">
          <Eyebrow tone="gold">{insight.category}</Eyebrow>
          <span className="label-eyebrow text-muted-foreground">
            {insight.readingTime}
          </span>
        </div>
        <h3
          className={cn(
            "mt-4 transition-colors duration-500 group-hover:text-gold",
            variant === "feature" ? "display-md" : "display-sm",
          )}
        >
          {insight.title}
        </h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-foreground/70">
          {insight.excerpt}
        </p>
      </Link>
    </Reveal>
  );
}

export function RelatedInsights({
  items,
  tone = "light",
}: {
  items: Insight[];
  tone?: "light" | "dark";
}) {
  if (items.length === 0) return null;
  return (
    <div>
      <Eyebrow tone={tone === "dark" ? "gold" : "muted"}>Related reading</Eyebrow>
      <ul className="mt-8">
        {items.map((insight) => (
          <InsightCard key={insight.slug} insight={insight} variant="compact" />
        ))}
      </ul>
      <div className="mt-10">
        <ArrowLink to="/insights" tone={tone}>
          All insights
        </ArrowLink>
      </div>
    </div>
  );
}
