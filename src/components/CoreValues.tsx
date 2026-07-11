"use client";

import { useEffect, useRef, useState } from "react";

const acrosticValues = [
  { letter: "L", name: "Leadership", description: "We inspire visionary leadership and positive influence at all levels." },
  { letter: "E", name: "Excellence", description: "We pursue the highest standards of quality, professionalism, and performance." },
  { letter: "A", name: "Accountability", description: "We uphold integrity, transparency, and responsibility in all our engagements." },
  { letter: "D", name: "Development", description: "We are committed to continuous learning, innovation, and human capacity development." },
  { letter: "G", name: "Growth", description: "We promote sustainable growth and measurable progress for individuals and institutions." },
  { letter: "L", name: "Learning", description: "We foster lifelong learning and knowledge-driven transformation." },
  { letter: "O", name: "Opportunity", description: "We create pathways for individuals and organizations to realize their full potential." },
  { letter: "B", name: "Collaboration", description: "We believe in partnership, teamwork, and collective success." },
  { letter: "A", name: "Adaptability", description: "We embrace change and provide solutions for a rapidly evolving world." },
  { letter: "L", name: "Lasting Impact", description: "We strive to create meaningful and sustainable change in every community we serve." },
];

export default function CoreValues() {
  const [visibleRows, setVisibleRows] = useState<Set<number>>(new Set());
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleRows((prev) => new Set([...prev, i]));
            }, i * 80);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="values"
      className="py-24 md:py-32 bg-[#0D2346] overflow-hidden"
      aria-labelledby="values-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p
            className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
            aria-hidden="true"
          >
            What We Stand For
          </p>
          <h2
            id="values-heading"
            className="font-display text-[#F9F9FB] text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Core Values
          </h2>
          <p className="text-[#F9F9FB]/60 mt-4 text-lg">
            Our name spells our purpose — each letter a commitment.
          </p>
        </div>

        {/* Acrostic */}
        <div role="list" aria-label="LEAD GLOBAL core values acrostic">
          {acrosticValues.map((item, i) => (
            <div
              key={`${item.letter}-${i}`}
              ref={(el) => { rowRefs.current[i] = el; }}
              role="listitem"
              tabIndex={0}
              className={`acrostic-row group flex items-start gap-6 md:gap-10 py-5 border-b border-[#F9F9FB]/10 cursor-default
                transition-all duration-500
                ${visibleRows.has(i) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
              `}
              aria-label={`${item.letter} — ${item.name}: ${item.description}`}
            >
              {/* Big letter */}
              <span
                className="acrostic-letter flex-shrink-0 text-[#C5A059] text-5xl md:text-6xl font-bold w-12 md:w-16 text-center select-none"
                style={{ fontFamily: "var(--font-mono)" }}
                aria-hidden="true"
              >
                {item.letter}
              </span>

              {/* Value content */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-2 flex-1">
                <span
                  className="text-[#F9F9FB] font-bold text-base md:text-lg min-w-[160px] group-hover:text-[#C5A059] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.name}
                </span>
                <span className="text-[#F9F9FB]/60 text-sm md:text-base leading-relaxed group-hover:text-[#F9F9FB]/85 transition-colors duration-200">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
