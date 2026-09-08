import AnimatedSection from '@/components/AnimatedSection';

const partners = [
  {
    name: 'Genesis Christian Academy',
    location: 'Bamishi, Kuje, Abuja',
    type: 'Partner School',
    initials: 'GCA',
    detail: 'Leadership development, academic excellence & teacher capacity building.'
  },
  {
    name: 'Cyrus International School',
    location: 'Kuje, Abuja',
    type: 'Partner School',
    initials: 'CIS',
    detail: 'Sustained teacher training & student academic performance transformation.'
  },
  {
    name: 'Salem Academy',
    location: 'Lugbe, Abuja',
    type: 'Partner School',
    initials: 'SA',
    detail: 'Student leadership coaching and academic excellence initiatives.'
  },
  {
    name: 'ISGACH Unity International School',
    location: 'Kuje, Abuja',
    type: 'Partner School',
    initials: 'IUIS',
    detail: 'Leadership structuring, teacher motivation & whole-school development.'
  }
];

export default function Partnerships() {
  return (
    <section className="bg-[var(--ice)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" animation="fade">
          <span className="font-mono text-[var(--gold)] text-sm tracking-wider uppercase mb-3 block">
            Partner Schools
          </span>
          <h2 className="font-display text-[var(--navy)] text-3xl md:text-4xl font-bold mb-4">
            Our Current Partner Schools
          </h2>
          <p className="text-[var(--charcoal)]/80 font-body max-w-2xl mx-auto text-lg">
            Institutions where our sustained engagement is driving measurable improvements in students, teachers, and leadership.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, index) => (
            <AnimatedSection
              key={partner.name}
              animation="slide-up"
              delay={index * 100}
              className="bg-white rounded-xl p-7 shadow-sm border border-transparent hover:border-[var(--gold)] transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[var(--navy)] rounded-full flex items-center justify-center mb-5 group-hover:bg-[var(--gold)] transition-colors duration-300">
                <span className="text-[var(--gold)] group-hover:text-[var(--navy)] font-display font-bold text-lg transition-colors duration-300">
                  {partner.initials}
                </span>
              </div>
              
              <h3 className="font-display font-bold text-[var(--navy)] text-lg mb-2 leading-snug">
                {partner.name}
              </h3>
              
              <p className="text-[var(--gold)] font-mono text-xs uppercase tracking-wider mb-3">
                {partner.location}
              </p>

              <p className="text-[var(--charcoal)]/65 font-body text-xs mb-6 leading-relaxed flex-1">
                {partner.detail}
              </p>
              
              <div className="mt-auto">
                <span className="inline-block px-3 py-1 bg-[var(--ice)] text-[var(--navy)] text-xs font-mono rounded-full border border-[var(--navy)]/10 font-medium">
                  {partner.type}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Growth Note */}
        <AnimatedSection animation="fade" delay={400} className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-[#C5A059]/30 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <p className="text-[#0D2346] font-medium text-sm">
              More schools and institutions will be added as our partnerships continue to grow.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
