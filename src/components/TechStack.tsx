import React from 'react';
import { clientBenefits } from '../content/siteContent';
import { MotionReveal } from './AnimateIn';

const TechStack: React.FC = () => {
  const track = [...clientBenefits, ...clientBenefits];

  return (
    <section className="section-py-tight bg-[#3c1642] overflow-hidden border-y border-white/10" aria-label="Why clients choose us">
      <div className="container mx-auto px-4 mb-5">
        <MotionReveal className="text-center">
          <h2 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
            Why clients choose us
          </h2>
          <p className="text-white/75 text-sm mt-2 max-w-xl mx-auto">
            Built for New Zealand clients.
          </p>
        </MotionReveal>
      </div>
      <div className="relative overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee gap-4 px-2">
          {track.map((benefit, index) => (
            <span
              key={`${benefit}-${index}`}
              className="text-white text-sm md:text-base font-medium px-5 py-2.5 rounded-full border border-white/25 bg-white/10 whitespace-nowrap hover:bg-white/20 hover:border-white/40 transition-colors duration-300"
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
