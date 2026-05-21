import React from 'react';
import { techStack } from '../content/siteContent';

const TechStack: React.FC = () => {
  const track = [...techStack, ...techStack];

  return (
    <section className="py-14 bg-[#3c1642] overflow-hidden border-y border-white/10">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-white text-xl md:text-2xl font-semibold tracking-wide">
          Our Technology Ecosystem
        </h2>
      </div>
      <div className="relative overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee gap-4 px-2">
          {track.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="text-white text-sm md:text-base font-medium px-5 py-2.5 rounded-full border border-white/25 bg-white/10 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
