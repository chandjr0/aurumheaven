import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import {
  Container,
  Display,
  Eyebrow,
  ResponsiveImage,
  Reveal,
  Section,
} from "@/components/site/primitives";
import { ContactForm } from "@/components/site/ContactForm";
import { pageSeo } from "@/lib/seo";
import { isLiveValue, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: "Contact — Aurum Haven | Dubai Real Estate Advisory",
      description: `Speak with Aurum Haven about buying, selling, investing or leasing property in Dubai. Call ${site.phone} or send an enquiry.`,
      path: "/contact",
      keywords:
        "contact Aurum Haven, Dubai real estate enquiry, property broker Dubai phone, buy sell lease Dubai",
    }),
  component: ContactPage,
});

function Detail({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0 border-t border-sand/15 py-5 first:border-t-0 first:pt-0">
      <dt className="label-eyebrow text-stone">{label}</dt>
      <dd className="mt-3">{children}</dd>
    </div>
  );
}

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="text-sm italic text-sand/50">{children}</span>;
}

function ContactPage() {
  return (
    <>
      {/* Full-viewport hero with vertically centered, balanced columns */}
      <header className="relative flex h-dvh min-h-dvh w-full max-w-full flex-col overflow-hidden bg-ink text-ivory">
        <Container className="relative flex w-full min-w-0 flex-1 flex-col justify-center pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-16">
          <div className="grid min-w-0 items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
            <div className="rise min-w-0 lg:col-span-6 xl:col-span-7">
              <Eyebrow tone="gold">Contact</Eyebrow>
              <Display as="h1" size="lg" className="mt-6 max-w-2xl text-ivory sm:mt-8">
                {"Let's begin\nwith a conversation."}
              </Display>
              <p className="lede mt-8 max-w-md text-sand/80">
                Tell us what you are considering. We respond with substance — not a
                template.
              </p>
            </div>

            <div
              className="rise min-w-0 lg:col-span-6 xl:col-span-5"
              style={{ animationDelay: "140ms" }}
            >
              <dl className="max-w-md lg:ml-auto lg:max-w-none">
                <Detail label="Phone">
                  <a
                    href={site.phoneHref}
                    className="link-quiet font-display text-2xl text-ivory transition-colors duration-300 hover:text-gold sm:text-[1.75rem]"
                  >
                    {site.phone}
                  </a>
                </Detail>
                <Detail label="Email">
                  {isLiveValue(site.email) ? (
                    <a
                      href={`mailto:${site.email}`}
                      className="link-quiet text-sm text-sand/80 hover:text-gold"
                    >
                      {site.email}
                    </a>
                  ) : (
                    <Placeholder>{site.email}</Placeholder>
                  )}
                </Detail>
                <Detail label="Location">
                  <span className="text-sm text-sand/80">{site.location}</span>
                </Detail>
                <Detail label="LinkedIn">
                  <a
                    href={site.companyLinkedIn}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-quiet text-sm text-sand/80 hover:text-gold"
                  >
                    Aurum Haven on LinkedIn
                  </a>
                </Detail>
                <Detail label="Instagram">
                  {isLiveValue(site.social.instagram) ? (
                    <span className="text-sm text-sand/80">{site.social.instagram}</span>
                  ) : (
                    <Placeholder>{site.social.instagram}</Placeholder>
                  )}
                </Detail>
                <Detail label="Facebook">
                  {isLiveValue(site.social.facebook) ? (
                    <span className="text-sm text-sand/80">{site.social.facebook}</span>
                  ) : (
                    <Placeholder>{site.social.facebook}</Placeholder>
                  )}
                </Detail>
                <Detail label="X">
                  {isLiveValue(site.social.x) ? (
                    <span className="text-sm text-sand/80">{site.social.x}</span>
                  ) : (
                    <Placeholder>{site.social.x}</Placeholder>
                  )}
                </Detail>
              </dl>
            </div>
          </div>
        </Container>
      </header>

      <Section tone="light">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-16 xl:gap-20">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Enquiry</Eyebrow>
            <p className="display-sm mt-6 max-w-md">
              Share a few details and we will prepare a considered response.
            </p>
            <div className="mt-10 hidden lg:block">
              <ResponsiveImage name="interiorWarm" ratio="tall" className="media-zoom" />
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Aurum Haven operates within the UAE regulated property ecosystem, including
              DLD and RERA processes.
            </p>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
