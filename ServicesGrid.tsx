
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Building, Shield, Lock, Camera, Flame, Fence, 
  Video, Network, Megaphone, Search, Car, Database, Lightbulb, Zap, Droplets 
} from 'lucide-react';
import { SERVICES } from './constants';
import { Service } from './types';

const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    // Sequential interval for desktop: 2s, 4s, 6s...
    // Constant 1.5s interval for mobile
    const intervalTime = isMobile ? 1500 : (index + 1) * 2000;
    
    const timer = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, intervalTime);
    
    return () => clearInterval(timer);
  }, [index]);

  const IconComponent = ({
    Building, Shield, Lock, Camera, Flame, Fence, Video, Network, Megaphone, Search, Car, Database, Lightbulb, Zap, Droplets
  } as any)[service.icon] || Shield;

  return (
    <div className="flip-card perspective-1000 h-[380px] md:h-[450px] w-full group/card">
      <div className={`relative w-full h-full transition-all duration-1000 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/5 flex flex-col h-full overflow-hidden transition-all duration-500 group-hover/card:border-[#00f2fe]/40 group-hover/card:shadow-[0_0_20px_rgba(0,242,254,0.15)]">
          <div className="absolute -right-8 -top-8 opacity-5">
             <IconComponent className="w-24 h-24 md:w-32 md:h-32 text-white" />
          </div>
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#00f2fe]/20 to-[#7000ff]/20 flex items-center justify-center mb-4 md:mb-8 group-hover/card:scale-110 transition-transform">
            <IconComponent className="text-[#00f2fe] w-5 h-5 md:w-9 md:h-9" />
          </div>
          <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-white group-hover/card:text-[#00f2fe] transition-colors">{service.title}</h3>
          <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-8 leading-relaxed line-clamp-3 font-medium">{service.description}</p>
          <ul className="space-y-2 md:space-y-4 mb-6 md:mb-10 flex-grow">
            {service.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500 font-bold">
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#7000ff]" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base font-black text-[#00f2fe] uppercase tracking-widest mt-auto">
            VIEW DETAILS <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[2rem] md:rounded-[3rem] overflow-hidden glass-card border border-white/5 transition-all duration-500 group-hover/card:border-[#00f2fe]/40">
          <div className="absolute inset-0 z-0">
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 flex items-center justify-center h-full w-full px-6">
            <Link 
              to={`/service/${service.id}`}
              className="bg-[#00f2fe] text-[#030014] px-8 py-4 rounded-full text-sm md:text-base font-black hover:bg-white transition-all uppercase tracking-widest shadow-2xl shadow-cyan-500/20 text-center"
            >
              VIEW DETAILS
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export const ServicesGrid = () => (
  <section id="services" className="py-12 lg:py-24 relative">
    <div className="max-w-[95%] lg:max-w-[85%] 2xl:max-w-[80%] mx-auto px-4">
      <div className="max-w-3xl mb-12 md:mb-16">
        <span className="text-[10px] md:text-xs font-bold text-[#00f2fe] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 block">Our Expertise</span>
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1] md:leading-[0.9]">EXPLORE OUR <span className="gradient-text">PLATFORMS</span></h2>
        <p className="text-sm md:text-xl text-gray-400 leading-relaxed mt-4 md:mt-6 font-medium">Comprehensive electronic security and safety solutions designed for the modern threat landscape.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {SERVICES.slice(0, 6).map((s, idx) => (
          <ServiceCard key={s.id} service={s} index={idx} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="bg-transparent border-2 border-white/20 text-white px-12 py-4 rounded-full text-sm md:text-lg font-black hover:bg-white hover:text-[#030014] hover:border-white transition-all uppercase tracking-[0.2em] shadow-xl">
          ALL SERVICES
        </button>
      </div>
    </div>
  </section>
);
