"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-24 right-6 z-40 w-10 h-10 bg-[#0D2346] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center rounded-full shadow-lg hover:bg-[#C5A059] hover:text-[#0D2346] active:scale-90 transition-all duration-200
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
