
import React from 'react';
import { PARTNER_LOGOS } from './constants';

export const Integrations = () => {
  const row1 = PARTNER_LOGOS.slice(0, Math.ceil(PARTNER_LOGOS.length / 2));
  const row2 = PARTNER_LOGOS.slice(Math.ceil(PARTNER_LOGOS.length / 2));

  return (
    <section className="py-12 lg:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#7000ff15_0%,_transparent_70%)] opacity-60"></div>
      <div className="max-w-full mx-auto text-center relative z-10">
        <div className="px-4">
          <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 block">Ecosystem</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 md:mb-8 leading-[1] md:leading-[0.9]">SMART <span className="gradient-text">INTEGRATIONS</span></h2>
          <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed font-medium">Integrate seamlessly with 100+ tools. We are authorized dealers for prestigious global brands.</p>
        </div>
        
        <div className="space-y-6 md:space-y-10">
          {/* Row 1: Left to Right */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="animate-marquee-ltr flex gap-4 md:gap-8">
              {[...row1, ...row1, ...row1, ...row1].map((name, i) => (
                <div key={i} className="glass-card px-6 md:px-10 py-4 md:py-6 rounded-full flex items-center justify-center grayscale hover:grayscale-0 transition-all group hover:scale-105 hover:bg-white/10 duration-500 border-white/5 whitespace-nowrap">
                  <span className="text-xs md:text-xl font-black text-white/30 group-hover:text-white uppercase tracking-tighter">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="relative w-full overflow-hidden py-2">
            <div className="animate-marquee-rtl flex gap-4 md:gap-8">
              {[...row2, ...row2, ...row2, ...row2].map((name, i) => (
                <div key={i} className="glass-card px-6 md:px-10 py-4 md:py-6 rounded-full flex items-center justify-center grayscale hover:grayscale-0 transition-all group hover:scale-105 hover:bg-white/10 duration-500 border-white/5 whitespace-nowrap">
                  <span className="text-xs md:text-xl font-black text-white/30 group-hover:text-white uppercase tracking-tighter">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
