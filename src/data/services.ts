import type { MediaKey } from "./media";

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  headline: string;
  intro: string;
  image: MediaKey;
  accentImage: MediaKey;
  help: { title: string; body: string }[];
  considerations: string[];
  relatedInsights: string[];
};

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential",
    short: "Homes, considered as long-term decisions.",
    summary:
      "Advisory for buyers and sellers of apartments, townhouses and villas across Dubai's established and emerging residential communities.",
    headline: "A home is a\nlong-term position.",
    intro:
      "Residential decisions carry both personal and financial weight. We begin with your intent — how you live, how long you intend to hold, and what matters when it comes time to exit — and work outward into communities, buildings and specific units.",
    image: "interiorWarm",
    accentImage: "materials",
    help: [
      {
        title: "Requirement definition",
        body: "A structured brief covering location, layout, orientation, community amenity and holding horizon, so that shortlists stay disciplined rather than reactive.",
      },
      {
        title: "Community and building analysis",
        body: "Comparative review of communities and individual buildings, including handover history, service charge context and resale liquidity where information is available.",
      },
      {
        title: "Pricing and negotiation",
        body: "Valuation reasoning based on comparable evidence, followed by negotiation conducted on your behalf with a clear position and defined limits.",
      },
      {
        title: "Transaction and after-sales",
        body: "Coordination through the transfer process with developers, conveyancing parties and relevant authorities, followed by continued support after completion.",
      },
    ],
    considerations: [
      "Service charges and ongoing ownership cost differ meaningfully between buildings.",
      "Layout efficiency often matters more to resale than headline size.",
      "Freehold and leasehold status shapes both ownership and exit options.",
      "Financing arrangements should be confirmed before offers are made.",
    ],
    relatedInsights: ["buying-considerations-dubai", "reading-a-community"],
  },
  {
    slug: "commercial",
    title: "Commercial",
    short: "Offices, retail and mixed-use, aligned to operations.",
    summary:
      "Acquisition, disposal and occupier advisory for office, retail and mixed-use assets, aligned to operational and investment requirements.",
    headline: "Commercial space\nis operational strategy.",
    intro:
      "Commercial property decisions sit alongside headcount plans, customer access and capital allocation. We work with owners and occupiers to align the asset with the way the business actually operates.",
    image: "commercialDistrict",
    accentImage: "detailFacade",
    help: [
      {
        title: "Occupier requirement mapping",
        body: "Translating operational needs — access, floorplate, fit-out, expansion — into a defensible search or disposal strategy.",
      },
      {
        title: "Asset and location review",
        body: "Assessment of building specification, management quality and location fundamentals within the relevant Dubai submarket.",
      },
      {
        title: "Commercial terms",
        body: "Structuring and negotiating price, lease terms, incentives and handover conditions with attention to downstream flexibility.",
      },
      {
        title: "Execution coordination",
        body: "Managing documentation, licensing touchpoints and stakeholder coordination through to completion.",
      },
    ],
    considerations: [
      "Permitted use and licensing requirements should be confirmed early.",
      "Fit-out obligations and reinstatement terms materially affect total cost.",
      "Building management quality influences both experience and value retention.",
      "Expansion and exit flexibility deserve as much attention as headline rate.",
    ],
    relatedInsights: ["commercial-fundamentals", "market-discipline"],
  },
  {
    slug: "investment",
    title: "Investment",
    short: "Capital deployed with evidence, not enthusiasm.",
    summary:
      "Investment advisory grounded in comparable evidence, risk framing and clearly stated assumptions — never in promised outcomes.",
    headline: "Evidence before\nenthusiasm.",
    intro:
      "Investment advisory should make assumptions visible. We set out what is known, what is estimated and what is uncertain, so decisions rest on reasoning you can interrogate rather than on projections presented as fact.",
    image: "villaWaterfront",
    accentImage: "commercialDistrict",
    help: [
      {
        title: "Strategy definition",
        body: "Clarifying objective, horizon, liquidity requirement and risk tolerance before any asset is considered.",
      },
      {
        title: "Opportunity assessment",
        body: "Structured review of location, asset quality, tenure and comparable evidence, with assumptions stated explicitly.",
      },
      {
        title: "Risk framing",
        body: "Explicit discussion of what could go against the thesis — supply, holding cost, liquidity, timing and regulatory change.",
      },
      {
        title: "Acquisition and reporting",
        body: "Negotiation and transaction management, with structured records that support ongoing portfolio review.",
      },
    ],
    considerations: [
      "Property performance is not guaranteed, and past pricing is not a forecast.",
      "Holding costs, vacancy periods and transaction fees change real outcomes.",
      "Liquidity varies significantly by asset type, community and price band.",
      "Independent financial and legal advice should support any material commitment.",
    ],
    relatedInsights: ["investment-strategy-first", "market-discipline"],
  },
  {
    slug: "off-plan",
    title: "Off-Plan",
    short: "Future assets, assessed in the present.",
    summary:
      "Guidance on off-plan acquisitions, developer selection, payment structures and handover expectations within the regulated framework.",
    headline: "Buying something\nthat does not exist yet.",
    intro:
      "Off-plan purchases trade present certainty for future delivery. That trade can be sound — but only when the developer, the payment structure, the escrow arrangements and the handover expectations are examined properly.",
    image: "detailFacade",
    accentImage: "interiorWarm",
    help: [
      {
        title: "Developer and project review",
        body: "Assessment of delivery history, project registration and escrow arrangements within the UAE regulated framework.",
      },
      {
        title: "Payment structure analysis",
        body: "Mapping payment plans against your cash flow, including construction-linked and post-handover structures.",
      },
      {
        title: "Documentation review support",
        body: "Working through sales documentation, specification schedules and handover terms alongside your legal advisers.",
      },
      {
        title: "Handover and beyond",
        body: "Support through snagging, handover coordination and decisions on holding, leasing or resale.",
      },
    ],
    considerations: [
      "Delivery timelines can move; plan for a range rather than a date.",
      "Specification schedules define what is actually being purchased.",
      "Resale before completion is subject to developer and regulatory conditions.",
      "Escrow and project registration should always be verified.",
    ],
    relatedInsights: ["off-plan-opportunities", "buying-considerations-dubai"],
  },
  {
    slug: "secondary-market",
    title: "Secondary Market",
    short: "Existing stock, priced on evidence.",
    summary:
      "Buying and selling completed property, where inspection, comparable pricing and negotiation carry the decision.",
    headline: "What exists can\nbe examined.",
    intro:
      "The secondary market rewards diligence. A completed unit can be inspected, its building understood and its pricing tested against transacted evidence — advantages worth using fully.",
    image: "heroArchitecture",
    accentImage: "materials",
    help: [
      {
        title: "Comparable pricing",
        body: "Positioning price against transacted evidence within the same building and community rather than aspirational asking prices.",
      },
      {
        title: "Condition and building review",
        body: "Structured assessment of unit condition, building maintenance and outstanding obligations before commitment.",
      },
      {
        title: "Seller-side positioning",
        body: "For sellers: presentation, pricing strategy and buyer qualification designed to shorten time to a credible offer.",
      },
      {
        title: "Transfer management",
        body: "Coordination of no-objection certificates, mortgage releases and transfer appointments through to registration.",
      },
    ],
    considerations: [
      "Outstanding service charges and mortgage positions affect transfer timing.",
      "Tenanted units carry existing contractual obligations.",
      "Asking price and transacted price frequently diverge.",
      "Inspection findings are legitimate negotiation material.",
    ],
    relatedInsights: ["buying-considerations-dubai", "reading-a-community"],
  },
  {
    slug: "leasing",
    title: "Leasing",
    short: "Tenancy handled precisely, on both sides.",
    summary:
      "Landlord and tenant representation across residential and commercial leasing, with attention to terms rather than speed alone.",
    headline: "Terms outlive\nthe signature.",
    intro:
      "A lease is a multi-year relationship compressed into a document. We work on both sides of it — positioning assets for the right tenant, and protecting occupiers from terms that become expensive later.",
    image: "interiorWarm",
    accentImage: "heroArchitecture",
    help: [
      {
        title: "Landlord representation",
        body: "Rental positioning, presentation and tenant qualification aimed at sustainable occupancy rather than the fastest signature.",
      },
      {
        title: "Tenant representation",
        body: "Search, shortlisting and negotiation on your behalf, with attention to renewal, escalation and exit provisions.",
      },
      {
        title: "Terms and documentation",
        body: "Review of tenancy contracts, deposits, maintenance responsibilities and registration requirements.",
      },
      {
        title: "Ongoing management support",
        body: "Coordination through renewals, handovers and the practical questions that arise mid-tenancy.",
      },
    ],
    considerations: [
      "Renewal and escalation provisions matter more than the first-year figure.",
      "Maintenance responsibility should be explicit, not assumed.",
      "Tenancy registration is a requirement, not an afterthought.",
      "Notice periods shape flexibility on both sides.",
    ],
    relatedInsights: ["reading-a-community", "market-discipline"],
  },
  {
    slug: "portfolio-advisory",
    title: "Portfolio Advisory",
    short: "Holdings reviewed as one position.",
    summary:
      "Structured review of multiple holdings — concentration, performance, holding cost and disposal sequencing — as a single portfolio.",
    headline: "Individual assets,\none position.",
    intro:
      "Portfolios accumulate. Reviewed together rather than asset by asset, exposure, cost and opportunity look different — and decisions about what to hold, improve or release become clearer.",
    image: "materials",
    accentImage: "villaWaterfront",
    help: [
      {
        title: "Portfolio mapping",
        body: "A consolidated view of holdings by community, asset type, tenure and tenancy status.",
      },
      {
        title: "Concentration and exposure",
        body: "Identifying where exposure clusters and what that means for liquidity and resilience.",
      },
      {
        title: "Hold, improve or release",
        body: "Asset-level recommendations with stated reasoning, including sequencing for any disposals.",
      },
      {
        title: "Ongoing review",
        body: "Periodic review cadence supported by CRM records, so decisions build on documented history.",
      },
    ],
    considerations: [
      "Concentration in one community or asset type increases correlated risk.",
      "Holding cost across a portfolio is often understated.",
      "Disposal sequencing affects realised pricing.",
      "Coordinated tax and legal advice should sit alongside property advisory.",
    ],
    relatedInsights: ["investment-strategy-first", "market-discipline"],
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
