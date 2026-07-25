import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import NewsletterCapture from "@/components/NewsletterCapture";
import { INSIGHTS_DATA } from "@/data/insights";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = INSIGHTS_DATA.find((i) => i.slug === slug);
  if (!insight) {
    return { title: "Insight Not Found" };
  }
  return {
    title: `${insight.title} | LEAD GLOBAL CONSULTS`,
    description: insight.excerpt,
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = INSIGHTS_DATA.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={`Insight · ${insight.tag}`}
        heading={insight.title}
        description={insight.excerpt}
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: insight.tag, href: `/insights#${insight.slug}` },
        ]}
      />

      <section className="py-16 md:py-24 bg-[#F9F9FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header Meta */}
          <AnimatedSection animation="slide-up">
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#EEF2F6] mb-12 text-xs text-[#2B303A]/70"
              style={{ fontFamily: "var(--font-mono)" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0D2346] text-[#C5A059] font-bold flex items-center justify-center text-xs">
                  {insight.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#0D2346]">{insight.author}</p>
                  <p className="text-[#2B303A]/50 text-[11px]">{insight.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[#2B303A]/60">
                <span>Published: <strong>{insight.publishDate}</strong></span>
                <span>•</span>
                <span>{insight.readTime}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Executive Overview */}
          <AnimatedSection animation="slide-up" delay={100}>
            <div className="bg-[#EEF2F6]/60 border-l-4 border-[#C5A059] p-6 md:p-8 mb-12">
              <h2 className="text-[#0D2346] font-bold text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "var(--font-mono)" }}>
                Executive Overview
              </h2>
              <p className="text-[#2B303A] text-base md:text-lg leading-relaxed italic">
                &ldquo;{insight.overview}&rdquo;
              </p>
            </div>
          </AnimatedSection>

          {/* Main Article Content Sections */}
          <article className="prose prose-lg max-w-none mb-16">
            {insight.sections.map((section, idx) => (
              <AnimatedSection key={idx} animation="slide-up" delay={150 + idx * 50}>
                <div className="mb-12">
                  <h2 className="text-[#0D2346] text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
                    {section.heading}
                  </h2>
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-[#2B303A]/85 text-base md:text-lg leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}

                  {section.quote && (
                    <blockquote className="my-6 p-6 bg-[#0D2346] text-[#F9F9FB] border-l-4 border-[#E65F2B] rounded-r-sm not-italic">
                      <p className="text-base md:text-lg font-medium leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                        &ldquo;{section.quote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </article>

          {/* Key Takeaways Box */}
          <AnimatedSection animation="slide-up" delay={300}>
            <div className="bg-white border border-[#C5A059]/30 p-8 mb-14 shadow-md rounded-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" aria-hidden="true" />
                <h3 className="text-[#0D2346] text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  Key Summary Takeaways
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {insight.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#2B303A]/90 font-medium">
                    <svg className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Back & CTA Bar */}
          <AnimatedSection animation="fade" delay={350}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#EEF2F6]">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D2346] hover:text-[#C5A059] transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Back to All Insights
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D2346] text-[#F9F9FB] font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-[#C5A059] hover:text-[#0D2346] transition-all"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Consult With Our Experts
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterCapture />
    </>
  );
}
