import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from './PageHero';
import FoundersSection from './FoundersSection';
import Protocol from './Protocol';
import TechStack from './TechStack';
import { aboutContent, brand, pageIntros } from '../content/siteContent';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow={pageIntros.about.eyebrow}
        title={pageIntros.about.title}
        subtitle={pageIntros.about.subtitle}
        primaryCta={{ label: 'Work With Us', to: '/contact' }}
        secondaryCta={{ label: 'View Pricing', to: '/pricing' }}
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="section-title">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">{aboutContent.mission}</p>
          <p className="text-lg text-gray-600 leading-relaxed">{aboutContent.vision}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="section-title text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutContent.values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 shadow-md text-center">
                <h3 className="text-xl font-bold text-[#086375] mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FoundersSection />
      <Protocol />
      <TechStack />

      <section className="py-16 px-4 bg-[#086375] text-white text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Ready to partner?</h2>
          <p className="text-white/90 mb-6">
            Explore our work, compare tiers, or book a call to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/work"
              className="bg-white/10 border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20"
            >
              View Work
            </Link>
            <Link
              to="/pricing"
              className="bg-[#affc41] text-[#3c1642] font-semibold px-6 py-3 rounded-lg hover:bg-white"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-gray-100 text-center">
        <p className="text-gray-600 mb-2">{brand.location}</p>
        <p className="text-gray-800 font-medium">{brand.address}</p>
        <p className="text-gray-600 mt-2">
          <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="hover:text-[#086375]">
            {brand.phone}
          </a>
          {' · '}
          <a href={`mailto:${brand.email}`} className="hover:text-[#086375]">
            {brand.email}
          </a>
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
