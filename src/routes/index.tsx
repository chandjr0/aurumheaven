import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import {
  ArrowLink,
  ButtonLink,
  Container,
  Display,
  EditorialText,
  Eyebrow,
  ResponsiveImage,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { InsightCard, PropertyCard } from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { alt, media } from "@/data/media";
import { insights } from "@/data/insights";
import { properties } from "@/data/properties";
import { services } from "@/data/services";
import { pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "Aurum Haven — Precision in Property | Dubai Real Estate Advisory",
      description:
        "Dubai real estate advisory shaped by market intelligence, transparency and disciplined execution. Residential, commercial, investment, off-plan and leasing guidance.",
      path: "/",
    }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative isolate flex h-dvh min-h-dvh w-full max-w-full flex-col overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src={media.heroArchitecture}
          alt={alt.heroArchitecture}
          width={1920}
          height={1280}
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="drift h-full w-full max-w-none object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      </div>

      <Container className="relative flex w-full min-w-0 flex-1 flex-col pt-28 sm:pt-32 lg:pt-36">
        <div className="grid min-w-0 flex-1 content-center gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="min-w-0 lg:col-span-7 xl:col-span-8">
            <div className="rise">
              <Eyebrow tone="gold">Aurum Haven — Dubai, UAE</Eyebrow>
            </div>
            <h1
              className="display-xl rise mt-6 text-ivory sm:mt-8"
              style={{ animationDelay: "120ms" }}
            >
              <span className="block">Precision</span>
              <span className="block italic text-gold-light">in property.</span>
            </h1>
          </div>
          <div
            className="rise flex min-w-0 flex-col justify-end lg:col-span-5 xl:col-span-4"
            style={{ animationDelay: "260ms" }}
          >
            <p className="lede max-w-md text-sand/85">
              Real estate advisory shaped by intelligence, transparency and execution.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              <ButtonLink to="/process" variant="onDark">
                Explore our approach
              </ButtonLink>
              <Link
                to="/contact"
                className="label-eyebrow inline-flex items-center px-2 py-4 text-sand/70 transition-colors duration-500 hover:text-gold"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mt-10 flex flex-col items-center gap-3 border-t border-sand/15 pt-6 pb-8 sm:mt-12 sm:pb-10 md:mt-14">
          <p className="label-eyebrow absolute left-0 top-6 hidden text-stone sm:block">
            {site.tagline}
          </p>
          <span className="label-eyebrow text-stone">Scroll</span>
          <span
            aria-hidden
            className="scroll-cue h-11 w-px bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </Container>
    </section>
  );
}

function Intro() {
  return (
    <Section tone="light">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>The premise</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <Display size="lg" className="mt-8">
              {"Real estate requires\nmore than a listing."}
            </Display>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:pt-20">
          <EditorialText
            paragraphs={[
              "Aurum Haven approaches property through market intelligence, strategic advisory and disciplined execution — helping clients navigate residential, commercial and investment decisions across Dubai.",
              "We operate within the UAE regulated property ecosystem, and we work in the space between information and decision: gathering evidence, stating assumptions, and holding a position through negotiation and transfer.",
            ]}
          />
          <div className="mt-10">
            <ArrowLink to="/about">About the practice</ArrowLink>
          </div>
        </div>
      </div>

      <Reveal className="mt-20 md:mt-28">
        <ResponsiveImage name="detailFacade" ratio="cinema" className="media-zoom" />
      </Reveal>
    </Section>
  );
}

function Expertise() {
  const [activeIndex, setActive] = useState(0);
  const active = services[activeIndex] ?? services[0];

  return (
    <Section tone="dark">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Our expertise"
            title={"From opportunity\nto execution."}
            tone="dark"
          />
          <div className="mt-10 hidden lg:block">
            <Reveal>
              <ResponsiveImage
                name={active?.image ?? "interiorWarm"}
                ratio="landscape"
                className="transition-opacity duration-700"
              />
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul>
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={i * 40}>
                <Link
                  to="/services/$service"
                  params={{ service: service.slug }}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={cn(
                    "group grid gap-3 border-t border-sand/15 py-7 transition-colors duration-500 md:grid-cols-12 md:items-baseline md:gap-8",
                    activeIndex === i ? "border-gold/60" : "hover:border-sand/40",
                  )}
                >
                  <h3
                    className={cn(
                      "display-sm md:col-span-5",
                      activeIndex === i ? "text-gold-light" : "text-ivory",
                    )}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-sand/65 md:col-span-6">
                    {service.short}
                  </p>
                  <span
                    aria-hidden
                    className="label-eyebrow text-stone transition-transform duration-500 group-hover:translate-x-1 md:col-span-1 md:text-right"
                  >
                    &#8594;
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
          <div className="mt-12">
            <ArrowLink to="/services" tone="dark">
              All services
            </ArrowLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

function PropertyStories() {
  const [feature, ...rest] = properties;
  return (
    <Section tone="light">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Property stories"
          title={"Selected\nopportunities."}
          body="Editorial studies rather than a listing feed. Verified inventory replaces these records as it becomes available."
        />
        <Reveal delay={200}>
          <ArrowLink to="/properties">View properties</ArrowLink>
        </Reveal>
      </div>

      <div className="mt-16 space-y-20">
        {feature ? <PropertyCard property={feature} size="feature" /> : null}
        <div className="grid gap-14 md:grid-cols-3">
          {rest.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProcessPreview() {
  return (
    <Section tone="ivory">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="The process" title={"Clarity at\nevery stage."} />
          <div className="mt-10">
            <ArrowLink to="/process">The full process</ArrowLink>
          </div>
        </div>
        <div className="lg:col-span-8">
          <ProcessTimeline />
        </div>
      </div>
    </Section>
  );
}

function AboutBlock() {
  return (
    <Section tone="light">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <ResponsiveImage name="interiorWarm" ratio="tall" className="media-zoom" />
        </Reveal>
        <div className="lg:col-span-7 lg:pt-10">
          <SectionHeading eyebrow="The practice" title={"Built around\nbetter decisions."} />
          <dl className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {[
              {
                t: "Intelligence",
                d: "Evidence gathered and interpreted before a recommendation is made — with the reasoning shown, not summarised.",
              },
              {
                t: "Transparency",
                d: "Assumptions, risks and unknowns are stated in the same conversation as the opportunity.",
              },
              {
                t: "Regulatory awareness",
                d: "Work is conducted within the UAE regulated property framework, including DLD and RERA processes.",
              },
              {
                t: "Execution",
                d: "Negotiation, documentation and transfer coordinated to a defined position, with each step visible.",
              },
              {
                t: "Relationships",
                d: "Advisory continues past completion — leasing, portfolio review and the next decision.",
              },
              {
                t: "Structure",
                d: "CRM-supported records so that history informs future decisions rather than being re-discovered.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 50}>
                <dt className="label-eyebrow text-gold">{item.t}</dt>
                <dd className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.d}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

function InsightsBlock() {
  const featured = insights.slice(0, 3);
  return (
    <Section tone="graphite">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Market intelligence"
          title={"Written to be\nquestioned."}
          tone="dark"
        />
        <Reveal delay={180}>
          <ArrowLink to="/insights" tone="dark">
            All insights
          </ArrowLink>
        </Reveal>
      </div>
      <div className="mt-16 grid gap-14 md:grid-cols-3">
        {featured.map((insight) => (
          <div key={insight.slug} className="text-ivory [&_p]:text-sand/70">
            <InsightCard insight={insight} />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Expertise />
      <PropertyStories />
      <ProcessPreview />
      <AboutBlock />
      <InsightsBlock />
      <CTASection />
    </>
  );
}
