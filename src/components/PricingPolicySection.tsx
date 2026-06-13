import React from 'react';
import {
  FaCalendarCheck,
  FaChevronDown,
  FaClock,
  FaExclamationCircle,
  FaFileContract,
  FaHandHoldingUsd,
  FaTimesCircle,
} from 'react-icons/fa';
import { hourlyPricing, pricingPolicySections } from '../content/siteContent';
import PriceAmount from './PriceAmount';

const sectionIcons = [FaHandHoldingUsd, FaCalendarCheck, FaFileContract, FaTimesCircle];

const PricingPolicySection: React.FC = () => {
  return (
    <section id="billing-terms" className="max-w-4xl mx-auto mb-8 scroll-mt-24">
      <div className="rounded-2xl border-2 border-[#086375]/25 bg-white shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#3c1642] to-[#086375] px-6 py-5 text-white">
          <h2 className="text-xl md:text-2xl font-bold">Billing, contracts &amp; terms</h2>
          <p className="text-sm text-white/90 mt-1 max-w-2xl">
            Please read this before you sign up. It covers when you pay, how contracts work,
            cancellations, and what is not included.
          </p>
        </div>

        <div className="p-5 md:p-6 space-y-6">
          <div className="rounded-xl border-2 border-[#1dd3b0] bg-gradient-to-br from-[#1dd3b0]/10 to-[#affc41]/15 p-5 md:p-6">
            <div className="flex flex-col lg:flex-row lg:items-start gap-5">
              <div className="shrink-0">
                <div className="inline-flex items-center gap-2 text-[#086375] mb-2">
                  <FaClock aria-hidden />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    {hourlyPricing.title}
                  </span>
                </div>
                <p className="text-4xl font-bold text-[#3c1642]">
                  <PriceAmount value={hourlyPricing.rate} showNzd />
                  <span className="text-xl font-semibold text-gray-600">/hour</span>
                </p>
                <p className="text-sm text-gray-600 mt-2 max-w-xs">{hourlyPricing.summary}</p>
              </div>
              <div className="flex-grow rounded-lg bg-white/80 border border-[#1dd3b0]/30 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-[#086375] mb-2">
                  Billed hourly when you need
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  {hourlyPricing.examples.map((example) => (
                    <li key={example} className="flex items-start gap-2">
                      <span className="text-[#1dd3b0] mt-1 shrink-0" aria-hidden>
                        •
                      </span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg bg-[#affc41]/25 border border-[#affc41]/50 px-4 py-3">
            <FaExclamationCircle className="text-[#086375] mt-0.5 shrink-0 text-lg" aria-hidden />
            <p className="text-sm text-[#3c1642] leading-relaxed">
              <strong className="font-semibold">Quick overview below.</strong> Each topic has a short
              summary. Tap <strong className="font-semibold">Full details</strong> to read
              everything before you commit.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pricingPolicySections.map((section, index) => {
              const Icon = sectionIcons[index] ?? FaFileContract;
              return (
                <div
                  key={section.title}
                  className="rounded-xl border-2 border-gray-200 bg-gray-50/80 p-4 flex gap-3"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#086375] text-white shrink-0">
                    <Icon className="text-sm" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#3c1642] text-sm">{section.title}</h3>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{section.summary}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3 text-center">
              Full details
            </p>
            <div className="space-y-3">
              {pricingPolicySections.map((section) => (
                <details
                  key={section.title}
                  className="group rounded-xl border-2 border-gray-200 bg-white hover:border-[#1dd3b0]/60 open:border-[#1dd3b0] open:shadow-md transition-all"
                >
                  <summary className="flex items-center gap-3 cursor-pointer list-none p-4 md:p-5 [&::-webkit-details-marker]:hidden">
                    <span className="flex-1 font-semibold text-[#086375] text-sm md:text-base">
                      {section.title}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 shrink-0 rounded-full border-2 border-[#086375] bg-[#086375]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#086375] group-open:bg-[#086375] group-open:text-white transition-colors"
                      aria-hidden
                    >
                      <span className="group-open:hidden">Full details</span>
                      <span className="hidden group-open:inline">Close</span>
                      <FaChevronDown className="text-[10px] transition-transform group-open:rotate-180" />
                    </span>
                  </summary>
                  <ul className="px-5 md:px-6 pb-5 text-gray-600 text-sm leading-relaxed space-y-2 list-disc pl-10 border-t border-gray-100 pt-4 mx-4 md:mx-5 mb-4 md:mb-5">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPolicySection;
