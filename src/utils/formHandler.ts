import { brand } from '../content/siteContent';
import {
  formatQuoteSummaryForEmail,
  type QuoteInput,
} from './pricingCalculations';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  quote?: QuoteInput;
  source?: string;
}

const recipientEmail = brand.email;
const formEndpoint = `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`;

const RULE = '────────────────────────────────────────';

function buildEmailSubject(formData: ContactFormData): string {
  if (formData.quote) {
    return `Quote request — ${formData.name}`;
  }
  return `Website enquiry — ${formData.name}`;
}

function buildEmailBody(formData: ContactFormData): string {
  const sections: string[] = [
    'NEW CONTACT FORM SUBMISSION',
    'Appdoers website · appdoers.co.nz',
    RULE,
    '',
    'CONTACT DETAILS',
    `Name:    ${formData.name}`,
    `Email:   ${formData.email}`,
    `Phone:   ${formData.phone?.trim() || 'Not provided'}`,
    `Source:  ${formData.source || 'Contact page'}`,
  ];

  if (formData.quote) {
    sections.push('', RULE, '', 'PRICING QUOTE', formatQuoteSummaryForEmail(formData.quote));
  }

  if (formData.message.trim()) {
    sections.push('', RULE, '', 'MESSAGE', formData.message.trim());
  }

  sections.push('', RULE, '', `Reply to: ${formData.email}`);

  return sections.join('\n');
}

export const handleFormSubmit = async (
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const payload: Record<string, string> = {
      message: buildEmailBody(formData),
      _subject: buildEmailSubject(formData),
      _replyto: formData.email,
      _template: 'box',
      _captcha: 'false',
    };

    const response = await fetch(formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      const detail =
        errorBody && typeof errorBody === 'object' && 'message' in errorBody
          ? String(errorBody.message)
          : '';
      throw new Error(detail || 'Failed to send message');
    }

    return {
      success: true,
      message: `Thank you! Your message has been sent to ${recipientEmail}. We will reply within 2 business days.`,
    };
  } catch {
    return {
      success: false,
      message: `We could not send your message right now. Please email us directly at ${recipientEmail} or call ${brand.phone}.`,
    };
  }
};
