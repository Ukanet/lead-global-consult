import AnimatedSection from '@/components/AnimatedSection';

const stats = [
  { value: '200+', label: 'Educators Trained' },
  { value: '10+', label: 'Schools & Organisations Served' },
  { value: '3', label: 'Specialist Programs' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years of Practice' },
  { value: '500+', label: 'Students Positively Impacted' },
];

export default function ImpactNumbers() {
  return (
    <section className="bg-[var(--navy)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedSection className="mb-16" animation="fade">
          <span className="font-mono text-[var(--gold)] text-sm tracking-wider uppercase mb-3 block">
            Our Impact
          </span>
          <h2 className="font-display text-white text-3xl md:text-4xl font-bold">
            Results That Speak
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={index * 100}
              className="flex flex-col items-center justify-center"
            >
              <span className="text-[clamp(3rem,5vw,4rem)] font-display font-bold text-[var(--gold)] mb-4 leading-none">
                {stat.value}
              </span>
              <span className="text-white/50 font-mono text-sm tracking-widest uppercase">
                {stat.label}
              </span>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade" delay={600}>
          <p className="text-white/70 font-body max-w-3xl mx-auto text-lg">
            Impact measured through post-program assessments, educator feedback surveys, and school performance reviews.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
