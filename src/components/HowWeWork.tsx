import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const steps = [
  {
    num: 1,
    title: 'Assess',
    description: "We begin with a thorough needs assessment to understand your school or organisation's unique context, challenges, and goals.",
    icon: (
      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
    ),
  },
  {
    num: 2,
    title: 'Design',
    description: "Our team designs a tailored program or consulting plan — structured around your specific objectives, timeline, and learner profile.",
    icon: (
      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    ),
  },
  {
    num: 3,
    title: 'Deliver',
    description: "We deliver on-site, virtual, or hybrid — facilitating workshops, coaching sessions, and training with full practitioner engagement.",
    icon: (
      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
    ),
  },
  {
    num: 4,
    title: 'Evaluate',
    description: "We measure real outcomes: educator effectiveness, learner results, and institutional growth — with documented evidence of impact.",
    icon: (
      <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[var(--cream)] relative py-20 overflow-hidden border-t-[4px] border-[var(--gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade" className="text-center mb-16">
          <span className="uppercase tracking-wider font-semibold text-[var(--gold)] text-sm mb-2 block font-[family-name:var(--font-mono)]">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] font-[family-name:var(--font-display)]">
            How We Work
          </h2>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-start justify-between relative gap-12 lg:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.num}>
              <AnimatedSection 
                animation="slide-up" 
                delay={index * 150}
                className="flex-1 w-full lg:w-1/4"
              >
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full border-2 border-[var(--gold)] flex items-center justify-center bg-white shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10 mb-6">
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--navy)] text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-[var(--cream)]">
                      {step.num}
                    </span>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-3 font-[family-name:var(--font-display)] group-hover:text-[var(--flame)] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[var(--charcoal)] leading-relaxed font-[family-name:var(--font-body)]">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
              
              {/* Connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex flex-col justify-center h-24 items-center px-2">
                  <AnimatedSection animation="fade" delay={index * 150 + 200}>
                    <svg className="w-8 h-8 text-[var(--gold)]/50 border-b-2 border-dashed border-[var(--gold)] pb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </AnimatedSection>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
