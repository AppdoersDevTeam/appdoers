import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaUsers } from 'react-icons/fa';
import { services } from '../content/siteContent';
import AudienceSwitcher from './AudienceSwitcher';
import {
  getAudienceProductCopy,
  isRecommendedPlanForAudience,
} from '../content/audienceContent';
import { useAudienceSegment } from '../context/AudienceSegmentContext';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';

const icons = {
  'Basic Website': <FaGlobe key="basic" />,
  'Full Website': <FaUsers key="full" />,
};

const slugByTitle: Record<string, 'basic-website' | 'full-website'> = {
  'Basic Website': 'basic-website',
  'Full Website': 'full-website',
};

const DigitalSolutions: React.FC = () => {
  const { audienceId } = useAudienceSegment();

  return (
    <section className="section-py bg-gray-50">
      <div className="container mx-auto px-4">
        <MotionReveal className="text-center mb-8">
          <h2 className="section-title" id="featured-services">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Basic and Full website plans — pick your organisation type to see what fits.
          </p>
          <div className="max-w-3xl mx-auto">
            <AudienceSwitcher size="compact" />
          </div>
        </MotionReveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 px-4 max-w-4xl mx-auto">
          {services.map((service) => {
            const planSlug = slugByTitle[service.title];
            const copy = getAudienceProductCopy(audienceId, planSlug);
            const recommended = isRecommendedPlanForAudience(audienceId, planSlug);

            return (
              <StaggerItem key={service.title}>
                <div
                  className={`group feature-card h-full hover:shadow-2xl transition-all duration-500 ${
                    recommended ? 'ring-2 ring-[#1dd3b0]/30' : ''
                  }`}
                >
                  <div className="text-center">
                    <div className="feature-icon flex justify-center text-[#1dd3b0] text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                      {icons[service.title as keyof typeof icons]}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
                      <span className="badge">{service.badge}</span>
                      {recommended && (
                        <span className="text-xs font-bold bg-[#affc41] text-[#3c1642] px-2 py-0.5 rounded-full">
                          Best fit
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-[#086375] mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{copy.summary}</p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-[#1dd3b0] hover:text-[#affc41] group font-semibold"
                    >
                      Learn More
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

export default DigitalSolutions;
