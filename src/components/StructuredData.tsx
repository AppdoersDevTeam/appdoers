import { useEffect } from 'react';
import { brand, pricingFaq } from '../content/siteContent';

type StructuredDataProps = {
  type: 'home' | 'faq';
};

const SCRIPT_ID = 'appdoers-structured-data';

const StructuredData: React.FC<StructuredDataProps> = ({ type }) => {
  useEffect(() => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    const organization = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: brand.name,
      url: brand.siteUrl,
      email: brand.email,
      telephone: brand.phone,
      description: brand.metaDescription,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '49 Braebrook Drive, Netherby',
        addressLocality: 'Ashburton',
        postalCode: '7700',
        addressCountry: 'NZ',
      },
      areaServed: {
        '@type': 'Country',
        name: 'New Zealand',
      },
    };

    const payload =
      type === 'faq'
        ? {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: pricingFaq.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          }
        : organization;

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(payload);
    document.head.appendChild(script);

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [type]);

  return null;
};

export default StructuredData;
