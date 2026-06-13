import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { contactPage, emailAddOns, freeEmailTermMonths, maxEmailMailboxes, pricingTiers } from '../content/siteContent';
import {
  getTier,
  TERM_OPTIONS,
  termLabels,
  type QuoteInput,
} from '../utils/pricingCalculations';
import PriceAmount from './PriceAmount';
import QuoteSummaryPanel from './QuoteSummaryPanel';

export type QuoteFormFields = {
  tier: string;
  term: string;
  devUpfront: string;
  includeEmail: boolean;
  emailUsers: string;
  emailTier: string;
};

type ContactQuoteSectionProps = {
  fields: QuoteFormFields;
  activeQuote: QuoteInput | null;
  includeInEmail: boolean;
  onIncludeChange: (included: boolean) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onPlanChange: (planId: string) => void;
  onTermChange: (months: number) => void;
  onClear: () => void;
};

const ContactQuoteSection: React.FC<ContactQuoteSectionProps> = ({
  fields,
  activeQuote,
  includeInEmail,
  onIncludeChange,
  onChange,
  onPlanChange,
  onTermChange,
  onClear,
}) => {
  const [editorOpen, setEditorOpen] = useState(!activeQuote);
  const selectedTier = fields.tier ? getTier(fields.tier as QuoteInput['planId']) : null;

  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-[#086375]">
            Pricing quote
          </h3>
          <p className="text-xs text-gray-500 mt-1">Optional — include your estimate in the email.</p>
        </div>
        {activeQuote && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-600 transition-colors"
          >
            <FaTimes aria-hidden />
            Clear quote
          </button>
        )}
      </div>

      <label className="flex items-center gap-2 cursor-pointer mb-4">
        <input
          type="checkbox"
          checked={includeInEmail}
          onChange={(e) => onIncludeChange(e.target.checked)}
          className="rounded border-gray-300 text-[#086375] focus:ring-[#1dd3b0]"
        />
        <span className="text-sm font-medium text-[#3c1642]">Include quote in my email</span>
      </label>

      {includeInEmail && activeQuote && !editorOpen && (
        <>
          <QuoteSummaryPanel quote={activeQuote} />
          <button
            type="button"
            onClick={() => setEditorOpen(true)}
            className="mt-3 text-sm font-semibold text-[#086375] hover:text-[#1dd3b0] transition-colors"
          >
            Edit quote details
          </button>
        </>
      )}

      {includeInEmail && (editorOpen || !activeQuote) && (
        <div className="space-y-4 pt-1">
          {activeQuote && (
            <button
              type="button"
              onClick={() => setEditorOpen(false)}
              className="text-sm font-semibold text-[#086375] hover:text-[#1dd3b0] transition-colors"
            >
              Hide editor
            </button>
          )}

          <div>
            <label htmlFor="tier" className="block text-sm font-medium text-gray-700 mb-1">
              Plan
            </label>
            <select
              id="tier"
              name="tier"
              value={fields.tier}
              onChange={(e) => onPlanChange(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent"
            >
              <option value="">Select a plan</option>
              {pricingTiers.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {selectedTier && (
            <>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Contract length</p>
                <div className="flex rounded-lg border border-gray-200 p-1">
                  {TERM_OPTIONS.map((months) => (
                    <button
                      key={months}
                      type="button"
                      onClick={() => onTermChange(months)}
                      className={`flex-1 rounded-md px-2 py-2 text-sm font-semibold transition-colors ${
                        Number(fields.term) === months
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
                <label htmlFor="devUpfront" className="block text-sm font-medium text-gray-700 mb-1">
                  Setup fee due today
                </label>
                <input
                  id="devUpfront"
                  name="devUpfront"
                  type="range"
                  min={selectedTier.minDevelopmentPayment}
                  max={selectedTier.developmentFee}
                  step={50}
                  value={fields.devUpfront || selectedTier.minDevelopmentPayment}
                  onChange={onChange}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#086375] bg-gray-200"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <PriceAmount value={selectedTier.minDevelopmentPayment} format="money" />
                  <PriceAmount
                    value={Number(fields.devUpfront) || selectedTier.minDevelopmentPayment}
                    format="money"
                  />
                  <PriceAmount value={selectedTier.developmentFee} format="money" />
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 bg-gray-50 p-4 space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="includeEmail"
                    checked={fields.includeEmail}
                    onChange={onChange}
                    className="rounded border-gray-300 text-[#086375] focus:ring-[#1dd3b0]"
                  />
                  <span className="text-sm font-medium text-[#3c1642]">Include business email</span>
                </label>

                {fields.includeEmail && (
                  <>
                    {Number(fields.term) === freeEmailTermMonths && (
                      <p className="text-xs text-[#086375]">
                        Up to {selectedTier.includedEmail.users} mailboxes free on a 4-year plan.
                      </p>
                    )}
                    <div>
                      <label htmlFor="emailTier" className="block text-xs text-gray-600 mb-1">
                        Email package
                      </label>
                      <select
                        id="emailTier"
                        name="emailTier"
                        value={fields.emailTier || 'Basic email'}
                        onChange={onChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent"
                      >
                        {emailAddOns.map((addon) => (
                          <option key={addon.label} value={addon.label}>
                            {addon.label} ({addon.storageNote})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="emailUsers" className="block text-xs text-gray-600 mb-1">
                        Number of mailboxes ({fields.emailUsers || 1} of {maxEmailMailboxes})
                      </label>
                      <input
                        id="emailUsers"
                        name="emailUsers"
                        type="range"
                        min={1}
                        max={maxEmailMailboxes}
                        step={1}
                        value={fields.emailUsers || 1}
                        onChange={onChange}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#086375] bg-gray-200"
                      />
                    </div>
                  </>
                )}
              </div>

              {activeQuote && (
                <div className="pt-2">
                  <QuoteSummaryPanel quote={activeQuote} />
                </div>
              )}
            </>
          )}
        </div>
      )}

      {!includeInEmail && (
        <p className="text-sm text-gray-500">
          No quote will be attached.{' '}
          <Link to="/pricing" className="text-[#086375] font-semibold hover:text-[#1dd3b0]">
            {contactPage.pricingLinkLabel}
          </Link>
        </p>
      )}
    </div>
  );
};

export default ContactQuoteSection;
