import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with LEAD GLOBAL CONSULTS — reach us by email, phone, or WhatsApp, or fill in our contact form and we'll respond within 24 hours.",
};

function ContactInfo() {
  const details = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      label: "Email",
      value: "cell4impact@gmail.com",
      href: "mailto:cell4impact@gmail.com",
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
      label: "Phone",
      value: "+234 813 042 8804",
      href: "tel:+2348130428804",
    },
    {
      icon: null,
      label: "WhatsApp",
      value: "+234 904 728 4931",
      href: "https://wa.me/2349047284931",
      isWA: true,
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
      label: "Location",
      value: "Abuja (FCT), Nigeria",
      href: undefined,
    },
  ];

  return (
    <section className="bg-[#EEF2F6] py-16" aria-labelledby="contact-info-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {details.map(({ icon, label, value, href, isWA }) => (
            <AnimatedSection key={label} animation="slide-up">
              <div className="bg-white p-6 border border-[#EEF2F6] hover:border-[#C5A059]/30 transition-colors duration-200 text-center">
                <div className="w-10 h-10 bg-[#0D2346]/8 rounded-full flex items-center justify-center mx-auto mb-4 text-[#C5A059]">
                  {isWA ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                      {icon}
                    </svg>
                  )}
                </div>
                <p className="text-[#0D2346] text-xs tracking-widest uppercase font-semibold mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}>{label}</p>
                {href ? (
                  <a href={href} target={isWA ? "_blank" : undefined} rel={isWA ? "noopener noreferrer" : undefined}
                    className="text-[#2B303A] text-sm font-medium hover:text-[#C5A059] transition-colors duration-150">
                    {value}
                  </a>
                ) : (
                  <p className="text-[#2B303A] text-sm font-medium">{value}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Response promise + Office hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection animation="slide-left">
            <div className="bg-[#0D2346] p-7 flex items-start gap-5">
              <div className="w-10 h-10 bg-[#C5A059]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[#C5A059] text-xs tracking-[0.25em] uppercase font-semibold mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}>Our Promise</p>
                <h3 className="text-[#F9F9FB] font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  We Respond Within 24 Hours
                </h3>
                <p className="text-[#F9F9FB]/60 text-sm leading-relaxed">
                  Every enquiry receives a personal, thoughtful response — not an automated reply.
                  We typically respond on the same business day.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right">
            <div className="bg-white border border-[#EEF2F6] p-7 flex items-start gap-5">
              <div className="w-10 h-10 bg-[#C5A059]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[#C5A059] text-xs tracking-[0.25em] uppercase font-semibold mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}>Office Hours</p>
                <h3 className="text-[#0D2346] font-bold text-lg mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  When We Are Available
                </h3>
                <dl className="flex flex-col gap-1.5">
                  {[
                    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
                    { day: "Saturday",        time: "9:00 AM – 2:00 PM" },
                    { day: "Sunday",          time: "Closed" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between gap-4">
                      <dt className="text-[#2B303A]/70 text-sm">{day}</dt>
                      <dd className="text-[#0D2346] text-sm font-semibold">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Reach Out"
        heading="Let's Work Together"
        description="Whether you lead a school, an organisation, or a team — we would love to hear from you."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <ContactInfo />
      <Contact />
    </>
  );
}
