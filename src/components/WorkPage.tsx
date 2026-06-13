import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaExternalLinkAlt } from 'react-icons/fa';
import PageHero from './PageHero';
import PortfolioPreview from './PortfolioPreview';
import Testimonials from './Testimonials';
import Statistics from './Statistics';
import HomeCTA from './HomeCTA';
import StructuredData from './StructuredData';
import { pageIntros, portfolio } from '../content/siteContent';
import { MotionReveal } from './AnimateIn';
import { usePageMeta } from '../hooks/usePageMeta';

const WorkPage: React.FC = () => {
  usePageMeta({
    title: 'Our Work | Appdoers',
    description:
      'Selected New Zealand client websites: ministry platform, nationwide music school, and Taranaki community church — built by Appdoers Limited.',
    path: '/work',
  });

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="work" path="/work" />
      <PageHero
        eyebrow={pageIntros.work.eyebrow}
        title={pageIntros.work.title}
        subtitle={pageIntros.work.subtitle}
        breadcrumbPath="/work"
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
        secondaryCta={{ label: 'View Pricing', to: '/pricing' }}
      />

      <section className="section-py px-4">
        <div className="container mx-auto max-w-5xl space-y-12">
          {portfolio.map((project) => (
            <MotionReveal key={project.slug}>
              <article
                id={project.slug}
                className="scroll-mt-28 border border-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-500"
              >
                <div className="bg-gradient-to-r from-[#3c1642] to-[#086375] px-8 py-6 text-white">
                  <p className="text-[#affc41] text-sm font-semibold uppercase tracking-wide mb-1">
                    {project.category}
                  </p>
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    <div className="text-right">
                      <span className="text-3xl font-bold">{project.metric}</span>
                      <span className="text-white/80 ml-2">{project.metricLabel}</span>
                    </div>
                  </div>
                  <p className="text-white/80 mt-2">{project.client}</p>
                </div>

                <div className="p-8 md:p-10 space-y-8">
                  <p className="text-lg text-gray-700">{project.description}</p>

                  <PortfolioPreview
                    title={project.title}
                    externalUrl={project.externalUrl}
                    embeddable={project.embeddable !== false}
                  />

                  <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#086375] mb-3">The Challenge</h3>
                      <p className="text-gray-600">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#086375] mb-3">Our Solution</h3>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#086375] mb-3">Results</h3>
                    <ul className="grid sm:grid-cols-3 gap-3">
                      {project.results.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 bg-[#f0fdf4] rounded-lg p-4 text-gray-700 text-sm"
                        >
                          <FaCheck className="text-[#1dd3b0] mt-0.5 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#086375] mb-2">
                      What we delivered
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.capabilities.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-[#3c1642]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#086375] font-semibold hover:text-[#1dd3b0] transition-colors"
                    >
                      Visit {project.externalUrl.replace(/^https?:\/\//, '')}
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-[#086375] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#3c1642] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      Build something similar
                    </Link>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </section>

      <Testimonials />
      <Statistics />
      <HomeCTA />
    </div>
  );
};

export default WorkPage;
