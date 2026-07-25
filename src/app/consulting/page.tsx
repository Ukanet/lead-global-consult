import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import EngagementProcess from '@/components/EngagementProcess';
import Consulting from '@/components/Consulting';
import CaseStudies from '@/components/CaseStudies';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Educational Consulting',
  description: 'LEAD GLOBAL CONSULTS provides strategic educational consulting for schools and institutions — curriculum development, professional development, strategic planning, and innovative program design.',
};

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Educational Consulting"
        heading="Helping Institutions Unlock Their Full Potential"
        description="We partner with schools and organisations to deliver tailored consulting solutions that improve outcomes, strengthen systems, and drive sustainable growth."
        breadcrumbs={[{ label: 'Consulting', href: '/consulting' }]}
      />
      <EngagementProcess />
      <Consulting />
      <CaseStudies />
      <FAQ />
    </>
  );
}
