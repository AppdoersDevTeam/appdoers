import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { handleFormSubmit } from '../utils/formHandler';
import { brand, contactPage, pricingTiers } from '../content/siteContent';
import {
  getTier,
  parseQuoteFromSearchParams,
  type QuoteInput,
} from '../utils/pricingCalculations';
import ContactQuoteSection from './ContactQuoteSection';
import StructuredData from './StructuredData';
import { usePageMeta } from '../hooks/usePageMeta';

const tierLabels: Record<string, string> = {
  'full-website': 'Full Website',
  'starter-website': 'Basic Website',
};

const ContactCTA: React.FC = () => {
  usePageMeta({
    title: contactPage.metaTitle,
    description: contactPage.metaDescription,
    path: '/contact',
  });

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const quoteFromUrl = useMemo(() => parseQuoteFromSearchParams(searchParams), [searchParams]);
  const [includeQuoteInEmail, setIncludeQuoteInEmail] = useState(!!quoteFromUrl);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tier: quoteFromUrl?.planId ?? searchParams.get('tier') ?? '',
    term: quoteFromUrl ? String(quoteFromUrl.termMonths) : searchParams.get('term') ?? '',
    devUpfront: quoteFromUrl ? String(quoteFromUrl.upfrontDev) : searchParams.get('devUpfront') ?? '',
    includeEmail: quoteFromUrl?.includeEmail ?? searchParams.get('includeEmail') === '1',
    emailUsers: quoteFromUrl ? String(quoteFromUrl.emailUserCount) : searchParams.get('emailUsers') ?? '',
    emailTier: quoteFromUrl?.emailTierLabel ?? searchParams.get('emailTier') ?? '',
  });

  const activeQuote = useMemo((): QuoteInput | null => {
    if (!formData.tier || !tierLabels[formData.tier]) return null;

    const tier = pricingTiers.find((t) => t.id === formData.tier);
    if (!tier) return null;

    const termMonths = Number(formData.term);
    const term = tier.termOptions.find((t) => t.months === termMonths)?.months ?? 12;
    const devUpfront = Number(formData.devUpfront);
    const upfrontDev = Number.isFinite(devUpfront)
      ? Math.min(Math.max(devUpfront, tier.minDevelopmentPayment), tier.developmentFee)
      : tier.minDevelopmentPayment;

    return {
      planId: formData.tier as QuoteInput['planId'],
      termMonths: term as QuoteInput['termMonths'],
      upfrontDev,
      includeEmail: formData.includeEmail,
      emailTierLabel: (formData.emailTier || 'Basic email') as QuoteInput['emailTierLabel'],
      emailUserCount: formData.includeEmail ? Number(formData.emailUsers) || 1 : 1,
    };
  }, [formData]);

  useEffect(() => {
    if (!quoteFromUrl) return;
    setIncludeQuoteInEmail(true);
    setFormData((prev) => ({
      ...prev,
      tier: quoteFromUrl.planId,
      term: String(quoteFromUrl.termMonths),
      devUpfront: String(quoteFromUrl.upfrontDev),
      includeEmail: quoteFromUrl.includeEmail,
      emailUsers: String(quoteFromUrl.emailUserCount),
      emailTier: quoteFromUrl.emailTierLabel,
    }));
  }, [quoteFromUrl]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage(null);

    if (honeypot.trim()) {
      return;
    }

    const sendingQuote = includeQuoteInEmail && activeQuote;
    if (!sendingQuote && !formData.message.trim()) {
      setFormMessage('Please enter a message or include a pricing quote.');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const userMessage = formData.message.trim();

      const result = await handleFormSubmit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: userMessage,
        quote: sendingQuote ? activeQuote : undefined,
        source: sendingQuote ? 'Contact page (with quote)' : 'Contact page',
      });
      
      if (result.success) {
        setSubmitStatus('success');
        setFormMessage(result.message);
        setFormData((prev) => ({
          ...prev,
          name: '',
          email: '',
          phone: '',
          message: '',
        }));
      } else {
        setSubmitStatus('error');
        setFormMessage(result.message);
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePlanChange = (planId: string) => {
    if (!planId) {
      setFormData((prev) => ({ ...prev, tier: '', term: '', devUpfront: '' }));
      return;
    }
    const tier = getTier(planId as QuoteInput['planId']);
    setFormData((prev) => ({
      ...prev,
      tier: planId,
      term: prev.term || '12',
      devUpfront: String(tier.minDevelopmentPayment),
    }));
    if (planId) setIncludeQuoteInEmail(true);
  };

  const handleTermChange = (months: number) => {
    setFormData((prev) => ({ ...prev, term: String(months) }));
  };

  const clearQuote = () => {
    setIncludeQuoteInEmail(false);
    setFormData((prev) => ({
      ...prev,
      tier: '',
      term: '',
      devUpfront: '',
      includeEmail: false,
      emailUsers: '',
      emailTier: '',
    }));
    navigate('/contact', { replace: true });
  };

  const sendingQuote = includeQuoteInEmail && activeQuote;

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="contact" path="/contact" />
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#086375] to-[#1dd3b0] opacity-90 backdrop-blur-sm">
          <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {contactPage.heading}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {contactPage.subheadline}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a
                href={`tel:${brand.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <FaPhone aria-hidden />
                Call {brand.phone}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <FaEnvelope aria-hidden />
                {brand.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-py px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="text-[#1dd3b0] text-2xl"
                >
                  <FaPhone />
                </motion.div>
                <div>
                  <h3 className="font-bold text-[#086375]">Phone</h3>
                  <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-[#1dd3b0] transition-colors">
                    {brand.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="text-[#1dd3b0] text-2xl"
                >
                  <FaMapMarkerAlt />
                </motion.div>
                <div>
                  <h3 className="font-bold text-[#086375]">Address</h3>
                  <p className="text-gray-600">{brand.address}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="text-[#1dd3b0] text-2xl"
                >
                  <FaEnvelope />
                </motion.div>
                <div>
                  <h3 className="font-bold text-[#086375]">Email</h3>
                  <a href={`mailto:${brand.email}`} className="text-gray-600 hover:text-[#1dd3b0] transition-colors">
                    {brand.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form and Map Section */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg bg-gradient-to-br from-white to-[#b2ff9e]/10"
            >
              <h2 className="text-2xl font-bold text-[#3c1642] mb-2">{contactPage.formHeading}</h2>
              <p className="text-sm text-gray-600 mb-6">
                {contactPage.formQuoteHint}{' '}
                <Link to="/pricing" className="text-[#086375] font-semibold hover:text-[#1dd3b0]">
                  {contactPage.pricingLinkLabel}
                </Link>
                .
              </p>

              <ContactQuoteSection
                fields={{
                  tier: formData.tier,
                  term: formData.term,
                  devUpfront: formData.devUpfront,
                  includeEmail: formData.includeEmail,
                  emailUsers: formData.emailUsers,
                  emailTier: formData.emailTier,
                }}
                activeQuote={activeQuote}
                includeInEmail={includeQuoteInEmail}
                onIncludeChange={setIncludeQuoteInEmail}
                onChange={handleChange}
                onPlanChange={handlePlanChange}
                onTermChange={handleTermChange}
                onClear={clearQuote}
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="_honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-200 ${
                      formData.name ? 'text-xs -top-2 bg-white px-1' : 'top-3'
                    } text-gray-500`}
                  >
                    Full Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                    required
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 ${
                      formData.email ? 'text-xs -top-2 bg-white px-1' : 'top-3'
                    } text-gray-500`}
                  >
                    Email *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-200 ${
                      formData.phone ? 'text-xs -top-2 bg-white px-1' : 'top-3'
                    } text-gray-500`}
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                    required={!sendingQuote}
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-200 ${
                      formData.message ? 'text-xs -top-2 bg-white px-1' : 'top-3'
                    } text-gray-500`}
                  >
                    {sendingQuote ? 'Additional message (optional)' : 'Message *'}
                  </label>
                </div>

                {submitStatus === 'success' && formMessage && (
                  <div className="text-green-600 text-sm">{formMessage}</div>
                )}
                {submitStatus === 'error' && formMessage && (
                  <div className="text-red-600 text-sm">{formMessage}</div>
                )}
                {submitStatus === 'idle' && formMessage && (
                  <div className="text-amber-700 text-sm">{formMessage}</div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1dd3b0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#affc41] transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : sendingQuote ? 'Send quote & message' : 'Send message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                title="Map showing Appdoers office location in Ashburton, New Zealand"
                src="https://maps.google.com/maps?q=49+Braebrook+Drive,+Netherby,+Ashburton+7700&hl=en&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[400px]"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactCTA;