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
import { RelatedInsights } from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { insightsBySlugs } from "@/data/insights";
import { getService, services } from "@/data/services";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const service = getService(params.service);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return pageSeo({
        title: "Service unavailable — Aurum Haven",
        description: "This service page could not be found.",
        path: "/services",
        noIndex: true,
      });
    }
    const { service } = loaderData;
    return pageSeo({
      title: `${service.title} — Aurum Haven | Dubai Property Advisory`,
      description: service.summary,
      path: `/services/${service.slug}`,
      type: "article",
      keywords: `${service.title}, Dubai ${service.title.toLowerCase()} property, Aurum Haven ${service.title}`,
    });
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const related = insightsBySlugs([...service.relatedInsights]);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={`Services — ${service.title}`}
        title={service.headline}
        body={service.summary}
        image={service.image}
      />

      <Section tone="light">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Introduction" title={service.title} size="md" />
          </div>
          <div className="lg:col-span-7">
            <EditorialText paragraphs={[service.intro]} className="[&_p]:lede [&_p]:text-foreground/80" />
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHeading
          eyebrow="How Aurum Haven helps"
          title={"What the work\nactually involves."}
        />
        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {service.help.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="border-t border-border pt-7">
                <h3 className="display-sm">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Key considerations"
              title={"Points that\ndeserve attention."}
              tone="dark"
            />
            <ul className="mt-12">
              {service.considerations.map((point, i) => (
                <Reveal as="li" key={point} delay={i * 50}>
                  <div className="flex gap-6 border-t border-sand/15 py-6">
                    <span aria-hidden className="mt-2 h-px w-6 shrink-0 bg-gold" />
                    <p className="text-sm leading-relaxed text-sand/80">{point}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal className="lg:col-span-6">
            <ResponsiveImage name={service.accentImage} ratio="tall" className="media-zoom" />
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Relevant process" title={"The same method,\napplied here."} />
            <div className="mt-10">
              <ArrowLink to="/process">Full process</ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ProcessTimeline />
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <RelatedInsights items={related} />
          </div>
          <div className="lg:col-span-5">
            <Eyebrow>Other disciplines</Eyebrow>
            <ul className="mt-8 space-y-4">
              {others.map((other) => (
                <li key={other.slug}>
                  <ArrowLink to="/services/$service" params={{ service: other.slug }}>
                    {other.title}
                  </ArrowLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow={service.title}
        title={"Discuss a\n" + service.title.toLowerCase() + " decision."}
        body="Bring the specifics. We will set out what is known, what we would verify, and what we would recommend."
      />
    </>
  );
}
