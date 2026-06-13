import React from 'react';
import { formatMoney, formatPrice } from '../utils/pricingCalculations';

export const nzdLabelClass =
  'text-[0.5em] font-semibold text-gray-400 ml-0.5 align-baseline tracking-wide';

type PriceAmountProps = {
  value: number;
  format?: 'price' | 'money';
  className?: string;
  nzdClassName?: string;
  /** Show NZD label — use on hero totals only (main monthly, due today, quote totals). */
  showNzd?: boolean;
};

const PriceAmount: React.FC<PriceAmountProps> = ({
  value,
  format = 'price',
  className = '',
  nzdClassName = nzdLabelClass,
  showNzd = false,
}) => {
  const amount = format === 'money' ? formatMoney(value) : formatPrice(value);

  return (
    <span className={className}>
      ${amount}
      {showNzd && <span className={nzdClassName}>NZD</span>}
    </span>
  );
};

export default PriceAmount;
