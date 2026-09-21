import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { BrandLogo } from "./BrandLogo";
import { Container } from "./primitives";
import { primaryNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 max-w-full transition-[background-color,backdrop-filter,box-shadow] duration-700",
          scrolled && !open
            ? "bg-ink/90 shadow-[0_1px_0_0_rgba(217,208,194,0.08)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <Container>
          <div
            className={cn(
              "flex min-w-0 items-center justify-between gap-4 border-b transition-colors duration-700",
              scrolled || open ? "border-sand/10" : "border-transparent",
              "py-4 md:py-5",
            )}
          >
            <BrandLogo size="nav" />

            <nav aria-label="Primary" className="hidden min-w-0 items-center gap-6 2xl:gap-9 xl:flex">
              {primaryNav.map((item) => {
                const active =
                  item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "label-eyebrow relative shrink-0 py-1 transition-colors duration-400",
                      active ? "text-gold" : "text-sand/70 hover:text-ivory",
                      "after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 after:ease-editorial",
                      active && "after:scale-x-100",
                      !active && "hover:after:scale-x-100 hover:after:bg-sand/50",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-3 sm:gap-5">
              <Link
                to="/contact"
                className="label-eyebrow hidden border border-sand/25 px-5 py-3 text-ivory transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ink hover:shadow-[0_8px_24px_-12px_rgba(184,155,98,0.55)] xl:inline-flex"
              >
                Start a conversation
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="label-eyebrow flex min-h-11 min-w-11 items-center justify-end gap-3 text-ivory transition-colors duration-300 hover:text-gold xl:hidden"
              >
                {open ? "Close" : "Menu"}
                <span aria-hidden className="flex flex-col gap-[5px]">
                  <span
                    className={cn(
                      "block h-px w-6 bg-current transition-transform duration-500 ease-editorial",
                      open && "translate-y-[3px] rotate-45",
                    )}
                  />
                  <span
                    className={cn(
                      "block h-px w-6 bg-current transition-transform duration-500 ease-editorial",
                      open && "-translate-y-[3px] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-0 z-40 bg-ink/98 backdrop-blur-sm transition-opacity duration-500 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <Container className="flex h-full flex-col justify-between pt-32 pb-12">
          <nav aria-label="Mobile" className="flex flex-col">
            {primaryNav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                tabIndex={open ? 0 : -1}
                className="border-b border-sand/10 py-5 font-display text-4xl text-ivory transition-colors duration-300 hover:text-gold sm:text-5xl"
                style={{
                  transitionDelay: open ? `${i * 40}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "none" : "translateY(12px)",
                  transitionProperty: "opacity, transform, color",
                  transitionDuration: "600ms",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3">
            <a
              href={site.phoneHref}
              className="label-eyebrow block text-gold transition-colors duration-300 hover:text-gold-light"
              tabIndex={open ? 0 : -1}
            >
              {site.phone}
            </a>
            <p className="label-eyebrow text-stone">{site.location}</p>
          </div>
        </Container>
      </div>
    </>
  );
}
