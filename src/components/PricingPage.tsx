import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import PageHero from './PageHero';
import Pricing from './Pricing';
import { pageIntros, pricingFaq, tierComparison } from '../content/siteContent';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';
import { usePageMeta } from '../hooks/usePageMeta';

const PricingPage: React.FC = () => {
  usePageMeta({
    title: 'Website Pricing | Appdoers',
    description:
      'Two website plans for New Zealand clients. Pick your length, set your setup fee, and see exactly what you pay.',
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow={pageIntros.pricing.eyebrow}
        title={pageIntros.pricing.title}
        subtitle="Two plans. Pick your length, set your setup fee, and see exactly what you pay."
        primaryCta={{ label: 'Book A Call', to: '/contact' }}
        secondaryCta={{ label: 'View Our Work', to: '/work' }}
      />

      <Pricing showHeader={false} />

      <section className="py-16 px-4 bg-white">
        <MotionReveal className="container mx-auto max-w-4xl">
          <details className="group rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            <summary className="cursor-pointer list-none px-6 py-5 bg-gray-50 font-bold text-[#086375] text-lg [&::-webkit-details-marker]:hidden flex justify-between items-center">
              Compare plans side by side
              <span className="text-sm font-normal text-gray-500 group-open:hidden">Tap to expand</span>
            </summary>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#086375] text-white">
                    <th className="p-4 font-semibold">What you get</th>
                    <th className="p-4 font-semibold text-center">Full Website</th>
                    <th className="p-4 font-semibold text-center">Basic Website</th>
                  </tr>
                </thead>
                <tbody>
                  {tierComparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 text-gray-800 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.fullWebsite ? (
                          <FaCheck className="text-[#1dd3b0] mx-auto" />
                        ) : (
                          <FaTimes className="text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.starterWebsite ? (
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
          </details>
        </MotionReveal>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <MotionReveal className="text-center mb-8">
            <h2 className="section-title">Common questions</h2>
          </MotionReveal>
          <Stagger className="space-y-3">
            {pricingFaq.map((item) => (
              <StaggerItem key={item.q}>
              <details
                className="bg-white rounded-xl border border-gray-100 shadow-sm group hover:shadow-md transition-shadow duration-300"
              >
                <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-[#086375] [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </details>
              </StaggerItem>
            ))}
          </Stagger>
          <MotionReveal className="text-center mt-8 text-gray-600 text-sm" delay={0.1}>
            Still unsure?{' '}
            <Link to="/contact" className="text-[#086375] font-semibold hover:text-[#1dd3b0]">
              Book a call
            </Link>{' '}
            and we will help you choose.
          </MotionReveal>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
