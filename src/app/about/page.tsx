import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import About from '@/components/About';
import CoreValues from '@/components/CoreValues';
import StrategicObjectives from '@/components/StrategicObjectives';
import Timeline from '@/components/Timeline';
import ImpactNumbers from '@/components/ImpactNumbers';
import Partnerships from '@/components/Partnerships';
import Team from '@/components/Team';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about LEAD GLOBAL CONSULTS — our mission, vision, core values, strategic objectives, and the team driving educational and leadership transformation across Nigeria.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        heading="About LEAD GLOBAL CONSULTS"
        description="A professional consulting and capacity-development organisation dedicated to empowering educators, learners, leaders, and institutions to achieve excellence and sustainable growth."
        breadcrumbs={[{ label: 'About', href: '/about' }]}
      />
      <About />
      <Timeline />
      <ImpactNumbers />
      <CoreValues />
      <StrategicObjectives />
      <Partnerships />
      <Team />
    </>
  );
}
