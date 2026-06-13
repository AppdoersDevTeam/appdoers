import React from 'react';
import PageHero from './PageHero';
import { MotionReveal } from './AnimateIn';
import { usePageMeta } from '../hooks/usePageMeta';

type LegalSection = {
  heading: string;
  body: string;
};

type LegalPageProps = {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
  metaDescription: string;
  path: string;
};

const LegalPage: React.FC<LegalPageProps> = ({
  title,
  updated,
  intro,
  sections,
  metaDescription,
  path,
}) => {
  usePageMeta({
    title: `${title} | Appdoers`,
    description: metaDescription,
    path,
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Legal"
        title={title}
        subtitle={`Last updated ${updated}. Questions? Email contact@appdoers.co.nz.`}
        primaryCta={{ label: 'Contact Us', to: '/contact' }}
        secondaryCta={{ label: 'View Pricing', to: '/pricing' }}
      />

      <section className="section-py px-4">
        <div className="container mx-auto max-w-3xl">
          {intro && (
            <MotionReveal>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{intro}</p>
            </MotionReveal>
          )}
          <div className="space-y-8">
            {sections.map((section) => (
              <MotionReveal key={section.heading}>
                <article>
                  <h2 className="text-xl font-bold text-[#086375] mb-3">{section.heading}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.body}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
