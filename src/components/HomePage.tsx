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
import { founders, foundersIntro } from '../content/siteContent';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';
import { usePageMeta } from '../hooks/usePageMeta';

const HomePage: React.FC = () => {
  usePageMeta({
    title: 'Appdoers | Custom Web Solutions & AI Integration',
    description:
      'Fast, easy-to-use websites for New Zealand businesses. Clear pricing, hosting included, and you speak directly with the people doing the work.',
  });

  return (
    <main>
      <Hero />
      <TechStack />
      <DigitalSolutions />
      <section className="py-6 bg-gray-50 border-b border-gray-100">
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
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <SectionPreview
            title=""
            description="Full stories: the challenge, what we built, and the results for each client."
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
            description="Compare plans, read common questions, and see everything included."
            to="/pricing"
            linkLabel="See full pricing details"
          />
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <MotionReveal className="text-center mb-12">
            <p className="text-[#1dd3b0] font-semibold uppercase tracking-wider text-sm mb-2">
              The Team Behind
            </p>
            <h2 className="section-title">Meet Fabiano &amp; Sara</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{foundersIntro.lead}</p>
          </MotionReveal>
          <Stagger className="grid md:grid-cols-2 gap-8 mb-10">
            {founders.map((f) => (
              <StaggerItem key={f.id}>
                <div className="rounded-xl border border-[#b2ff9e]/60 p-6 bg-gray-50 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                  <span className="text-xs font-bold bg-[#086375] text-white px-2 py-1 rounded">
                    {f.badge}
                  </span>
                  <h3 className="text-xl font-bold text-[#3c1642] mt-3">{f.name}</h3>
                  <p className="text-[#1dd3b0] text-sm font-medium mb-1">{f.role}</p>
                  <p className="text-xs text-gray-500 mb-3">{f.location}</p>
                  <p className="text-gray-600 text-sm mb-4">{f.bio}</p>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    {f.focus.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#1dd3b0] shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <MotionReveal className="text-center" delay={0.15}>
            <Link
              to="/about"
              className="inline-block bg-[#086375] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#3c1642] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              About us: full story
            </Link>
          </MotionReveal>
        </div>
      </section>
      <HomeCTA />
    </main>
  );
};

export default HomePage;
