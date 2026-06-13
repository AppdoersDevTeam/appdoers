import React from 'react';
import { Link } from 'react-router-dom';
import { FaBolt, FaStore } from 'react-icons/fa';
import { services } from '../content/siteContent';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';

const icons = [<FaBolt key="web" />, <FaStore key="systems" />];

const DigitalSolutions: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <MotionReveal className="text-center mb-16">
          <h2 className="section-title" id="featured-services">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Websites and online tools for New Zealand clients.
          </p>
        </MotionReveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <div className="group feature-card h-full hover:shadow-2xl transition-all duration-500">
                <div className="text-center">
                  <div className="feature-icon flex justify-center text-[#1dd3b0] text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {icons[index]}
                  </div>
                  <span className="badge mb-4 inline-block">{service.badge}</span>
                  <h3 className="text-2xl font-bold text-[#086375] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
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
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default DigitalSolutions;
