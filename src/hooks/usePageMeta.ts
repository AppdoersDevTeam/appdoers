import { useEffect } from 'react';
import { brand } from '../content/siteContent';

type PageMeta = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
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

const DEFAULT_OG_IMAGE = `${brand.siteUrl}/images/logo.png`;
const DEFAULT_OG_IMAGE_ALT = 'Appdoers — Websites & Online Tools for New Zealand';

export const usePageMeta = ({
  title,
  description,
  path = '',
  image,
  imageAlt,
  noindex = false,
}: PageMeta) => {
  useEffect(() => {
    const pageDescription = description ?? brand.metaDescription;
    const pageUrl = path ? `${brand.siteUrl}${path}` : brand.siteUrl;
    const pageImage = image ?? DEFAULT_OG_IMAGE;
    const pageImageAlt = imageAlt ?? DEFAULT_OG_IMAGE_ALT;

    document.title = title;
    upsertMeta('name', 'description', pageDescription);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', pageDescription);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', pageUrl);
    upsertMeta('property', 'og:image', pageImage);
    upsertMeta('property', 'og:image:alt', pageImageAlt);
    upsertMeta('property', 'og:locale', 'en_NZ');
    upsertMeta('property', 'og:site_name', brand.name);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', pageDescription);
    upsertMeta('name', 'twitter:image', pageImage);
    upsertMeta('name', 'twitter:image:alt', pageImageAlt);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    if (noindex) {
      canonical.remove();
    } else {
      canonical.href = pageUrl;
    }

    return () => {
      document.title = brand.metaTitle;
      upsertMeta('name', 'description', brand.metaDescription);
      upsertMeta('property', 'og:title', brand.metaTitle);
      upsertMeta('property', 'og:description', brand.metaDescription);
      upsertMeta('property', 'og:url', brand.siteUrl);
      upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE);
      upsertMeta('property', 'og:image:alt', DEFAULT_OG_IMAGE_ALT);
      upsertMeta('name', 'robots', 'index, follow');
      if (canonical && !canonical.isConnected) {
        document.head.appendChild(canonical);
      }
      if (canonical) canonical.href = brand.siteUrl;
    };
  }, [title, description, path, image, imageAlt, noindex]);
};
