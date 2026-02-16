
import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock, Network, Building, Zap } from 'lucide-react';
import { HERO_SLIDES } from './constants';

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const slideCount = HERO_SLIDES.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((curr) => (curr + 1) % slideCount);
          return 0;
        }
        return prev + 0.4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [slideCount]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({ 
      x: (clientX / window.innerWidth - 0.5) * 20, 
      y: (clientY / window.innerHeight - 0.5) * 20 
    });
  };

  const handleManualSlide = (index: number) => {
    setActiveSlide(index);
    setProgress(0);
  };

  const currentSlide = HERO_SLIDES[activeSlide];
  const IconComponent = {
    Shield, Lock, Network, Building, Zap
  }[currentSlide.iconName] || Shield;

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen min-h-[600px] md:min-h-[700px] w-full overflow-hidden flex items-center justify-center pt-10 md:pt-20"
    >
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === idx ? 'opacity-70 md:opacity-75' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[4000ms] scale-110"
            style={{ 
              backgroundImage: `url(${slide.imageUrl})`,
              transform: activeSlide === idx ? 'scale(1.05) translate(' + mousePos.x * 0.5 + 'px, ' + mousePos.y * 0.5 + 'px)' : 'scale(1.15)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/70 via-[#030014]/50 to-[#030014]" />
        </div>
      ))}

      <div className="relative z-10 max-w-[95%] lg:max-w-[85%] 2xl:max-w-[80%] mx-auto px-4 w-full flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <div className="mt-[5px] mb-[5px] inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-[#00f2fe] uppercase tracking-[0.2em] md:tracking-[0.3em] backdrop-blur-md animate-fadeIn">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#00f2fe] animate-pulse"></span>
            {currentSlide.tagline}
          </div>
          
          <div key={currentSlide.id} className="mt-[5px] mb-[5px] space-y-2 md:space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1] md:leading-[0.9] text-white animate-slideUp">
              {currentSlide.title} <br />
              <span className="gradient-text">{currentSlide.highlight}</span>
            </h1>
            <p className="mt-[5px] mb-[5px] text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-slideUp delay-100 opacity-90 font-medium px-4">
              {currentSlide.description}
            </p>
          </div>

          <div className="mt-[5px] mb-[5px] flex flex-col items-center gap-4 md:gap-6 pt-2 md:pt-4">
            <button className="bg-[#00f2fe] text-[#030014] px-8 md:px-12 py-3 md:py-5 rounded-full text-base md:text-lg font-black hover:bg-white transition-all shadow-2xl shadow-cyan-500/20 uppercase tracking-widest">
              REQUEST A DEMO
            </button>
            <div className="mt-[5px] mb-[5px] flex items-center gap-2 md:gap-3 text-white">
               <div className="p-2 md:p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                 <IconComponent className="text-[#00f2fe] w-4 h-4 md:w-6 md:h-6" />
               </div>
               <span className="text-[9px] md:text-[10px] font-bold text-white/50 uppercase tracking-[0.15em] md:tracking-[0.2em]">Next-Gen Intelligence Enabled</span>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-[10px] grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 md:gap-4 justify-center items-center w-full max-w-6xl px-2">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleManualSlide(idx)}
              className={`md:flex-1 relative px-3 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl transition-all duration-500 overflow-hidden text-center group border ${
                activeSlide === idx 
                  ? 'bg-white/10 border-white/20 text-white' 
                  : 'bg-black/40 border-white/5 text-white/40 hover:border-white/10 hover:text-white/60'
              }`}
            >
              <div className="flex flex-col items-center gap-0.5 md:gap-1">
                 <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{slide.title}</span>
                 <span className="hidden sm:block text-[8px] opacity-40 font-medium truncate tracking-tight uppercase">{slide.highlight}</span>
              </div>
              
              {activeSlide === idx && (
                <div 
                  className="absolute bottom-0 left-0 h-0.5 md:h-1 bg-[#00f2fe] transition-all duration-100 ease-linear shadow-[0_0_10px_#00f2fe]" 
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
