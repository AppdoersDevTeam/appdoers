import React from 'react';
import { Link } from 'react-router-dom';
import { portfolio } from '../content/siteContent';
import PortfolioPreview from './PortfolioPreview';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="section-py bg-white">
      <div className="container mx-auto px-4">
        <MotionReveal className="text-center section-head">
          <h2 className="section-title">Selected Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real websites for New Zealand clients, built to be fast, clear, and easy to use.
          </p>
        </MotionReveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolio.map((project) => (
            <StaggerItem key={project.slug}>
              <article className="feature-card flex flex-col h-full overflow-hidden p-0 hover:shadow-2xl transition-shadow duration-500">
                <PortfolioPreview
                  title={project.title}
                  externalUrl={project.externalUrl}
                  embeddable={project.embeddable !== false}
                  compact
                />
                <div className="p-6 flex flex-col flex-grow">
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
                    to={project.link}
                    className="inline-flex items-center justify-center bg-[#086375] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#3c1642] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Read case study
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Portfolio;
