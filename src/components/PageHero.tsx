import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHero({ eyebrow, heading, description, breadcrumbs }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden hero-bg pt-32 pb-16 md:pt-36 md:pb-20"
      aria-labelledby="page-hero-heading"
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(197,160,89,0.15) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.2,
          maskImage: "radial-gradient(ellipse 80% 100% at 20% 50%, black 20%, transparent 100%)",
        }}
      />
      {/* Gold glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(197,160,89,0.08) 0%, transparent 70%)" }}
      />
      {/* Left accent bar */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-16 bottom-0 w-0.5 hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(197,160,89,0.5) 40%, rgba(197,160,89,0.5) 80%, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="text-[#F9F9FB]/40 text-xs hover:text-[#C5A059] transition-colors"
                  style={{ fontFamily: "var(--font-mono)" }}>
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={`${crumb.href}-${idx}`} className="flex items-center gap-2">
                  <span className="text-[#F9F9FB]/20 text-xs">/</span>
                  <Link href={crumb.href}
                    className="text-[#F9F9FB]/40 text-xs hover:text-[#C5A059] transition-colors"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase font-medium mb-4"
            style={{ fontFamily: "var(--font-mono)" }}>
            {eyebrow}
          </p>
        )}

        {/* Heading */}
        <h1
          id="page-hero-heading"
          className="text-[#F9F9FB] font-bold leading-tight max-w-3xl"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {heading}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-[#F9F9FB]/60 mt-4 text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        )}

        {/* Gold underline */}
        <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-[#C5A059] to-transparent" aria-hidden="true" />
      </div>
    </section>
  );
}
