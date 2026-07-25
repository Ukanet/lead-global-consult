import AnimatedSection from '@/components/AnimatedSection';

const partners = [
  {
    name: 'Cyrus International School',
    location: 'Kuje, FCT',
    type: 'Partner School',
    initials: 'CIS'
  },
  {
    name: 'Genesis Christian Academy',
    location: 'Gwagwalada, FCT',
    type: 'Partner School',
    initials: 'GCA'
  },
  {
    name: 'Royal Heritage Academy',
    location: 'Abuja, FCT',
    type: 'Partner School',
    initials: 'RHA'
  },
  {
    name: 'Lighthouse Comprehensive School',
    location: 'Kuje, FCT',
    type: 'Partner School',
    initials: 'LCS'
  },
  {
    name: 'Graceland International School',
    location: 'Abuja, FCT',
    type: 'Partner School',
    initials: 'GIS'
  },
  {
    name: 'TASAL Group of Schools',
    location: 'FCT, Nigeria',
    type: 'Consulting Client',
    initials: 'TGS'
  }
];

export default function Partnerships() {
  return (
    <section className="bg-[var(--ice)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" animation="fade">
          <span className="font-mono text-[var(--gold)] text-sm tracking-wider uppercase mb-3 block">
            Trusted By
          </span>
          <h2 className="font-display text-[var(--navy)] text-3xl md:text-4xl font-bold mb-4">
            Our Partner Schools & Organisations
          </h2>
          <p className="text-[var(--charcoal)]/80 font-body max-w-2xl mx-auto text-lg">
            Institutions we have had the privilege of working with across Nigeria.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <AnimatedSection
              key={partner.name}
              animation="slide-up"
              delay={index * 100}
              className="bg-white rounded-xl p-8 shadow-sm border border-transparent hover:border-[var(--gold)] transition-colors duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[var(--navy)] rounded-full flex items-center justify-center mb-6">
                <span className="text-[var(--gold)] font-display font-bold text-xl">
                  {partner.initials}
                </span>
              </div>
              
              <h3 className="font-display font-bold text-[var(--navy)] text-lg mb-2">
                {partner.name}
              </h3>
              
              <p className="text-[var(--charcoal)]/60 font-body text-sm mb-6">
                {partner.location}
              </p>
              
              <div className="mt-auto">
                <span className="inline-block px-3 py-1 bg-[var(--ice)] text-[var(--navy)] text-xs font-mono rounded-full border border-[var(--navy)]/10">
                  {partner.type}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
