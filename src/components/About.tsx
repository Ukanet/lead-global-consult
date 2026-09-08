import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#EEF2F6]" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection animation="slide-up">
          <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)" }} aria-hidden="true">
            Who We Are
          </p>
          <h2 id="about-heading" className="font-display text-[#0D2346] text-3xl sm:text-4xl md:text-5xl font-bold mb-12 max-w-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Bridging Academics &amp; Leadership Development
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection animation="slide-left" delay={100}>
            <div>
              <p className="text-[#2B303A] text-lg leading-relaxed mb-5 font-medium">
                The vision behind <strong className="text-[#0D2346]">LEAD Global Consults</strong> began in 2013, organizing leadership development and academic excellence training for students at Special Science Senior Secondary School, Makurdi.
              </p>
              <p className="text-[#2B303A]/80 text-base leading-relaxed mb-4">
                Since then, <strong>over 500 students</strong> have participated in leadership development, academic excellence, and personal growth training across various schools and institutions.
              </p>
              <p className="text-[#2B303A]/80 text-base leading-relaxed mb-4">
                Our work with teachers began more formally in 2022 at Genesis Christian Academy, Kuje, and has since reached <strong>100+ teachers</strong> through training, coaching, and capacity-building initiatives across <strong>5+ schools and institutions</strong>, with more partnerships in active development.
              </p>
              <p className="text-[#2B303A]/85 text-base leading-relaxed mb-8 bg-white p-4 border-l-2 border-[#C5A059] shadow-sm">
                For 13 years, this vision operated informally through high-impact training, mentoring, coaching, and capacity-building. <strong>In 2026, the vision was formally established as LEAD Global Consults</strong>, creating a platform through which we can expand our impact and serve more schools, students, teachers, and institutions.
              </p>

              {/* Featured Image Frame */}
              <div className="relative rounded-sm overflow-hidden shadow-xl border border-[#C5A059]/30 aspect-[16/10] mb-8">
                <Image
                  src="/images/IMG_2674.JPG"
                  alt="LEAD GLOBAL CONSULTS in Action"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2346]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-[#C5A059] font-bold tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-mono)" }}>
                    CELL Practice
                  </p>
                  <p className="text-sm font-semibold">Interactive School Leadership &amp; Capacity Development</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-[#C5A059]" />
                <p className="text-[#C5A059] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                  Center for Excellence in Leadership and Learning
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-6">
            <AnimatedSection animation="slide-right" delay={150}>
              <article className="bg-white border-l-4 border-[#C5A059] p-8 shadow-sm hover:shadow-md transition-shadow duration-200" aria-labelledby="vision-heading">
                <h3 id="vision-heading" className="text-[#0D2346] font-bold text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "var(--font-mono)" }}>Our Vision</h3>
                <p className="text-[#2B303A] leading-relaxed">
                  To be a leading global consulting and capacity-building organization that empowers schools, educational institutions, and organizations to achieve sustainable growth, operational excellence, and transformative impact through innovative training, academic advancement, and leadership development.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={250}>
              <article className="bg-[#0D2346] border-l-4 border-[#C5A059] p-8 shadow-sm hover:shadow-md transition-shadow duration-200" aria-labelledby="mission-heading">
                <h3 id="mission-heading" className="text-[#C5A059] font-bold text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "var(--font-mono)" }}>Our Mission</h3>
                <p className="text-[#F9F9FB]/85 leading-relaxed">
                  To equip educators, learners, leaders, and organizations with the knowledge, skills, systems, and strategies required to excel in a dynamic world through high-quality capacity-building programs, academic excellence coaching, leadership development initiatives, and organizational transformation solutions that drive measurable and lasting results.
                </p>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
