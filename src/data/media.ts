import heroArchitecture from "@/assets/hero-architecture.jpg";
import interiorWarm from "@/assets/interior-warm.jpg";
import villaWaterfront from "@/assets/villa-waterfront.jpg";
import detailFacade from "@/assets/detail-facade.jpg";
import commercialDistrict from "@/assets/commercial-district.jpg";
import materials from "@/assets/materials.jpg";

export const media = {
  heroArchitecture,
  interiorWarm,
  villaWaterfront,
  detailFacade,
  commercialDistrict,
  materials,
} as const;

export type MediaKey = keyof typeof media;

export const alt: Record<MediaKey, string> = {
  heroArchitecture:
    "Contemporary Dubai residential tower facade in warm stone and glass at dusk",
  interiorWarm:
    "Minimal apartment interior with travertine floor, oak joinery and soft daylight",
  villaWaterfront: "Modern waterfront villa in concrete and glass beside still water",
  detailFacade: "Close crop of concrete and brass louvre detailing on a building facade",
  commercialDistrict: "Dubai commercial district skyline seen through soft morning haze",
  materials: "Stone, oak, brushed brass and frosted glass material samples laid flat",
};
