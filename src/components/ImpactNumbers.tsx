import AnimatedSection from '@/components/AnimatedSection';

const stats = [
  { value: '500+', label: 'Students Trained' },
  { value: '100+', label: 'Teachers Reached' },
  { value: '5+', label: 'Schools & Institutions Served' },
  { value: '13', label: 'Years of Experience & Impact' },
  { value: '100%', label: 'Commitment to Transformation' },
  { value: 'CELL', label: 'Comprehensive Educational Solutions' },
];

export default function ImpactNumbers() {
  return (
    <section className="bg-[var(--navy)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatedSection className="mb-16" animation="fade">
          <span className="font-mono text-[var(--gold)] text-sm tracking-wider uppercase mb-3 block">
            Our Impact at a Glance
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
              <span className="text-white/70 font-mono text-sm tracking-widest uppercase">
                {stat.label}
              </span>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade" delay={600}>
          <p className="text-white/70 font-body max-w-3xl mx-auto text-lg">
            Leadership, academic excellence, coaching, and capacity-building programs delivered across multiple institutions.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
