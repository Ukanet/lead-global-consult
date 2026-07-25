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
        <AnimatedSection animation="slide-up" className="mb-14">
          <p
            className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
            aria-hidden="true"
          >
            The People Behind CELL
          </p>
          <h2
            id="team-heading"
            className="font-display text-[#0D2346] text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Team
          </h2>
          <p className="text-[#2B303A]/65 mt-4 text-lg max-w-xl">
            Experienced educators, coaches, and consultants committed to driving real, measurable change.
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
                  {/* Placeholder photo overlay hint */}
                  <div className="absolute inset-0 rounded-full bg-[#C5A059]/0 group-hover:bg-[#C5A059]/5 transition-colors duration-300" />
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

        <AnimatedSection animation="fade" delay={300} className="mt-10 text-center">
          <p className="text-[#2B303A]/50 text-sm italic">
            Team profiles and photos coming soon — we are growing! In the meantime,{" "}
            <a href="/contact" className="text-[#C5A059] hover:underline">get in touch</a>{" "}
            to speak with a consultant directly.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
