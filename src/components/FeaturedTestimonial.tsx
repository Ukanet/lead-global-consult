import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export default function FeaturedTestimonial() {
  return (
    <section className="bg-[var(--navy)] hero-bg relative py-24 overflow-hidden border-y-[1px] border-[rgba(197,160,89,0.2)]">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-transparent to-[var(--charcoal)] opacity-80" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <AnimatedSection animation="fade">
          <div className="text-[var(--gold)] text-8xl md:text-9xl font-serif leading-none opacity-20 -mb-8 select-none">
            &ldquo;
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={150}>
          <blockquote className="text-xl md:text-3xl font-medium text-white leading-relaxed mb-10 font-[family-name:var(--font-display)] px-4">
            LEAD GLOBAL CONSULTS completely transformed how our teachers approach their classrooms. The TEACH4IMPACT program gave our staff practical, immediately applicable tools — and the results showed in our students' performance within weeks.
          </blockquote>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" delay={300} className="flex flex-col items-center">
          <div className="w-16 h-16 bg-[var(--gold)] text-[var(--navy)] font-bold text-xl rounded-full flex items-center justify-center shadow-lg mb-4">
            CIS
          </div>
          <div className="text-[var(--cream)] font-semibold text-lg font-[family-name:var(--font-display)]">
            Principal, Cyrus International School, Kuje
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-[var(--gold)] uppercase tracking-wider font-[family-name:var(--font-mono)]">
            <span>200+ Educators</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>10+ Schools</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>100% Client Satisfaction</span>
          </div>

          <div className="mt-12">
            <Link 
              href="/testimonials" 
              className="inline-flex items-center text-white border-b-2 border-[var(--gold)] pb-1 hover:text-[var(--gold)] transition-colors font-[family-name:var(--font-body)]"
            >
              Read All Testimonials
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
