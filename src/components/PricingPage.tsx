import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import PageHero from './PageHero';
import Pricing from './Pricing';
import { pageIntros, pricingFaq, tierComparison } from '../content/siteContent';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow={pageIntros.pricing.eyebrow}
        title={pageIntros.pricing.title}
        subtitle={pageIntros.pricing.subtitle}
        primaryCta={{ label: 'Book A Call', to: '/contact' }}
        secondaryCta={{ label: 'View Our Work', to: '/work' }}
      />

      <Pricing showHeader={false} />

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-center mb-10">Compare Tiers</h2>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#086375] text-white">
                  <th className="p-4 font-semibold">Feature</th>
                  <th className="p-4 font-semibold text-center">Launch</th>
                  <th className="p-4 font-semibold text-center">Growth</th>
                  <th className="p-4 font-semibold text-center">Scale</th>
                </tr>
              </thead>
              <tbody>
                {tierComparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 text-gray-800 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.launch ? (
                        <FaCheck className="text-[#1dd3b0] mx-auto" />
                      ) : (
                        <FaTimes className="text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.growth ? (
                        <FaCheck className="text-[#1dd3b0] mx-auto" />
                      ) : (
                        <FaTimes className="text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.scale ? (
                        <FaCheck className="text-[#1dd3b0] mx-auto" />
                      ) : (
                        <FaTimes className="text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="section-title text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-6">
            {pricingFaq.map((item) => (
              <div key={item.q} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-[#086375] mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-gray-600">
            Still unsure which tier fits?{' '}
            <Link to="/contact" className="text-[#086375] font-semibold hover:text-[#1dd3b0]">
              Book a call
            </Link>{' '}
            and we will recommend the right partnership.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
