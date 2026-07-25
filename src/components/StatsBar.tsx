"use client";

import { useCounter } from "@/hooks/useCounter";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: 200, suffix: "+", label: "Educators Trained", description: "Teachers and school leaders upskilled" },
  { value: 10,  suffix: "+", label: "Schools & Orgs Served", description: "Institutions transformed across Abuja" },
  { value: 3,   suffix: "",  label: "Specialized Programs", description: "TEACH4IMPACT · STUDY4SUCCESS · LEAD4TRANSFORMATION" },
  { value: 100, suffix: "%", label: "Client Satisfaction", description: "Based on post-program feedback" },
];

function StatItem({ value, suffix, label, description, delay }: (typeof stats)[0] & { delay: number }) {
  const { count, ref } = useCounter(value, 1800, suffix);

  return (
    <AnimatedSection delay={delay} animation="slide-up">
      <div className="flex flex-col items-center text-center px-4 py-6">
        <span
          ref={ref}
          className="text-4xl md:text-5xl font-bold text-[#C5A059] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
          aria-live="polite"
        >
          {count}{suffix}
        </span>
        <span className="text-[#F9F9FB] font-semibold text-base mb-1">{label}</span>
        <span className="text-[#F9F9FB]/50 text-xs leading-relaxed max-w-[180px]">{description}</span>
      </div>
    </AnimatedSection>
  );
}

export default function StatsBar() {
  return (
    <section
      aria-label="Key statistics"
      className="bg-[#0D2346] border-y border-[#C5A059]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#F9F9FB]/10">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
