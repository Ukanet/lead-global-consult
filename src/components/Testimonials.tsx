"use client";

import { useState, useCallback, useRef, TouchEvent } from "react";
import AnimatedSection from "./AnimatedSection";

const teach4impactTestimonials = [
  { quote: "The Teach4Impact training provides me with valuable insights and honest feedback about my role in the class.", name: "Unwana Okon", role: "Teacher", school: "Cyrus Int'l School, Kuje" },
  { quote: "The training taught me that engaging with the learners of today is key to fostering the change we all need. Their voices are powerful, and by listening to them, we can inspire a brighter future!", name: "Mary Matthew", role: "Teacher", school: "Cyrus Int'l School, Kuje, Abuja" },
  { quote: "The training taught me that connecting with a child's emotions is a guide to understanding and empathy.", name: "Polycarp Nancy Francisca", role: "Teacher", school: "CIS Kuje, Abuja" },
  { quote: "I've discovered some powerful strategies for engaging my learners, which have transformed my classroom into a dynamic environment focused on effectiveness and efficiency.", name: "Helen Ajayi", role: "Teacher", school: "CIS Kuje, Abuja" },
  { quote: "The training has been incredibly beneficial. I learned how to develop myself as a teacher by acquiring new skills related to my discipline and building strong interpersonal relationships with my students to enhance their learning.", name: "Shinyi Marcus", role: "Teacher", school: "CIS Kuje, Abuja" },
];

const study4successTestimonials = [
  { quote: "The students are really stepping up, demonstrating increased enthusiasm and dedication to their studies!" },
  { quote: "The training proved to be a crucial eye-opener, particularly for students gearing up for major external exams like WAEC and NECO. It inspired them to recognize the importance of preparation and take their studies seriously!" },
  { quote: "The training has inspired students to sharpen their focus and truly appreciate the value of striving for academic excellence." },
];

function InitialsAvatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div className="w-10 h-10 rounded-full bg-[#0D2346] flex items-center justify-center flex-shrink-0" aria-hidden="true">
      <span className="text-[#C5A059] text-xs font-bold" style={{ fontFamily: "var(--font-mono)" }}>{initials}</span>
    </div>
  );
}

function Teach4ImpactCarousel() {
  const [current, setCurrent] = useState(0);
  const total = teach4impactTestimonials.length;

  // Touch state for swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };
  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) >= 40) {
      if (distance > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  const t = teach4impactTestimonials[current];

  return (
    <div aria-roledescription="carousel" aria-label="Teach4Impact testimonials" className="relative select-none">
      <div
        key={current}
        className="bg-white border border-[#EEF2F6] p-8 md:p-10 shadow-sm min-h-[240px] flex flex-col justify-between"
        aria-live="polite"
        aria-atomic="true"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div>
          <div className="text-[#C5A059] text-7xl leading-none font-display mb-2 select-none" aria-hidden="true" style={{ fontFamily: "var(--font-display)" }}>&ldquo;</div>
          <blockquote className="text-[#2B303A] text-base md:text-lg leading-relaxed mb-6">{t.quote}</blockquote>
        </div>
        <div className="flex items-center gap-3">
          <InitialsAvatar name={t.name} />
          <div>
            <p className="text-[#0D2346] font-bold text-sm">{t.name}</p>
            <p className="text-[#2B303A]/60 text-xs">{t.role} · {t.school}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="flex gap-2" aria-label="Testimonial indicators" role="group">
          {teach4impactTestimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-200 ${i === current ? "bg-[#C5A059] w-5" : "bg-[#0D2346]/20 w-2 hover:bg-[#C5A059]/50"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} aria-label="Previous testimonial" className="w-9 h-9 border border-[#0D2346]/20 flex items-center justify-center text-[#0D2346] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors rounded-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} aria-label="Next testimonial" className="w-9 h-9 border border-[#0D2346]/20 flex items-center justify-center text-[#0D2346] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors rounded-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <p className="text-[#2B303A]/30 text-xs mt-3 text-right" style={{ fontFamily: "var(--font-mono)" }}>Swipe to navigate on mobile</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#F9F9FB]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slide-up" className="mb-16">
          <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)" }} aria-hidden="true">What Clients Say</p>
          <h2 id="testimonials-heading" className="font-display text-[#0D2346] text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl" style={{ fontFamily: "var(--font-display)" }}>
            Real Impact, Real Voices
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection animation="slide-left">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[#E65F2B] text-xs tracking-[0.2em] uppercase font-bold" style={{ fontFamily: "var(--font-mono)" }}>TEACH4IMPACT</span>
                <div className="flex-1 h-px bg-[#E65F2B]/20" />
              </div>
              <Teach4ImpactCarousel />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[#E65F2B] text-xs tracking-[0.2em] uppercase font-bold" style={{ fontFamily: "var(--font-mono)" }}>STUDY4SUCCESS</span>
                <div className="flex-1 h-px bg-[#E65F2B]/20" />
              </div>

              <div className="flex flex-col gap-4">
                {study4successTestimonials.map((t, i) => (
                  <div key={i} className="bg-white border border-[#EEF2F6] p-6 shadow-sm hover:border-[#C5A059]/30 hover:shadow-md transition-all duration-200">
                    <div className="text-[#C5A059] text-4xl leading-none font-display mb-2 select-none" aria-hidden="true" style={{ fontFamily: "var(--font-display)" }}>&ldquo;</div>
                    <blockquote className="text-[#2B303A] leading-relaxed text-sm md:text-base">{t.quote}</blockquote>
                  </div>
                ))}

                <div className="flex items-center gap-3 px-1">
                  <InitialsAvatar name="Moses Isa" />
                  <div>
                    <p className="text-[#0D2346] font-bold text-sm">Moses Isa</p>
                    <p className="text-[#2B303A]/60 text-xs">Principal · Genesis Christian Academy, Kuje, Abuja</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
