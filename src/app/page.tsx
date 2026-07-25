import Image from "next/image";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import HowWeWork from "@/components/HowWeWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import Programs from "@/components/Programs";
import FeaturedTestimonial from "@/components/FeaturedTestimonial";
import GalleryStrip from "@/components/GalleryStrip";
import FAQ from "@/components/FAQ";
import NewsletterCapture from "@/components/NewsletterCapture";
import AnimatedSection from "@/components/AnimatedSection";
import HeroImageSlider from "@/components/HeroImageSlider";
import Link from "next/link";

/* ── Quick About snippet ─────────────────────────────────────────── */
function AboutSnippet() {
  return (
    <section className="py-20 md:py-28 bg-[#EEF2F6]" aria-labelledby="home-about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-left">
            <div>
              <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4 font-medium"
                style={{ fontFamily: "var(--font-mono)" }}>Who We Are</p>
              <h2 id="home-about-heading" className="text-[#0D2346] font-bold leading-tight mb-5"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}>
                Bridging Academics &amp; Leadership Development
              </h2>
              <p className="text-[#2B303A]/75 text-base leading-relaxed mb-4">
                LEAD GLOBAL CONSULTS is a professional consulting, training, and capacity-development
                organisation dedicated to empowering schools, educational institutions, businesses,
                nonprofit organisations, and leaders to achieve excellence and sustainable growth.
              </p>
              <p className="text-[#2B303A]/60 text-base leading-relaxed mb-8">
                We operate under the{" "}
                <strong className="text-[#0D2346]">Center for Excellence in Leadership and Learning (CELL)</strong>{" "}
                — delivering innovative solutions that bridge the gap between academics and leadership.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-2 text-[#C5A059] font-semibold text-sm hover:gap-3 transition-all duration-200 group"
                style={{ fontFamily: "var(--font-mono)" }}>
                Learn More About Us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={100}>
            <div className="grid grid-cols-1 gap-5">
              {/* Photo Showcase Slider */}
              <HeroImageSlider />

              {[
                {
                  label: "Our Vision", dark: false,
                  text: "To be a leading global consulting and capacity-building organisation that empowers schools, educational institutions, and organisations to achieve sustainable growth and transformative impact.",
                },
                {
                  label: "Our Mission", dark: true,
                  text: "To equip educators, learners, leaders, and organisations with the knowledge, skills, and strategies required to excel in a dynamic world through high-quality capacity-building and leadership development solutions.",
                },
              ].map(({ label, dark, text }) => (
                <article key={label}
                  className={`p-6 border-l-4 border-[#C5A059] ${dark ? "bg-[#0D2346]" : "bg-white"}`}>
                  <h3 className={`font-bold text-xs tracking-[0.25em] uppercase mb-2 ${dark ? "text-[#C5A059]" : "text-[#0D2346]"}`}
                    style={{ fontFamily: "var(--font-mono)" }}>
                    {label}
                  </h3>
                  <p className={`leading-relaxed text-sm ${dark ? "text-[#F9F9FB]/75" : "text-[#2B303A]"}`}>{text}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Band ────────────────────────────────────────────────────── */
function CTABand() {
  return (
    <section className="bg-[#0D2346] py-20" aria-labelledby="cta-band-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection animation="slide-up">
          <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ fontFamily: "var(--font-mono)" }}>
            Ready to Transform?
          </p>
          <h2 id="cta-band-heading" className="text-[#F9F9FB] font-bold leading-tight mb-5"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}>
            Let&apos;s Build Excellence Together
          </h2>
          <p className="text-[#F9F9FB]/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you lead a school, a team, or an organisation — we have a program
            designed to help you and your people excel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0D2346] font-bold text-sm tracking-wide hover:bg-[#d4b06d] active:scale-95 transition-all duration-200 shadow-lg shadow-[#C5A059]/20">
              Get in Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#F9F9FB]/20 text-[#F9F9FB]/80 font-medium text-sm tracking-wide hover:border-[#C5A059]/60 hover:text-[#C5A059] active:scale-95 transition-all duration-200">
              View All Programs
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ── Home Page ───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <HowWeWork />
      <WhyChooseUs />
      <Programs />
      <FeaturedTestimonial />
      <AboutSnippet />
      <GalleryStrip />
      <FAQ />
      <NewsletterCapture />
      <CTABand />
    </>
  );
}
