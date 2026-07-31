import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import HeroWebsiteVisual from './HeroWebsiteVisual';
import { hero } from '../content/siteContent';
import { heroItem, heroStagger } from '../utils/motionPresets';

const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-visible">
      <div className="absolute inset-0 overflow-x-hidden bg-gradient-to-r from-[#3c1642] via-[#086375] to-[#1dd3b0] animate-gradient bg-[length:200%_200%]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div
          className="hero-blob hero-blob-a w-64 h-64 bg-[#affc41] top-[12%] right-[8%]"
          aria-hidden
        />
        <div
          className="hero-blob hero-blob-b w-80 h-80 bg-[#1dd3b0] bottom-[8%] left-[4%]"
          aria-hidden
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <motion.div
            className="text-white space-y-6 lg:space-y-8"
            initial={prefersReducedMotion ? false : 'hidden'}
            animate="visible"
            variants={heroStagger}
          >
            <motion.h1
              variants={heroItem}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-sm"
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-xl"
            >
              {hero.subheadline}
            </motion.p>
            <motion.div
              variants={heroItem}
              className="flex flex-col sm:flex-row gap-4 sm:items-center pt-2"
            >
              <Link
                to="/contact"
                className="bg-[#affc41] text-[#3c1642] px-8 py-3.5 rounded-full hover:bg-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl"
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
            </motion.div>
            <motion.div variants={heroItem}>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-[#affc41] transition-colors border-t border-white/20 pt-6 mt-2"
              >
                Featured builds: ashburtonbaptist.co.nz · motoculture.co.nz · everybodyplaying.com
                <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="hidden md:flex min-h-[420px] lg:min-h-[500px] xl:min-h-[580px] flex-1 items-center justify-center overflow-visible">
            <HeroWebsiteVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
