import { createFileRoute } from "@tanstack/react-router";

import {
  ButtonLink,
  EditorialText,
  Eyebrow,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";
import { FounderPortrait } from "@/components/site/FounderPortrait";
import { pageSeo } from "@/lib/seo";
import { isLiveValue, site } from "@/lib/site";

export const Route = createFileRoute("/founder")({
  head: () =>
    pageSeo({
      title: `Founder — ${site.founder.name} | Aurum Haven`,
      description: `Aurum Haven was founded in Dubai by ${site.founder.name}. Verified professional background is available via LinkedIn.`,
      path: "/founder",
      type: "profile",
      keywords: `${site.founder.name}, Aurum Haven founder, Dubai real estate founder, property broker Dubai`,
    }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder"
        title={site.founder.name}
        body={`Founder of Aurum Haven, established in Dubai in ${site.founded}.`}
        image="detailFacade"
        meta={[
          { label: "Role", value: site.founder.role },
          { label: "Based", value: site.location },
          { label: "Founded", value: site.founded },
          { label: "Profile", value: isLiveValue(site.founder.linkedIn) ? "LinkedIn" : "—" },
        ]}
      />

      <Section tone="light">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <FounderPortrait />
            <p className="mt-4 text-xs text-muted-foreground">
              Portrait placeholder. A verified photograph will be published here when
              available.
            </p>
          </Reveal>
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Profile" title={"Verified detail\nonly."} />
            <EditorialText
              className="mt-10"
              paragraphs={[
                `Aurum Haven was founded by ${site.founder.name} and operates from Dubai as ${site.legalName}.`,
                "We publish only information that has been verified. Professional background, career history and credentials are maintained through our company LinkedIn presence rather than paraphrased here.",
                "If you would like to discuss a property decision directly, the fastest route is a call or an enquiry through the contact page.",
              ]}
            />
            <div className="mt-12 flex flex-wrap gap-4">
              {isLiveValue(site.founder.linkedIn) ? (
                <ButtonLink href={site.founder.linkedIn} variant="outline">
                  View LinkedIn profile
                </ButtonLink>
              ) : (
                <ButtonLink href={site.companyLinkedIn} variant="outline">
                  Company LinkedIn
                </ButtonLink>
              )}
              <ButtonLink to="/contact" variant="ghost">
                Start a conversation
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="The firm" title={"A small practice,\nby design."} tone="dark" />
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <EditorialText
              tone="dark"
              paragraphs={[
                "Aurum Haven is a team of between two and ten people. That scale is intentional: advisory of this kind depends on attention to individual mandates rather than transaction volume.",
                "Client relationships are handled directly, with structured records so that context is never lost between conversations.",
              ]}
            />
            <div className="mt-10">
              <Eyebrow tone="gold">Company</Eyebrow>
              <p className="mt-4 text-sm text-sand/70">
                <a
                  href={site.companyLinkedIn}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-quiet hover:text-gold"
                >
                  Aurum Haven on LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
