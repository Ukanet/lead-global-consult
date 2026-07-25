import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogInsights from "@/components/BlogInsights";

export const metadata: Metadata = {
  title: "Insights & Perspectives",
  description: "Practical thinking on education, leadership, and organisational excellence from the LEAD GLOBAL CONSULTS team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge & Resources"
        heading="Insights & Perspectives"
        description="Practical thinking on education, leadership, and organisational excellence — written for the practitioners who live it every day."
        breadcrumbs={[{ label: "Insights", href: "/insights" }]}
      />
      <BlogInsights />
    </>
  );
}
