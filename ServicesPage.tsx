
import React, { useEffect } from 'react';
import { SERVICES } from './constants';
import { ServiceCard } from './ServiceCard';

export const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Header Section */}
      <div className="pt-40 pb-20 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#2F80ED 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <div className="flex justify-center items-center gap-3">
            <span className="w-10 h-[2px] bg-[#2F80ED]"></span>
            <span className="text-[14px] font-bold text-[#2F80ED] uppercase tracking-widest font-inter">Full Portfolio</span>
            <span className="w-10 h-[2px] bg-[#2F80ED]"></span>
          </div>
          <h1 className="text-[42px] md:text-[64px] font-bold text-white font-montserrat uppercase tracking-tight leading-tight">
            OUR <span className="text-[#2F80ED]">SECURITY</span> SOLUTIONS
          </h1>
          <p className="text-[18px] text-white/60 font-inter max-w-2xl mx-auto">
            From physical perimeter protection to advanced digital integration, we offer 15 comprehensive safety ecosystems for any scale of operation.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="pb-32 max-w-7xl mx-auto px-6">
        <div className="bg-[#2F80ED] rounded-[24px] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-[32px] font-bold font-montserrat uppercase">Ready to upgrade your security?</h2>
            <p className="text-[18px] font-inter opacity-90 max-w-xl mx-auto">
              Our engineering team is ready to design a custom solution tailored to your facility's unique requirements.
            </p>
            <div className="pt-4">
              <a href="/#contact" className="inline-block bg-white text-[#2F80ED] px-12 py-5 rounded-[8px] font-bold text-[16px] uppercase tracking-widest hover:bg-[#0B1F3A] hover:text-white transition-all shadow-xl font-montserrat">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
