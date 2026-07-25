"use client";

import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const programs = [
  {
    id: "teach4impact",
    arm: "TEACH4IMPACT",
    subtitle: "Teacher Training Division",
    color: "#E65F2B",
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
    forWhom: ["Classroom teachers", "Heads of Department", "School administrators", "New & experienced educators"],
    outcomes: [
      "Improved lesson planning and delivery",
      "Measurable increase in student engagement",
      "Stronger classroom management skills",
      "Documented evidence of teaching impact",
    ],
  },
  {
    id: "study4success",
    arm: "STUDY4SUCCESS",
    subtitle: "Academic Excellence Coaching",
    color: "#C5A059",
    description:
      "A learner-centered initiative dedicated to providing comprehensive coaching and training aimed at academic excellence — meticulously designed to cater to each student's unique needs. We equip students with the study skills, focus strategies, and mindset shifts needed to achieve transformative academic results.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    focus: ["Academic Coaching", "Study Skills", "Exam Preparation", "Learner Mentoring"],
    forWhom: ["Secondary school students", "Exam candidates (WAEC, NECO, JAMB)", "Underperforming learners", "Students seeking excellence"],
    outcomes: [
      "Proven study strategies and time management",
      "Higher confidence going into examinations",
      "Improved pass rates in core subjects",
      "Personalised academic development plan",
    ],
  },
  {
    id: "lead4transformation",
    arm: "LEAD4TRANSFORMATION",
    subtitle: "Institutional Leadership Development",
    color: "#0D2346",
    description:
      "Designed for institutional and organizational leaders, this program focuses on enhancing the capability to drive meaningful, lasting change. It offers targeted capacity-building training for leaders at every organizational level — delivering practical strategies for building robust systems, fostering collaboration, and driving innovation.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    focus: ["Leadership Capacity", "Systems Development", "Change Management", "Team Collaboration"],
    forWhom: ["School principals & proprietors", "Organisation directors & managers", "Department heads", "Emerging leaders"],
    outcomes: [
      "Stronger leadership systems and governance",
      "Improved staff morale and collaboration",
      "Documented strategic plans",
      "Sustained organisational transformation",
    ],
  },
];

function ProgramCard({ program, delay }: { program: typeof programs[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<"about" | "for" | "outcomes">("about");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const rotateX = (((e.clientY - rect.top) / rect.height) - 0.5) * -6;
    const rotateY = (((e.clientX - rect.left) / rect.width) - 0.5) * 6;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.transition = "transform 0.1s ease";
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "";
    cardRef.current.style.transition = "transform 0.4s ease";
  };

  return (
    <AnimatedSection animation="slide-up" delay={delay}>
      <article
        ref={cardRef}
        id={program.id}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group flex flex-col bg-white border border-[#EEF2F6] hover:border-[#C5A059]/30 hover:shadow-2xl transition-shadow duration-300 overflow-hidden will-change-transform h-full"
        aria-labelledby={`${program.id}-heading`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Colour top accent */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${program.color}, #C5A059)` }} aria-hidden="true" />

        <div className="p-8 flex flex-col flex-1">
          {/* Icon */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-colors duration-200"
            style={{ background: `${program.color}18`, color: program.color }}>
            {program.icon}
          </div>

          {/* Arm label */}
          <p className="text-xs tracking-[0.2em] uppercase font-bold mb-1"
            style={{ fontFamily: "var(--font-mono)", color: program.color }}>
            {program.arm}
          </p>

          {/* Title */}
          <h3 id={`${program.id}-heading`} className="text-[#0D2346] text-xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)" }}>
            {program.subtitle}
          </h3>

          {/* Tab switcher */}
          <div className="flex gap-1 mb-5 border-b border-[#EEF2F6] pb-1">
            {(["about", "for", "outcomes"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-all duration-150 ${tab === t
                  ? "text-[#0D2346] bg-[#EEF2F6]"
                  : "text-[#2B303A]/50 hover:text-[#0D2346]"}`}
                style={{ fontFamily: "var(--font-mono)" }}>
                {t === "about" ? "Overview" : t === "for" ? "Who It's For" : "Outcomes"}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 min-h-[120px]">
            {tab === "about" && (
              <p className="text-[#2B303A] text-sm leading-relaxed">{program.description}</p>
            )}
            {tab === "for" && (
              <ul className="flex flex-col gap-2">
                {program.forWhom.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#2B303A]">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: program.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {tab === "outcomes" && (
              <ul className="flex flex-col gap-2">
                {program.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#2B303A]">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#C5A059" }}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Focus tags */}
          <ul className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-[#EEF2F6]" aria-label={`${program.arm} focus areas`}>
            {program.focus.map((tag) => (
              <li key={tag} className="px-3 py-1 bg-[#EEF2F6] text-[#0D2346] text-xs font-medium rounded-full"
                style={{ fontFamily: "var(--font-mono)" }}>
                {tag}
              </li>
            ))}
          </ul>

          {/* Enquire CTA */}
          <Link href={`/contact?program=${program.id}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold group/link transition-all duration-200"
            style={{ color: program.color, fontFamily: "var(--font-mono)" }}>
            Enquire About This Program
            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </article>
    </AnimatedSection>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-[#F9F9FB]" aria-labelledby="programs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slide-up" className="mb-14">
          <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-mono)" }} aria-hidden="true">
            Service Arms
          </p>
          <h2 id="programs-heading" className="text-[#0D2346] text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}>
            Our Programs
          </h2>
          <p className="text-[#2B303A]/65 mt-4 text-lg max-w-xl">
            Three specialised arms delivering focused, high-impact development across education and leadership.
            Click the tabs on each card to explore who each program is designed for and what outcomes to expect.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
