import { brand } from '../content/siteContent';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  quote?: string;
  source?: string;
}

const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim();
const recipientEmail = brand.email;

const getFormEndpoint = (): string => {
  if (formspreeFormId) {
    return `https://formspree.io/f/${formspreeFormId}`;
  }
  return `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`;
};

function buildEmailSubject(formData: ContactFormData): string {
  if (formData.quote) {
    return `Website quote request from ${formData.name}`;
  }
  return `Website enquiry from ${formData.name}`;
}

function buildEmailBody(formData: ContactFormData): string {
  const lines = [
    'New submission from the Appdoers website contact form',
    '',
    `Name: ${formData.name}`,
    `Email: ${formData.email}`,
    `Phone: ${formData.phone?.trim() || 'Not provided'}`,
    `Source: ${formData.source || 'Contact page'}`,
  ];

  if (formData.quote) {
    lines.push('', formData.quote);
  }

  if (formData.message.trim()) {
    lines.push('', '--- Additional message ---', formData.message.trim());
  }

  return lines.join('\n');
}

export const handleFormSubmit = async (
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const payload: Record<string, string> = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone?.trim() || 'Not provided',
      source: formData.source || 'Contact page',
      message: buildEmailBody(formData),
      _subject: buildEmailSubject(formData),
      _replyto: formData.email,
    };

    if (formData.quote) {
      payload.quote = formData.quote;
    }

    if (!formspreeFormId) {
      payload._template = 'table';
      payload._captcha = 'false';
    }

    const response = await fetch(getFormEndpoint(), {
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
      message: `Thank you! Your message has been sent to ${recipientEmail}. We will reply within one business day.`,
    };
  } catch {
    return {
      success: false,
      message: `We could not send your message right now. Please email us directly at ${recipientEmail} or call ${brand.phone}.`,
    };
  }
};
