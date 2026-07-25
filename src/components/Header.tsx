"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",           label: "Home" },
  { href: "/about",        label: "About" },
  { href: "/programs",     label: "Programs" },
  { href: "/consulting",   label: "Consulting" },
  { href: "/insights",     label: "Insights" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMobileOpen(false);
    };
    if (mobileOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Use transparent on home hero, solid on inner pages
  const isHome = pathname === "/";
  const bgClass = scrolled || !isHome
    ? "bg-[#0D2346] shadow-lg shadow-black/20"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`} role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" aria-label="LEAD GLOBAL CONSULTS — home" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="LEAD GLOBAL CONSULTS"
              width={120}
              height={60}
              priority
              className="object-contain group-hover:opacity-85 transition-opacity duration-200"
              style={{ maxHeight: 52 }}
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm
                  ${isActive(href)
                    ? "text-[#C5A059]"
                    : "text-[#F9F9FB]/80 hover:text-[#F9F9FB]"}`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C5A059] rounded-full" aria-hidden="true" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 bg-[#C5A059] text-[#0D2346] text-sm font-bold rounded-sm hover:bg-[#d4b06d] active:scale-95 transition-all duration-150"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-[#F9F9FB] hover:text-[#C5A059] transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden bg-[#0D2346] border-t border-[#C5A059]/20 transition-all duration-300 overflow-hidden
          ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav aria-label="Mobile navigation" className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`py-3 px-2 font-medium border-b border-[#C5A059]/10 transition-colors
                ${isActive(href) ? "text-[#C5A059]" : "text-[#F9F9FB]/80 hover:text-[#C5A059]"}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 py-3 px-4 bg-[#C5A059] text-[#0D2346] font-bold text-center rounded-sm hover:bg-[#d4b06d] transition-colors"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
