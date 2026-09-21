import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageSeo({
      title: "Terms — Aurum Haven",
      description:
        "Terms covering the use of the Aurum Haven website, the nature of information published, and the scope of advisory services.",
      path: "/terms",
      noIndex: true,
    }),
  component: () => (
    <LegalPage
      eyebrow="Terms"
      title="Terms of use"
      intro="The basis on which this website and its content are provided."
      sections={[
        {
          heading: "Nature of information",
          paragraphs: [
            "Content on this website is provided for general information. It is editorial and qualitative in nature and does not constitute financial, legal or tax advice.",
            "Property records shown on this site are illustrative unless explicitly identified as verified inventory. No price, size, yield or availability is represented as confirmed.",
          ],
        },
        {
          heading: "No guaranteed outcomes",
          paragraphs: [
            "Property performance is not guaranteed. Nothing on this website should be read as a promise of return, appreciation, rental income or risk-free investment.",
          ],
        },
        {
          heading: "Advisory relationship",
          paragraphs: [
            "An advisory relationship begins only when engagement terms are agreed in writing. Enquiries submitted through this site do not create such a relationship.",
          ],
        },
        {
          heading: "Independent advice",
          paragraphs: [
            "We recommend obtaining independent legal, financial and tax advice before committing to any property transaction.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "Content and these terms may be updated from time to time. The version published here is the version that applies.",
          ],
        },
      ]}
    />
  ),
});
