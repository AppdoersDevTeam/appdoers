import React from 'react';
import { Link } from 'react-router-dom';
import { FaBolt, FaStore, FaChurch } from 'react-icons/fa';
import { services } from '../content/siteContent';

const icons = [<FaBolt key="web" />, <FaStore key="systems" />, <FaChurch key="ministry" />];

const DigitalSolutions: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title" id="featured-services">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            High-velocity web, digital systems, and mission-ready platforms for New Zealand businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={service.title} className="feature-card reveal">
              <div className="text-center">
                <div className="feature-icon flex justify-center text-[#1dd3b0] text-4xl mb-4">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;
