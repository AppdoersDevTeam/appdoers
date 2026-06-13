import {
  emailAddOns,
  freeEmailTermMonths,
  maxEmailMailboxes,
  pricingTiers,
} from '../content/siteContent';

export type TermMonths = (typeof pricingTiers)[number]['termOptions'][number]['months'];
export type PlanId = (typeof pricingTiers)[number]['id'];
export type EmailTierId = (typeof emailAddOns)[number]['label'];

export type QuoteInput = {
  planId: PlanId;
  termMonths: TermMonths;
  upfrontDev: number;
  includeEmail: boolean;
  emailTierLabel: EmailTierId;
  emailUserCount: number;
};

export type QuoteState = QuoteInput;

export function createDefaultQuoteState(): QuoteState {
  return {
    planId: 'full-website',
    termMonths: 12,
    upfrontDev: getTier('full-website').minDevelopmentPayment,
    includeEmail: false,
    emailTierLabel: 'Basic email',
    emailUserCount: 1,
  };
}

export function scrollToQuoteTool() {
  document.getElementById('quote-tool')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export type QuoteBreakdown = {
  upfront: number;
  monthlyPlan: number;
  monthlyBuildSpread: number;
  monthlyEmail: number;
  monthlyTotal: number;
  freeEmailUsers: number;
  paidEmailUsers: number;
  emailIsIncluded: boolean;
};

export const TERM_OPTIONS: TermMonths[] = pricingTiers[0].termOptions.map((term) => term.months);

export const termLabels: Record<TermMonths, string> = {
  12: '1 year',
  24: '2 years',
  48: '4 years',
};

export function getTier(planId: PlanId) {
  return pricingTiers.find((tier) => tier.id === planId) ?? pricingTiers[0];
}

export function getTermOption(planId: PlanId, termMonths: TermMonths) {
  const tier = getTier(planId);
  return tier.termOptions.find((term) => term.months === termMonths) ?? tier.termOptions[0];
}

export function getEmailTier(label: EmailTierId) {
  return emailAddOns.find((tier) => tier.label === label) ?? emailAddOns[0];
}

export function getEmailPricePerMailbox(label: EmailTierId, termMonths: TermMonths) {
  return getEmailTier(label).prices[termMonths];
}

export function calculateEmailSavings(
  addon: (typeof emailAddOns)[number],
  termMonths: TermMonths
) {
  const baseline = addon.prices[12];
  const current = addon.prices[termMonths];
  const savingsPercent =
    baseline > 0 ? Math.max(0, Math.round(((baseline - current) / baseline) * 100)) : 0;

  return { baseline, current, savingsPercent };
}

export function calculateQuote(input: QuoteInput): QuoteBreakdown {
  const tier = getTier(input.planId);
  const term = getTermOption(input.planId, input.termMonths);
  const emailTier = getEmailTier(input.emailTierLabel);

  const remainder = tier.developmentFee - input.upfrontDev;
  const monthlyBuildSpread = remainder / input.termMonths;
  const monthlyPlan = term.monthly;

  const emailIsIncluded =
    input.includeEmail && input.termMonths === freeEmailTermMonths;

  const freeEmailUsers = emailIsIncluded ? tier.includedEmail.users : 0;
  const cappedUsers = Math.min(Math.max(input.emailUserCount, 0), maxEmailMailboxes);
  const paidEmailUsers = input.includeEmail
    ? Math.max(0, cappedUsers - freeEmailUsers)
    : 0;

  const pricePerMailbox = emailTier.prices[input.termMonths];
  const monthlyEmail = input.includeEmail ? paidEmailUsers * pricePerMailbox : 0;

  return {
    upfront: input.upfrontDev,
    monthlyPlan,
    monthlyBuildSpread,
    monthlyEmail,
    monthlyTotal: monthlyPlan + monthlyBuildSpread + monthlyEmail,
    freeEmailUsers: input.includeEmail ? freeEmailUsers : 0,
    paidEmailUsers,
    emailIsIncluded,
  };
}

export function formatPrice(value: number) {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded)
    ? rounded.toString()
    : rounded.toFixed(2).replace(/\.?0+$/, '');
}

export function getTwelveMonthRate(planId: PlanId) {
  const tier = getTier(planId);
  return tier.termOptions.find((term) => term.months === 12)?.monthly ?? tier.monthly;
}

/** Total contract cost: plan payments + full setup fee (upfront split does not change this). */
export function calculateContractTotal(
  termMonths: TermMonths,
  termMonthly: number,
  developmentFee: number
) {
  return termMonths * termMonthly + developmentFee;
}

/** Plan-rate savings from a longer contract vs the 1-year monthly rate (setup fee excluded). */
export function calculatePlanSavings(
  planId: PlanId,
  selectedMonths: TermMonths,
  selectedTermMonthly: number
) {
  const twelveMonthRate = getTwelveMonthRate(planId);
  const savingsPercent =
    selectedMonths === 12 || twelveMonthRate <= 0
      ? 0
      : Math.max(
          0,
          Math.round(((twelveMonthRate - selectedTermMonthly) / twelveMonthRate) * 100)
        );

  return { savingsPercent, twelveMonthRate };
}

export type PlanPriceDisplay = {
  currentMonthly: number;
  referenceMonthly: number | null;
  badgeLabel: string | null;
};

/**
 * Card display: compare current monthly to 1-year plan rate + minimum upfront spread.
 * Longer plans show a % badge; extra upfront on 1-year shows a $/mo reduction (not a %).
 */
export function calculatePlanPriceDisplay(
  tier: (typeof pricingTiers)[number],
  selectedMonths: TermMonths,
  upfrontDev: number,
  selectedTermMonthly: number
): PlanPriceDisplay {
  const twelveMonthRate = getTwelveMonthRate(tier.id);
  const minSpread = (tier.developmentFee - tier.minDevelopmentPayment) / selectedMonths;
  const currentSpread = (tier.developmentFee - upfrontDev) / selectedMonths;
  const referenceMonthly = twelveMonthRate + minSpread;
  const currentMonthly = selectedTermMonthly + currentSpread;
  const monthlySavings = Math.max(0, referenceMonthly - currentMonthly);

  if (monthlySavings <= 0) {
    return { currentMonthly, referenceMonthly: null, badgeLabel: null };
  }

  const { savingsPercent: termSavingsPercent } = calculatePlanSavings(
    tier.id,
    selectedMonths,
    selectedTermMonthly
  );
  const upfrontOnlySavings = upfrontDev > tier.minDevelopmentPayment && termSavingsPercent === 0;

  const badgeLabel = termSavingsPercent > 0
    ? `Save ${termSavingsPercent}%`
    : upfrontOnlySavings
      ? `−$${formatPrice(monthlySavings)}/mo`
      : null;

  return {
    currentMonthly,
    referenceMonthly,
    badgeLabel,
  };
}

export function formatMoney(value: number) {
  return value.toLocaleString('en-NZ', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

/** Weekly equivalent for display: (monthly × 12) ÷ 52 */
export function calculateWeeklyFromMonthly(monthlyTotal: number) {
  return (monthlyTotal * 12) / 52;
}
