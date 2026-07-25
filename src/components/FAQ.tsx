"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Who are LEAD GLOBAL CONSULTS' programs designed for?",
    a: "Our programs serve a wide spectrum: individual teachers and educators (TEACH4IMPACT), students preparing for examinations or seeking academic excellence (STUDY4SUCCESS), institutional and organizational leaders (LEAD4TRANSFORMATION), and schools or organizations seeking strategic educational consulting. If you are in education or leadership, we have a program for you.",
  },
  {
    q: "Where do you operate?",
    a: "We are headquartered in Abuja (FCT), Nigeria, and have worked with schools across the region including Kuje, Gwagwalada, and surrounding areas. We also offer virtual and hybrid delivery options, making our programs accessible nationwide.",
  },
  {
    q: "Can you come to our school or organization directly?",
    a: "Absolutely. All our programs can be delivered on-site at your institution. We believe in meeting our clients where they are — whether that is a classroom, a boardroom, or a conference hall. Contact us to discuss scheduling and logistics.",
  },
  {
    q: "What is the difference between TEACH4IMPACT and the general consulting service?",
    a: "TEACH4IMPACT is our structured teacher-development program focused on classroom effectiveness, pedagogy, and educator growth at the individual level. Our educational consulting practice works at the institutional level — strategic planning, curriculum design, and whole-school transformation. Many clients engage both.",
  },
  {
    q: "Do you offer customized or bespoke programs?",
    a: "Yes — always. Every school and organization has unique needs, culture, and challenges. We tailor all our programs to your specific context, objectives, and learner profile. A needs assessment is typically the starting point for any engagement.",
  },
  {
    q: "How long do programs typically run?",
    a: "Program duration varies by engagement type. A single training workshop may run one to three days; a sustained capacity-building engagement typically spans four to twelve weeks. Consulting retainers and institutional partnerships are structured on a term or annual basis. We will recommend the format that best serves your goals.",
  },
  {
    q: "How do we get started?",
    a: "Simply reach out! Send us an email at cell4impact@gmail.com, call or WhatsApp us, or use the contact form on this page. We will schedule an initial conversation to understand your needs and recommend the right program or service.",
  },
  {
    q: "What makes LEAD GLOBAL CONSULTS different from other training providers?",
    a: "Three things set us apart: First, we are purpose-built for the Nigerian education and leadership context — our content is not imported wholesale from elsewhere. Second, our approach bridges academics and leadership development, which few providers do in an integrated way. Third, we measure impact — our programs are designed to produce visible, documented change in educator effectiveness, learner outcomes, or institutional performance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-[#EEF2F6]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slide-up">
          <p
            className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
            aria-hidden="true"
          >
            Got Questions?
          </p>
          <h2
            id="faq-heading"
            className="font-display text-[#0D2346] text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#2B303A]/65 text-lg mb-12">
            Everything you need to know before getting in touch.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-3" role="list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={i} animation="slide-up" delay={i * 50}>
                <div
                  role="listitem"
                  className={`bg-white border transition-all duration-200 overflow-hidden rounded-sm ${
                    isOpen ? "border-[#C5A059]/50 shadow-md" : "border-[#EEF2F6] hover:border-[#C5A059]/30"
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                  >
                    <span
                      className={`font-semibold text-base transition-colors duration-200 ${
                        isOpen ? "text-[#C5A059]" : "text-[#0D2346] group-hover:text-[#C5A059]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#C5A059] text-[#0D2346] rotate-45"
                          : "bg-[#0D2346]/8 text-[#0D2346] group-hover:bg-[#C5A059]/15"
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[#2B303A]/80 leading-relaxed text-sm md:text-base border-t border-[#EEF2F6] pt-4">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade" delay={200} className="mt-12 text-center">
          <p className="text-[#2B303A]/65 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D2346] text-[#F9F9FB] font-semibold text-sm rounded-sm hover:bg-[#C5A059] hover:text-[#0D2346] transition-all duration-200"
          >
            Ask Us Directly
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
