import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

const cases = [
  {
    title: 'Teacher Performance Turnaround',
    school: 'Cyrus International School, Kuje',
    challenge: 'Inconsistent classroom delivery and low student engagement across grades 4–9.',
    approach: 'Six-week TEACH4IMPACT program with weekly coaching, peer observation, and classroom walkthroughs.',
    outcome: 'Marked improvement in lesson planning quality, 40% increase in active student participation reported by school leadership.'
  },
  {
    title: 'Academic Results Revival',
    school: 'Genesis Christian Academy, Gwagwalada',
    challenge: 'Below-average student performance in core subjects ahead of external examinations.',
    approach: 'Intensive STUDY4SUCCESS coaching series: study skills, time management, and exam techniques over 8 weeks.',
    outcome: 'Students reported higher confidence, and the school recorded improved pass rates in key subjects.'
  },
  {
    title: 'Leadership Systems Overhaul',
    school: 'A Federal Capital Territory School (Anonymised)',
    challenge: 'Weak institutional systems, unclear leadership roles, and low staff morale.',
    approach: 'LEAD4TRANSFORMATION 10-week engagement: leadership mapping, system design workshops, and culture-building sessions.',
    outcome: 'Clearer governance structures, improved staff satisfaction scores, and a documented 3-year strategic plan.'
  }
];

export default function CaseStudies() {
  return (
    <section className="bg-[var(--navy)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16" animation="fade">
          <span className="font-mono text-[var(--gold)] text-sm tracking-wider uppercase mb-3 block">
            Proven Results
          </span>
          <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-white/70 font-body max-w-2xl mx-auto text-lg">
            A selection of real engagements and the outcomes we delivered together.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cases.map((study, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={index * 150}
              className="bg-white/5 rounded-xl p-8 border-t-4 border-[var(--gold)] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <h3 className="font-display font-bold text-white text-xl mb-2">{study.title}</h3>
              <p className="text-[var(--gold)] font-mono text-xs mb-8 uppercase tracking-wide">{study.school}</p>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="font-mono text-[var(--gold)] text-sm mb-2">Challenge</h4>
                  <p className="text-white/75 font-body text-sm leading-relaxed">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-mono text-[var(--gold)] text-sm mb-2">Approach</h4>
                  <p className="text-white/75 font-body text-sm leading-relaxed">{study.approach}</p>
                </div>
                
                <div>
                  <h4 className="font-mono text-[var(--gold)] text-sm mb-2">Outcome</h4>
                  <p className="text-white/75 font-body text-sm leading-relaxed">{study.outcome}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade" delay={500} className="text-center">
          <p className="text-white/80 font-body text-lg mb-6">
            See what we can do for your institution
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[var(--gold)] text-[var(--navy)] font-bold font-body px-8 py-4 rounded hover:bg-white transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
