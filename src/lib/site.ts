export const site = {
  name: "Aurum Haven",
  legalName: "Aurum Haven For Real Estate Buying & Selling Brokerage Co LLC SOC",
  concept: "Precision in Property",
  tagline: "Real estate, with clarity.",
  positioning:
    "Transforming Dubai real estate through intelligent automation, seamless transactions, and smarter investments.",
  location: "Dubai, UAE",
  founded: "2026",
  phone: "050 190 5769",
  phoneHref: "tel:+971501905769",
  email: "add here",
  website: "https://www.aurumhavenrealestate.com/",
  companyLinkedIn: "https://www.linkedin.com/company/auspacious-homes/",
  social: {
    linkedIn: "https://www.linkedin.com/company/auspacious-homes/",
    instagram: "add here",
    facebook: "add here",
    x: "add here",
  },
  founder: {
    name: "Sreekuttan Prakash",
    role: "Founder & CEO",
    linkedIn: "add here",
  },
} as const;

export type AppPath =
  | "/"
  | "/about"
  | "/services"
  | "/properties"
  | "/insights"
  | "/process"
  | "/contact"
  | "/founder"
  | "/privacy"
  | "/terms";

export type NavItem = { label: string; to: AppPath };

/** Primary navigation. Deliberately unnumbered — no prefixes anywhere. */
export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Properties", to: "/properties" },
  { label: "Insights", to: "/insights" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Founder", to: "/founder" },
];

/** True when a contact/social value is a real URL or address (not a placeholder). */
export function isLiveValue(value: string): boolean {
  const v = value.trim().toLowerCase();
  return Boolean(v) && v !== "add here" && !v.startsWith("add here");
}
