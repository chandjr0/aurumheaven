import { createFileRoute } from "@tanstack/react-router";

import {
  EditorialText,
  Eyebrow,
  PageHero,
  ResponsiveImage,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";
import { stages } from "@/data/process";
import { media, alt } from "@/data/media";
import type { MediaKey } from "@/data/media";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () =>
    pageSeo({
      title: "Process — Aurum Haven | Clarity at Every Stage",
      description:
        "Discover, assess, advise, negotiate, execute, support — the six stages Aurum Haven works through on every Dubai property decision.",
      path: "/process",
      keywords:
        "Dubai property process, real estate advisory process, buy property Dubai steps, Aurum Haven process",
    }),
  component: ProcessPage,
});

const stageImages: MediaKey[] = [
  "interiorWarm",
  "commercialDistrict",
  "materials",
  "detailFacade",
  "heroArchitecture",
  "villaWaterfront",
];

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title={"Clarity at\nevery stage."}
        body="A defined sequence, followed consistently — so you always know what has been established, what is outstanding, and what happens next."
        image="heroArchitecture"
      />

      <Section tone="light">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Why sequence matters" title={"Order protects\njudgement."} />
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <EditorialText
              paragraphs={[
                "Property decisions go wrong less often through bad analysis than through analysis performed in the wrong order — commitment before evidence, negotiation before strategy, execution before documentation is understood.",
                "The sequence below is deliberately unglamorous. Its purpose is to make sure nothing consequential is settled before it has been examined.",
              ]}
            />
          </div>
        </div>
      </Section>

      {stages.map((stage, i) => {
        const dark = i % 2 === 1;
        const image = stageImages[i] ?? "heroArchitecture";
        return (
          <section
            key={stage.id}
            className={dark ? "bg-ink text-ivory" : "bg-ivory text-ink"}
          >
            <div className="mx-auto w-full max-w-[96rem] px-6 py-20 sm:px-10 md:py-28 lg:px-16">
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div
                  className={
                    i % 2 === 1
                      ? "lg:col-span-6 lg:order-2 lg:pt-6"
                      : "lg:col-span-6 lg:pt-6"
                  }
                >
                  <Reveal>
                    <Eyebrow tone="gold">Stage {stage.id}</Eyebrow>
                    <h2 className="display-lg mt-7">{stage.title}</h2>
                    <p className="lede mt-7 max-w-lg">{stage.summary}</p>
                    <p
                      className={
                        dark
                          ? "mt-6 max-w-lg text-sm leading-relaxed text-sand/70"
                          : "mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground"
                      }
                    >
                      {stage.detail}
                    </p>
                  </Reveal>
                </div>
                <Reveal
                  className={i % 2 === 1 ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}
                  delay={100}
                >
                  <div className="media-zoom aspect-[4/3] overflow-hidden">
                    <img
                      src={media[image]}
                      alt={alt[image]}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <Section tone="light">
        <SectionHeading
          eyebrow="After completion"
          title={"The relationship\ndoes not close."}
          body="Records, decisions and reasoning remain accessible, so the next conversation begins where the last one ended rather than at the beginning."
        />
        <Reveal className="mt-16">
          <ResponsiveImage name="materials" ratio="cinema" className="media-zoom" />
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
