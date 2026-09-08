import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

const cases = [
  {
    title: 'Training into Practical Application',
    school: 'Genesis Christian Academy, Bamishi, Kuje, Abuja',
    tag: 'Academic & Leadership Coaching',
    status: 'Completed Engagements + Follow-ups',
    summary:
      'At Genesis Christian Academy, leadership development and academic excellence training was delivered on two major occasions, with structured follow-up engagements designed to ensure that students did not simply receive the concepts but were able to apply what they learned.',
    focusTitle: 'Follow-up & Implementation',
    focus:
      'The follow-up process focused on reinforcing the lessons from the training, encouraging practical application, and supporting students as they worked towards improved personal and academic performance.',
    outcomeTitle: 'Key Transformation',
    outcome:
      'Students successfully bridged concept and practice — translating leadership lessons into measurable improvements in personal responsibility, study habits, and classroom performance.'
  },
  {
    title: 'Leadership Structuring & School Transformation',
    school: 'ISGACH Unity International School, Kuje, Abuja',
    tag: 'Institutional Restructuring',
    status: 'Work in Progress · Early Wins Achieved',
    summary:
      'The engagement with ISGACH Unity International School is a work in progress, but several encouraging outcomes have already emerged to drive positive, school-wide change.',
    focusTitle: 'Key Interventions',
    focus:
      'One of the immediate achievements has been the establishment of a vibrant leadership structure within the school to drive positive change. Teachers have become more motivated to promote the school, work intentionally towards increasing enrolment, and elevate administrative procedures.',
    outcomeTitle: 'Key Transformation',
    outcome:
      'Beyond leadership and administrative progress, the school is undergoing a physical transformation expected to contribute directly to higher enrolment, better learning outcomes, and elevated academic performance.'
  },
  {
    title: 'Sustained Multi-Year Institutional Growth',
    school: 'Cyrus International School, Kuje, Abuja',
    tag: 'Comprehensive Engagement',
    status: 'Multi-Year Continuous Partnership',
    summary:
      'Our continuous engagement with the staff and students of Cyrus International School has contributed to significant improvements across several key areas of the institution.',
    focusTitle: 'The Sustained Model',
    focus:
      'Through sustained engagement rather than one-off training, the school has continued to build consistently on the lessons, pedagogical frameworks, and strategies introduced through our interventions.',
    outcomeTitle: 'Key Transformation',
    outcome:
      'The impact is clearly reflected across student enrolment growth, elevated academic performance, institutional visibility, and stronger overall school development.'
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
              className="bg-white/5 rounded-xl p-8 border-t-4 border-[var(--gold)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full shadow-lg"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 bg-[var(--gold)]/20 text-[var(--gold)] text-[10px] font-mono font-bold uppercase tracking-wider rounded-sm">
                  {study.tag}
                </span>
                <span className="text-white/40 text-[11px] font-mono">
                  {study.status}
                </span>
              </div>

              <h3 className="font-display font-bold text-white text-xl mb-1">{study.title}</h3>
              <p className="text-[var(--gold)] font-mono text-xs mb-5 uppercase tracking-wide">{study.school}</p>
              
              <p className="text-white/85 font-body text-sm leading-relaxed mb-6 bg-white/5 p-3.5 rounded-sm border-l-2 border-[var(--gold)]">
                {study.summary}
              </p>

              <div className="space-y-5 flex-grow">
                <div>
                  <h4 className="font-mono text-[var(--gold)] text-xs uppercase tracking-wider mb-1.5">{study.focusTitle}</h4>
                  <p className="text-white/75 font-body text-xs leading-relaxed">{study.focus}</p>
                </div>
                
                <div className="pt-3 border-t border-white/10">
                  <h4 className="font-mono text-[#F9F9FB] text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                    {study.outcomeTitle}
                  </h4>
                  <p className="text-white/80 font-body text-xs leading-relaxed">{study.outcome}</p>
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
