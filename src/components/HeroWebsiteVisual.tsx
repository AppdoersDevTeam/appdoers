import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaBolt,
  FaCheck,
  FaGlobe,
  FaHome,
  FaImage,
  FaSearch,
  FaShoppingCart,
} from 'react-icons/fa';
import HeroLaptopMockup from './HeroLaptopMockup';

const HeroWebsiteVisual: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const phoneMotion = prefersReducedMotion
    ? { opacity: 1, y: 0, rotate: 5 }
    : { opacity: 1, y: [0, -7, 0], rotate: [5, 3, 5] };

  return (
    <div className="relative w-full h-full flex items-center justify-center px-2 overflow-visible" aria-hidden>
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[90%] h-[75%] rounded-full bg-[#affc41]/20 blur-3xl" />
        <div className="absolute w-[65%] h-[50%] rounded-full bg-[#1dd3b0]/15 blur-2xl translate-x-6 translate-y-4" />
      </div>

      {!prefersReducedMotion && (
        <motion.div
          className="absolute w-[94%] h-[94%] rounded-full border border-white/10 border-dashed"
          animate={{ rotate: 360 }}
          transition={{ duration: 52, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Floating badges */}
      <motion.div
        className="absolute top-[4%] right-[0%] z-30 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-2 shadow-xl shadow-black/25"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={
          prefersReducedMotion
            ? { delay: 0.5, duration: 0.5 }
            : {
                opacity: { delay: 0.5, duration: 0.5 },
                scale: { delay: 0.5, duration: 0.5 },
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
              }
        }
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#affc41] text-[#3c1642]">
          <FaBolt className="text-xs" />
        </span>
        <div>
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#086375]">Loads fast</p>
          <p className="text-xs font-bold text-[#3c1642] leading-tight">&lt; 1 second</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[14%] left-[-1%] z-30 flex items-center gap-2 rounded-xl bg-[#3c1642]/92 backdrop-blur-sm px-3 py-2 shadow-xl border border-white/10"
        initial={{ opacity: 0, x: -12 }}
        animate={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0, y: [0, 6, 0] }}
        transition={
          prefersReducedMotion
            ? { delay: 0.65, duration: 0.5 }
            : {
                opacity: { delay: 0.65, duration: 0.5 },
                x: { delay: 0.65, duration: 0.5 },
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 },
              }
        }
      >
        <FaCheck className="text-[#affc41] text-xs shrink-0" />
        <p className="text-[10px] font-semibold text-white whitespace-nowrap">Hosted &amp; looked after</p>
      </motion.div>

      <motion.div
        className="absolute top-[36%] left-[-3%] z-30 hidden xl:flex items-center gap-1.5 rounded-full bg-white/12 backdrop-blur-md border border-white/20 px-2.5 py-1.5"
        initial={{ opacity: 0 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: [0, 6, 0] }}
        transition={
          prefersReducedMotion
            ? { delay: 0.8 }
            : { opacity: { delay: 0.8 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 } }
        }
      >
        <FaGlobe className="text-[#affc41] text-[10px]" />
        <span className="text-[10px] font-semibold text-white">NZ-built</span>
      </motion.div>

      <div className="hero-3d-stage relative z-0 w-full flex items-center justify-center overflow-visible">
        <div className="relative w-full flex items-center justify-center hero-laptop-stage-wrap">
          <HeroLaptopMockup prefersReducedMotion={!!prefersReducedMotion} />
        </div>
      </div>

      {/* Phone — flat layer above the 3D laptop (z-index does not work inside preserve-3d) */}
      <div className="hero-phone-front absolute bottom-[2%] right-[-1%] w-[30%] max-w-[118px]">
        <motion.div
          className="relative w-full"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20, rotate: 8 }}
          animate={phoneMotion}
          transition={
            prefersReducedMotion
              ? { delay: 0.55, duration: 0.5 }
              : {
                  opacity: { delay: 0.55, duration: 0.5 },
                  y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
                  rotate: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
                }
          }
        >
        <div className="relative rounded-[1.35rem] border-[3px] border-gray-800 bg-gray-900 p-[5px] shadow-2xl shadow-black/50">
          {/* Side button */}
          <div className="absolute -right-[5px] top-14 w-[3px] h-8 rounded-r-sm bg-gray-700" />

          <div className="rounded-[1.1rem] overflow-hidden bg-white aspect-[9/18.5] flex flex-col">
            {/* Status bar + notch */}
            <div className="relative bg-gray-900 px-3 pt-1 pb-0.5 shrink-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-gray-900 rounded-b-xl z-10" />
              <div className="flex items-center justify-between text-[7px] text-white font-medium relative z-0">
                <span>9:41</span>
                <div className="flex items-center gap-1 opacity-90">
                  <span className="text-[6px]">●●●</span>
                  <span className="text-[6px]">WiFi</span>
                  <div className="w-3 h-1.5 border border-white/80 rounded-sm relative">
                    <div className="absolute inset-0.5 left-0.5 right-1 bg-white rounded-[1px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile site */}
            <div className="flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50 overflow-hidden">
              {/* Mobile nav */}
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-gray-100 bg-white">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-[#3c1642] to-[#086375]" />
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-3 h-0.5 rounded-full bg-gray-300" />
                  ))}
                </div>
              </div>

              {/* Mobile hero */}
              <div className="mx-2 mt-2 rounded-lg bg-gradient-to-br from-[#3c1642] via-[#086375] to-[#1dd3b0] p-2 shadow-sm">
                <div className="h-1 w-3/4 rounded-full bg-white/90 mb-1" />
                <div className="h-0.5 w-1/2 rounded-full bg-white/50 mb-2" />
                <div className="inline-block rounded-full bg-[#affc41] px-2 py-0.5">
                  <span className="text-[5px] font-bold text-[#3c1642]">Book now</span>
                </div>
              </div>

              {/* Image block */}
              <div className="mx-2 mt-1.5 h-10 rounded-md bg-gray-200 flex items-center justify-center border border-gray-200">
                <FaImage className="text-gray-400 text-xs opacity-50" />
              </div>

              {/* Two cards */}
              <div className="grid grid-cols-2 gap-1 mx-2 mt-1.5">
                <div className="rounded-md bg-[#f0fdf4] border border-[#b2ff9e]/50 p-1.5">
                  <FaShoppingCart className="text-[#086375] text-[8px] mb-0.5" />
                  <div className="h-0.5 w-full rounded-full bg-gray-300 mb-0.5" />
                  <div className="h-0.5 w-2/3 rounded-full bg-gray-200" />
                </div>
                <div className="rounded-md bg-gray-100 border border-gray-200 p-1.5">
                  <FaBolt className="text-[#1dd3b0] text-[8px] mb-0.5" />
                  <div className="h-0.5 w-full rounded-full bg-gray-300 mb-0.5" />
                  <div className="h-0.5 w-1/2 rounded-full bg-gray-200" />
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Bottom nav */}
              <div className="flex items-center justify-around py-1.5 px-2 border-t border-gray-200 bg-white">
                {[
                  { icon: FaHome, active: true },
                  { icon: FaSearch, active: false },
                  { icon: FaShoppingCart, active: false },
                ].map(({ icon: Icon, active }, i) => (
                  <Icon
                    key={i}
                    className={`text-[9px] ${active ? 'text-[#086375]' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              {/* Home indicator */}
              <div className="flex justify-center pb-1 pt-0.5 bg-white">
                <div className="w-10 h-0.5 rounded-full bg-gray-800/80" />
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroWebsiteVisual;
