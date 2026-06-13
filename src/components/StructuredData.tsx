import { useEffect } from 'react';
import { brand, portfolio, pricingFaq, products } from '../content/siteContent';
import { breadcrumbListSchema, getBreadcrumbs } from '../config/pageSeo';

type StructuredDataProps = {
  type: 'home' | 'faq' | 'work' | 'services' | 'about' | 'contact' | 'product';
  path?: string;
  productSlug?: string;
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
    addressRegion: 'Canterbury',
    postalCode: '7700',
    addressCountry: 'NZ',
  },
  areaServed: [
    { '@type': 'Country', name: 'New Zealand' },
    { '@type': 'State', name: 'Canterbury' },
    { '@type': 'State', name: 'Taranaki' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: brand.phone,
    email: brand.email,
    contactType: 'customer service',
    areaServed: 'NZ',
    availableLanguage: ['English'],
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

function withBreadcrumbs(path: string, graph: Record<string, unknown>[]) {
  const crumbs = getBreadcrumbs(path);
  if (crumbs.length > 1) {
    graph.push(breadcrumbListSchema(crumbs, brand.siteUrl));
  }
  return graph;
}

function buildPayload(type: StructuredDataProps['type'], path?: string, productSlug?: string) {
  if (type === 'faq') {
    const graph = withBreadcrumbs('/pricing', [
      organizationSchema,
      {
        '@type': 'FAQPage',
        '@id': `${brand.siteUrl}/pricing#faq`,
        isPartOf: { '@id': `${brand.siteUrl}/#website` },
        mainEntity: pricingFaq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ]);
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  if (type === 'work') {
    return {
      '@context': 'https://schema.org',
      '@graph': withBreadcrumbs('/work', [
        organizationSchema,
        {
          '@type': 'CollectionPage',
          '@id': `${brand.siteUrl}/work#webpage`,
          name: 'Our Work | Appdoers',
          url: `${brand.siteUrl}/work`,
          description:
            'Selected client websites built by Appdoers for New Zealand churches, schools, and organisations.',
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
      ]),
    };
  }

  if (type === 'services') {
    return {
      '@context': 'https://schema.org',
      '@graph': withBreadcrumbs('/services', [
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
      ]),
    };
  }

  if (type === 'about') {
    return {
      '@context': 'https://schema.org',
      '@graph': withBreadcrumbs('/about', [
        organizationSchema,
        {
          '@type': 'AboutPage',
          '@id': `${brand.siteUrl}/about#webpage`,
          name: 'About Appdoers',
          url: `${brand.siteUrl}/about`,
          description:
            'Appdoers Limited is a New Zealand website company helping businesses, churches, and organisations get online.',
          isPartOf: { '@id': `${brand.siteUrl}/#website` },
          about: { '@id': `${brand.siteUrl}/#organization` },
        },
      ]),
    };
  }

  if (type === 'contact') {
    return {
      '@context': 'https://schema.org',
      '@graph': withBreadcrumbs('/contact', [
        organizationSchema,
        {
          '@type': 'ContactPage',
          '@id': `${brand.siteUrl}/contact#webpage`,
          name: 'Contact Appdoers',
          url: `${brand.siteUrl}/contact`,
          description: 'Contact Appdoers for website quotes, enquiries, and support in New Zealand.',
          isPartOf: { '@id': `${brand.siteUrl}/#website` },
        },
      ]),
    };
  }

  if (type === 'product' && productSlug) {
    const product = products.find((p) => p.slug === productSlug);
    if (!product) {
      return { '@context': 'https://schema.org', '@graph': [organizationSchema, websiteSchema] };
    }
    return {
      '@context': 'https://schema.org',
      '@graph': withBreadcrumbs(product.href, [
        organizationSchema,
        {
          '@type': 'Service',
          '@id': `${brand.siteUrl}${product.href}#service`,
          name: product.title,
          description: product.summary,
          url: `${brand.siteUrl}${product.href}`,
          provider: { '@id': `${brand.siteUrl}/#organization` },
          areaServed: 'New Zealand',
          serviceType: 'Website design and development',
        },
      ]),
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema],
  };
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, path, productSlug }) => {
  useEffect(() => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(buildPayload(type, path, productSlug));
    document.head.appendChild(script);

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [type, path, productSlug]);

  return null;
};

export default StructuredData;
