"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#consulting", label: "Consulting" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0D2346] shadow-lg" : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Wordmark */}
          <a
            href="#hero"
            className="group flex flex-col leading-tight focus-visible:outline-none"
            aria-label="LEAD GLOBAL CONSULTS — go to top"
          >
            <span
              className="font-display font-bold text-[#F9F9FB] tracking-wide text-base md:text-lg group-hover:text-[#C5A059] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              LEAD GLOBAL CONSULTS
            </span>
            <span
              className="text-[#C5A059] text-[10px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              CELL
            </span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm
                    ${isActive ? "text-[#C5A059]" : "text-[#F9F9FB]/80 hover:text-[#F9F9FB]"}`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C5A059] rounded-full" />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-3 px-5 py-2 bg-[#C5A059] text-[#0D2346] text-sm font-bold rounded-sm hover:bg-[#d4b06d] active:scale-95 transition-all duration-150"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-[#F9F9FB] hover:text-[#C5A059] transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden bg-[#0D2346] border-t border-[#C5A059]/20 transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={handleNavClick}
              className="py-3 px-2 text-[#F9F9FB]/80 hover:text-[#C5A059] font-medium border-b border-[#C5A059]/10 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-3 py-3 px-4 bg-[#C5A059] text-[#0D2346] font-bold text-center rounded-sm hover:bg-[#d4b06d] transition-colors"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
