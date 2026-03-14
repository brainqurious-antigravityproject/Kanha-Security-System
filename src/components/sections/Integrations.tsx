
import React from 'react';
import { PARTNER_LOGOS } from '../../constants/constants';

export const Integrations = () => {
  const line1 = PARTNER_LOGOS.slice(0, 12);
  const line2 = PARTNER_LOGOS.slice(12, 24);

  return (
    <section className="py-24 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center space-y-4">
          <span className="text-[14px] font-bold text-[#257995] uppercase tracking-widest block font-inter">Ecosystem</span>
          <h2 className="text-[36px] font-semibold text-[#0B1F3A] font-montserrat uppercase">Seamless Integrations</h2>
          <p className="text-[17px] text-[#6B7280] max-w-2xl mx-auto font-inter">
            Our systems connect with industry-leading technologies to ensure a robust security network.
          </p>
        </div>
      </div>
      
      <div className="space-y-8 marquee-container">
        {/* Line 1: Left to Right */}
        <div className="w-screen relative left-1/2 -ml-[50vw] overflow-hidden">
          <div className="animate-marquee-ltr flex gap-8 items-center">
            {[...line1, ...line1, ...line1].map((name, i) => (
              <div key={i} className="bg-white px-10 py-6 rounded-[12px] flex items-center justify-center border border-gray-100 shadow-sm min-w-[200px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-[#257995] transition-all duration-300 cursor-default">
                <span className="text-[15px] font-bold text-[#0B1F3A] font-montserrat uppercase tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Line 2: Right to Left */}
        <div className="w-screen relative left-1/2 -ml-[50vw] overflow-hidden">
          <div className="animate-marquee-rtl flex gap-8 items-center">
            {[...line2, ...line2, ...line2].map((name, i) => (
              <div key={i} className="bg-white px-10 py-6 rounded-[12px] flex items-center justify-center border border-gray-100 shadow-sm min-w-[200px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-[#257995] transition-all duration-300 cursor-default">
                <span className="text-[15px] font-bold text-[#0B1F3A] font-montserrat uppercase tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};