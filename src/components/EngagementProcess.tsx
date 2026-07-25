import AnimatedSection from '@/components/AnimatedSection';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin with a free consultation to understand your institutional context, challenges, and transformation goals.'
  },
  {
    number: '02',
    title: 'Proposal',
    description: 'We develop a tailored consulting plan with clear deliverables, timelines, and success metrics — presented for your review.'
  },
  {
    number: '03',
    title: 'Delivery',
    description: 'Our team works alongside your staff — facilitating workshops, strategic planning sessions, and embedded coaching.'
  },
  {
    number: '04',
    title: 'Review & Sustain',
    description: 'We measure outcomes, document impact, and provide a post-engagement support plan to sustain your gains.'
  }
];

export default function EngagementProcess() {
  return (
    <section className="bg-[var(--cream)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" animation="fade">
          <span className="font-mono text-[var(--gold)] text-sm tracking-wider uppercase mb-3 block">
            How We Engage
          </span>
          <h2 className="font-display text-[var(--navy)] text-3xl md:text-4xl font-bold mb-4">
            Our Consulting Process
          </h2>
          <p className="text-[var(--charcoal)]/80 font-body max-w-2xl mx-auto text-lg">
            A clear, structured approach from first contact to measurable outcomes.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-6 relative">
          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              animation="slide-up"
              delay={index * 150}
              className="flex-1 w-full relative z-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[var(--gold)] text-[var(--navy)] rounded-full flex items-center justify-center font-display font-bold text-xl mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-[var(--navy)] text-xl mb-4">
                  {step.title}
                </h3>
                <p className="text-[var(--charcoal)]/70 font-body">
                  {step.description}
                </p>
              </div>
              
              {/* Connecting Arrow for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 -right-3 text-[var(--gold)] text-2xl z-0 -translate-y-1/2">
                  →
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
