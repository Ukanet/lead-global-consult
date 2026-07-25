import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/about",        label: "About Us" },
  { href: "/programs",     label: "Our Programs" },
  { href: "/consulting",   label: "Consulting" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq",          label: "FAQ" },
  { href: "/insights",     label: "Insights" },
  { href: "/contact",      label: "Contact" },
];

const programs = [
  { href: "/programs#teach4impact",        label: "TEACH4IMPACT" },
  { href: "/programs#study4success",       label: "STUDY4SUCCESS" },
  { href: "/programs#lead4transformation", label: "LEAD4TRANSFORMATION" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D2346] border-t border-[#C5A059]/25" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="LEAD GLOBAL CONSULTS — home" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo.png"
                alt="LEAD GLOBAL CONSULTS"
                width={110}
                height={55}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-[#F9F9FB]/50 text-sm leading-relaxed mb-5">
              Center for Excellence in Leadership and Learning — empowering educators,
              learners, leaders, and organizations to excel.
            </p>
            {/* Social / contact chips */}
            <div className="flex flex-col gap-2">
              {[
                { href: "mailto:cell4impact@gmail.com", label: "cell4impact@gmail.com" },
                { href: "tel:+2348130428804",           label: "+234 813 042 8804" },
              ].map(({ href, label }) => (
                <a key={href} href={href}
                  className="text-[#F9F9FB]/40 text-xs hover:text-[#C5A059] transition-colors duration-150">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className="text-[#C5A059] text-xs tracking-[0.25em] uppercase mb-5 font-medium"
              style={{ fontFamily: "var(--font-mono)" }}>
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    className="text-[#F9F9FB]/55 text-sm hover:text-[#C5A059] transition-colors duration-150 flex items-center gap-2 group">
                    <span className="w-3 h-px bg-[#C5A059]/30 group-hover:w-5 group-hover:bg-[#C5A059] transition-all duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programs */}
          <div>
            <p className="text-[#C5A059] text-xs tracking-[0.25em] uppercase mb-5 font-medium"
              style={{ fontFamily: "var(--font-mono)" }}>
              Programs
            </p>
            <ul className="flex flex-col gap-2.5">
              {programs.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    className="text-[#F9F9FB]/55 text-sm hover:text-[#C5A059] transition-colors duration-150 flex items-center gap-2 group">
                    <span className="w-3 h-px bg-[#C5A059]/30 group-hover:w-5 group-hover:bg-[#C5A059] transition-all duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="text-[#C5A059] text-xs tracking-[0.25em] uppercase mb-5 font-medium"
              style={{ fontFamily: "var(--font-mono)" }}>
              Get in Touch
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  href: "mailto:cell4impact@gmail.com",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                  label: "cell4impact@gmail.com",
                },
                {
                  href: "tel:+2348130428804",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                  label: "+234 813 042 8804",
                },
                {
                  href: "https://wa.me/2349047284931",
                  icon: null,
                  label: "+234 904 728 4931",
                  isWA: true,
                },
              ].map(({ href, icon, label, isWA }) => (
                <a key={href} href={href}
                  target={isWA ? "_blank" : undefined}
                  rel={isWA ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-[#F9F9FB]/55 text-sm hover:text-[#C5A059] transition-colors duration-150">
                  <span className="w-4 h-4 flex-shrink-0 text-[#C5A059]/60">
                    {isWA ? (
                      <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    ) : (
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                        {icon}
                      </svg>
                    )}
                  </span>
                  {label}
                </a>
              ))}
            </div>

            <Link href="/contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-[#C5A059] text-[#0D2346] text-sm font-bold hover:bg-[#d4b06d] transition-colors duration-150">
              Send a Message
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#F9F9FB]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#F9F9FB]/35 text-xs">
            &copy; {year} LEAD GLOBAL CONSULTS. All rights reserved.
          </p>
          <p className="text-[#F9F9FB]/25 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            Center for Excellence in Leadership and Learning · Abuja, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
