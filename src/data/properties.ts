import type { MediaKey } from "./media";

/**
 * SAMPLE / EDITABLE CONTENT.
 * These are illustrative property stories, not active listings. No prices,
 * yields, sizes or availability are stated. Replace this array with real
 * inventory when it becomes available — every page consumes this shape.
 */
export type Property = {
  slug: string;
  name: string;
  location: string;
  type: "Residential" | "Commercial" | "Off-Plan" | "Waterfront";
  descriptor: string;
  image: MediaKey;
  gallery: MediaKey[];
  overview: string[];
  attributes: { label: string; value: string }[];
  architecture: string;
  locationContext: string;
};

export const propertyTypes = [
  "All",
  "Residential",
  "Commercial",
  "Off-Plan",
  "Waterfront",
] as const;

export const properties: Property[] = [
  {
    slug: "stone-terraces-residence",
    name: "Stone Terraces Residence",
    location: "Dubai — central residential district",
    type: "Residential",
    descriptor: "A stacked-terrace apartment building in warm stone and deep-set glass.",
    image: "heroArchitecture",
    gallery: ["heroArchitecture", "interiorWarm", "detailFacade"],
    overview: [
      "A residential building organised around deep terraces, where shade is produced by the architecture itself rather than added to it. The facade reads as solid mass from a distance and opens progressively as you approach.",
      "This entry is illustrative and structured for replacement with verified inventory. No pricing, sizing or availability information is stated because none has been confirmed.",
    ],
    attributes: [
      { label: "Category", value: "Residential" },
      { label: "Emirate", value: "Dubai, UAE" },
      { label: "Status", value: "Sample record — awaiting verified data" },
      { label: "Enquiries", value: "Direct with Aurum Haven" },
    ],
    architecture:
      "Load-bearing stone expression with recessed glazing, oak joinery internally and travertine underfoot. Materials are warm and few, chosen to age rather than date.",
    locationContext:
      "Positioned within an established residential district with direct access to arterial routes and community amenity. Specific address details are withheld until confirmed.",
  },
  {
    slug: "haze-district-offices",
    name: "Haze District Offices",
    location: "Dubai — commercial district",
    type: "Commercial",
    descriptor: "Efficient floorplates in a managed commercial tower.",
    image: "commercialDistrict",
    gallery: ["commercialDistrict", "detailFacade", "materials"],
    overview: [
      "A commercial building story illustrating how we present occupier-focused assets: floorplate logic, access, management quality and expansion capacity ahead of aesthetics.",
      "Sample record. Permitted use, specification and commercial terms are confirmed with the relevant parties before any enquiry proceeds.",
    ],
    attributes: [
      { label: "Category", value: "Commercial" },
      { label: "Emirate", value: "Dubai, UAE" },
      { label: "Status", value: "Sample record — awaiting verified data" },
      { label: "Enquiries", value: "Direct with Aurum Haven" },
    ],
    architecture:
      "Concrete frame with brass-toned solar louvres, producing a shaded working perimeter and consistent daylight across the floorplate.",
    locationContext:
      "Within a commercial cluster served by main road and transit access. Precise location shared on enquiry once verified.",
  },
  {
    slug: "still-water-villa",
    name: "Still Water Villa",
    location: "Dubai — waterfront community",
    type: "Waterfront",
    descriptor: "Horizontal concrete volumes set against a quiet waterline.",
    image: "villaWaterfront",
    gallery: ["villaWaterfront", "interiorWarm", "materials"],
    overview: [
      "A waterfront villa narrative: two horizontal volumes, glazing to the water, and a restrained material palette that lets the setting do the work.",
      "Illustrative entry, structured for replacement. No bedroom count, plot size, price or availability is claimed.",
    ],
    attributes: [
      { label: "Category", value: "Waterfront residential" },
      { label: "Emirate", value: "Dubai, UAE" },
      { label: "Status", value: "Sample record — awaiting verified data" },
      { label: "Enquiries", value: "Direct with Aurum Haven" },
    ],
    architecture:
      "Board-marked concrete, full-height glazing and shaded terraces. Interiors continue the exterior palette without decoration.",
    locationContext:
      "Set within a waterfront community with private frontage. Community and access details confirmed on enquiry.",
  },
  {
    slug: "louvre-house-off-plan",
    name: "Louvre House",
    location: "Dubai — emerging district",
    type: "Off-Plan",
    descriptor: "An off-plan concept defined by brass fin shading.",
    image: "detailFacade",
    gallery: ["detailFacade", "heroArchitecture", "interiorWarm"],
    overview: [
      "An off-plan story used to demonstrate how we frame pre-completion opportunities: developer record, escrow arrangements, payment structure and delivery expectations examined before design appeal.",
      "Sample record only. Registration, escrow and payment terms are always verified against the regulated framework before advice is given.",
    ],
    attributes: [
      { label: "Category", value: "Off-plan residential" },
      { label: "Emirate", value: "Dubai, UAE" },
      { label: "Status", value: "Sample record — awaiting verified data" },
      { label: "Enquiries", value: "Direct with Aurum Haven" },
    ],
    architecture:
      "Vertical brass fins over a concrete structure, producing a shifting facade through the day and shaded internal edges.",
    locationContext:
      "Located within a district under active development. Infrastructure and delivery context reviewed as part of any assessment.",
  },
];

export const getProperty = (slug: string): Property | undefined =>
  properties.find((p) => p.slug === slug);
