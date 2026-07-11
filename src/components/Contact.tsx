"use client";

import { useState, FormEvent } from "react";

const programs = [
  "TEACH4IMPACT — Teacher Training",
  "STUDY4SUCCESS — Academic Excellence Coaching",
  "LEAD4TRANSFORMATION — Leadership Development",
  "General Educational Consulting",
  "Other / Not sure yet",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#0D2346]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Contact Info */}
          <div>
            <p
              className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
              aria-hidden="true"
            >
              Reach Out
            </p>
            <h2
              id="contact-heading"
              className="font-display text-[#F9F9FB] text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s Work Together
            </h2>
            <p className="text-[#F9F9FB]/65 text-lg leading-relaxed mb-12">
              Whether you are a school administrator, educator, student, or organizational
              leader — we would love to hear from you. Reach us directly or fill in the
              form and we will respond promptly.
            </p>

            {/* Contact methods */}
            <div className="flex flex-col gap-6">
              {/* Email */}
              <a
                href="mailto:cell4impact@gmail.com"
                id="contact-email"
                className="group flex items-center gap-5 p-5 border border-[#F9F9FB]/10 hover:border-[#C5A059]/40 hover:bg-[#F9F9FB]/5 transition-all duration-200 rounded-sm"
                aria-label="Email us at cell4impact@gmail.com"
              >
                <div className="w-11 h-11 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] flex-shrink-0 group-hover:bg-[#C5A059]/25 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F9F9FB]/50 text-xs uppercase tracking-widest mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>Email</p>
                  <p className="text-[#F9F9FB] font-medium">cell4impact@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+2348130428804"
                id="contact-phone"
                className="group flex items-center gap-5 p-5 border border-[#F9F9FB]/10 hover:border-[#C5A059]/40 hover:bg-[#F9F9FB]/5 transition-all duration-200 rounded-sm"
                aria-label="Call us at +234 813 042 8804"
              >
                <div className="w-11 h-11 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] flex-shrink-0 group-hover:bg-[#C5A059]/25 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F9F9FB]/50 text-xs uppercase tracking-widest mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>Phone</p>
                  <p className="text-[#F9F9FB] font-medium">+234 813 042 8804</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2349047284931"
                id="contact-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 border border-[#F9F9FB]/10 hover:border-[#C5A059]/40 hover:bg-[#F9F9FB]/5 transition-all duration-200 rounded-sm"
                aria-label="Message us on WhatsApp: +234 904 728 4931 (opens in new tab)"
              >
                <div className="w-11 h-11 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] flex-shrink-0 group-hover:bg-[#C5A059]/25 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F9F9FB]/50 text-xs uppercase tracking-widest mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>WhatsApp</p>
                  <p className="text-[#F9F9FB] font-medium">+234 904 728 4931</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div className="bg-[#F9F9FB] p-8 md:p-10">
              <h3
                className="font-display text-[#0D2346] text-2xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send Us a Message
              </h3>

              {status === "success" ? (
                <div
                  role="alert"
                  className="flex flex-col items-center justify-center text-center py-10 gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#C5A059]/15 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#0D2346] font-bold text-lg">Message Sent!</p>
                  <p className="text-[#2B303A]/70 text-sm">
                    Thank you for reaching out. We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <div className="flex flex-col gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-[#0D2346] text-sm font-semibold mb-1.5">
                        Full Name <span aria-hidden="true" className="text-[#E65F2B]">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className="w-full border border-[#EEF2F6] bg-white px-4 py-3 text-[#2B303A] placeholder:text-[#2B303A]/35 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email-field" className="block text-[#0D2346] text-sm font-semibold mb-1.5">
                        Email Address <span aria-hidden="true" className="text-[#E65F2B]">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email-field"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="your@email.com"
                        className="w-full border border-[#EEF2F6] bg-white px-4 py-3 text-[#2B303A] placeholder:text-[#2B303A]/35 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-colors"
                      />
                    </div>

                    {/* Program */}
                    <div>
                      <label htmlFor="contact-program" className="block text-[#0D2346] text-sm font-semibold mb-1.5">
                        Interested In
                      </label>
                      <select
                        id="contact-program"
                        name="program"
                        className="w-full border border-[#EEF2F6] bg-white px-4 py-3 text-[#2B303A] focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-colors appearance-none"
                      >
                        <option value="">— Select a program —</option>
                        {programs.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-[#0D2346] text-sm font-semibold mb-1.5">
                        Message <span aria-hidden="true" className="text-[#E65F2B]">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className="w-full border border-[#EEF2F6] bg-white px-4 py-3 text-[#2B303A] placeholder:text-[#2B303A]/35 focus:border-[#C5A059] focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-colors resize-none"
                      />
                    </div>

                    {/* Error message */}
                    {status === "error" && (
                      <p role="alert" className="text-[#E65F2B] text-sm">
                        Something went wrong. Please try again or contact us directly.
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      id="contact-submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 bg-[#0D2346] text-[#F9F9FB] font-bold text-sm tracking-wide hover:bg-[#C5A059] hover:text-[#0D2346] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
