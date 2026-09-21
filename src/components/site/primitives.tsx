import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { media, alt, type MediaKey } from "@/data/media";
import { cn } from "@/lib/utils";

/* ---------------- Container ---------------- */

export function Container({
  children,
  className,
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full min-w-0 max-w-full px-5 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24",
        width === "default" && "max-w-[96rem]",
        width === "wide" && "max-w-[112rem]",
        width === "narrow" && "max-w-[52rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------------- Reveal ---------------- */

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "figure" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------------- Type helpers ---------------- */

export function Eyebrow({
  children,
  className,
  tone = "muted",
}: {
  children: ReactNode;
  className?: string;
  tone?: "muted" | "gold" | "stone";
}) {
  return (
    <span
      className={cn(
        "label-eyebrow inline-flex items-center gap-3",
        tone === "muted" && "text-muted-foreground",
        tone === "gold" && "text-gold",
        tone === "stone" && "text-stone",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-current opacity-50" />
      {children}
    </span>
  );
}

/** Multi-line display heading; "\n" becomes a line break. */
export function Display({
  children,
  size = "lg",
  className,
  as: Tag = "h2",
  id,
}: {
  children: string;
  size?: "xl" | "lg" | "md" | "sm";
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
}) {
  const lines = children.split("\n");
  return (
    <Tag
      id={id}
      className={cn(
        size === "xl" && "display-xl",
        size === "lg" && "display-lg",
        size === "md" && "display-md",
        size === "sm" && "display-sm",
        className,
      )}
    >
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "light",
  size = "lg",
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "wide";
  tone?: "light" | "dark";
  size?: "xl" | "lg" | "md";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "wide" ? "max-w-none" : "max-w-3xl",
        tone === "dark" && "text-ivory",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Eyebrow tone={tone === "dark" ? "gold" : "muted"}>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <Display size={size} className={cn(eyebrow && "mt-6 md:mt-8")}>
          {title}
        </Display>
      </Reveal>
      {body ? (
        <Reveal delay={160}>
          <p
            className={cn(
              "lede mt-7 max-w-xl",
              tone === "dark" ? "text-sand/80" : "text-muted-foreground",
            )}
          >
            {body}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function EditorialText({
  paragraphs,
  className,
  tone = "light",
}: {
  paragraphs: string[];
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("space-y-6", className)}>
      {paragraphs.map((p, i) => (
        <Reveal key={i} delay={i * 60}>
          <p className={cn(tone === "dark" ? "text-sand/80" : "text-muted-foreground")}>
            {p}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Images ---------------- */

const ratios: Record<string, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  cinema: "aspect-[21/9]",
  square: "aspect-square",
  tall: "aspect-[4/5]",
  full: "h-full",
};

export function ResponsiveImage({
  name,
  ratio = "landscape",
  className,
  imgClassName,
  priority = false,
  altText,
}: {
  name: MediaKey;
  ratio?: keyof typeof ratios | "full";
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  altText?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-charcoal/5", ratios[ratio], className)}>
      <img
        src={media[name]}
        alt={altText ?? alt[name]}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}

/* ---------------- Buttons & links ---------------- */

const base =
  "group inline-flex min-h-12 items-center gap-3 label-eyebrow px-7 py-4 transition-all duration-500 border will-change-transform";

export function ButtonLink({
  to,
  href,
  params,
  children,
  variant = "solid",
  className,
}: {
  to?: string;
  href?: string;
  params?: Record<string, string>;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost" | "onDark";
  className?: string;
}) {
  const styles = cn(
    base,
    variant === "solid" &&
      "border-ink bg-ink text-warmwhite hover:-translate-y-0.5 hover:bg-graphite hover:shadow-[0_14px_30px_-18px_rgba(10,10,9,0.55)]",
    variant === "outline" &&
      "border-ink/25 text-ink hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-warmwhite",
    variant === "onDark" &&
      "border-sand/30 text-ivory hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink hover:shadow-[0_14px_30px_-16px_rgba(184,155,98,0.55)]",
    variant === "ghost" && "border-transparent px-0 py-2 text-ink hover:text-gold",
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-500 group-hover:translate-x-1"
      >
        &#8594;
      </span>
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={styles}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link to={(to ?? "/") as never} params={params as never} className={styles}>
      {inner}
    </Link>
  );
}

export function ArrowLink({
  to,
  params,
  children,
  className,
  tone = "light",
}: {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      to={to as never}
      params={params as never}
      className={cn(
        "group label-eyebrow inline-flex items-center gap-3",
        tone === "dark" ? "text-ivory hover:text-gold" : "text-ink hover:text-gold",
        "transition-colors duration-400",
        className,
      )}
    >
      <span className="link-quiet">{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-500 group-hover:translate-x-1"
      >
        &#8594;
      </span>
    </Link>
  );
}

/* ---------------- Page hero (shared by all inner pages) ---------------- */

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  meta,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  image: MediaKey;
  meta?: { label: string; value: string }[];
}) {
  return (
    <header className="relative flex h-dvh min-h-dvh w-full max-w-full flex-col justify-end overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src={media[image]}
          alt={alt[image]}
          className="drift h-full w-full max-w-none object-cover opacity-40"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      </div>
      <Container className="relative flex w-full min-w-0 flex-1 flex-col justify-end pt-28 pb-10 sm:pt-32 sm:pb-14 md:pb-20 lg:pt-36">
        <div className="rise min-w-0 max-w-4xl">
          <Eyebrow tone="gold">{eyebrow}</Eyebrow>
          <Display as="h1" size="lg" className="mt-6 max-w-4xl text-ivory sm:mt-8">
            {title}
          </Display>
          {body ? <p className="lede mt-6 max-w-xl text-sand/80 sm:mt-8">{body}</p> : null}
          {meta && meta.length > 0 ? (
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-sand/15 pt-6 sm:mt-12 sm:gap-x-8 sm:pt-8 sm:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label} className="min-w-0">
                  <dt className="label-eyebrow text-stone">{m.label}</dt>
                  <dd className="mt-2 text-sm break-words text-ivory">{m.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

/* ---------------- Section wrapper for rhythm ---------------- */

export function Section({
  children,
  tone = "light",
  className,
  id,
  width = "default",
}: {
  children: ReactNode;
  tone?: "light" | "ivory" | "dark" | "graphite";
  className?: string;
  id?: string;
  width?: "default" | "wide" | "narrow";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-24 md:py-32 lg:py-36 xl:py-40",
        tone === "light" && "bg-warmwhite text-ink",
        tone === "ivory" && "bg-ivory text-ink",
        tone === "dark" && "bg-ink text-ivory",
        tone === "graphite" && "bg-graphite text-ivory",
        className,
      )}
    >
      <Container width={width}>{children}</Container>
    </section>
  );
}
