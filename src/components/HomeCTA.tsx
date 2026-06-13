import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { brand, homeCta } from '../content/siteContent';
import { MotionReveal } from './AnimateIn';

const HomeCTA: React.FC = () => {
  const phoneHref = `tel:${brand.phone.replace(/\s/g, '')}`;

  return (
    <section className="relative section-py-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#3c1642] via-[#086375] to-[#1dd3b0] animate-gradient bg-[length:200%_200%]" />
      <div
        className="hero-blob hero-blob-a w-48 h-48 bg-[#affc41] top-[20%] left-[10%] opacity-30"
        aria-hidden
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <MotionReveal variant="scaleIn">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{homeCta.headline}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">{homeCta.subheadline}</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <FaPhone aria-hidden />
              Call {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <FaEnvelope aria-hidden />
              Email us
            </a>
            <Link
              to="/contact"
              className="inline-block bg-[#affc41] text-[#3c1642] font-semibold px-10 py-3 rounded-full text-lg hover:bg-white hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {homeCta.cta}
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default HomeCTA;
