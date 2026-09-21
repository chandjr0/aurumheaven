export type Stage = {
  id: string;
  title: string;
  summary: string;
  detail: string;
};

export const stages: Stage[] = [
  {
    id: "01",
    title: "Discover",
    summary: "Understanding intent before inventory.",
    detail:
      "We begin with the decision, not the listing: objective, horizon, constraints and the outcome that would count as success. Everything downstream is measured against this brief.",
  },
  {
    id: "02",
    title: "Assess",
    summary: "Evidence gathered and made legible.",
    detail:
      "Communities, buildings and specific opportunities are reviewed against comparable evidence. Where information is unavailable or unverified, we say so rather than fill the gap.",
  },
  {
    id: "03",
    title: "Advise",
    summary: "A recommendation with visible reasoning.",
    detail:
      "You receive a position, the reasoning behind it, and the conditions that would change it. Risks are stated in the same document as the opportunity.",
  },
  {
    id: "04",
    title: "Negotiate",
    summary: "A defined position, held.",
    detail:
      "Negotiation proceeds from an agreed strategy with explicit limits — on price, terms and timing — so that momentum never substitutes for judgement.",
  },
  {
    id: "05",
    title: "Execute",
    summary: "Documentation and transfer, coordinated.",
    detail:
      "We coordinate documentation, stakeholders and transfer within the UAE regulated property framework, keeping each step visible as it completes.",
  },
  {
    id: "06",
    title: "Support",
    summary: "The relationship continues after transfer.",
    detail:
      "After completion we remain the point of contact: handover matters, leasing decisions, portfolio review and the next question, supported by structured CRM records.",
  },
];
