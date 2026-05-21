import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import TechStack from './TechStack';
import DigitalSolutions from './DigitalSolutions';
import Portfolio from './Portfolio';
import Statistics from './Statistics';
import Pricing from './Pricing';
import HomeCTA from './HomeCTA';
import SectionPreview from './SectionPreview';
import { founders } from '../content/siteContent';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <TechStack />
      <DigitalSolutions />
      <section className="py-6 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <SectionPreview
            title=""
            description="Three offerings from our v1 playbook—web, digital systems, and ministry platforms."
            to="/services"
            linkLabel="View all services"
          />
        </div>
      </section>
      <Portfolio compact />
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <SectionPreview
            title=""
            description="Full case studies with challenges, solutions, tech stacks, and measurable results."
            to="/work"
            linkLabel="Explore all work"
          />
        </div>
      </section>
      <Statistics />
      <Pricing />
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionPreview
            title=""
            description="Compare tiers, read FAQ, and see the full feature matrix."
            to="/pricing"
            linkLabel="See full pricing details"
          />
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-[#1dd3b0] font-semibold uppercase tracking-wider text-sm mb-2">
              The Minds Behind
            </p>
            <h2 className="section-title">Meet The Founders</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategy and engineering in one partnership—based in New Zealand, building for the world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {founders.map((f) => (
              <div
                key={f.id}
                className="rounded-xl border border-[#b2ff9e]/60 p-6 bg-gray-50"
              >
                <span className="text-xs font-bold bg-[#086375] text-white px-2 py-1 rounded">
                  {f.badge}
                </span>
                <h3 className="text-xl font-bold text-[#3c1642] mt-3">{f.name}</h3>
                <p className="text-[#1dd3b0] text-sm font-medium mb-2">{f.role}</p>
                <p className="text-gray-600 text-sm line-clamp-3">{f.bio}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/about"
              className="inline-block bg-[#086375] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#3c1642] transition-colors"
            >
              About us — full story
            </Link>
          </div>
        </div>
      </section>
      <HomeCTA />
    </main>
  );
};

export default HomePage;
