import { createFileRoute, notFound } from "@tanstack/react-router";

import {
  Container,
  Display,
  Eyebrow,
  ResponsiveImage,
  Reveal,
  Section,
} from "@/components/site/primitives";
import { RelatedInsights } from "@/components/site/cards";
import { CTASection } from "@/components/site/CTASection";
import { getInsight, insights } from "@/data/insights";
import { absoluteUrl, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const insight = getInsight(params.slug);
    if (!insight) throw notFound();
    return { insight };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return pageSeo({
        title: "Article unavailable — Aurum Haven",
        description: "This insight could not be found.",
        path: "/insights",
        noIndex: true,
      });
    }
    const { insight } = loaderData;
    const seo = pageSeo({
      title: `${insight.title} — Aurum Haven`,
      description: insight.excerpt,
      path: `/insights/${insight.slug}`,
      type: "article",
      keywords: `${insight.category}, Dubai real estate, ${insight.title}, Aurum Haven insights`,
    });
    return {
      ...seo,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: insight.title,
            description: insight.excerpt,
            datePublished: insight.date,
            articleSection: insight.category,
            author: { "@type": "Organization", name: site.name, url: site.website },
            publisher: {
              "@type": "Organization",
              name: site.name,
              url: site.website,
              logo: absoluteUrl("/apple-touch-icon.png"),
            },
            mainEntityOfPage: absoluteUrl(`/insights/${insight.slug}`),
          }),
        },
      ],
    };
  },
  component: InsightDetailPage,
});

function InsightDetailPage() {
  const { insight } = Route.useLoaderData();
  const related = insights.filter((i) => i.slug !== insight.slug).slice(0, 3);

  return (
    <article>
      <header className="flex h-dvh min-h-dvh w-full max-w-full flex-col justify-end overflow-hidden bg-ink text-ivory">
        <Container
          width="narrow"
          className="flex w-full min-w-0 flex-1 flex-col justify-end pt-28 pb-10 sm:pt-32 sm:pb-14 md:pb-20"
        >
          <div className="rise flex flex-wrap items-center gap-4 sm:gap-6">
            <Eyebrow tone="gold">{insight.category}</Eyebrow>
            <span className="label-eyebrow text-stone">{insight.date}</span>
            <span className="label-eyebrow text-stone">{insight.readingTime} read</span>
          </div>
          <Display as="h1" size="md" className="rise mt-6 text-ivory sm:mt-8">
            {insight.title}
          </Display>
        </Container>
      </header>

      <div className="bg-ink">
        <Container>
          <ResponsiveImage name={insight.image} ratio="cinema" priority />
        </Container>
      </div>

      <Section tone="light" width="narrow">
        <Reveal>
          <p className="lede text-foreground/85">{insight.intro}</p>
        </Reveal>

        <div className="mt-16 space-y-14">
          {insight.body.map((block, i) => (
            <Reveal key={i} delay={40}>
              <div>
                {block.heading ? (
                  <h2 className="display-sm mb-5">{block.heading}</h2>
                ) : null}
                <div className="space-y-5">
                  {block.paragraphs.map((p, j) => (
                    <p key={j} className="text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <blockquote className="border-l border-gold pl-8">
            <p className="display-sm italic">{insight.pullQuote}</p>
          </blockquote>
        </Reveal>

        <Reveal className="mt-20">
          <ResponsiveImage name="detailFacade" ratio="wide" className="media-zoom" />
        </Reveal>
      </Section>

      <Section tone="ivory">
        <RelatedInsights items={related} />
      </Section>

      <CTASection
        eyebrow="Advisory"
        title={"Turn reading\ninto a decision."}
        body="We can apply this thinking to a specific property, community or portfolio question."
      />
    </article>
  );
}
