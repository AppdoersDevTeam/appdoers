import { useEffect } from 'react';
import { brand } from '../content/siteContent';

type PageMeta = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
};

const upsertMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

export const usePageMeta = ({ title, description, path = '', image }: PageMeta) => {
  useEffect(() => {
    const pageDescription = description ?? brand.metaDescription;
    const pageUrl = `${brand.siteUrl}${path}`;
    const pageImage = image ?? `${brand.siteUrl}/images/logo.png`;

    document.title = title;
    upsertMeta('name', 'description', pageDescription);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', pageDescription);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', pageUrl);
    upsertMeta('property', 'og:image', pageImage);
    upsertMeta('property', 'og:site_name', brand.name);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', pageDescription);
    upsertMeta('name', 'twitter:image', pageImage);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    return () => {
      document.title = brand.metaTitle;
      upsertMeta('name', 'description', brand.metaDescription);
      upsertMeta('property', 'og:title', brand.metaTitle);
      upsertMeta('property', 'og:description', brand.metaDescription);
      upsertMeta('property', 'og:url', brand.siteUrl);
      if (canonical) canonical.href = brand.siteUrl;
    };
  }, [title, description, path, image]);
};
