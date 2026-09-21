import type { MediaKey } from "./media";

export type Insight = {
  slug: string;
  category: "Market" | "Investment" | "Guides" | "Dubai" | "Off-Plan" | "Advisory";
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image: MediaKey;
  intro: string;
  body: { heading?: string; paragraphs: string[] }[];
  pullQuote: string;
};

export const insightCategories = [
  "All",
  "Market",
  "Investment",
  "Guides",
  "Dubai",
  "Off-Plan",
  "Advisory",
] as const;

export const insights: Insight[] = [
  {
    slug: "market-discipline",
    category: "Market",
    title: "Market intelligence is a discipline, not a number",
    excerpt:
      "Useful market understanding is built from evidence, context and stated assumptions — not from a single headline figure.",
    date: "2026",
    readingTime: "5 min",
    image: "commercialDistrict",
    intro:
      "The Dubai property conversation moves quickly. Interpreting it well requires slower habits: identifying which evidence is comparable, which is anecdotal, and where the reasoning is doing the work.",
    body: [
      {
        heading: "Comparability before conclusion",
        paragraphs: [
          "Two units in the same community can behave very differently. Orientation, floor level, building management and handover history all shift outcomes. Before drawing a conclusion, it is worth asking whether the evidence being cited is genuinely comparable to the decision in front of you.",
          "Where comparable evidence is thin, that is itself information. It usually means pricing is less certain and negotiation has more room.",
        ],
      },
      {
        heading: "Stated assumptions",
        paragraphs: [
          "Any view of the future rests on assumptions. Supply arriving, holding costs, financing conditions and demand patterns are all estimates. Written down, they can be challenged and revised. Left implicit, they harden into confidence that was never earned.",
          "We publish qualitative reasoning rather than projected figures. Where we do not have verified data, we say so.",
        ],
      },
      {
        heading: "What this means in practice",
        paragraphs: [
          "Ask what evidence supports a recommendation, how recent it is, and what would change the conclusion. Advisory that can answer those three questions clearly is usually worth taking seriously.",
        ],
      },
    ],
    pullQuote:
      "Where we do not have verified data, we say so. That is not a limitation of the advice — it is the advice.",
  },
  {
    slug: "off-plan-opportunities",
    category: "Off-Plan",
    title: "Reading an off-plan opportunity properly",
    excerpt:
      "Off-plan trades present certainty for future delivery. The quality of that trade depends on what you examine first.",
    date: "2026",
    readingTime: "6 min",
    image: "detailFacade",
    intro:
      "Off-plan purchases are frequently discussed in terms of design and payment plans. The more consequential questions sit earlier: who is delivering, under what protections, and against what expectations.",
    body: [
      {
        heading: "Start with delivery",
        paragraphs: [
          "A developer's record of completing projects and handing them over in the stated condition matters more than a rendering. Project registration and escrow arrangements within the UAE regulated framework should be verified rather than assumed.",
        ],
      },
      {
        heading: "Payment structure and cash flow",
        paragraphs: [
          "Construction-linked and post-handover structures distribute risk differently. Map any plan against your own cash flow across the full period, including a scenario where delivery arrives later than indicated.",
        ],
      },
      {
        heading: "What the contract actually covers",
        paragraphs: [
          "Specification schedules define what is being purchased. Handover terms define what happens when reality differs from the schedule. Both deserve legal review, not a skim.",
        ],
      },
    ],
    pullQuote:
      "Plan for a delivery range rather than a delivery date, and the rest of the decision becomes easier.",
  },
  {
    slug: "investment-strategy-first",
    category: "Investment",
    title: "Strategy first, asset second",
    excerpt:
      "Objective, horizon and liquidity requirement should be settled before any specific opportunity enters the conversation.",
    date: "2026",
    readingTime: "5 min",
    image: "villaWaterfront",
    intro:
      "Investors often arrive with an asset in mind. The more productive starting point is the position that asset is meant to occupy — and what would make it the wrong instrument for the job.",
    body: [
      {
        heading: "Define the position",
        paragraphs: [
          "Capital preservation, income, or a longer-horizon growth view lead to different assets. So does the point at which you may need liquidity. Settling this first prevents opportunistic decisions from quietly redefining the strategy.",
        ],
      },
      {
        heading: "Risk stated plainly",
        paragraphs: [
          "Property performance is not guaranteed. Vacancy, holding cost, transaction fees, supply and timing all affect real outcomes, and no adviser can remove that uncertainty. What can be done is to make it explicit and sized.",
        ],
      },
      {
        heading: "Advice alongside advice",
        paragraphs: [
          "Property advisory works best next to independent legal and financial counsel. We coordinate rather than substitute.",
        ],
      },
    ],
    pullQuote:
      "No adviser can remove uncertainty. It can be made explicit, sized, and accounted for.",
  },
  {
    slug: "buying-considerations-dubai",
    category: "Guides",
    title: "Considerations before buying in Dubai",
    excerpt:
      "A practical sequence for buyers: tenure, total cost, building quality, documentation and exit.",
    date: "2026",
    readingTime: "7 min",
    image: "interiorWarm",
    intro:
      "Buying property in Dubai is procedurally clear and well regulated. Most difficulty arises not from the process but from questions asked too late.",
    body: [
      {
        heading: "Tenure and eligibility",
        paragraphs: [
          "Confirm freehold or leasehold status and any conditions attached to it. This shapes both ownership and future disposal.",
        ],
      },
      {
        heading: "Total cost of ownership",
        paragraphs: [
          "Purchase price is one line. Transaction fees, service charges, maintenance and financing costs form the rest, and they persist. Model them across your intended holding period.",
        ],
      },
      {
        heading: "Building and documentation",
        paragraphs: [
          "Building management quality affects daily experience and long-term value. Documentation — title, no-objection certificates, mortgage position, tenancy status — determines whether a transaction proceeds smoothly.",
        ],
      },
      {
        heading: "Exit, considered at entry",
        paragraphs: [
          "The most useful question at purchase is who the next buyer is likely to be. Assets with a clear answer tend to behave better when it is time to sell.",
        ],
      },
    ],
    pullQuote:
      "The most useful question at purchase is who the next buyer is likely to be.",
  },
  {
    slug: "reading-a-community",
    category: "Dubai",
    title: "How to read a Dubai community",
    excerpt:
      "Communities are systems: access, amenity, management, maturity. Each one shapes how an address performs.",
    date: "2026",
    readingTime: "6 min",
    image: "heroArchitecture",
    intro:
      "An address is inseparable from its community. Reading that community accurately explains more about future experience than any individual unit tour.",
    body: [
      {
        heading: "Access and movement",
        paragraphs: [
          "How the community connects to arterial routes, transit and daily destinations governs everyday experience and long-term appeal.",
        ],
      },
      {
        heading: "Amenity and maturity",
        paragraphs: [
          "Established communities offer known amenity and known service standards. Emerging communities offer potential alongside construction, incomplete infrastructure and less certainty. Neither is better in the abstract.",
        ],
      },
      {
        heading: "Management quality",
        paragraphs: [
          "Consistent maintenance, sensible service charges and responsive management are unglamorous and decisive. They are also observable if you look.",
        ],
      },
    ],
    pullQuote:
      "Established and emerging communities are different instruments, not better and worse ones.",
  },
  {
    slug: "commercial-fundamentals",
    category: "Advisory",
    title: "Commercial fundamentals for occupiers",
    excerpt:
      "Floorplate, licensing, fit-out and flexibility — the terms that determine whether a space keeps working.",
    date: "2026",
    readingTime: "5 min",
    image: "materials",
    intro:
      "Occupiers tend to evaluate commercial space visually and commit contractually. The gap between those two activities is where cost accumulates.",
    body: [
      {
        heading: "Fit for operation",
        paragraphs: [
          "Floorplate efficiency, access, servicing and permitted use should be tested against how the business actually runs today and plausibly runs in three years.",
        ],
      },
      {
        heading: "Fit-out and reinstatement",
        paragraphs: [
          "Fit-out obligations, contributions and reinstatement requirements can rival rent in significance. They belong in the negotiation, not the appendix.",
        ],
      },
      {
        heading: "Flexibility has value",
        paragraphs: [
          "Expansion rights, break provisions and renewal mechanics are worth negotiating even when growth feels distant. They cost least when the relationship is new.",
        ],
      },
    ],
    pullQuote: "Flexibility costs least when the relationship is new.",
  },
];

export const getInsight = (slug: string): Insight | undefined =>
  insights.find((i) => i.slug === slug);

export const insightsBySlugs = (slugs: string[]): Insight[] =>
  slugs.map((s) => getInsight(s)).filter((i): i is Insight => Boolean(i));
