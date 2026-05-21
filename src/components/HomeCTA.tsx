import React from 'react';
import { Link } from 'react-router-dom';
import { homeCta } from '../content/siteContent';

const HomeCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#3c1642] via-[#086375] to-[#1dd3b0]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{homeCta.headline}</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">{homeCta.subheadline}</p>
        <Link
          to="/contact"
          className="inline-block bg-[#affc41] text-[#3c1642] font-semibold px-10 py-4 rounded-full text-lg hover:bg-white transition-colors shadow-lg"
        >
          {homeCta.cta}
        </Link>
      </div>
    </section>
  );
};

export default HomeCTA;
