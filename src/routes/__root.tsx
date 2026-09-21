import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportRuntimeError } from "../lib/runtime-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageTransition } from "@/components/site/PageTransition";
import { Container, Display, Eyebrow, ButtonLink } from "@/components/site/primitives";
import { absoluteUrl, defaultKeywords } from "@/lib/seo";
import { isLiveValue, site } from "@/lib/site";

function NotFoundComponent() {
  return (
    <main className="flex min-h-screen items-center bg-ink text-ivory">
      <Container>
        <Eyebrow tone="gold">Page not found</Eyebrow>
        <Display as="h1" size="lg" className="mt-8 max-w-3xl text-ivory">
          {"The page you're looking for\nhas moved."}
        </Display>
        <p className="lede mt-8 max-w-md text-sand/70">
          The address may have changed, or the page may no longer exist.
        </p>
        <div className="mt-12">
          <ButtonLink to="/" variant="onDark">
            Return home
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportRuntimeError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="flex min-h-screen items-center bg-ink text-ivory">
      <Container>
        <Eyebrow tone="gold">Something interrupted</Eyebrow>
        <Display as="h1" size="md" className="mt-8 max-w-2xl text-ivory">
          {"This page didn't load."}
        </Display>
        <p className="lede mt-6 max-w-md text-sand/70">
          You can try again, or return to the homepage.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="label-eyebrow border border-sand/30 px-7 py-4 text-ivory transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ink focus-visible:border-gold"
          >
            Try again
          </button>
          <Link
            to="/"
            className="label-eyebrow border border-transparent px-7 py-4 text-sand/70 transition-colors duration-500 hover:text-ivory"
          >
            Go home
          </Link>
        </div>
      </Container>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aurum Haven — Dubai Real Estate Advisory" },
      {
        name: "description",
        content:
          "Aurum Haven is a Dubai real estate brokerage providing advisory across residential, commercial, investment and off-plan property.",
      },
      { name: "keywords", content: defaultKeywords },
      { name: "author", content: site.name },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_AE" },
      { property: "og:image", content: absoluteUrl("/og-image.jpg") },
      { property: "og:image:alt", content: `${site.name} — ${site.concept}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: absoluteUrl("/og-image.jpg") },
      { name: "theme-color", content: "#0A0A09" },
      { name: "msapplication-TileColor", content: "#0A0A09" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "geo.region", content: "AE-DU" },
      { name: "geo.placename", content: "Dubai" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon-mark.png", type: "image/png", sizes: "256x256" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: site.name,
          legalName: site.legalName,
          description: site.positioning,
          url: site.website,
          telephone: site.phone,
          image: absoluteUrl("/logo-aurum-haven.png"),
          email: isLiveValue(site.email) ? site.email : undefined,
          areaServed: {
            "@type": "City",
            name: "Dubai",
            containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
          sameAs: [site.companyLinkedIn],
          founder: {
            "@type": "Person",
            name: site.founder.name,
            jobTitle: site.founder.role,
            ...(isLiveValue(site.founder.linkedIn)
              ? { sameAs: site.founder.linkedIn }
              : {}),
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main id="main">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
