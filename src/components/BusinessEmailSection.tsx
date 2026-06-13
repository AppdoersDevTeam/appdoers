import React from 'react';
import { FaCheck, FaEnvelope } from 'react-icons/fa';
import { emailAddOns, freeEmailTermMonths, maxEmailMailboxes, pricingTiers } from '../content/siteContent';
import PriceAmount from './PriceAmount';
import {
  TERM_OPTIONS,
  calculateEmailSavings,
  termLabels,
  type EmailTierId,
  type QuoteState,
  type TermMonths,
} from '../utils/pricingCalculations';

type BusinessEmailSectionProps = {
  selectedMonths: TermMonths;
  onTermChange: (months: TermMonths) => void;
  quote: QuoteState;
  onAddEmailToQuote: (emailTierLabel: EmailTierId) => void;
};

const EmailPackageCard: React.FC<{
  addon: (typeof emailAddOns)[number];
  selectedMonths: TermMonths;
  popular?: boolean;
  isInQuote: boolean;
  onAddToQuote: () => void;
}> = ({ addon, selectedMonths, popular = false, isInQuote, onAddToQuote }) => {
  const { baseline, current, savingsPercent } = calculateEmailSavings(addon, selectedMonths);

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col border-2 ${
        popular ? 'border-[#1dd3b0] ring-2 ring-[#1dd3b0]/20' : 'border-gray-100'
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#affc41] text-[#3c1642] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
          Most popular
        </span>
      )}

      <h4 className="text-xl font-bold text-[#086375]">{addon.label}</h4>
      <p className="text-sm text-gray-600 mt-1 mb-5">{addon.storageNote}</p>

      <div className="flex items-baseline gap-2 flex-wrap mb-4">
        {savingsPercent > 0 && (
          <span className="text-lg text-gray-400 line-through">
            <PriceAmount value={baseline} />
          </span>
        )}
        <span className="text-4xl font-bold text-[#3c1642]">
          <PriceAmount value={current} showNzd />
        </span>
        <span className="text-gray-500">/mailbox/mo</span>
        {savingsPercent > 0 && (
          <span className="text-xs font-bold bg-[#affc41] text-[#3c1642] px-2.5 py-1 rounded-full">
            Save {savingsPercent}%
          </span>
        )}
      </div>

      <ul className="space-y-2 mb-6 flex-grow text-sm text-gray-700">
        <li className="flex items-start gap-2">
          <FaCheck className="text-[#1dd3b0] mt-0.5 shrink-0" aria-hidden />
          <span>Same {termLabels[selectedMonths]} contract as your website</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheck className="text-[#1dd3b0] mt-0.5 shrink-0" aria-hidden />
          <span>{addon.storageNote}</span>
        </li>
        <li className="flex items-start gap-2">
          <FaCheck className="text-[#1dd3b0] mt-0.5 shrink-0" aria-hidden />
          <span>Any number of mailboxes, up to {maxEmailMailboxes}</span>
        </li>
      </ul>

      <button
        type="button"
        onClick={onAddToQuote}
        className={`text-center font-semibold px-6 py-3 rounded-lg transition-colors ${
          isInQuote
            ? 'bg-[#affc41] text-[#3c1642] hover:bg-[#1dd3b0] hover:text-white'
            : popular
              ? 'bg-[#1dd3b0] text-white hover:bg-[#086375]'
              : 'bg-[#086375] text-white hover:bg-[#3c1642]'
        }`}
      >
        {isInQuote ? 'Added to quote. View below' : 'Add to your quote'}
      </button>
    </div>
  );
};

const BusinessEmailSection: React.FC<BusinessEmailSectionProps> = ({
  selectedMonths,
  onTermChange,
  quote,
  onAddEmailToQuote,
}) => {
  return (
    <section id="business-email" className="max-w-5xl mx-auto mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 text-[#086375] mb-2">
          <FaEnvelope aria-hidden />
          <h3 className="text-2xl font-bold">Business Email</h3>
        </div>
        <p className="text-sm text-gray-600 max-w-lg mx-auto">
          Email contracts match your website plan. Free on 4-year website plans. Add more
          mailboxes below.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            className="rounded-xl border-2 border-[#1dd3b0]/30 bg-[#1dd3b0]/5 p-4 text-center"
          >
            <p className="font-semibold text-[#3c1642] text-sm">{tier.name}</p>
            <p className="text-xs text-[#086375] font-medium mt-1">
              {`Free on ${freeEmailTermMonths}-month website plan`}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              {tier.includedEmail.storage} · up to {tier.includedEmail.users} people
            </p>
          </div>
        ))}
      </div>

      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">
        Email contract length
      </p>
      <div className="max-w-md mx-auto mb-8">
        <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 w-full shadow-sm">
          {TERM_OPTIONS.map((months) => (
            <button
              key={months}
              type="button"
              onClick={() => onTermChange(months)}
              aria-pressed={selectedMonths === months}
              className={`flex-1 rounded-lg px-2 py-2.5 text-sm font-semibold transition-colors ${
                selectedMonths === months
                  ? 'bg-[#086375] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#086375] hover:bg-gray-50'
              }`}
            >
              {termLabels[months]}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">
          Must match your website plan length
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {emailAddOns.map((addon, index) => (
          <EmailPackageCard
            key={addon.label}
            addon={addon}
            selectedMonths={selectedMonths}
            popular={index === 1}
            isInQuote={quote.includeEmail && quote.emailTierLabel === addon.label}
            onAddToQuote={() => onAddEmailToQuote(addon.label)}
          />
        ))}
      </div>
    </section>
  );
};

export default BusinessEmailSection;
