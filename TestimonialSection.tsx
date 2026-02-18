import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from './constants';

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((c) => (c + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-32 bg-[#0B1F3A] text-white overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[2px] bg-[#2F80ED]"></span>
                <span className="text-[12px] font-bold text-[#2F80ED] uppercase tracking-[0.4em] font-inter">
                  Executive Endorsements
                </span>
              </div>
              <h2 className="text-[44px] md:text-[56px] font-bold font-montserrat uppercase leading-[1] tracking-tight">
                TRUSTED BY <br />
                <span className="text-white/40">THE BEST</span>
              </h2>
              <p className="text-[17px] text-white/50 font-inter max-w-sm leading-relaxed">
                Our commitment to precision has earned us the trust of industry leaders across India.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex flex-col font-montserrat">
                <span className="text-sm font-bold text-[#2F80ED] uppercase tracking-widest mb-1">Index</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{(currentIndex + 1).toString().padStart(2, '0')}</span>
                  <span className="text-lg text-white/20">/ {TESTIMONIALS.length.toString().padStart(2, '0')}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0B1F3A] transition-all duration-300 active:scale-95"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0B1F3A] transition-all duration-300 active:scale-95"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Testimonial Card (Slightly smaller) */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-start">
            <div 
              key={currentIndex} 
              className="bg-white rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative text-[#0B1F3A] animate-in fade-in slide-in-from-right-8 duration-500 border-t-4 border-[#2F80ED] max-w-2xl w-full"
            >
              {/* Refined Quote Watermark */}
              <div className="absolute top-6 right-8 opacity-[0.03]">
                <Quote size={100} strokeWidth={1} fill="currentColor" />
              </div>

              <div className="p-8 md:p-12 space-y-8">
                <div className="relative z-10">
                  <Quote size={28} className="text-[#2F80ED] mb-4 opacity-40" fill="currentColor" />
                  <p className="text-[18px] md:text-[20px] font-medium leading-[1.6] font-inter text-[#1F2937]">
                    {t.content}
                  </p>
                </div>

                <div className="flex items-center gap-5 pt-8 border-t border-gray-100 relative z-10">
                  <div className="relative">
                    <img 
                      src={t.avatar} 
                      alt={t.name}
                      className="w-16 h-16 object-cover rounded-2xl border-2 border-gray-50 shadow-sm"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[18px] font-bold font-montserrat uppercase tracking-tight">
                      {t.name}
                    </h4>
                    <p className="text-[#2F80ED] font-bold text-[12px] uppercase tracking-[0.2em] font-inter">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2F80ED]/20 blur-[100px] opacity-20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};