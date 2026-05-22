import React from 'react';
import { Link } from 'react-router-dom';
import { FaBolt, FaCheck, FaChurch, FaStore } from 'react-icons/fa';
import PageHero from './PageHero';
import Protocol from './Protocol';
import type { Product } from '../content/siteContent';
import { pricingTiers, communityTier } from '../content/siteContent';

const icons = {
  web: <FaBolt className="text-4xl text-[#1dd3b0]" />,
  systems: <FaStore className="text-4xl text-[#1dd3b0]" />,
  ministry: <FaChurch className="text-4xl text-[#1dd3b0]" />,
};

type ProductDetailPageProps = {
  product: Product;
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const tier =
    product.recommendedTier === 'community'
      ? null
      : pricingTiers.find((t) => t.id === product.recommendedTier);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow={product.badge}
        title={product.title}
        subtitle={product.summary}
        primaryCta={{
          label: product.recommendedTier === 'community' ? communityTier.cta : tier?.cta ?? 'Start Your Project',
          to: `/contact?tier=${product.recommendedTier}`,
        }}
        secondaryCta={{ label: 'View Pricing', to: '/pricing' }}
      />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#086375] mb-4">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#086375] mb-4">What you get</h2>
                <ul className="space-y-3">
                  {product.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <FaCheck className="text-[#1dd3b0] mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#086375] mb-4">Deliverables</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.deliverables.map((item) => (
                    <li
                      key={item}
                      className="bg-gray-50 rounded-lg px-4 py-3 text-gray-700 text-sm border border-gray-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="bg-gradient-to-br from-[#3c1642] to-[#086375] rounded-2xl p-8 text-white h-fit sticky top-28">
              <div className="mb-6">{icons[product.icon]}</div>
              <p className="text-[#affc41] text-sm font-semibold uppercase mb-2">Ideal for</p>
              <p className="text-white/90 mb-6">{product.idealFor}</p>
              <p className="text-[#affc41] text-sm font-semibold uppercase mb-2">Pricing</p>
              <p className="text-white font-medium mb-6">{product.tierLabel}</p>
              {product.recommendedTier === 'community' ? (
                <div className="mb-6">
                  <p className="text-3xl font-bold">${communityTier.monthly}/mo</p>
                  <p className="text-white/80 text-sm">{communityTier.monthlyNote}</p>
                </div>
              ) : tier ? (
                <div className="mb-6">
                  <p className="text-lg font-semibold">{tier.name}</p>
                  <p className="text-3xl font-bold mt-1">
                    ${tier.monthly}
                    <span className="text-lg font-normal text-white/80">/month</span>
                  </p>
                  <p className="text-white/80 text-sm mt-1">Setup: {tier.setup}</p>
                </div>
              ) : null}
              <Link
                to={`/contact?tier=${product.recommendedTier}`}
                className="block w-full text-center bg-[#affc41] text-[#3c1642] font-semibold py-3 rounded-lg hover:bg-white transition-colors"
              >
                Get started
              </Link>
              <Link
                to="/pricing"
                className="block w-full text-center mt-3 text-white/90 hover:text-white text-sm underline"
              >
                Compare all tiers
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-xl font-bold text-[#086375] mb-6">Explore our other services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="text-[#086375] font-semibold hover:text-[#1dd3b0]">
              All services
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/websites" className="text-gray-600 hover:text-[#086375]">
              High-Performance Web
            </Link>
            <Link to="/digital-systems" className="text-gray-600 hover:text-[#086375]">
              Digital Systems
            </Link>
            <Link to="/ministry" className="text-gray-600 hover:text-[#086375]">
              Ministry & Community
            </Link>
          </div>
        </div>
      </section>

      <Protocol />
    </div>
  );
};

export default ProductDetailPage;
