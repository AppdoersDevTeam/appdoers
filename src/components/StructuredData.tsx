import { useEffect } from 'react';
import { brand, portfolio, pricingFaq, products } from '../content/siteContent';

type StructuredDataProps = {
  type: 'home' | 'faq' | 'work' | 'services';
};

const SCRIPT_ID = 'appdoers-structured-data';

const organizationSchema = {
  '@type': 'ProfessionalService',
  '@id': `${brand.siteUrl}/#organization`,
  name: brand.legalName,
  alternateName: brand.name,
  url: brand.siteUrl,
  logo: `${brand.siteUrl}/images/logo.png`,
  image: `${brand.siteUrl}/images/logo.png`,
  email: brand.email,
  telephone: brand.phone,
  description: brand.metaDescription,
  identifier: {
    '@type': 'PropertyValue',
    name: 'NZBN',
    value: brand.nzbn,
  },
  sameAs: [brand.social.linkedin],
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

const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${brand.siteUrl}/#website`,
  name: brand.name,
  url: brand.siteUrl,
  description: brand.metaDescription,
  inLanguage: 'en-NZ',
  publisher: { '@id': `${brand.siteUrl}/#organization` },
};

function buildPayload(type: StructuredDataProps['type']) {
  if (type === 'faq') {
    return {
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
    };
  }

  if (type === 'work') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'CollectionPage',
          '@id': `${brand.siteUrl}/work#webpage`,
          name: 'Our Work | Appdoers',
          url: `${brand.siteUrl}/work`,
          description: 'Selected client websites built by Appdoers for New Zealand organisations.',
          isPartOf: { '@id': `${brand.siteUrl}/#website` },
          about: { '@id': `${brand.siteUrl}/#organization` },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: portfolio.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: project.title,
              url: `${brand.siteUrl}/work#${project.slug}`,
            })),
          },
        },
      ],
    };
  }

  if (type === 'services') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'ItemList',
          '@id': `${brand.siteUrl}/services#offerings`,
          name: 'Appdoers website services',
          itemListElement: products.map((product, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Service',
              name: product.title,
              description: product.summary,
              url: `${brand.siteUrl}${product.href}`,
              provider: { '@id': `${brand.siteUrl}/#organization` },
              areaServed: 'New Zealand',
            },
          })),
        },
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema],
  };
}

const StructuredData: React.FC<StructuredDataProps> = ({ type }) => {
  useEffect(() => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(buildPayload(type));
    document.head.appendChild(script);

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [type]);

  return null;
};

export default StructuredData;
