import { createFileRoute, notFound } from "@tanstack/react-router";

import {
  ArrowLink,
  EditorialText,
  Eyebrow,
  PageHero,
  ResponsiveImage,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { PropertyCard } from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";
import { getProperty, properties } from "@/data/properties";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/properties/$slug")({
  loader: ({ params }) => {
    const property = getProperty(params.slug);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return pageSeo({
        title: "Property unavailable — Aurum Haven",
        description: "This property page could not be found.",
        path: "/properties",
        noIndex: true,
      });
    }
    const { property } = loaderData;
    return pageSeo({
      title: `${property.name} — Aurum Haven`,
      description: `${property.descriptor} ${property.location}.`,
      path: `/properties/${property.slug}`,
      type: "article",
      keywords: `${property.name}, ${property.location}, ${property.type} Dubai, Aurum Haven properties`,
    });
  },
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const { property } = Route.useLoaderData();
  const others = properties.filter((p) => p.slug !== property.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={property.type}
        title={property.name}
        body={property.descriptor}
        image={property.image}
        meta={property.attributes.map((a) => ({ label: a.label, value: a.value }))}
      />

      <Section tone="light">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Overview" title={property.location} size="md" />
          </div>
          <div className="lg:col-span-7">
            <EditorialText paragraphs={property.overview} />
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <Eyebrow>Gallery</Eyebrow>
        <div className="mt-10 grid gap-6 md:grid-cols-12">
          {property.gallery.map((name, i) => (
            <Reveal
              key={`${name}-${i}`}
              delay={i * 70}
              className={i === 0 ? "md:col-span-8" : "md:col-span-4"}
            >
              <ResponsiveImage
                name={name}
                ratio={i === 0 ? "landscape" : "tall"}
                className="media-zoom"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow tone="gold">Architecture & interiors</Eyebrow>
            <p className="mt-8 text-base leading-relaxed text-sand/80">
              {property.architecture}
            </p>
          </div>
          <div>
            <Eyebrow tone="gold">Location context</Eyebrow>
            <p className="mt-8 text-base leading-relaxed text-sand/80">
              {property.locationContext}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Continue" title={"Other property\nstories."} />
          <Reveal delay={150}>
            <ArrowLink to="/properties">All properties</ArrowLink>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-14 md:grid-cols-2">
          {others.map((other) => (
            <PropertyCard key={other.slug} property={other} />
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Enquiry"
        title={"Enquire about\nthis property."}
        body="We will confirm current status, verified details and comparable evidence before any recommendation."
      />
    </>
  );
}
