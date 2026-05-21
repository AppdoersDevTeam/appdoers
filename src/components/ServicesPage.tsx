import React from 'react';
import { Link } from 'react-router-dom';
import { FaBolt, FaChurch, FaStore, FaArrowRight } from 'react-icons/fa';
import PageHero from './PageHero';
import Protocol from './Protocol';
import { communityTier, pageIntros, v1Products } from '../content/siteContent';

const productIcons = {
  web: <FaBolt className="text-4xl text-[#1dd3b0]" />,
  systems: <FaStore className="text-4xl text-[#1dd3b0]" />,
  ministry: <FaChurch className="text-4xl text-[#1dd3b0]" />,
};

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow={pageIntros.services.eyebrow}
        title={pageIntros.services.title}
        subtitle={pageIntros.services.subtitle}
        primaryCta={{ label: 'View Pricing', to: '/pricing' }}
        secondaryCta={{ label: 'Start Your Project', to: '/contact' }}
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {v1Products.map((product) => (
              <article
                key={product.slug}
                className="feature-card flex flex-col h-full"
              >
                <div className="text-center mb-4">{productIcons[product.icon]}</div>
                <span className="badge mb-4 inline-block mx-auto">{product.badge}</span>
                <h3 className="text-xl font-bold text-[#086375] mb-3 text-center">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center flex-grow">{product.summary}</p>
                <p className="text-xs text-center text-[#1dd3b0] font-semibold uppercase mb-6">
                  {product.tierLabel}
                </p>
                <Link
                  to={product.href}
                  className="inline-flex items-center justify-center gap-2 bg-[#086375] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#3c1642] transition-colors mt-auto"
                >
                  Learn more
                  <FaArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-[#3c1642] to-[#086375] rounded-2xl p-8 md:p-10 text-white text-center">
            <p className="text-[#affc41] text-sm font-semibold mb-2">{communityTier.label}</p>
            <h2 className="text-2xl font-bold mb-4">{communityTier.name}</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">{communityTier.description}</p>
            <Link
              to="/ministry"
              className="inline-block bg-[#affc41] text-[#3c1642] font-semibold px-8 py-3 rounded-lg hover:bg-white transition-colors mr-4"
            >
              Ministry service details
            </Link>
            <Link
              to="/contact?tier=community"
              className="inline-block border border-white/50 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors mt-4 sm:mt-0"
            >
              {communityTier.cta}
            </Link>
          </div>
        </div>
      </section>

      <Protocol />

      <section className="py-16 px-4 bg-gradient-to-r from-[#3c1642] to-[#086375] text-center text-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which service fits?</h2>
          <p className="text-white/90 mb-8">
            We offer three paths—web, systems, or ministry. Book a call and we will recommend the right tier.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#affc41] text-[#3c1642] font-semibold px-8 py-3 rounded-full hover:bg-white transition-colors"
          >
            Book A Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
