import { Link } from "@tanstack/react-router";

import { BrandLogo } from "./BrandLogo";
import { Container, Eyebrow, Reveal } from "./primitives";
import { isLiveValue, legalNav, primaryNav, site } from "@/lib/site";

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const live = isLiveValue(value) && Boolean(href);
  return (
    <li>
      <span className="label-eyebrow mb-1.5 block text-stone">{label}</span>
      {live ? (
        <a
          href={href}
          {...(href?.startsWith("http")
            ? { target: "_blank", rel: "noreferrer noopener" }
            : {})}
          className="link-quiet transition-colors duration-300 hover:text-gold"
        >
          {value}
        </a>
      ) : (
        <span className="text-sand/50 italic">{value}</span>
      )}
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <Container className="py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <BrandLogo size="footer" />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-sand/70">
              A Dubai real estate brokerage providing advisory across residential,
              commercial, investment, off-plan, secondary-market and leasing decisions —
              within the UAE regulated property framework.
            </p>
            <p className="label-eyebrow mt-10 text-stone">{site.legalName}</p>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-3">
            <nav aria-label="Footer">
              <Eyebrow tone="stone">Navigate</Eyebrow>
              <ul className="mt-7 space-y-3">
                {primaryNav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="link-quiet text-sm text-sand/80 transition-colors duration-300 hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-4">
            <Eyebrow tone="stone">Contact</Eyebrow>
            <ul className="mt-7 space-y-5 text-sm text-sand/80">
              <ContactLine label="Phone" value={site.phone} href={site.phoneHref} />
              <ContactLine
                label="Email"
                value={site.email}
                href={isLiveValue(site.email) ? `mailto:${site.email}` : undefined}
              />
              <li>
                <span className="label-eyebrow mb-1.5 block text-stone">Location</span>
                <span>{site.location}</span>
              </li>
              <ContactLine
                label="LinkedIn"
                value="Aurum Haven"
                href={site.companyLinkedIn}
              />
              <ContactLine label="Instagram" value={site.social.instagram} />
              <ContactLine label="Facebook" value={site.social.facebook} />
              <ContactLine label="X" value={site.social.x} />
              <ContactLine label="Website" value="aurumhavenrealestate.com" href={site.website} />
            </ul>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-sand/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-eyebrow text-stone">© {site.founded} Aurum Haven</p>
          <ul className="flex flex-wrap gap-7">
            {legalNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="label-eyebrow text-stone transition-colors duration-300 hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
