import React from 'react';
import { Link } from 'react-router-dom';
import { portfolio } from '../content/siteContent';

type PortfolioProps = {
  compact?: boolean;
};

const Portfolio: React.FC<PortfolioProps> = ({ compact = false }) => {
  const items = compact ? portfolio : portfolio;

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Selected Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Engineering-grade builds with measurable outcomes for New Zealand and global partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((project) => (
            <article
              key={project.title}
              className="feature-card flex flex-col h-full"
            >
              <p className="text-sm font-semibold text-[#1dd3b0] uppercase tracking-wider mb-2">
                {project.category}
              </p>
              <h3 className="text-2xl font-bold text-[#086375] mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-[#3c1642]">{project.metric}</span>
                <span className="text-gray-600">{project.metricLabel}</span>
              </div>
              <Link
                to={compact ? '/work' : project.link}
                className="inline-flex items-center justify-center bg-[#086375] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#3c1642] transition-colors"
              >
                {compact ? 'View All Work' : 'View Case Study'}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
