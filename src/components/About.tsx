export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#EEF2F6]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label */}
        <p
          className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: "var(--font-mono)" }}
          aria-hidden="true"
        >
          Who We Are
        </p>

        <h2
          id="about-heading"
          className="font-display text-[#0D2346] text-3xl sm:text-4xl md:text-5xl font-bold mb-12 max-w-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Bridging Academics &amp; Leadership Development
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* About paragraph */}
          <div>
            <p className="text-[#2B303A] text-lg leading-relaxed mb-6">
              LEAD GLOBAL CONSULTS is a professional consulting, training, and
              capacity-development organization dedicated to empowering schools,
              educational institutions, businesses, nonprofit organizations, and
              leaders to achieve excellence and sustainable growth.
            </p>
            <p className="text-[#2B303A] text-lg leading-relaxed">
              We provide innovative solutions in teacher training, academic excellence
              coaching, leadership development, organizational transformation, and
              institutional capacity building. We bridge the gap between academics
              and leadership development.
            </p>

            {/* Gold accent divider */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-0.5 bg-[#C5A059]" />
              <p
                className="text-[#C5A059] text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Center for Excellence in Leadership and Learning
              </p>
            </div>
          </div>

          {/* Vision & Mission cards */}
          <div className="flex flex-col gap-6">
            <article
              className="bg-white border-l-4 border-[#C5A059] p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              aria-labelledby="vision-heading"
            >
              <h3
                id="vision-heading"
                className="text-[#0D2346] font-bold text-xs tracking-[0.25em] uppercase mb-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Our Vision
              </h3>
              <p className="text-[#2B303A] leading-relaxed">
                To be a leading global consulting and capacity-building organization
                that empowers schools, educational institutions, and organizations
                to achieve sustainable growth, operational excellence, and transformative
                impact through innovative training, academic advancement, and
                leadership development.
              </p>
            </article>

            <article
              className="bg-[#0D2346] border-l-4 border-[#C5A059] p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              aria-labelledby="mission-heading"
            >
              <h3
                id="mission-heading"
                className="text-[#C5A059] font-bold text-xs tracking-[0.25em] uppercase mb-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Our Mission
              </h3>
              <p className="text-[#F9F9FB]/85 leading-relaxed">
                To equip educators, learners, leaders, and organizations with the
                knowledge, skills, systems, and strategies required to excel in a
                dynamic world through high-quality capacity-building programs,
                academic excellence coaching, leadership development initiatives,
                and organizational transformation solutions that drive measurable
                and lasting results.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
