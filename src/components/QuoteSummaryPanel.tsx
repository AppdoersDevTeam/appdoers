import React, { useMemo } from 'react';
import PriceAmount from './PriceAmount';
import {
  calculateQuote,
  calculateWeeklyFromMonthly,
  formatMoney,
  getEmailTier,
  getTier,
  termLabels,
  type QuoteInput,
} from '../utils/pricingCalculations';

type QuoteSummaryPanelProps = {
  quote: QuoteInput;
};

const QuoteSummaryPanel: React.FC<QuoteSummaryPanelProps> = ({ quote }) => {
  const tier = getTier(quote.planId);
  const breakdown = useMemo(() => calculateQuote(quote), [quote]);
  const weeklyTotal = calculateWeeklyFromMonthly(breakdown.monthlyTotal);
  const annualTotal = breakdown.monthlyTotal * 12;
  const emailTier = getEmailTier(quote.emailTierLabel);
  const pricePerMailbox = emailTier.prices[quote.termMonths];

  return (
    <div className="rounded-xl border border-[#1dd3b0]/40 bg-[#f0fdf4] p-5">
      <h3 className="text-sm font-bold uppercase tracking-wide text-[#086375] mb-3">Your quote</h3>

      <dl className="text-sm space-y-2 text-gray-700">
        <div className="flex justify-between gap-4">
          <dt>Plan</dt>
          <dd className="font-semibold text-[#3c1642] text-right">{tier.name}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Contract length</dt>
          <dd className="font-semibold text-[#3c1642] text-right">{termLabels[quote.termMonths]}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Total setup fee</dt>
          <dd className="font-semibold text-[#3c1642] text-right">
            ${formatMoney(tier.developmentFee)} NZD
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Setup fee due today</dt>
          <dd className="font-semibold text-[#3c1642] text-right">
            ${formatMoney(breakdown.upfront)} NZD
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Website plan</dt>
          <dd className="font-semibold text-[#3c1642] text-right">
            ${formatMoney(breakdown.monthlyPlan)} NZD/mo
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Setup fee spread</dt>
          <dd className="font-semibold text-[#3c1642] text-right">
            ${formatMoney(breakdown.monthlyBuildSpread)} NZD/mo
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Business email</dt>
          <dd className="font-semibold text-[#3c1642] text-right">
            {!quote.includeEmail && 'Not included'}
            {quote.includeEmail && breakdown.monthlyEmail === 0 && breakdown.freeEmailUsers > 0 && (
              <>$0 NZD/mo ({breakdown.freeEmailUsers} included)</>
            )}
            {quote.includeEmail && breakdown.monthlyEmail > 0 && (
              <>
                ${formatMoney(breakdown.monthlyEmail)} NZD/mo
                {breakdown.emailIsIncluded && breakdown.paidEmailUsers > 0 && (
                  <span className="block text-xs font-normal text-gray-500">
                    {breakdown.freeEmailUsers} free + {breakdown.paidEmailUsers} paid ·{' '}
                    {quote.emailTierLabel}
                  </span>
                )}
                {!breakdown.emailIsIncluded && (
                  <span className="block text-xs font-normal text-gray-500">
                    {quote.emailUserCount} mailbox{quote.emailUserCount !== 1 ? 'es' : ''} × $
                    {formatMoney(pricePerMailbox)} · {quote.emailTierLabel}
                  </span>
                )}
              </>
            )}
            {quote.includeEmail && breakdown.monthlyEmail === 0 && breakdown.freeEmailUsers === 0 && (
              <>$0 NZD/mo</>
            )}
          </dd>
        </div>
      </dl>

      <div className="mt-4 pt-4 border-t border-[#1dd3b0]/30 grid sm:grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Due today</p>
          <p className="text-2xl font-bold text-[#3c1642]">
            <PriceAmount value={breakdown.upfront} format="money" showNzd />
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Monthly total</p>
          <p className="text-2xl font-bold text-[#086375]">
            <PriceAmount value={breakdown.monthlyTotal} showNzd />
          </p>
          <p className="text-xs text-gray-500 mt-1">
            <PriceAmount value={weeklyTotal} format="money" showNzd /> weekly ·{' '}
            <PriceAmount value={annualTotal} format="money" showNzd />/year
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteSummaryPanel;
