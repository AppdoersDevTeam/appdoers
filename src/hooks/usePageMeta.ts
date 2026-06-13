import { useEffect } from 'react';

const DEFAULT_TITLE = 'Appdoers | Custom Web Solutions & AI Integration';
const DEFAULT_DESCRIPTION =
  'Appdoers: custom web solutions and AI integration for New Zealand businesses. High-performance websites and digital systems.';

type PageMeta = {
  title: string;
  description?: string;
};

export const usePageMeta = ({ title, description }: PageMeta) => {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) {
      meta.setAttribute('content', description);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) {
        meta.setAttribute('content', DEFAULT_DESCRIPTION);
      }
    };
  }, [title, description]);
};
