
import React, { useState, useEffect, useRef } from 'react';
import { PARTNER_LOGOS, STATS } from './constants';

const CountingNumber = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  const suffix = value.replace(/[0-9.]/g, '');
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, numericValue]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA] overflow-hidden">
      <div className="w-full mb-16 md:mb-24 marquee-container">
        <h2 className="text-[13px] md:text-[15px] font-bold text-[#6B7280] tracking-[0.2em] uppercase text-center mb-8 md:mb-12 font-inter">Authorized Systems Partners</h2>
        <div className="w-screen relative left-1/2 -ml-[50vw] overflow-hidden py-4">
          <div className="animate-marquee-rtl flex gap-6 md:gap-10 items-center">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((name, i) => (
              <div key={i} className="px-6 py-2 md:px-10 md:py-4 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center min-w-max hover:border-[#257995] transition-colors cursor-default">
                <span className="text-[12px] md:text-[16px] font-bold text-[#0B1F3A] uppercase tracking-wider font-montserrat">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {STATS.filter(s => s.label !== 'Integrations').map((stat, i) => (
            <div key={i} className="bg-white p-6 md:p-10 rounded-[16px] shadow-sm border border-gray-100 text-center space-y-2 md:space-y-4 hover:border-[#257995] transition-all hover:shadow-md">
              <div className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-[#0B1F3A] font-montserrat leading-none">
                <CountingNumber value={stat.value} />
              </div>
              <h3 className="text-[12px] md:text-[16px] font-bold text-[#257995] uppercase tracking-wider font-montserrat">{stat.label}</h3>
              <p className="text-[13px] md:text-[15px] text-[#6B7280] leading-snug font-inter">{stat.subLabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
