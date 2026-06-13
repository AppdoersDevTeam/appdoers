import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaUsers, FaArrowRight } from 'react-icons/fa';
import PageHero from './PageHero';
import Protocol from './Protocol';
import AudienceSwitcher from './AudienceSwitcher';
import {
  audienceSpotlights,
  getAudienceProductCopy,
  isRecommendedPlanForAudience,
} from '../content/audienceContent';
import { pageIntros, products } from '../content/siteContent';
import { useAudienceSegment } from '../context/AudienceSegmentContext';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';
import { usePageMeta } from '../hooks/usePageMeta';

const productIcons = {
  basic: <FaGlobe className="text-4xl text-[#1dd3b0]" />,
  full: <FaUsers className="text-4xl text-[#1dd3b0]" />,
};

const ServicesPage: React.FC = () => {
  const { audienceId } = useAudienceSegment();
  const spotlight = audienceSpotlights[audienceId];

  usePageMeta({
    title: 'Services | Appdoers',
    description:
      'Basic and Full website plans for New Zealand businesses, churches, and organisations — with clear monthly pricing.',
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow={pageIntros.services.eyebrow}
        title={pageIntros.services.title}
        subtitle={pageIntros.services.subtitle}
        primaryCta={{ label: 'View Pricing', to: '/pricing' }}
        secondaryCta={{ label: 'Start Your Project', to: '/contact' }}
      />

      <section className="py-5 px-4 border-b border-gray-100 bg-white">
        <div className="container mx-auto max-w-3xl">
          <AudienceSwitcher />
        </div>
      </section>

      <section className="py-6 px-4 bg-gradient-to-r from-[#3c1642]/5 to-[#086375]/5 border-y border-gray-100">
        <MotionReveal className="container mx-auto max-w-3xl text-center" key={audienceId}>
          <h2 className="text-xl font-bold text-[#086375] mb-2">{spotlight.title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">{spotlight.description}</p>
          <p className="text-sm text-[#3c1642] font-medium mb-4">{spotlight.example}</p>
          <Link
            to={spotlight.link}
            className="text-sm font-semibold text-[#086375] hover:text-[#1dd3b0] transition-colors"
          >
            {spotlight.linkLabel} →
          </Link>
        </MotionReveal>
      </section>

      <section className="section-py px-4">
        <div className="container mx-auto max-w-5xl">
          <Stagger className="grid md:grid-cols-2 gap-5 md:gap-6">
            {products.map((product) => {
              const copy = getAudienceProductCopy(
                audienceId,
                product.slug as 'basic-website' | 'full-website'
              );
              const recommended = isRecommendedPlanForAudience(
                audienceId,
                product.slug as 'basic-website' | 'full-website'
              );

              return (
                <StaggerItem key={product.slug}>
                  <article
                    className={`feature-card flex flex-col h-full hover:shadow-2xl transition-all duration-500 ${
                      recommended ? 'ring-2 ring-[#1dd3b0]/40' : ''
                    }`}
                  >
                    <div className="text-center mb-4 transition-transform duration-300 hover:scale-110">
                      {productIcons[product.icon]}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
                      <span className="badge">{product.badge}</span>
                      {recommended && (
                        <span className="text-xs font-bold bg-[#affc41] text-[#3c1642] px-2.5 py-1 rounded-full">
                          Best fit for you
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#086375] mb-2 text-center">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center flex-grow text-sm leading-relaxed">
                      {copy.summary}
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1.5 mb-6">
                      {copy.highlights.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[#1dd3b0] shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={product.href}
                      className="inline-flex items-center justify-center gap-2 bg-[#086375] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#3c1642] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-auto group"
                    >
                      Learn more
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <Protocol />

      <section className="relative section-py-sm px-4 bg-gradient-to-r from-[#3c1642] to-[#086375] text-center text-white overflow-hidden">
        <div className="hero-blob hero-blob-a w-56 h-56 bg-[#affc41] bottom-0 left-[5%] opacity-20" aria-hidden />
        <MotionReveal className="container mx-auto max-w-2xl relative z-10" variant="scaleIn">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which plan fits?</h2>
          <p className="text-white/90 mb-8">
            Switch your organisation type above to see tailored examples — or book a call and we
            will walk you through Basic vs Full.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#affc41] text-[#3c1642] font-semibold px-8 py-3 rounded-full hover:bg-white hover:scale-[1.04] active:scale-[0.98] transition-all duration-300"
          >
            Book A Call
          </Link>
        </MotionReveal>
      </section>
    </div>
  );
};

export default ServicesPage;
