import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import PageHero from './PageHero';
import Pricing from './Pricing';
import { pageIntros, pricingFaq, tierComparison } from '../content/siteContent';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';
import StructuredData from './StructuredData';
import { usePageMeta } from '../hooks/usePageMeta';

const PricingPage: React.FC = () => {
  usePageMeta({
    title: 'Website Pricing | Appdoers',
    description:
      'Two website plans for New Zealand clients. Pick your length, set your setup fee, and see exactly what you pay.',
    path: '/pricing',
  });

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="faq" path="/pricing" />
      <PageHero
        eyebrow={pageIntros.pricing.eyebrow}
        title={pageIntros.pricing.title}
        subtitle="Two plans. Pick your length, set your setup fee, and see exactly what you pay."
        breadcrumbPath="/pricing"
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
        secondaryCta={{ label: 'View Our Work', to: '/work' }}
      />

      <Pricing showHeader={false} />

      <section className="section-py-sm px-4 bg-white">
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
                          <span className="inline-flex items-center justify-center">
                            <FaCheck className="text-[#1dd3b0]" aria-hidden />
                            <span className="sr-only">Included</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center">
                            <FaTimes className="text-gray-300" aria-hidden />
                            <span className="sr-only">Not included</span>
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.starterWebsite ? (
                          <span className="inline-flex items-center justify-center">
                            <FaCheck className="text-[#1dd3b0]" aria-hidden />
                            <span className="sr-only">Included</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center">
                            <FaTimes className="text-gray-300" aria-hidden />
                            <span className="sr-only">Not included</span>
                          </span>
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

      <section className="section-py-sm px-4 bg-gray-50">
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
              Contact us
            </Link>{' '}
            by phone, email, or the contact form and we will help you choose.
          </MotionReveal>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
