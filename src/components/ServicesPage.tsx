import React from 'react';
import { Link } from 'react-router-dom';
import { FaBolt, FaStore, FaArrowRight } from 'react-icons/fa';
import PageHero from './PageHero';
import Protocol from './Protocol';
import { pageIntros, products } from '../content/siteContent';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';
import { usePageMeta } from '../hooks/usePageMeta';

const productIcons = {
  web: <FaBolt className="text-4xl text-[#1dd3b0]" />,
  systems: <FaStore className="text-4xl text-[#1dd3b0]" />,
};

const ServicesPage: React.FC = () => {
  usePageMeta({
    title: 'Services | Appdoers',
    description: 'Business websites and online shops for New Zealand clients, with clear monthly pricing.',
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

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Stagger className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <StaggerItem key={product.slug}>
                <article className="feature-card flex flex-col h-full hover:shadow-2xl transition-all duration-500">
                  <div className="text-center mb-4 transition-transform duration-300 hover:scale-110">
                    {productIcons[product.icon]}
                  </div>
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
                    className="inline-flex items-center justify-center gap-2 bg-[#086375] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#3c1642] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-auto group"
                  >
                    Learn more
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Protocol />

      <section className="relative py-16 px-4 bg-gradient-to-r from-[#3c1642] to-[#086375] text-center text-white overflow-hidden">
        <div className="hero-blob hero-blob-a w-56 h-56 bg-[#affc41] bottom-0 left-[5%] opacity-20" aria-hidden />
        <MotionReveal className="container mx-auto max-w-2xl relative z-10" variant="scaleIn">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which service fits?</h2>
          <p className="text-white/90 mb-8">
            We offer websites and digital systems for clients of every kind. Book a call and we will help you pick the right plan.
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
