import AnimatedSection from "./AnimatedSection";

const team = [
  {
    initials: "LGC",
    name: "Executive Director",
    bio: "Visionary leader with extensive experience in educational consulting, institutional development, and transformational leadership across Nigeria's education sector.",
    speciality: "Strategic Leadership",
  },
  {
    initials: "T4I",
    name: "Lead Facilitator — TEACH4IMPACT",
    bio: "Seasoned educator and teacher-trainer dedicated to equipping classroom teachers with research-backed strategies, effective pedagogy, and professional growth frameworks.",
    speciality: "Teacher Development",
  },
  {
    initials: "S4S",
    name: "Head Coach — STUDY4SUCCESS",
    bio: "Academic excellence coach specializing in study skills, exam preparation, and learner-centered motivation techniques for secondary and tertiary students.",
    speciality: "Academic Coaching",
  },
  {
    initials: "L4T",
    name: "Lead Consultant — LEAD4TRANSFORMATION",
    bio: "Organizational development specialist focused on leadership capacity-building, systems design, and institutional change management for schools and nonprofits.",
    speciality: "Organizational Development",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 md:py-32 bg-[#F9F9FB]"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Current Stage Banner */}
        <AnimatedSection animation="slide-up" className="mb-16">
          <div className="bg-[#0D2346] text-white p-8 md:p-12 rounded-sm border-l-4 border-[#C5A059] relative overflow-hidden shadow-xl">
            <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/40 text-[11px] font-mono uppercase tracking-widest rounded-full mb-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping" />
                Our Current Stage
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
                Development &amp; Growth Phase
              </h3>
              <p className="text-[#F9F9FB]/85 text-base md:text-lg leading-relaxed mb-6">
                LEAD Global Consults is currently in a <strong>development and growth phase</strong>. We are building the structures, partnerships, and systems necessary to scale our impact sustainably.
              </p>
              <p className="text-[#F9F9FB]/70 text-sm md:text-base leading-relaxed">
                As the organization grows, we will also be expanding our team with passionate professionals who share our commitment to developing people, strengthening institutions, and creating lasting positive change.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-up" className="mb-14">
          <p
            className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
            aria-hidden="true"
          >
            Organizational Capacities
          </p>
          <h2
            id="team-heading"
            className="font-display text-[#0D2346] text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Leadership &amp; Practice Areas
          </h2>
          <p className="text-[#2B303A]/65 mt-4 text-lg max-w-xl">
            Experienced educators, coaches, and consultants driving measurable institutional outcomes.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <AnimatedSection key={i} animation="slide-up" delay={i * 80}>
              <article
                className="group flex flex-col items-center text-center p-8 bg-white border border-[#EEF2F6] hover:border-[#C5A059]/30 hover:shadow-lg transition-all duration-300 rounded-sm"
                aria-label={member.name}
              >
                {/* Initials avatar */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-[#0D2346] flex items-center justify-center group-hover:ring-4 group-hover:ring-[#C5A059]/30 transition-all duration-300">
                    <span
                      className="text-[#C5A059] font-bold text-base"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {member.initials}
                    </span>
                  </div>
                </div>

                <p
                  className="text-[#C5A059] text-[10px] tracking-widest uppercase mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {member.speciality}
                </p>

                <h3
                  className="font-display text-[#0D2346] font-bold text-base mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {member.name}
                </h3>

                <p className="text-[#2B303A]/65 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade" delay={300} className="mt-12 text-center">
          <div className="inline-block p-6 bg-white border border-[#EEF2F6] rounded-sm max-w-2xl mx-auto shadow-sm">
            <h4 className="text-[#0D2346] font-display font-bold text-base mb-2">Interested in Joining Our Mission?</h4>
            <p className="text-[#2B303A]/70 text-sm leading-relaxed mb-4">
              We are actively laying the groundwork to welcome facilitators, educational coaches, and institutional consultants as our network of partner schools continues to expand.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 text-[#C5A059] font-semibold text-sm hover:underline font-mono">
              Connect With Us &rarr;
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
