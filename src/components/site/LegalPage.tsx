import { Container, Display, Eyebrow, Reveal, Section } from "./primitives";
import { CTASection } from "./CTASection";
import { site } from "@/lib/site";

export type LegalSection = { heading: string; paragraphs: string[] };

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <header className="flex h-dvh min-h-dvh w-full max-w-full flex-col justify-end overflow-hidden bg-ink text-ivory">
        <Container width="narrow" className="flex w-full min-w-0 flex-1 flex-col justify-end pt-28 pb-10 sm:pt-32 sm:pb-14 md:pb-20">
          <Eyebrow tone="gold">{eyebrow}</Eyebrow>
          <Display as="h1" size="md" className="mt-6 text-ivory sm:mt-8">
            {title}
          </Display>
          <p className="lede mt-6 max-w-xl text-sand/75 sm:mt-8">{intro}</p>
        </Container>
      </header>

      <Section tone="light" width="narrow">
        <p className="label-eyebrow text-muted-foreground">
          Placeholder content — to be reviewed and replaced with counsel-approved wording.
        </p>
        <div className="mt-14 space-y-12">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 40}>
              <div className="border-t border-border pt-7">
                <h2 className="display-sm">{section.heading}</h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-16 text-sm text-muted-foreground">
          Questions about this page can be directed to {site.name} on{" "}
          <a href={site.phoneHref} className="link-quiet text-ink">
            {site.phone}
          </a>
          .
        </p>
      </Section>

      <CTASection
        eyebrow="Contact"
        title={"Questions about\nthis page?"}
        body="We are happy to clarify anything relating to how we work or how information is handled."
      />
    </>
  );
}
