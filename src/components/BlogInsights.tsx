import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { INSIGHTS_DATA } from "@/data/insights";

const iconsMap: Record<string, React.ReactNode> = {
  TEACH4IMPACT: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 7l9-5-9-5-9 5 9 5z" />
    </svg>
  ),
  STUDY4SUCCESS: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  LEAD4TRANSFORMATION: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
    </svg>
  ),
};

const partners = [
  "Cyrus International School, Kuje",
  "Genesis Christian Academy, Kuje",
  "Royal Heritage Academy, Abuja",
];

export default function BlogInsights() {
  return (
    <section
      id="insights"
      className="py-24 md:py-32 bg-[#F9F9FB]"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Insights Header */}
        <AnimatedSection animation="slide-up" className="mb-14">
          <p
            className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
            aria-hidden="true"
          >
            Knowledge &amp; Resources
          </p>
          <h2
            id="insights-heading"
            className="font-display text-[#0D2346] text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Insights &amp; Perspectives
          </h2>
          <p className="text-[#2B303A]/65 mt-4 text-lg max-w-xl">
            Practical thinking on education, leadership, and organizational excellence. Click any publication to read the full article.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-20">
          {INSIGHTS_DATA.map((post, i) => (
            <AnimatedSection key={post.slug} animation="slide-up" delay={i * 90}>
              <Link href={`/insights/${post.slug}`} className="block h-full group">
                <article
                  className="flex flex-col h-full bg-white border border-[#EEF2F6] group-hover:border-[#C5A059]/40 group-hover:shadow-xl transition-all duration-300 overflow-hidden rounded-sm"
                  aria-label={post.title}
                >
                  {/* Accent bar */}
                  <div className="h-1 bg-gradient-to-r from-[#C5A059] to-[#E65F2B]" aria-hidden="true" />

                  <div className="p-8 flex flex-col flex-1">
                    {/* Tag + icon */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0D2346]/6 rounded-md flex items-center justify-center text-[#0D2346] group-hover:bg-[#0D2346] group-hover:text-[#C5A059] transition-all duration-200">
                          {iconsMap[post.tag] || iconsMap.TEACH4IMPACT}
                        </div>
                        <span
                          className="text-[#E65F2B] text-[10px] tracking-[0.2em] uppercase font-bold"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {post.tag}
                        </span>
                      </div>
                      <span className="text-[#2B303A]/50 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                        {post.readTime}
                      </span>
                    </div>

                    <h3
                      className="font-display text-[#0D2346] font-bold text-lg leading-snug mb-3 group-hover:text-[#C5A059] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {post.title}
                    </h3>

                    <p className="text-[#2B303A]/65 text-sm leading-relaxed flex-1 mb-5">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#EEF2F6]">
                      <span
                        className="text-[#2B303A]/40 text-xs"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {post.publishDate}
                      </span>
                      <span
                        className="text-[#C5A059] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        Read Article
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Partner schools strip */}
        <AnimatedSection animation="fade">
          <div className="border-t border-[#EEF2F6] pt-14">
            <p
              className="text-center text-[#2B303A]/40 text-xs tracking-[0.3em] uppercase mb-8"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Schools &amp; Institutions We Have Worked With
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {partners.map((name) => (
                <div
                  key={name}
                  className="px-5 py-3 border border-[#EEF2F6] text-[#0D2346]/50 text-sm font-medium hover:border-[#C5A059]/40 hover:text-[#0D2346] transition-all duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
