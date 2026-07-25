import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import BackToTop from "@/components/BackToTop";
import MobileContactBar from "@/components/MobileContactBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": "https://leadglobalconsults.com/#organization",
      name: "LEAD GLOBAL CONSULTS",
      alternateName: "CELL — Center for Excellence in Leadership and Learning",
      description:
        "A professional consulting, training, and capacity-development organization dedicated to empowering schools, educational institutions, businesses, nonprofit organizations, and leaders to achieve excellence and sustainable growth.",
      url: "https://leadglobalconsults.com",
      email: "cell4impact@gmail.com",
      telephone: "+2348130428804",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abuja",
        addressRegion: "FCT",
        addressCountry: "NG",
      },
      areaServed: { "@type": "Country", name: "Nigeria" },
      knowsAbout: [
        "Teacher Training", "Educational Consulting", "Leadership Development",
        "Academic Excellence Coaching", "Organizational Transformation", "Capacity Building",
      ],
      sameAs: ["https://wa.me/2349047284931"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://leadglobalconsults.com"),
  title: {
    default: "LEAD GLOBAL CONSULTS | Capacity-Building, Training & Leadership Development",
    template: "%s | LEAD GLOBAL CONSULTS",
  },
  description:
    "LEAD GLOBAL CONSULTS equips educators, learners, leaders, and organizations with the knowledge, skills, and strategies required to excel in a dynamic world.",
  keywords: [
    "leadership development Nigeria", "teacher training Abuja", "educational consulting Nigeria",
    "capacity building FCT", "academic coaching Nigeria", "CELL", "LEAD GLOBAL CONSULTS",
    "TEACH4IMPACT", "STUDY4SUCCESS", "LEAD4TRANSFORMATION", "school consulting Abuja",
  ],
  authors: [{ name: "LEAD GLOBAL CONSULTS" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://leadglobalconsults.com",
    title: "LEAD GLOBAL CONSULTS | Capacity-Building & Leadership Development",
    description:
      "Empowering schools, educators, learners, and organizations to achieve excellence through innovative training and leadership programs.",
    siteName: "LEAD GLOBAL CONSULTS",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEAD GLOBAL CONSULTS",
    description: "Equipping educators, learners, leaders, and organizations to excel in a dynamic world.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        {/* Persistent overlays */}
        <WhatsAppFAB />
        <BackToTop />
        <MobileContactBar />
      </body>
    </html>
  );
}
