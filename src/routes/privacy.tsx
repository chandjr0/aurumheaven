import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageSeo({
      title: "Privacy — Aurum Haven",
      description:
        "How Aurum Haven handles enquiry information, what is collected, and how it is used within our advisory process.",
      path: "/privacy",
      noIndex: true,
    }),
  component: () => (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy notice"
      intro="How information shared with Aurum Haven is collected, used and retained."
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "When you submit an enquiry, we collect the details you provide — typically your name, email address, phone number, stated area of interest and message.",
            "We do not collect information beyond what is required to respond to your enquiry and provide advisory services.",
          ],
        },
        {
          heading: "How information is used",
          paragraphs: [
            "Enquiry information is used to respond to you, to prepare relevant advice, and to maintain a record of our correspondence so that future conversations have context.",
          ],
        },
        {
          heading: "Retention and access",
          paragraphs: [
            "Records are retained for as long as needed to provide services and to meet applicable record-keeping requirements. Access is limited to those within the firm who need it.",
          ],
        },
        {
          heading: "Third parties",
          paragraphs: [
            "Where a transaction requires it, information may be shared with relevant parties such as legal advisers, developers or authorities within the UAE regulated property framework. We do not sell personal information.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            "You may request access to, correction of, or deletion of the information we hold about you by contacting us using the details on our contact page.",
          ],
        },
      ]}
    />
  ),
});
