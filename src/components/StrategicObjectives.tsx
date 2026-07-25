import AnimatedSection from "./AnimatedSection";

const objectives = [
  "Strengthen the professional competence and effectiveness of teachers, educators, and school leaders through continuous capacity-building programs.",
  "Improve learners' academic performance, study skills, and lifelong learning capabilities through targeted coaching and mentoring initiatives.",
  "Develop ethical, visionary, and transformational leaders capable of driving organizational and societal progress.",
  "Support schools and organizations in designing and implementing systems, strategies, and policies that enhance efficiency, productivity, and growth.",
  "Promote innovation, research, and best practices in education, leadership, and organizational development.",
  "Build strategic partnerships with educational institutions, corporate organizations, government agencies, and development partners to expand impact.",
  "Deliver measurable, sustainable, and scalable solutions that contribute to institutional excellence and national development.",
];

export default function StrategicObjectives() {
  return (
    <section id="objectives" className="py-24 md:py-32 bg-[#F9F9FB]" aria-labelledby="objectives-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection animation="slide-up" className="mb-14">
          <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)" }} aria-hidden="true">Our Direction</p>
          <h2 id="objectives-heading" className="font-display text-[#0D2346] text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl" style={{ fontFamily: "var(--font-display)" }}>
            Strategic Objectives
          </h2>
          <p className="text-[#2B303A]/65 mt-4 text-lg max-w-xl">
            Seven parallel commitments that guide everything we do — each one equally essential.
          </p>
        </AnimatedSection>

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" aria-label="Strategic objectives">
          {objectives.map((obj, i) => (
            <AnimatedSection key={i} as="li" animation="slide-up" delay={i * 60}>
              <div className="group flex gap-4 p-6 bg-white border border-[#EEF2F6] hover:border-[#C5A059]/40 hover:shadow-md transition-all duration-200 rounded-sm h-full">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-full bg-[#C5A059]/15 flex items-center justify-center group-hover:bg-[#C5A059]/25 transition-colors duration-200">
                    <svg className="w-3.5 h-3.5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-[#2B303A] text-sm md:text-base leading-relaxed">{obj}</p>
              </div>
            </AnimatedSection>
          ))}
        </ul>
      </div>
    </section>
  );
}
