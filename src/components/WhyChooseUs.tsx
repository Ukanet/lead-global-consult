import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const differentiators = [
  {
    title: 'Nigeria-Focused',
    description: 'Our content is purpose-built for the Nigerian educational context — not imported wholesale from elsewhere.',
    icon: (
      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    title: 'Evidence-Based',
    description: 'Every program is grounded in research and best practice, adapted for real classroom and boardroom conditions.',
    icon: (
      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )
  },
  {
    title: 'Measurable Outcomes',
    description: 'We design for visible, documented change — in educator effectiveness, learner results, or institutional performance.',
    icon: (
      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    )
  },
  {
    title: 'Practitioner-Led',
    description: 'Our facilitators are experienced practitioners who have worked in schools and organisations, not just consultants.',
    icon: (
      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    )
  },
  {
    title: 'Tailored Programs',
    description: 'No two schools are alike. We tailor every engagement to your unique needs, culture, and learner profile.',
    icon: (
      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
    )
  },
  {
    title: 'Ongoing Support',
    description: "We don't disappear after delivery. Post-program support and follow-up are standard parts of every engagement.",
    icon: (
      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--navy)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade" className="text-center mb-16">
          <span className="uppercase tracking-wider font-semibold text-[var(--gold)] text-sm mb-2 block font-[family-name:var(--font-mono)]">
            Why LEAD GLOBAL
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
            Built for Nigerian Education
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, i) => (
            <AnimatedSection
              key={item.title}
              animation="slide-up"
              delay={i * 100}
              className="bg-[rgba(197,160,89,0.05)] border border-[rgba(197,160,89,0.15)] rounded-lg p-8 hover:border-[var(--gold)] transition-colors duration-300"
            >
              <div className="mb-4 bg-[var(--navy)] w-12 h-12 flex items-center justify-center rounded-full border border-[rgba(197,160,89,0.3)] shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-display)]">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-[family-name:var(--font-body)]">
                {item.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
