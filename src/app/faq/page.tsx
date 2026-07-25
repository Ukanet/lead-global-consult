import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to frequently asked questions about LEAD GLOBAL CONSULTS — our programs, consulting services, pricing, scheduling, and how to get started.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        heading="Frequently Asked Questions"
        description="Everything you need to know about our programs, services, and how we work with schools and organisations."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
      />
      <FAQ />
    </>
  );
}
