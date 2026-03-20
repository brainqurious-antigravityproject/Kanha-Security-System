
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SERVICES } from '../constants/constants';
import { ServiceCard } from '../components/ServiceCard';

export const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Header Section */}
      <div className="bg-[#0B1F3A] pt-32 pb-20 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#257995 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <nav className="flex justify-center items-center gap-x-2 text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-white/40 mb-8 md:mb-12 font-inter">
            <Link to="/" className="hover:text-[#257995] transition-colors">Home</Link>
            <ChevronRight size={12} className="md:size-[14px]" />
            <span className="text-[#257995]">Services</span>
          </nav>

          <div className="flex justify-center items-center gap-3">
            <span className="w-10 h-[2px] bg-[#257995]"></span>
            <span className="text-[14px] font-bold text-[#257995] uppercase tracking-widest font-inter">Full Portfolio</span>
            <span className="w-10 h-[2px] bg-[#257995]"></span>
          </div>
          <h1 className="text-[42px] md:text-[64px] font-bold text-white font-montserrat uppercase tracking-tight leading-tight">
            OUR <span className="text-[#257995]">SECURITY</span> SOLUTIONS
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
        <div className="bg-[#257995] rounded-[24px] p-6 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-[30px] font-bold font-montserrat uppercase">Ready to upgrade your security?</h2>
            <p className="text-[18px] font-inter opacity-90 max-w-xl mx-auto">
              Our engineering team is ready to design a custom solution tailored to your facility's unique requirements.
            </p>
            <div className="pt-4">
              <Link to="/contact" className="inline-block bg-white text-[#257995] px-10 py-3.5 rounded-[8px] font-bold text-[16px] uppercase tracking-widest hover:bg-[#0B1F3A] hover:text-white transition-all shadow-xl font-montserrat">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
