import AnimatedSection from '@/components/AnimatedSection';

const milestones = [
  {
    year: '2020',
    title: 'Founded',
    description: 'LEAD GLOBAL CONSULTS established under CELL (Center for Excellence in Leadership and Learning), Abuja.'
  },
  {
    year: '2021',
    title: 'First School Partnership',
    description: 'Launched TEACH4IMPACT at Cyrus International School, Kuje — our first institutional partnership.'
  },
  {
    year: '2022',
    title: 'STUDY4SUCCESS Launch',
    description: 'Introduced academic excellence coaching for students preparing for high-stakes examinations across Abuja.'
  },
  {
    year: '2023',
    title: 'LEAD4TRANSFORMATION',
    description: 'Expanded into institutional leadership development, serving school administrators and organisational leaders.'
  },
  {
    year: '2024',
    title: 'Growing Impact',
    description: '200+ educators trained, 10+ institutions served, and programs delivered across Abuja and neighbouring states.'
  }
];

export default function Timeline() {
  return (
    <section className="bg-[var(--cream)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16" animation="fade">
          <span className="font-mono text-[var(--gold)] text-sm tracking-wider uppercase mb-3 block">
            Our Story
          </span>
          <h2 className="font-display text-[var(--navy)] text-3xl md:text-4xl font-bold">
            How We Grew
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line connecting milestones */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--gold)]/20 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <AnimatedSection
                  key={milestone.year}
                  animation={isEven ? 'slide-right' : 'slide-left'}
                  delay={index * 150}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Left Content (Desktop) */}
                  <div className={`hidden md:block w-1/2 pr-12 text-right ${!isEven ? 'md:order-1' : ''}`}>
                    {isEven && (
                      <>
                        <h3 className="font-display font-bold text-[var(--navy)] text-xl mb-2">{milestone.title}</h3>
                        <p className="text-[var(--charcoal)]/70 font-body">{milestone.description}</p>
                      </>
                    )}
                  </div>

                  {/* Year Badge */}
                  <div className={`absolute left-6 md:left-1/2 w-12 h-12 bg-[var(--gold)] rounded-full border-4 border-[var(--cream)] flex items-center justify-center -translate-x-1/2 z-10 ${!isEven ? 'md:order-2' : ''}`}>
                    <span className="text-[var(--navy)] font-bold text-sm">{milestone.year}</span>
                  </div>

                  {/* Right Content (Desktop) & Mobile Content */}
                  <div className={`pl-16 md:pl-12 md:w-1/2 w-full ${!isEven ? 'md:order-3 md:text-left' : ''}`}>
                    {(!isEven || (typeof window !== 'undefined' && window.innerWidth < 768)) && (
                      <div className={isEven ? 'md:hidden' : ''}>
                        <h3 className="font-display font-bold text-[var(--navy)] text-xl mb-2">{milestone.title}</h3>
                        <p className="text-[var(--charcoal)]/70 font-body">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
