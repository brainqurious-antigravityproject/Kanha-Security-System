
import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from './constants';

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = HERO_SLIDES.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((curr) => (curr + 1) % slideCount);
    }, 6000);
    return () => clearInterval(timer);
  }, [slideCount]);

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section 
      id="home" 
      className="relative min-h-[700px] h-screen w-full bg-[#0B1F3A] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-30"
          style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-[#0B1F3A]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center pb-24">
        <div className="max-w-5xl space-y-8">
          <div className="flex justify-center">
            <span className="text-[#2F80ED] text-[11px] md:text-[16px] font-bold tracking-[0.3em] uppercase font-inter border-2 border-dotted border-[#2F80ED]/40 px-6 py-2 rounded-full whitespace-nowrap animate-in fade-in slide-in-from-bottom-4 duration-700">
              {currentSlide.tagline}
            </span>
          </div>
          
          <h1 className="text-[40px] md:text-6xl lg:text-[84px] leading-[1.1] font-bold text-white font-montserrat uppercase tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            {currentSlide.title} <br className="hidden md:block" />
            <span className="text-[#2F80ED]">{currentSlide.highlight}</span>
          </h1>
          
          <p className="text-[16px] md:text-[20px] text-white/80 leading-relaxed font-inter max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {currentSlide.description}
          </p>

          <div className="pt-10 flex justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <button className="bg-[#2F80ED] text-white px-12 py-5 rounded-[6px] text-[15px] font-bold uppercase tracking-widest font-montserrat hover:brightness-110 transition-all shadow-xl hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>
        </div>

        {/* Positioned further down to create a distinct gap from the content above */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 transition-all duration-500 rounded-full ${
                activeSlide === idx 
                  ? 'w-16 bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)]' 
                  : 'w-6 bg-white/20 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
