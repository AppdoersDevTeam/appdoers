import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { heroItem, heroStagger } from '../utils/motionPresets';

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
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative pt-28 pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3c1642] via-[#086375] to-[#1dd3b0] animate-gradient bg-[length:200%_200%]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_55%)]" />
      <div
        className="hero-blob hero-blob-a w-56 h-56 bg-[#affc41] top-[10%] right-[5%]"
        aria-hidden
      />
      <div
        className="hero-blob hero-blob-b w-72 h-72 bg-white bottom-[5%] left-[8%] opacity-20"
        aria-hidden
      />
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          initial={prefersReducedMotion ? false : 'hidden'}
          animate="visible"
          variants={heroStagger}
        >
          {eyebrow && (
            <motion.p
              variants={heroItem}
              className="text-[#affc41] font-semibold uppercase tracking-wider text-sm mb-4"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={heroItem}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          <motion.p variants={heroItem} className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl">
            {subtitle}
          </motion.p>
          {(primaryCta || secondaryCta) && (
            <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="inline-block text-center bg-[#affc41] text-[#3c1642] font-semibold px-8 py-3.5 rounded-full hover:bg-white hover:scale-[1.03] transition-all duration-300 shadow-lg"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="inline-block text-center border-2 border-white/60 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
