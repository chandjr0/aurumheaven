import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { ServiceCard, ServiceRow } from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/data/services";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageSeo({
      title: "Services — Aurum Haven | Dubai Property Advisory",
      description:
        "Residential, commercial, investment, off-plan, secondary-market, leasing and portfolio advisory across Dubai — delivered end to end by Aurum Haven.",
      path: "/services",
      keywords:
        "Dubai property services, residential broker Dubai, commercial real estate Dubai, off-plan advisory, leasing Dubai",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  const [first, second, third, ...rest] = services;
  const featured = [first, second, third].filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={"From opportunity\nto execution."}
        body="Seven disciplines, one method: evidence first, reasoning stated, execution managed to completion."
        image="detailFacade"
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Overview"
          title={"Advisory across the\nfull property decision."}
          body="Each discipline shares the same process and the same standard of evidence. Select one to see how it applies."
        />
        <div className="mt-16 grid gap-14 md:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service!.slug} service={service!} />
          ))}
        </div>
        <ul className="mt-20">
          {rest.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </ul>
      </Section>

      <CTASection
        eyebrow="Where to begin"
        title={"Not sure which\napplies to you?"}
        body="Most decisions touch more than one discipline. A short conversation is usually the fastest way to establish the right starting point."
      />
    </>
  );
}
