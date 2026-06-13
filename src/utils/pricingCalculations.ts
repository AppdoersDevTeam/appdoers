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

export function buildQuoteContactUrl(quote: QuoteInput): string {
  const params = new URLSearchParams({
    tier: quote.planId,
    term: String(quote.termMonths),
    devUpfront: String(quote.upfrontDev),
    includeEmail: quote.includeEmail ? '1' : '0',
  });

  if (quote.includeEmail) {
    params.set('emailUsers', String(quote.emailUserCount));
    params.set('emailTier', quote.emailTierLabel);
  }

  return `/contact?${params.toString()}`;
}

export function parseQuoteFromSearchParams(searchParams: URLSearchParams): QuoteInput | null {
  const tierParam = searchParams.get('tier');
  if (!tierParam || !pricingTiers.some((tier) => tier.id === tierParam)) {
    return null;
  }

  const planId = tierParam as PlanId;
  const tier = getTier(planId);
  const termParam = Number(searchParams.get('term'));
  const termMonths = TERM_OPTIONS.includes(termParam as TermMonths)
    ? (termParam as TermMonths)
    : 12;

  const devParam = Number(searchParams.get('devUpfront'));
  const upfrontDev = Number.isFinite(devParam)
    ? Math.min(Math.max(devParam, tier.minDevelopmentPayment), tier.developmentFee)
    : tier.minDevelopmentPayment;

  const includeEmail = searchParams.get('includeEmail') === '1';
  const emailTierParam = searchParams.get('emailTier');
  const emailTierLabel =
    emailAddOns.some((addon) => addon.label === emailTierParam) && emailTierParam
      ? (emailTierParam as EmailTierId)
      : 'Basic email';

  const usersParam = Number(searchParams.get('emailUsers'));
  const emailUserCount = Number.isFinite(usersParam)
    ? Math.min(Math.max(usersParam, 1), maxEmailMailboxes)
    : 1;

  return {
    planId,
    termMonths,
    upfrontDev,
    includeEmail,
    emailTierLabel,
    emailUserCount: includeEmail ? emailUserCount : 1,
  };
}

export function formatQuoteSummary(quote: QuoteInput): string {
  const tier = getTier(quote.planId);
  const breakdown = calculateQuote(quote);
  const weeklyTotal = calculateWeeklyFromMonthly(breakdown.monthlyTotal);
  const annualTotal = breakdown.monthlyTotal * 12;
  const emailTier = getEmailTier(quote.emailTierLabel);
  const pricePerMailbox = emailTier.prices[quote.termMonths];

  const lines = [
    '--- Website quote ---',
    `Plan: ${tier.name}`,
    `Contract length: ${termLabels[quote.termMonths]}`,
    '',
    'Setup fee',
    `Total setup fee: $${formatMoney(tier.developmentFee)} NZD`,
    `Due today: $${formatMoney(breakdown.upfront)} NZD`,
    `Spread monthly: $${formatMoney(breakdown.monthlyBuildSpread)} NZD/mo`,
    '',
    'Monthly breakdown',
    `Website plan: $${formatMoney(breakdown.monthlyPlan)} NZD/mo`,
    `Setup fee spread: $${formatMoney(breakdown.monthlyBuildSpread)} NZD/mo`,
  ];

  if (quote.includeEmail) {
    if (breakdown.monthlyEmail === 0 && breakdown.freeEmailUsers > 0) {
      lines.push(
        `Business email: $0 NZD/mo (${breakdown.freeEmailUsers} included on 4-year plan — ${tier.includedEmail.storage})`
      );
    } else if (breakdown.emailIsIncluded && breakdown.paidEmailUsers > 0) {
      lines.push(
        `Business email: $${formatMoney(breakdown.monthlyEmail)} NZD/mo (${breakdown.freeEmailUsers} free + ${breakdown.paidEmailUsers} paid · ${quote.emailTierLabel} · ${emailTier.storageNote})`
      );
    } else {
      lines.push(
        `Business email: $${formatMoney(breakdown.monthlyEmail)} NZD/mo (${quote.emailUserCount} mailbox${quote.emailUserCount !== 1 ? 'es' : ''} × $${formatMoney(pricePerMailbox)} NZD · ${quote.emailTierLabel} · ${emailTier.storageNote})`
      );
    }
  } else {
    lines.push('Business email: not included');
  }

  lines.push(
    '',
    'Totals',
    `Due today: $${formatMoney(breakdown.upfront)} NZD`,
    `Monthly total: $${formatMoney(breakdown.monthlyTotal)} NZD/mo`,
    `Weekly equivalent: $${formatMoney(weeklyTotal)} NZD`,
    `Annual total (if paying monthly): $${formatMoney(annualTotal)} NZD/year`,
    '--- End quote ---'
  );

  return lines.join('\n');
}
