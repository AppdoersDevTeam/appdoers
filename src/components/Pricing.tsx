import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { communityTier, pricingTiers } from '../content/siteContent';

type PricingProps = {
  showHeader?: boolean;
};

const Pricing: React.FC<PricingProps> = ({ showHeader = true }) => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-16">
            <h2 className="section-title">Elevated Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent partnerships. No hidden complexity. Choose the velocity that matches your ambition.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white rounded-xl shadow-lg p-8 pt-10 flex flex-col border-2 min-h-[520px] ${
                tier.popular ? 'border-[#1dd3b0] ring-2 ring-[#1dd3b0]/30 shadow-xl' : 'border-gray-100'
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#affc41] text-[#3c1642] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-[#086375] mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-600 mb-6 min-h-[48px]">{tier.audience}</p>
              <div className="mb-1 flex items-baseline gap-2">
                {'monthlyWas' in tier && tier.monthlyWas && (
                  <span className="text-lg text-gray-400 line-through">${tier.monthlyWas}</span>
                )}
                <span className="text-4xl font-bold text-[#3c1642]">${tier.monthly}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-sm text-gray-600 mb-6">Setup: {tier.setup}</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-700 text-sm">
                    <FaCheck className="text-[#1dd3b0] mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={`/contact?tier=${tier.id}`}
                className={`text-center font-semibold px-6 py-3 rounded-lg transition-colors ${
                  tier.popular
                    ? 'bg-[#1dd3b0] text-white hover:bg-[#086375]'
                    : 'bg-[#086375] text-white hover:bg-[#3c1642]'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#3c1642] to-[#086375] rounded-xl p-8 md:p-10 text-white">
          <p className="text-[#affc41] text-sm font-semibold mb-2">{communityTier.label}</p>
          <h3 className="text-2xl font-bold mb-4">{communityTier.name}</h3>
          <p className="text-white/90 mb-6">{communityTier.description}</p>
          <div className="flex flex-wrap items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold">${communityTier.monthly}/mo</span>
            <span className="text-white/80">{communityTier.monthlyNote}</span>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {communityTier.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <FaCheck className="text-[#affc41]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact?tier=community"
            className="inline-block bg-[#affc41] text-[#3c1642] font-semibold px-8 py-3 rounded-lg hover:bg-white transition-colors"
          >
            {communityTier.cta}
          </Link>
          <p className="text-white/70 text-sm mt-4">{communityTier.footnote}</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
