import { site } from "./site";

/** Canonical origin — trailing slash stripped for path joining. */
export const SITE_ORIGIN = site.website.replace(/\/$/, "");

export const defaultKeywords = [
  "Aurum Haven",
  "Dubai real estate",
  "Dubai property advisory",
  "real estate brokerage Dubai",
  "off-plan Dubai",
  "investment property Dubai",
  "residential Dubai",
  "commercial real estate Dubai",
  "property leasing Dubai",
  "UAE real estate",
].join(", ");

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return `${SITE_ORIGIN}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  type?: "website" | "article" | "profile";
  image?: string;
  noIndex?: boolean;
};

/**
 * Shared head meta for every route: title, description, keywords,
 * canonical, Open Graph, and Twitter/X tags with absolute URLs.
 */
export function pageSeo({
  title,
  description,
  path,
  keywords = defaultKeywords,
  type = "website",
  image,
  noIndex = false,
}: PageSeoInput) {
  const url = absoluteUrl(path);
  const ogImage = image?.startsWith("http") ? image : absoluteUrl(image ?? "/og-image.jpg");

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: site.name },
      {
        name: "robots",
        content: noIndex
          ? "noindex, nofollow"
          : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: noIndex ? "noindex" : "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: ogImage },
      { property: "og:image:alt", content: `${site.name} — ${site.concept}` },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: "en_AE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: `${site.name} — ${site.concept}` },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
