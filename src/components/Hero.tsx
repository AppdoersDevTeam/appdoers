import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import DigitalServicesIllustration from './DigitalServicesIllustration';
import { hero } from '../content/siteContent';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#3c1642] via-[#086375] to-[#1dd3b0] animate-gradient">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-sm">
              {hero.headline}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-xl">
              {hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center pt-2">
              <Link
                to="/contact"
                className="bg-[#affc41] text-[#3c1642] px-8 py-3.5 rounded-full hover:bg-white transition-colors duration-300 font-semibold text-center shadow-lg"
              >
                {hero.primaryCta}
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center text-white hover:text-[#affc41] transition-colors duration-300 group font-medium"
              >
                {hero.secondaryCta}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <a
              href={hero.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-[#affc41] transition-colors border-t border-white/20 pt-6 mt-2"
            >
              <FaExternalLinkAlt className="text-xs" />
              Featured build: jornadadeinsights.com
            </a>
          </div>

          <div className="hidden lg:block h-[420px] xl:h-[500px]">
            <DigitalServicesIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
