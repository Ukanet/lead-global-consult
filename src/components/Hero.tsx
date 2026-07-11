export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0D2346] flex items-center overflow-hidden hero-grain"
      aria-label="Hero — LEAD GLOBAL CONSULTS"
    >
      {/* Decorative gold geometric shapes */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 30%, #C5A059 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-72 h-72 border border-[#C5A059]/20 rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-16 right-16 w-48 h-48 border border-[#C5A059]/10 rounded-full pointer-events-none"
      />

      {/* Gold vertical accent bar */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-20 bottom-20 w-1 bg-gradient-to-b from-transparent via-[#C5A059] to-transparent opacity-60 hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <p
            className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-6 font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Center for Excellence in Leadership and Learning — CELL
          </p>

          {/* Main Headline */}
          <h1
            className="font-display text-[#F9F9FB] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6"
            style={{ fontFamily: "var(--font-display)", fontOpticalSizing: "auto" }}
          >
            Equipping{" "}
            <span className="text-[#C5A059]">Educators,</span>{" "}
            Learners, Leaders{" "}
            <span className="italic font-semibold">&amp; Organizations</span>{" "}
            to Excel in a Dynamic World
          </h1>

          {/* Subheading */}
          <p className="text-[#F9F9FB]/75 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            LEAD GLOBAL CONSULTS delivers high-impact capacity-building programs,
            academic excellence coaching, and organizational transformation solutions
            that drive measurable, lasting results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              id="hero-cta-primary"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C5A059] text-[#0D2346] font-bold text-sm tracking-wide rounded-sm hover:bg-[#d4b06d] active:scale-95 transition-all duration-150 shadow-lg shadow-[#C5A059]/20"
            >
              Get in Touch
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#programs"
              id="hero-cta-secondary"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#C5A059]/60 text-[#F9F9FB] font-medium text-sm tracking-wide rounded-sm hover:border-[#C5A059] hover:bg-[#C5A059]/10 active:scale-95 transition-all duration-150"
            >
              Our Programs
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-16 pt-10 border-t border-[#F9F9FB]/10 flex flex-col sm:flex-row gap-6 sm:gap-12">
            {[
              { value: "3", label: "Specialized Programs" },
              { value: "Schools", label: "& Organizations Served" },
              { value: "Abuja", label: "Nigeria-Based, Global Vision" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span
                  className="text-[#C5A059] text-2xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value}
                </span>
                <span className="text-[#F9F9FB]/50 text-sm mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        aria-hidden="true"
      >
        <span className="text-[#F9F9FB] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C5A059] to-transparent" />
      </div>
    </section>
  );
}
