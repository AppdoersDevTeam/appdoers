import React from 'react';
import Hero from './Hero';
import TechStack from './TechStack';
import DigitalSolutions from './DigitalSolutions';
import Portfolio from './Portfolio';
import Statistics from './Statistics';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Protocol from './Protocol';
import FoundersSection from './FoundersSection';
import HomeCTA from './HomeCTA';
import SectionPreview from './SectionPreview';
import StructuredData from './StructuredData';
import { brand } from '../content/siteContent';
import { usePageMeta } from '../hooks/usePageMeta';

const HomePage: React.FC = () => {
  usePageMeta({
    title: brand.metaTitle,
    description: brand.metaDescription,
    path: '/',
  });

  return (
    <div>
      <StructuredData type="home" />
      <Hero />
      <TechStack />
      <DigitalSolutions />
      <section className="py-3 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <SectionPreview
            title=""
            description="Basic and Full website plans for businesses, churches, and organisations — with clear pricing."
            to="/services"
            linkLabel="View all services"
          />
        </div>
      </section>
      <Portfolio />
      <section className="py-3 bg-white">
        <div className="container mx-auto px-4">
          <SectionPreview
            title=""
            description="Full stories: the challenge, what we built, and the results for each client."
            to="/work"
            linkLabel="Explore all work"
          />
        </div>
      </section>
      <Testimonials />
      <Statistics />
      <Pricing variant="preview" />
      <Protocol />
      <FoundersSection variant="compact" />
      <HomeCTA />
    </div>
  );
};

export default HomePage;
