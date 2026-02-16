
import React, { useState, useEffect, useRef } from 'react';
import { PARTNER_LOGOS, STATS } from './constants';

const LogoCarousel = () => (
  <div className="mb-10 md:mb-16 text-center w-full">
    <span className="text-sm md:text-base font-bold text-gray-500 tracking-[0.3em] md:tracking-[0.4em] uppercase mb-6 md:mb-8 block">Trusted By Leading Organizations</span>
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4 bg-white/[0.02] border-y border-white/5">
      <div className="animate-marquee-rtl flex gap-12 md:gap-20">
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((name, i) => (
          <span key={i} className="text-2xl sm:text-3xl md:text-5xl font-black text-white/10 hover:text-[#00f2fe]/40 transition-colors uppercase tracking-tighter whitespace-nowrap cursor-default px-4">
            {name}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const CountUpStat = ({ label, value, subLabel, isVisible }: { label: string, value: string, subLabel: string, isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = numericValue;
    if (start === end) {
      setCount(end);
      return;
    }
    let totalDuration = 2000;
    let increment = end / (totalDuration / 16);
    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div className="glass-card p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all group flex flex-col justify-between h-full">
      <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 md:mb-4 group-hover:text-[#00f2fe] transition-colors">{label}</div>
      <div className="text-3xl md:text-5xl lg:text-6xl font-black gradient-text mb-2 md:mb-4">
        {count}{suffix}
      </div>
      <div className="text-[11px] md:text-sm text-gray-400 leading-tight font-medium">{subLabel}</div>
    </div>
  );
};

export const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredStats = STATS.filter(s => s.label !== 'Integrations');

  return (
    <section ref={sectionRef} className="py-12 lg:py-24 relative mt-[-20px] md:mt-[-40px]">
      <div className="max-w-[95%] lg:max-w-[85%] 2xl:max-w-[80%] mx-auto px-4">
        <LogoCarousel />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10 mt-12 md:mt-16">
          {filteredStats.map((stat, i) => (
            <CountUpStat 
              key={i} 
              label={stat.label} 
              value={stat.value} 
              subLabel={stat.subLabel} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
