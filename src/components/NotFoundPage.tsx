import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from './PageHero';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFoundPage: React.FC = () => {
  usePageMeta({
    title: 'Page Not Found | Appdoers',
    description: 'The page you are looking for does not exist. Browse Appdoers services, pricing, and work.',
    path: '/404',
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="404"
        title="Page not found"
        subtitle="That link may be outdated or mistyped. Head back home or contact us and we will help."
        primaryCta={{ label: 'Back to Home', to: '/' }}
        secondaryCta={{ label: 'Contact Us', to: '/contact' }}
      />

      <section className="section-py-sm px-4">
        <div className="container mx-auto max-w-2xl text-center text-gray-600">
          <p className="mb-6">
            Try our main pages:{' '}
            <Link to="/services" className="text-[#086375] font-semibold hover:text-[#1dd3b0]">
              Services
            </Link>
            ,{' '}
            <Link to="/pricing" className="text-[#086375] font-semibold hover:text-[#1dd3b0]">
              Pricing
            </Link>
            , or{' '}
            <Link to="/work" className="text-[#086375] font-semibold hover:text-[#1dd3b0]">
              Work
            </Link>
            .
          </p>
          <Link to="/" className="btn-primary inline-block">
            Go to homepage
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
