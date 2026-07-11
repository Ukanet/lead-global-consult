const services = [
  {
    title: "Strategic Planning",
    description: "Developing clear, actionable roadmaps that align institutional goals with practical systems for sustainable growth and measurable outcomes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Curriculum Development",
    description: "Designing and refining curriculum frameworks that promote academic rigour, learner engagement, and alignment with current educational standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Professional Development",
    description: "Equipping educators with research-backed teaching methodologies, classroom management strategies, and ongoing mentoring support for continuous growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Innovative Program Design",
    description: "Creating bespoke programs that respond to the unique challenges of each institution — from onboarding frameworks to whole-school transformation initiatives.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function Consulting() {
  return (
    <section
      id="consulting"
      className="py-24 md:py-32 bg-[#EEF2F6]"
      aria-labelledby="consulting-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p
              className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
              aria-hidden="true"
            >
              Educational Consulting
            </p>
            <h2
              id="consulting-heading"
              className="font-display text-[#0D2346] text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Helping Institutions Unlock Their Full Potential
            </h2>
            <p className="text-[#2B303A] text-lg leading-relaxed mb-6">
              LEAD GLOBAL CONSULTS specializes in comprehensive educational consulting
              for schools and institutions — helping them navigate the education landscape
              with clarity, confidence, and strategic direction.
            </p>
            <p className="text-[#2B303A]/75 leading-relaxed mb-8">
              Whether you are designing a new programme, strengthening your teaching
              workforce, or rethinking your institutional strategy, we partner with you
              to deliver tailored solutions that improve outcomes and drive sustainable growth.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#C5A059] font-semibold text-sm hover:gap-3 transition-all duration-200"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Talk to a Consultant
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — service tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 bg-white border border-[#EEF2F6] hover:border-[#C5A059]/30 hover:shadow-lg transition-all duration-200 rounded-sm"
              >
                <div className="w-10 h-10 bg-[#0D2346]/8 rounded-md flex items-center justify-center text-[#0D2346] mb-4 group-hover:bg-[#0D2346] group-hover:text-[#C5A059] transition-all duration-200">
                  {service.icon}
                </div>
                <h3
                  className="font-display text-[#0D2346] font-bold text-base mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#2B303A]/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
