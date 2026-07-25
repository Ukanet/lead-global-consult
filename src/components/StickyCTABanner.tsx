"use client";

import { useState, useEffect } from "react";

export default function StickyCTABanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past 90vh (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      role="complementary"
      aria-label="Call to action banner"
      className={`fixed top-0 left-0 right-0 z-40 bg-[#C5A059] text-[#0D2346] transition-all duration-300
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold flex-1 text-center sm:text-left">
          Ready to transform your school or organization?&nbsp;
          <a
            href="#contact"
            className="underline hover:no-underline font-bold"
          >
            Get in touch today →
          </a>
        </p>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
