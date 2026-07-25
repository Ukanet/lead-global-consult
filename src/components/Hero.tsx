"use client";

import Link from "next/link";
import Image from "next/image";
import HeroImageSlider from "./HeroImageSlider";

const programs = [
  { id: "teach4impact",        label: "TEACH4IMPACT",        sub: "Teacher Training & Development" },
  { id: "study4success",       label: "STUDY4SUCCESS",        sub: "Academic Excellence Coaching" },
  { id: "lead4transformation", label: "LEAD4TRANSFORMATION",  sub: "Leadership & Organisational Dev." },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden hero-bg"
      style={{ minHeight: "100svh" }}
      aria-labelledby="hero-heading"
    >
      {/* ── Decorative backgrounds ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(197,160,89,0.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.18,
          maskImage: "radial-gradient(ellipse 70% 80% at 65% 50%, black 10%, transparent 100%)",
        }}
      />
      <div aria-hidden="true" className="absolute pointer-events-none z-0"
        style={{ top: "-15%", right: "-10%", width: "55vw", height: "55vw", maxWidth: 800, maxHeight: 800,
          background: "radial-gradient(circle, rgba(197,160,89,0.09) 0%, transparent 65%)" }}
      />
      {/* Ghost CELL watermark — desktop */}
      <div aria-hidden="true" className="absolute select-none pointer-events-none z-0 hidden xl:block"
        style={{ right: "-2%", top: "50%", transform: "translateY(-50%) rotate(-5deg)",
          fontFamily: "var(--font-display)", fontSize: "min(20vw, 260px)", fontWeight: 900,
          letterSpacing: "-0.05em", color: "transparent", WebkitTextStroke: "1.5px rgba(197,160,89,0.055)" }}>
        CELL
      </div>
      {/* Left accent bar */}
      <div aria-hidden="true" className="absolute left-0 top-24 bottom-24 z-0 hidden lg:block"
        style={{ width: 2, background: "linear-gradient(to bottom, transparent, rgba(197,160,89,0.5) 35%, rgba(197,160,89,0.5) 65%, transparent)" }}
      />
      {/* Floating particles */}
      {[
        { top: "22%", left: "58%", size: 3, dur: "5s", delay: "0s" },
        { top: "55%", left: "74%", size: 2, dur: "7s", delay: "1.2s" },
        { top: "70%", left: "46%", size: 2, dur: "6s", delay: "0.6s" },
      ].map((p, i) => (
        <div key={i} aria-hidden="true" className="absolute rounded-full pointer-events-none z-0"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size,
            background: "rgba(197,160,89,0.4)", animation: `float-up-down ${p.dur} ease-in-out infinite ${p.delay}` }}
        />
      ))}

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: "100svh" }}>
        {/* Header clearance */}
        <div className="flex-shrink-0" style={{ height: "clamp(72px, 10vh, 100px)" }} />

        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* ── Left: Copy ── */}
              <div className="max-w-xl">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-7 opacity-0"
                  style={{ animation: "fade-in 0.55s ease 0.1s forwards" }}>
                  <div style={{ width: 28, height: 1.5, background: "#C5A059", flexShrink: 0 }} />
                  <span className="text-[#C5A059] font-medium"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase" }}>
                    CELL · Abuja, Nigeria
                  </span>
                </div>

                {/* Headline */}
                <h1 id="hero-heading" style={{ fontFamily: "var(--font-display)", fontOpticalSizing: "auto", marginBottom: 0 }}>
                  <span className="block text-[#F9F9FB]/40 font-light opacity-0"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", letterSpacing: "0.01em", lineHeight: 1.5, animation: "slide-up 0.6s ease 0.25s forwards" }}>
                    Equipping
                  </span>
                  <span className="block text-[#F9F9FB] font-bold opacity-0"
                    style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)", letterSpacing: "-0.03em", lineHeight: 0.92, animation: "slide-up 0.7s ease 0.36s forwards" }}>
                    Educators,
                  </span>
                  <span className="block font-bold opacity-0"
                    style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)", letterSpacing: "-0.03em", lineHeight: 0.92,
                      background: "linear-gradient(100deg, #C5A059 25%, #E65F2B 85%)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      animation: "slide-up 0.7s ease 0.47s forwards" }}>
                    Leaders &amp;
                  </span>
                  <span className="block text-[#F9F9FB] font-bold italic opacity-0"
                    style={{ fontSize: "clamp(2.8rem, 6.5vw, 6rem)", letterSpacing: "-0.03em", lineHeight: 0.92, animation: "slide-up 0.7s ease 0.58s forwards" }}>
                    Learners.
                  </span>
                  <span className="block text-[#F9F9FB]/35 font-normal opacity-0"
                    style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)", letterSpacing: "0.01em", lineHeight: 1.5,
                      marginTop: "clamp(8px, 1vw, 14px)", animation: "slide-up 0.65s ease 0.69s forwards" }}>
                    — to excel in a dynamic world.
                  </span>
                </h1>

                {/* Divider + description */}
                <div className="opacity-0" style={{ marginTop: "clamp(18px, 2.5vw, 30px)", animation: "slide-up 0.65s ease 0.8s forwards" }}>
                  <div style={{ width: 48, height: 2, marginBottom: 16, background: "linear-gradient(90deg, #C5A059, rgba(197,160,89,0.1))" }} />
                  <p className="text-[#F9F9FB]/60 leading-relaxed"
                    style={{ fontSize: "clamp(0.92rem, 1.4vw, 1.05rem)" }}>
                    LEAD GLOBAL CONSULTS delivers high-impact capacity-building,
                    academic excellence coaching, and leadership development —
                    turning potential into measurable performance for schools,
                    educators, and organisations across Nigeria.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 opacity-0"
                  style={{ marginTop: "clamp(18px, 2.5vw, 30px)", animation: "slide-up 0.65s ease 0.92s forwards" }}>
                  <Link href="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 font-bold text-[#0D2346] transition-all duration-200 active:scale-[0.97]"
                    style={{ padding: "14px 28px", background: "linear-gradient(135deg, #C5A059, #d4b06d)",
                      fontSize: 13, letterSpacing: "0.07em", textTransform: "uppercase",
                      boxShadow: "0 6px 24px rgba(197,160,89,0.28)" }}>
                    Start a Conversation
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/programs"
                    className="inline-flex items-center justify-center text-[#F9F9FB]/70 font-medium transition-all duration-200 hover:text-[#C5A059] active:scale-[0.97]"
                    style={{ padding: "14px 28px", border: "1px solid rgba(249,249,251,0.18)",
                      fontSize: 13, letterSpacing: "0.07em", textTransform: "uppercase" }}>
                    Explore Programs
                  </Link>
                </div>
              </div>

              {/* ── Right: Info panel & Image Showcase ── */}
              <div className="hidden lg:flex flex-col gap-5 opacity-0"
                style={{ animation: "slide-up 0.8s ease 0.55s forwards" }}>

                {/* Hero Showcase Photo Slider */}
                <HeroImageSlider />

                {/* Program arms */}
                <div style={{ border: "1px solid rgba(197,160,89,0.2)", background: "rgba(249,249,251,0.03)" }} className="p-7 backdrop-blur-sm">
                  <p className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase mb-5 font-medium"
                    style={{ fontFamily: "var(--font-mono)" }}>
                    Three Specialist Programs
                  </p>
                  <div className="flex flex-col gap-4">
                    {programs.map(({ id, label, sub }, i) => (
                      <Link key={id} href={`/programs#${id}`}
                        className="group flex items-center gap-4 hover:gap-5 transition-all duration-200">
                        <span className="w-7 h-7 rounded-full border border-[#C5A059]/35 flex items-center justify-center text-[#C5A059] flex-shrink-0 group-hover:bg-[#C5A059]/15 transition-colors text-xs font-bold"
                          style={{ fontFamily: "var(--font-mono)" }}>
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-[#F9F9FB]/85 text-xs font-bold tracking-widest uppercase group-hover:text-[#C5A059] transition-colors"
                            style={{ fontFamily: "var(--font-mono)" }}>
                            {label}
                          </p>
                          <p className="text-[#F9F9FB]/40 text-xs mt-0.5">{sub}</p>
                        </div>
                        <svg className="w-3.5 h-3.5 text-[#C5A059]/40 ml-auto group-hover:text-[#C5A059] transition-colors flex-shrink-0"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Trusted by */}
                <div className="flex items-center gap-4 p-5"
                  style={{ border: "1px solid rgba(197,160,89,0.2)", background: "rgba(249,249,251,0.03)" }}>
                  <div className="flex -space-x-2">
                    {["CI", "GC"].map((init) => (
                      <div key={init} className="w-9 h-9 rounded-full bg-[#C5A059]/20 border-2 border-[#0D2346] flex items-center justify-center">
                        <span className="text-[#C5A059] text-[9px] font-bold" style={{ fontFamily: "var(--font-mono)" }}>{init}</span>
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full bg-[#C5A059]/10 border-2 border-[#0D2346] flex items-center justify-center">
                      <span className="text-[#C5A059]/70 text-[9px] font-bold" style={{ fontFamily: "var(--font-mono)" }}>+8</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#F9F9FB]/75 text-sm font-medium">Trusted by 10+ institutions</p>
                    <p className="text-[#F9F9FB]/35 text-xs mt-0.5">Across Abuja and Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="flex-shrink-0" style={{ height: "clamp(48px, 6vh, 72px)" }} />
      </div>

      {/* Scroll indicator — centred */}
      <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-0"
        style={{ animation: "fade-in 0.8s ease 1.3s forwards" }}>
        <span className="text-[#F9F9FB]/25"
          style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, rgba(197,160,89,0.5), transparent)" }} />
        <svg className="w-3.5 h-3.5" style={{ color: "rgba(197,160,89,0.35)", animation: "bounce-subtle 2.2s ease-in-out infinite" }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
