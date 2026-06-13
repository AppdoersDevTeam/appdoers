import React, { useState } from 'react';
import { FaCheck, FaChevronDown, FaInfoCircle } from 'react-icons/fa';
import { allPlanFeatures, pricingTiers, type PlanFeature } from '../content/siteContent';

const FeatureItem: React.FC<{ feature: PlanFeature }> = ({ feature }) => (
  <li>
    <details className="group rounded-xl border-2 border-gray-200 bg-white hover:border-[#1dd3b0]/60 open:border-[#1dd3b0] open:shadow-md transition-all">
      <summary className="flex items-center gap-3 cursor-pointer list-none p-4 md:p-5 [&::-webkit-details-marker]:hidden">
        <FaCheck className="text-[#1dd3b0] shrink-0 text-base" aria-hidden />
        <span className="flex-1 font-semibold text-gray-800 text-sm md:text-base leading-snug">
          {feature.label}
        </span>
        <span
          className="inline-flex items-center gap-1.5 shrink-0 rounded-full border-2 border-[#086375] bg-[#086375]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#086375] group-open:bg-[#086375] group-open:text-white transition-colors"
          aria-hidden
        >
          <span className="group-open:hidden">More info</span>
          <span className="hidden group-open:inline">Less</span>
          <FaChevronDown className="text-[10px] transition-transform group-open:rotate-180" />
        </span>
      </summary>
      <div className="mx-4 md:mx-5 mb-4 md:mb-5 pt-3 border-t border-gray-100">
        <p className="text-sm text-gray-600 leading-relaxed pl-7">{feature.detail}</p>
      </div>
    </details>
  </li>
);

type FeaturesTab = 'full-website' | 'starter-website' | 'all';

const tabs: { id: FeaturesTab; label: string }[] = [
  { id: 'full-website', label: 'Full Website' },
  { id: 'starter-website', label: 'Basic Website' },
  { id: 'all', label: 'Every plan' },
];

const PlanFeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FeaturesTab>('full-website');

  const activeTier = pricingTiers.find((tier) => tier.id === activeTab);
  const features =
    activeTab === 'all' ? allPlanFeatures : activeTier?.features ?? allPlanFeatures;

  const description =
    activeTab === 'all'
      ? 'These are included no matter which plan you choose.'
      : activeTier?.audience ?? '';

  return (
    <section id="plan-features" className="max-w-4xl mx-auto mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#086375] mb-2">What&apos;s included?</h3>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Pick a plan tab, then press{' '}
          <span className="inline-flex items-center rounded-full border border-[#086375] bg-[#086375]/5 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-[#086375] align-middle mx-0.5">
            More info
          </span>{' '}
          on any row to read the full explanation.
        </p>
      </div>

      <div className="flex rounded-lg border border-gray-200 bg-white p-1 mb-6 max-w-md mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 rounded-md px-3 py-2.5 text-sm font-semibold transition-colors ${
              activeTab === tab.id
                ? 'bg-[#086375] text-white shadow-sm'
                : 'text-gray-600 hover:text-[#086375]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
        <div className="flex items-start gap-3 rounded-lg bg-[#affc41]/25 border border-[#affc41]/50 px-4 py-3 mb-5">
          <FaInfoCircle className="text-[#086375] mt-0.5 shrink-0" aria-hidden />
          <p className="text-sm text-[#3c1642] leading-relaxed">
            <strong className="font-semibold">Each feature expands.</strong> Look for the green{' '}
            <strong className="font-semibold">More info</strong> button on the right of every item.
            Tap it to see what&apos;s included in detail.
          </p>
        </div>

        <p className="text-sm text-gray-600 mb-5">{description}</p>
        <ul className="space-y-3">
          {features.map((feature) => (
            <FeatureItem key={feature.label} feature={feature} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlanFeaturesSection;
