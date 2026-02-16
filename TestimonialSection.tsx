
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Shield } from 'lucide-react';
import { TESTIMONIALS } from './constants';

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const maxIndex = TESTIMONIALS.length - itemsPerPage;

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + itemsPerPage));
  };

  const visibleTestimonials = TESTIMONIALS.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-12 lg:py-24 bg-[#030014]/50">
      <div className="max-w-[95%] lg:max-w-[85%] 2xl:max-w-[80%] mx-auto px-4">
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-6">
          <div className="text-left">
            <span className="text-[10px] md:text-xs font-bold text-[#00f2fe] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 block">Feedback</span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1] md:leading-[0.9]">CLIENT <br /><span className="gradient-text">INSIGHTS</span></h2>
            <p className="text-sm md:text-xl text-gray-400 mt-4 max-w-xl font-medium">Trusted by leading enterprises and large organizations globally.</p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-4 md:p-6 rounded-full border border-white/10 bg-white/5 transition-all flex items-center justify-center ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#00f2fe] hover:text-[#030014] hover:border-[#00f2fe]'}`}
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`p-4 md:p-6 rounded-full border border-white/10 bg-white/5 transition-all flex items-center justify-center ${currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#00f2fe] hover:text-[#030014] hover:border-[#00f2fe]'}`}
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Testimonials Grid with Smooth Transition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 overflow-hidden relative min-h-[300px]">
          {visibleTestimonials.map((t, i) => (
            <div 
              key={`${currentIndex}-${i}`} 
              className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[4rem] relative overflow-hidden group hover:bg-white/5 transition-all duration-700 animate-slideUp"
            >
              <div className="absolute top-0 right-0 p-6 md:p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Shield className="w-24 h-24 md:w-32 md:h-32 text-white" />
              </div>
              <p className="text-base md:text-2xl text-gray-200 mb-6 md:mb-10 italic leading-relaxed font-semibold">"{t.content}"</p>
              <div className="flex items-center gap-4 md:gap-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-[2rem] grayscale group-hover:grayscale-0 transition-all object-cover border-2 border-white/10" />
                <div>
                  <h4 className="text-base md:text-2xl font-black text-white">{t.name}</h4>
                  <p className="text-[10px] md:text-sm text-[#00f2fe] uppercase font-black tracking-[0.15em] md:tracking-[0.2em] mt-1 md:mt-2">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
