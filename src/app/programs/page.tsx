import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Programs from "@/components/Programs";

export const metadata: Metadata = {
  title: "Our Programs",
  description: "Explore LEAD GLOBAL CONSULTS' three specialist programs: TEACH4IMPACT (teacher training), STUDY4SUCCESS (academic coaching), and LEAD4TRANSFORMATION (leadership development).",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Arms"
        heading="Our Programs"
        description="Three focused, high-impact programs designed to equip educators, learners, and leaders with the skills and strategies they need to excel."
        breadcrumbs={[{ label: "Programs", href: "/programs" }]}
      />
      <Programs />
    </>
  );
}
