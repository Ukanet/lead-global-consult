const programs = [
  {
    id: "teach4impact",
    arm: "TEACH4IMPACT",
    subtitle: "Teacher Training Division",
    description:
      "The dedicated teacher-development division of LEAD GLOBAL CONSULTS. Our mission is to enhance teacher capability through comprehensive training programs, tailored consultancy services, and structured ongoing support — equipping educators with the skills and resources to cultivate high performance and successful student outcomes.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 17.25a8.966 8.966 0 01-9 .75 8.966 8.966 0 01-9-.75 12.083 12.083 0 012.84-6.672L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
      </svg>
    ),
    focus: ["Teacher Training", "Classroom Effectiveness", "Educator Coaching", "School Partnerships"],
  },
  {
    id: "study4success",
    arm: "STUDY4SUCCESS",
    subtitle: "Academic Excellence Coaching",
    description:
      "A learner-centered initiative dedicated to providing comprehensive coaching and training aimed at academic excellence — meticulously designed to cater to each student's unique needs. We equip students with the study skills, focus strategies, and mindset shifts needed to achieve transformative academic results.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    focus: ["Academic Coaching", "Study Skills", "Exam Preparation", "Learner Mentoring"],
  },
  {
    id: "lead4transformation",
    arm: "LEAD4TRANSFORMATION",
    subtitle: "Institutional Leadership Development",
    description:
      "Designed for institutional and organizational leaders, this program focuses on enhancing the capability to drive meaningful, lasting change. It offers targeted capacity-building training for leaders at every organizational level — delivering practical strategies for building robust systems, fostering collaboration, and driving innovation.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    focus: ["Leadership Capacity", "Systems Development", "Change Management", "Team Collaboration"],
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 md:py-32 bg-[#F9F9FB]"
      aria-labelledby="programs-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <p
            className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
            aria-hidden="true"
          >
            Service Arms
          </p>
          <h2
            id="programs-heading"
            className="font-display text-[#0D2346] text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Programs
          </h2>
          <p className="text-[#2B303A]/65 mt-4 text-lg max-w-xl">
            Three specialized arms delivering focused, high-impact development across education and leadership.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <article
              key={program.id}
              id={program.id}
              className="group flex flex-col bg-white border border-[#EEF2F6] hover:border-[#E65F2B]/30 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-sm"
              aria-labelledby={`${program.id}-heading`}
            >
              {/* Orange top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#E65F2B] to-[#C5A059]" aria-hidden="true" />

              <div className="p-8 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-12 h-12 bg-[#E65F2B]/10 rounded-full flex items-center justify-center text-[#E65F2B] mb-6 group-hover:bg-[#E65F2B]/20 transition-colors duration-200">
                  {program.icon}
                </div>

                {/* Arm name */}
                <p
                  className="text-[#E65F2B] text-xs tracking-[0.2em] uppercase font-bold mb-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {program.arm}
                </p>

                {/* Subtitle */}
                <h3
                  id={`${program.id}-heading`}
                  className="font-display text-[#0D2346] text-xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {program.subtitle}
                </h3>

                {/* Description */}
                <p className="text-[#2B303A] text-sm leading-relaxed mb-6 flex-1">
                  {program.description}
                </p>

                {/* Focus tags */}
                <ul className="flex flex-wrap gap-2" aria-label={`${program.arm} focus areas`}>
                  {program.focus.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1 bg-[#EEF2F6] text-[#0D2346] text-xs font-medium rounded-full"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
