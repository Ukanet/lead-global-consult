import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what educators, school leaders, and students say about the real impact of LEAD GLOBAL CONSULTS' programs — authentic voices from Cyrus International School, Genesis Christian Academy, and more.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Voices"
        heading="Real Impact, Real Voices"
        description="Authentic feedback from the educators, leaders, and learners we have had the privilege of working with across Nigeria."
        breadcrumbs={[{ label: "Testimonials", href: "/testimonials" }]}
      />
      <Testimonials />
    </>
  );
}
