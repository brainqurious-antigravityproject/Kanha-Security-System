import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Building, Shield, Lock, Camera, Flame, Fence, 
  Video, Network, Megaphone, Search, Car, Database, Lightbulb, Zap, Droplets 
} from 'lucide-react';
import { Service } from './types';

export const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const IconComponent = ({
    Building, Shield, Lock, Camera, Flame, Fence, Video, Network, Megaphone, Search, Car, Database, Lightbulb, Zap, Droplets
  } as any)[service.icon] || Shield;

  return (
    <div className="group perspective-[1200px] h-[426px] w-full cursor-pointer">
      <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-white p-8 rounded-[12px] border-2 border-transparent hover:border-[#2F80ED] group-hover:border-[#2F80ED] flex flex-col h-full shadow-lg transition-all duration-300 overflow-hidden">
          <div className="mb-4 text-[#2F80ED] transition-transform duration-500 group-hover:scale-110">
            <IconComponent size={40} />
          </div>
          <h3 className="text-[20px] font-bold mb-3 text-[#0B1F3A] font-montserrat uppercase tracking-tight leading-tight min-h-[50px] flex items-center">
            {service.title}
          </h3>
          <p className="text-[16px] text-[#6B7280] mb-5 leading-relaxed font-inter line-clamp-2 min-h-[42px]">
            {service.description}
          </p>

          {/* Bullet Points Section */}
          <ul className="space-y-2.5 mb-6">
            {service.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-[#0B1F3A] font-inter">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2F80ED] shrink-0 shadow-[0_0_4px_rgba(47,128,237,0.4)]" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center gap-2 text-[13px] font-bold text-[#2F80ED] uppercase tracking-widest font-montserrat group-hover:gap-3 transition-all">
            Explore Details <ArrowRight size={16} />
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[12px] overflow-hidden bg-[#0B1F3A] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 text-center">
          {/* Background Image Showcase */}
          <div className="absolute inset-0 z-0">
            <img 
              src={service.imageUrl} 
              alt={service.title} 
              className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/70 to-transparent" />
          </div>
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-[20px] font-bold text-white font-montserrat uppercase leading-tight tracking-wide">
              {service.title}
            </h3>
            <div className="w-12 h-1 bg-[#2F80ED] mx-auto rounded-full" />
            <Link 
              to={`/service/${service.id}`}
              className="inline-block bg-[#2F80ED] text-white px-8 py-3 rounded-[6px] text-[13px] font-bold hover:bg-white hover:text-[#0B1F3A] transition-all uppercase tracking-widest font-montserrat shadow-xl transform active:scale-95"
            >
              View Solution
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};
