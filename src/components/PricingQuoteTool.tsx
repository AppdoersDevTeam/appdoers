import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  contactPage,
  emailAddOns,
  freeEmailTermMonths,
  maxEmailMailboxes,
  pricingTiers,
} from '../content/siteContent';
import PriceAmount from './PriceAmount';
import {
  TERM_OPTIONS,
  calculateQuote,
  calculateWeeklyFromMonthly,
  buildQuoteContactUrl,
  getEmailPricePerMailbox,
  getTier,
  termLabels,
  type EmailTierId,
  type PlanId,
  type QuoteState,
} from '../utils/pricingCalculations';

type PricingQuoteToolProps = {
  quote: QuoteState;
  onQuoteChange: (update: Partial<QuoteState>) => void;
};

const PricingQuoteTool: React.FC<PricingQuoteToolProps> = ({ quote, onQuoteChange }) => {
  const { planId, termMonths, upfrontDev, includeEmail, emailTierLabel, emailUserCount } = quote;

  const tier = getTier(planId);
  const emailPricePerMailbox = getEmailPricePerMailbox(emailTierLabel, termMonths);

  const clampEmailUsers = (count: number) =>
    Math.min(maxEmailMailboxes, Math.max(1, count));

  const handleEmailTierChange = (label: EmailTierId) => {
    onQuoteChange({
      emailTierLabel: label,
      emailUserCount: clampEmailUsers(emailUserCount),
    });
  };

  const quoteBreakdown = useMemo(
    () =>
      calculateQuote({
        planId,
        termMonths,
        upfrontDev,
        includeEmail,
        emailTierLabel,
        emailUserCount,
      }),
    [planId, termMonths, upfrontDev, includeEmail, emailTierLabel, emailUserCount]
  );

  const weeklyTotal = calculateWeeklyFromMonthly(quoteBreakdown.monthlyTotal);
  const annualTotal = quoteBreakdown.monthlyTotal * 12;

  const handlePlanChange = (id: PlanId) => {
    const nextTier = getTier(id);
    onQuoteChange({
      planId: id,
      upfrontDev: nextTier.minDevelopmentPayment,
    });
  };

  const contactUrl = buildQuoteContactUrl({
    planId,
    termMonths,
    upfrontDev,
    includeEmail,
    emailTierLabel,
    emailUserCount,
  });

  return (
    <section id="quote-tool" className="max-w-4xl mx-auto mb-8">
      <div className="rounded-2xl border-2 border-[#086375]/20 bg-white shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#3c1642] to-[#086375] px-6 py-4 text-white">
          <h3 className="text-lg font-bold">Quick quote</h3>
          <p className="text-sm text-white/85 mt-0.5">
            See your upfront and monthly total in seconds.
          </p>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Plan</p>
              <div className="flex rounded-lg border border-gray-200 p-1">
                {pricingTiers.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handlePlanChange(item.id)}
                    className={`flex-1 rounded-md px-2 py-2 text-sm font-semibold transition-colors ${
                      planId === item.id
                        ? 'bg-[#086375] text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Length</p>
              <div className="flex rounded-lg border border-gray-200 p-1">
                {TERM_OPTIONS.map((months) => (
                  <button
                    key={months}
                    type="button"
                    onClick={() => onQuoteChange({ termMonths: months })}
                    className={`flex-1 rounded-md px-2 py-2 text-sm font-semibold transition-colors ${
                      termMonths === months
                        ? 'bg-[#086375] text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {termLabels[months]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Setup fee upfront
              </p>
              <input
                type="range"
                min={tier.minDevelopmentPayment}
                max={tier.developmentFee}
                step={50}
                value={upfrontDev}
                onChange={(e) => onQuoteChange({ upfrontDev: Number(e.target.value) })}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#086375] bg-gray-200"
                aria-label="Setup fee upfront"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <PriceAmount value={tier.minDevelopmentPayment} format="money" nzdClassName="text-[0.65em] font-semibold text-gray-400 ml-0.5" />
                <PriceAmount value={tier.developmentFee} format="money" nzdClassName="text-[0.65em] font-semibold text-gray-400 ml-0.5" />
              </div>
            </div>

            <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 space-y-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeEmail}
                  onChange={(e) => onQuoteChange({ includeEmail: e.target.checked })}
                  className="rounded border-gray-300 text-[#086375] focus:ring-[#1dd3b0]"
                />
                <span className="text-sm font-semibold text-[#3c1642]">Include business email</span>
              </label>

              {includeEmail && (
                <>
                  <p className="text-xs text-gray-600">
                    Email uses the same {termLabels[termMonths]} contract as your website , {' '}
                    <PriceAmount value={emailPricePerMailbox} nzdClassName="text-[0.65em] font-semibold text-gray-400 ml-0.5" />
                    /mailbox per month.
                  </p>
                  {termMonths === freeEmailTermMonths && (
                    <p className="text-xs text-[#086375] font-medium">
                      Up to {tier.includedEmail.users} users free on a 4-year plan (
                      {tier.includedEmail.storage}).
                    </p>
                  )}
                  <div>
                    <label htmlFor="email-tier" className="block text-xs text-gray-600 mb-1">
                      Email package
                    </label>
                    <select
                      id="email-tier"
                      value={emailTierLabel}
                      onChange={(e) => handleEmailTierChange(e.target.value as EmailTierId)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent"
                    >
                      {emailAddOns.map((addon) => (
                        <option key={addon.label} value={addon.label}>
                          {addon.label}: ${addon.prices[termMonths].toFixed(2)} NZD/mailbox (
                          {addon.storageNote})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <label htmlFor="email-users" className="text-xs text-gray-600">
                        Number of mailboxes
                      </label>
                      <span className="text-sm font-semibold text-[#086375]">
                        {emailUserCount} of {maxEmailMailboxes}
                      </span>
                    </div>
                    <input
                      id="email-users"
                      type="range"
                      min={1}
                      max={maxEmailMailboxes}
                      step={1}
                      value={emailUserCount}
                      onChange={(e) => onQuoteChange({ emailUserCount: Number(e.target.value) })}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#086375] bg-gray-200 mb-2"
                      aria-valuemin={1}
                      aria-valuemax={maxEmailMailboxes}
                      aria-valuenow={emailUserCount}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>1</span>
                      <span>{maxEmailMailboxes}</span>
                    </div>
                    <input
                      type="number"
                      min={1}
                      max={maxEmailMailboxes}
                      step={1}
                      value={emailUserCount}
                      onChange={(e) => {
                        const parsed = Number(e.target.value);
                        if (!Number.isNaN(parsed)) {
                          onQuoteChange({ emailUserCount: clampEmailUsers(parsed) });
                        }
                      }}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent"
                      aria-label="Number of mailboxes"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col rounded-xl bg-gray-50 border border-gray-100 p-5">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Your estimate</p>

            <div className="mb-4">
              <p className="text-sm text-gray-600">Due today</p>
              <p className="text-3xl font-bold text-[#3c1642]">
                <PriceAmount value={quoteBreakdown.upfront} format="money" showNzd />
              </p>
            </div>

            <div className="mb-5">
              <p className="text-sm text-gray-600">Monthly total</p>
              <p className="text-3xl font-bold text-[#086375]">
                <PriceAmount value={quoteBreakdown.monthlyTotal} showNzd />
              </p>
              <p className="text-sm font-semibold text-[#3c1642] mt-2">
                Only <PriceAmount value={weeklyTotal} nzdClassName="text-[0.65em] font-semibold text-gray-500 ml-0.5" />{' '}
                weekly!
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Billed monthly or annually, paid in advance (
                <PriceAmount value={annualTotal} nzdClassName="text-[0.65em] font-semibold text-gray-400 ml-0.5" />
                /year if paying annually).{' '}
                <a href="#billing-terms" className="text-[#086375] hover:text-[#1dd3b0] font-medium">
                  First bill after deployment · contracts &amp; $49/hr rate
                </a>
              </p>
            </div>

            <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-grow">
              <li className="flex justify-between gap-2">
                <span>Website plan</span>
                <span className="font-medium text-gray-800">
                  <PriceAmount value={quoteBreakdown.monthlyPlan} nzdClassName="text-[0.65em] font-semibold text-gray-400 ml-0.5" />
                  /mo
                </span>
              </li>
              <li className="flex justify-between gap-2">
                <span>Setup fee spread</span>
                <span className="font-medium text-gray-800">
                  <PriceAmount value={quoteBreakdown.monthlyBuildSpread} nzdClassName="text-[0.65em] font-semibold text-gray-400 ml-0.5" />
                  /mo
                </span>
              </li>
              <li className="flex justify-between gap-2">
                <span>Business email</span>
                <span className="font-medium text-gray-800 text-right">
                  {!includeEmail && (
                    <>
                      <PriceAmount value={0} nzdClassName="text-[0.65em] font-semibold text-gray-400 ml-0.5" />
                      /mo
                    </>
                  )}
                  {includeEmail && quoteBreakdown.monthlyEmail === 0 && (
                    <>
                      <PriceAmount value={0} nzdClassName="text-[0.65em] font-semibold text-gray-400 ml-0.5" />
                      /mo ({quoteBreakdown.freeEmailUsers} included
                    </>
                  )}
                  {includeEmail && quoteBreakdown.monthlyEmail > 0 && (
                    <>
                      <PriceAmount value={quoteBreakdown.monthlyEmail} nzdClassName="text-[0.65em] font-semibold text-gray-400 ml-0.5" />
                      /mo
                      <span className="block text-xs text-gray-500 font-normal">
                        {quoteBreakdown.emailIsIncluded
                          ? `${quoteBreakdown.freeEmailUsers} free + ${quoteBreakdown.paidEmailUsers} paid`
                          : (
                            <>
                              {emailUserCount} mailbox{emailUserCount !== 1 ? 'es' : ''} ×{' '}
                              <PriceAmount value={emailPricePerMailbox} nzdClassName="text-[0.65em] font-semibold text-gray-400 ml-0.5" />
                            </>
                          )}
                      </span>
                    </>
                  )}
                </span>
              </li>
            </ul>

            <Link
              to={contactUrl}
              className="block text-center font-semibold px-6 py-3 rounded-lg bg-[#1dd3b0] text-white hover:bg-[#086375] transition-colors"
            >
              {contactPage.sendQuoteLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingQuoteTool;
