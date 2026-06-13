interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
}

const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim();

const getFormEndpoint = (): string => {
  if (formspreeFormId) {
    return `https://formspree.io/f/${formspreeFormId}`;
  }
  return 'https://formsubmit.co/ajax/contact@appdoers.co.nz';
};

export const handleFormSubmit = async (
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const payload: Record<string, string> = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      _subject: `New Contact Form Submission from ${formData.name}`,
      _replyto: formData.email,
    };

    if (formData.phone) {
      payload.phone = formData.phone;
    }

    if (formData.source) {
      payload.source = formData.source;
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
      throw new Error('Failed to send message');
    }

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    };
  } catch {
    return {
      success: false,
      message: 'Oops! Something went wrong. Please try again.',
    };
  }
};
