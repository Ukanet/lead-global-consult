import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEAD GLOBAL CONSULTS | Capacity-Building, Training & Leadership Development",
  description:
    "LEAD GLOBAL CONSULTS equips educators, learners, leaders, and organizations with the knowledge, skills, and strategies required to excel in a dynamic world — through high-quality capacity-building programs, academic excellence coaching, and leadership development.",
  keywords: [
    "leadership development Nigeria",
    "teacher training Nigeria",
    "educational consulting",
    "capacity building",
    "academic coaching",
    "CELL",
    "LEAD GLOBAL CONSULTS",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    title: "LEAD GLOBAL CONSULTS | Capacity-Building & Leadership Development",
    description:
      "Empowering schools, educators, learners, and organizations to achieve excellence and sustainable growth through innovative training and leadership programs.",
    siteName: "LEAD GLOBAL CONSULTS",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEAD GLOBAL CONSULTS",
    description:
      "Equipping educators, learners, leaders, and organizations to excel in a dynamic world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
