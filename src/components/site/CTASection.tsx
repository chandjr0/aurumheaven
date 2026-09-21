import { ButtonLink, Container, Display, Eyebrow, Reveal } from "./primitives";
import { site } from "@/lib/site";

export function CTASection({
  eyebrow = "Start here",
  title = "Let's talk\nabout your next move.",
  body = "Whether you are buying, selling, investing or evaluating an opportunity, begin with a conversation.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-graphite text-ivory" aria-labelledby="cta-heading">
      <Container className="py-24 sm:py-28 md:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <Eyebrow tone="gold">{eyebrow}</Eyebrow>
            <Display as="h2" size="lg" className="mt-8 text-ivory" id="cta-heading">
              {title}
            </Display>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5 lg:pt-4">
            <p className="lede max-w-md text-sand/80">{body}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink to="/contact" variant="onDark">
                Start a conversation
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="label-eyebrow link-quiet text-gold transition-colors duration-300 hover:text-gold-light"
              >
                {site.phone}
              </a>
            </div>
            <p className="label-eyebrow mt-10 text-stone">{site.location}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
