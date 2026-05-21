import React from 'react';
import { Link } from 'react-router-dom';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
};

const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3c1642] via-[#086375] to-[#1dd3b0]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_55%)]" />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        {eyebrow && (
          <p className="text-[#affc41] font-semibold uppercase tracking-wider text-sm mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl">{subtitle}</p>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCta && (
              <Link
                to={primaryCta.to}
                className="inline-block text-center bg-[#affc41] text-[#3c1642] font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-colors shadow-lg"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                className="inline-block text-center border-2 border-white/60 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
