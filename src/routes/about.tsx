import { createFileRoute } from "@tanstack/react-router";

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
import { CTASection } from "@/components/site/CTASection";
import { pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      title: "About — Aurum Haven | Dubai Real Estate Brokerage",
      description:
        "Aurum Haven is a Dubai brokerage built around market intelligence, transparent advisory and disciplined execution within the UAE regulated property framework.",
      path: "/about",
      keywords:
        "about Aurum Haven, Dubai real estate brokerage, UAE property advisory, RERA Dubai, DLD Dubai",
    }),
  component: AboutPage,
});
const pillars = [
  {
    title: "Market intelligence",
    body: "We gather evidence before forming a view: comparable transactions, community context, building history and supply conditions. Where data is unavailable or unverified, that gap is named rather than filled with confident language.",
  },
  {
    title: "Transparency",
    body: "Every recommendation arrives with its reasoning, its assumptions and the conditions that would change it. Risk appears in the same document as opportunity, at the same volume.",
  },
  {
    title: "Execution",
    body: "Advice that cannot be executed is incomplete. We manage negotiation, documentation, stakeholder coordination and transfer, keeping progress visible at each stage.",
  },
  {
    title: "Relationships",
    body: "Most of our work is a continuation of an earlier conversation. Advisory persists past completion — into leasing, portfolio review and the decision after this one.",
  },
  {
    title: "Regulatory awareness",
    body: "We operate within the UAE regulated property ecosystem, including DLD and RERA processes, and we verify rather than assume where registration, escrow and documentation are concerned.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Aurum Haven"
        title={"A practice built for\nserious property decisions."}
        body="Aurum Haven is a professionally governed Dubai brokerage providing end-to-end advisory across residential, commercial and investment property."
        image="commercialDistrict"
        meta={[
          { label: "Founded", value: site.founded },
          { label: "Based", value: site.location },
          { label: "Team", value: "2–10 people" },
          { label: "Focus", value: "Advisory & execution" },
        ]}
      />

      <Section tone="light">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Who we are" title={"Advisory before\ntransaction."} />
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <EditorialText
              paragraphs={[
                "Aurum Haven For Real Estate Buying & Selling Brokerage Co LLC SOC operates from Dubai, advising clients across residential and commercial property, investment, off-plan acquisition, secondary-market transactions, leasing and portfolio review.",
                "Our positioning is straightforward: transforming Dubai real estate through intelligent automation, seamless transactions and smarter investments. In practice that means structured process, documented reasoning and systems that keep client history accessible rather than scattered.",
                "We are deliberately a small practice. Advisory of this kind depends on attention, and attention does not scale by adding volume.",
              ]}
            />
          </div>
        </div>

        <Reveal className="mt-20">
          <ResponsiveImage name="materials" ratio="cinema" className="media-zoom" />
        </Reveal>
      </Section>

      <Section tone="dark">
        <SectionHeading
          eyebrow="Our approach"
          title={"Five commitments\nthat shape the work."}
          tone="dark"
        />
        <ol className="mt-16">
          {pillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} delay={i * 50}>
              <div className="grid gap-5 border-t border-sand/15 py-10 md:grid-cols-12 md:gap-10">
                <h3 className="display-sm text-ivory md:col-span-5">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-sand/70 md:col-span-7">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="ivory">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <ResponsiveImage name="interiorWarm" ratio="landscape" className="media-zoom" />
          </Reveal>
          <div className="lg:col-span-6 lg:pt-8">
            <Eyebrow>Founder</Eyebrow>
            <p className="display-md mt-6">{site.founder.name}</p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Aurum Haven was founded in {site.founded} by {site.founder.name}. Verified
              professional background is available on LinkedIn; we publish nothing here that
              has not been confirmed.
            </p>
            <div className="mt-10">
              <ArrowLink to="/founder">Founder page</ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Next step"
        title={"Begin with\na conversation."}
        body="Tell us what you are considering. We will tell you what we know, what we would verify, and what we would advise."
      />
    </>
  );
}
