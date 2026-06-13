import React from 'react';

import { FaBolt, FaImage, FaMobileAlt, FaShoppingCart, FaStar } from 'react-icons/fa';



type HeroLaptopMockupProps = {

  prefersReducedMotion: boolean;

};



const KEY_ROWS = [

  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  [1.3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.3],

  [5],

];



const BrowserScreen: React.FC = () => (

  <div className="hero-laptop-screen-content rounded-[4px] bg-white overflow-hidden border border-black/20">

    <div className="flex items-end gap-1 px-1.5 pt-1.5 pb-0 bg-[#e8e8ea] border-b border-gray-300">

      <div className="flex items-center gap-1 rounded-t-[4px] bg-white border border-b-0 border-gray-300 px-2 py-1 min-w-[100px]">

        <div className="w-2.5 h-2.5 rounded-[3px] bg-gradient-to-br from-[#086375] to-[#1dd3b0] shrink-0" />

        <span className="text-[8px] font-medium text-gray-600 truncate">yoursite.co.nz</span>

      </div>

    </div>

    <div className="flex items-center gap-1.5 px-2 py-1 bg-[#f5f5f7] border-b border-gray-200">

      <div className="flex-1 flex items-center gap-1 rounded-[4px] bg-white px-1.5 py-0.5 text-[8px] text-gray-500 border border-gray-200">

        <span className="text-[#1dd3b0]">🔒</span>

        <span className="truncate">yoursite.co.nz</span>

      </div>

    </div>

    <div className="bg-gradient-to-b from-white to-gray-50 p-2.5 min-h-[148px]">

      <div className="flex items-center justify-between mb-2 pb-1 border-b border-gray-100">

        <div className="flex items-center gap-1">

          <div className="w-4 h-4 rounded bg-gradient-to-br from-[#3c1642] to-[#086375] flex items-center justify-center">

            <span className="text-[6px] font-bold text-white">A</span>

          </div>

          <div className="h-1 w-8 rounded-full bg-[#3c1642]/80" />

        </div>

        <div className="flex gap-1.5">

          {['Home', 'About', 'Contact'].map((label) => (

            <span

              key={label}

              className={`text-[6px] font-medium ${label === 'Home' ? 'text-[#086375]' : 'text-gray-400'}`}

            >

              {label}

            </span>

          ))}

        </div>

      </div>

      <div className="grid grid-cols-5 gap-1.5 mb-2">

        <div className="col-span-3 rounded-md bg-gradient-to-br from-[#3c1642] via-[#086375] to-[#1dd3b0] p-2 text-white">

          <div className="h-1 w-full rounded-full bg-white/90 mb-1" />

          <span className="inline-block rounded-full bg-[#affc41] px-1.5 py-px text-[5px] font-bold text-[#3c1642]">

            Get started

          </span>

        </div>

        <div className="col-span-2 rounded-md bg-gray-200 flex items-center justify-center">

          <FaImage className="text-gray-400 text-sm opacity-50" />

        </div>

      </div>

      <div className="grid grid-cols-3 gap-1 mb-2">

        {[

          { icon: FaMobileAlt, label: 'Mobile', color: 'from-[#086375] to-[#1dd3b0]' },

          { icon: FaShoppingCart, label: 'Shop', color: 'from-[#3c1642] to-[#086375]' },

          { icon: FaBolt, label: 'Fast', color: 'from-[#1dd3b0] to-[#affc41]' },

        ].map(({ icon: Icon, label, color }) => (

          <div key={label} className={`rounded bg-gradient-to-br ${color} p-1 text-center`}>

            <Icon className="text-white text-[8px] mx-auto" />

            <div className="text-[5px] font-semibold text-white/90">{label}</div>

          </div>

        ))}

      </div>

      <div className="flex items-center gap-1 rounded bg-[#f0fdf4] border border-[#b2ff9e]/50 px-1.5 py-1">

        <div className="flex text-[#febc2e] text-[5px]">

          {[1, 2, 3, 4, 5].map((s) => (

            <FaStar key={s} />

          ))}

        </div>

        <div className="flex-1 h-0.5 rounded-full bg-gray-300" />

      </div>

    </div>

  </div>

);



const HeroLaptopMockup: React.FC<HeroLaptopMockupProps> = ({ prefersReducedMotion }) => {

  return (

    <div className="hero-laptop-root relative w-full max-w-[480px] mx-auto">

      <div

        className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[105%] h-[68%] rounded-[2rem] bg-white/15 blur-2xl pointer-events-none"

        aria-hidden

      />



      <div

        className={`hero-laptop-assembly ${prefersReducedMotion ? 'hero-laptop-assembly-static' : 'hero-laptop-assembly-animated'}`}

      >

        <div className="hero-laptop-lid">

          <div className="hero-laptop-bezel">

            <div className="hero-laptop-bezel-top" aria-hidden />

            <div className="flex justify-center mb-1.5">

              <div className="w-2 h-2 rounded-full bg-[#1c1c1e] ring-1 ring-[#8e8e93]" />

            </div>

            <BrowserScreen />

          </div>

          <div className="hero-laptop-lid-chin" aria-hidden />

        </div>



        <div className="hero-laptop-hinge" aria-hidden>

          <div className="hero-laptop-hinge-bar" />

        </div>



        <div className="hero-laptop-base">

          <div className="hero-laptop-deck">

            <div className="hero-laptop-deck-edge hero-laptop-deck-edge-left" aria-hidden />

            <div className="hero-laptop-deck-edge hero-laptop-deck-edge-right" aria-hidden />

            <div className="space-y-[4px]">

              {KEY_ROWS.map((row, rowIndex) => (

                <div key={rowIndex} className="flex gap-[3px]">

                  {row.map((weight, keyIndex) => (

                    <div

                      key={keyIndex}

                      className="h-[9px] rounded-[2px] bg-gradient-to-b from-[#8e8e93] to-[#48484a] border border-[#3a3a3c] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"

                      style={{ flex: weight }}

                    />

                  ))}

                </div>

              ))}

            </div>

            <div className="mt-3.5 mx-auto w-[38%] h-[26px] rounded-md bg-gradient-to-b from-[#636366] to-[#353537] border border-[#2c2c2e] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />

          </div>

          <div className="hero-laptop-base-lip" aria-hidden />

        </div>

      </div>



      <div className="hero-laptop-ground-shadow" aria-hidden />

    </div>

  );

};



export default HeroLaptopMockup;


