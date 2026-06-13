import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import AudienceSwitcher from './AudienceSwitcher';
import BusinessEmailSection from './BusinessEmailSection';
import PriceAmount from './PriceAmount';
import PlanFeaturesSection from './PlanFeaturesSection';
import PricingPolicySection from './PricingPolicySection';
import PricingQuoteTool from './PricingQuoteTool';
import { pricingTiers } from '../content/siteContent';
import {
  TERM_OPTIONS,
  calculatePlanPriceDisplay,
  createDefaultQuoteState,
  scrollToQuoteTool,
  termLabels,
  type EmailTierId,
  type PlanId,
  type QuoteState,
  type TermMonths,
} from '../utils/pricingCalculations';
import {
  getAudienceProductCopy,
  isRecommendedPlanForAudience,
} from '../content/audienceContent';
import { useAudienceSegment } from '../context/AudienceSegmentContext';
import { MotionReveal, Stagger, StaggerItem } from './AnimateIn';

type PricingProps = {
  showHeader?: boolean;
};

type PricingTier = (typeof pricingTiers)[number];

const PlanCard: React.FC<{
  tier: PricingTier;
  selectedMonths: TermMonths;
  isInQuote: boolean;
  onAddToQuote: (planId: PlanId, upfrontDev: number) => void;
}> = ({ tier, selectedMonths, isInQuote, onAddToQuote }) => {
  const { audienceId } = useAudienceSegment();
  const planSlug = tier.id === 'starter-website' ? 'basic-website' : 'full-website';
  const audienceCopy = getAudienceProductCopy(audienceId, planSlug);
  const recommended = isRecommendedPlanForAudience(audienceId, planSlug);
  const [upfrontDev, setUpfrontDev] = useState(tier.minDevelopmentPayment);

  const selectedTerm =
    tier.termOptions.find((term) => term.months === selectedMonths) ?? tier.termOptions[0];

  const { currentMonthly, referenceMonthly, badgeLabel } = calculatePlanPriceDisplay(
    tier,
    selectedMonths,
    upfrontDev,
    selectedTerm.monthly
  );

  const topHighlights = audienceCopy.highlights.slice(0, 3);

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg p-5 md:p-6 flex flex-col border-2 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
        tier.popular || recommended
          ? 'border-[#1dd3b0] ring-2 ring-[#1dd3b0]/20'
          : 'border-gray-100'
      }`}
    >
      {(tier.badge || recommended) && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#affc41] text-[#3c1642] text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
          {recommended && !tier.badge ? 'Best fit for you' : tier.badge}
        </span>
      )}

      <h3 className="text-xl font-bold text-[#086375]">{tier.name}</h3>
      <p className="text-sm text-gray-600 mt-1 mb-4 line-clamp-3">{audienceCopy.idealFor}</p>

      <div className="flex items-baseline gap-2 flex-wrap mb-1">
        {referenceMonthly !== null && (
          <span className="text-lg text-gray-400 line-through">
            <PriceAmount value={referenceMonthly} />
          </span>
        )}
        <span className="text-4xl font-bold text-[#3c1642]">
          <PriceAmount value={currentMonthly} showNzd />
        </span>
        <span className="text-gray-500">/mo</span>
        {badgeLabel && (
          <span className="text-xs font-bold bg-[#affc41] text-[#3c1642] px-2.5 py-1 rounded-full">
            {badgeLabel}
          </span>
        )}
      </div>

      <p className="text-sm text-gray-500 mb-4">
        <PriceAmount value={upfrontDev} format="money" /> due today
        <span className="text-gray-300 mx-1.5">·</span>
        <PriceAmount value={tier.developmentFee} format="money" /> setup
      </p>

      <div className="mb-4">
        <label
          htmlFor={`dev-slider-${tier.id}`}
          className="text-xs font-semibold text-gray-500 uppercase tracking-wide"
        >
          Setup upfront
        </label>
        <input
          id={`dev-slider-${tier.id}`}
          type="range"
          min={tier.minDevelopmentPayment}
          max={tier.developmentFee}
          step={50}
          value={upfrontDev}
          onChange={(e) => setUpfrontDev(Number(e.target.value))}
          className="w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-[#086375] bg-gray-200 mt-2"
          aria-label={`Setup fee upfront for ${tier.name}`}
        />
      </div>

      <ul className="space-y-1.5 mb-4 flex-grow">
        {topHighlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
            <FaCheck className="text-[#1dd3b0] mt-1 shrink-0 text-xs" aria-hidden />
            <span className="line-clamp-2">{item}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onAddToQuote(tier.id, upfrontDev)}
        className={`mt-auto text-center font-semibold px-6 py-3 rounded-lg transition-colors ${
          isInQuote
            ? 'bg-[#affc41] text-[#3c1642] hover:bg-[#1dd3b0] hover:text-white'
            : tier.popular
              ? 'bg-[#1dd3b0] text-white hover:bg-[#086375]'
              : 'bg-[#086375] text-white hover:bg-[#3c1642]'
        }`}
      >
        {isInQuote ? 'Added to quote. View below' : 'Add to your quote'}
      </button>
      <Link
        to={`/contact?tier=${tier.id}&term=${selectedMonths}&devUpfront=${upfrontDev}`}
        className="text-center text-sm font-semibold text-[#086375] hover:text-[#1dd3b0] mt-3"
      >
        {tier.cta}
      </Link>
      <a
        href="#plan-features"
        className="text-center text-xs text-[#086375] hover:text-[#1dd3b0] mt-2 font-medium"
      >
        Full feature list ↓
      </a>
    </div>
  );
};

const howItWorks = [
  { step: '1', title: 'Pick your plan', detail: 'Basic for a simple public site, or Full for churches and businesses that need member tools.' },
  { step: '2', title: 'Choose your length', detail: '12, 24, or 48 months; longer plans cost less per month.' },
  {
    step: '3',
    title: 'Set your setup fee',
    detail: 'Pay some now, spread the rest monthly — your total price stays the same.',
  },
];

const Pricing: React.FC<PricingProps> = ({ showHeader = true }) => {
  const [quote, setQuote] = useState<QuoteState>(createDefaultQuoteState);

  const updateQuote = useCallback((update: Partial<QuoteState>) => {
    setQuote((prev) => ({ ...prev, ...update }));
  }, []);

  const addWebsiteToQuote = useCallback((planId: PlanId, upfrontDev: number) => {
    setQuote((prev) => ({ ...prev, planId, upfrontDev }));
    scrollToQuoteTool();
  }, []);

  const addEmailToQuote = useCallback((emailTierLabel: EmailTierId) => {
    setQuote((prev) => ({ ...prev, includeEmail: true, emailTierLabel }));
    scrollToQuoteTool();
  }, []);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {showHeader && (
          <MotionReveal className="text-center mb-10">
            <h2 className="section-title">Website Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Two plans. One simple process.
            </p>
          </MotionReveal>
        )}

        <Stagger className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {howItWorks.map((item) => (
            <StaggerItem key={item.step} variant="scaleIn">
              <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#086375] text-white text-sm font-bold mb-2">
                  {item.step}
                </span>
                <p className="font-semibold text-[#3c1642] text-sm">{item.title}</p>
                <p className="text-xs text-gray-600 mt-1">{item.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <MotionReveal className="max-w-md mx-auto mb-8" delay={0.1}>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">
            Plan length: website &amp; email
          </p>
          <div className="inline-flex rounded-xl border border-gray-200 bg-white p-1 w-full shadow-sm">
            {TERM_OPTIONS.map((months) => (
              <button
                key={months}
                type="button"
                onClick={() => updateQuote({ termMonths: months })}
                aria-pressed={quote.termMonths === months}
                className={`flex-1 rounded-lg px-2 py-2.5 text-sm font-semibold transition-colors ${
                  quote.termMonths === months
                    ? 'bg-[#086375] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#086375] hover:bg-gray-50'
                }`}
              >
                {termLabels[months]}
              </button>
            ))}
          </div>
          {quote.termMonths === 48 && (
            <p className="text-xs text-[#086375] text-center mt-2 font-medium">
              4-year plans include free business email
            </p>
          )}
          <p className="text-center mt-4">
            <a
              href="#billing-terms"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#086375]/30 bg-white px-4 py-2 text-sm font-semibold text-[#086375] hover:border-[#1dd3b0] hover:text-[#1dd3b0] transition-colors shadow-sm"
            >
              Billing, contracts &amp; $49/hr rate. Read before you sign up
            </a>
          </p>
        </MotionReveal>

        <MotionReveal className="max-w-3xl mx-auto mb-8" delay={0.08}>
          <AudienceSwitcher size="compact" />
        </MotionReveal>

        <Stagger className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.id}>
              <PlanCard
                tier={tier}
                selectedMonths={quote.termMonths}
                isInQuote={quote.planId === tier.id}
                onAddToQuote={addWebsiteToQuote}
              />
            </StaggerItem>
          ))}
        </Stagger>

        <PlanFeaturesSection />
        <BusinessEmailSection
          selectedMonths={quote.termMonths}
          onTermChange={(months) => updateQuote({ termMonths: months })}
          quote={quote}
          onAddEmailToQuote={addEmailToQuote}
        />
        <PricingQuoteTool quote={quote} onQuoteChange={updateQuote} />
        <PricingPolicySection />
      </div>
    </section>
  );
};

export default Pricing;
