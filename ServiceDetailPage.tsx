
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle, Building, Shield, Lock, Camera, Flame, 
  Fence, Video, Network, Megaphone, Search, Car, Database, 
  Lightbulb, Zap, Droplets 
} from 'lucide-react';
import { SERVICES } from './constants';

export const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030014]">
        <div className="text-center px-6">
          <h1 className="text-3xl md:text-4xl font-black mb-8 text-white">Service Not Found</h1>
          <button onClick={() => navigate('/')} className="text-[#00f2fe] font-black flex items-center gap-3 mx-auto uppercase tracking-widest">
            <ArrowLeft /> BACK TO HOME
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = {
    Building, Shield, Lock, Camera, Flame, Fence, Video, Network, Megaphone, Search, Car, Database, Lightbulb, Zap, Droplets
  }[service.icon] || Shield;

  return (
    <div className="bg-[#030014] min-h-screen overflow-x-hidden">
      <div className="pt-32 md:pt-40 lg:pt-52 pb-20 md:pb-32 px-4 md:px-6 max-w-[95%] lg:max-w-[85%] 2xl:max-w-[80%] mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-12 md:mb-20 flex items-center gap-3 md:gap-4 text-gray-500 hover:text-white transition-colors font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm"
        >
          <ArrowLeft size={20} /> Go Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-40 items-start">
          <div className="space-y-10 md:space-y-16">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] bg-gradient-to-br from-[#00f2fe]/20 to-[#7000ff]/20 flex items-center justify-center shadow-2xl shadow-purple-500/10">
              <IconComponent className="text-[#00f2fe] w-8 h-8 md:w-12 md:h-12" />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-[1] md:leading-[0.85] text-white tracking-tighter">
              {service.title}
            </h1>
            <p className="text-base md:text-2xl text-gray-400 leading-relaxed font-semibold opacity-80">
              {service.description}
            </p>
            
            <div className="glass-card p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] border-white/5 shadow-2xl">
              <h3 className="text-xl md:text-3xl font-black mb-8 md:mb-12 flex items-center gap-3 md:gap-5 text-white">
                <CheckCircle className="text-[#00f2fe] w-6 h-6 md:w-10 md:h-10" /> CORE SPECS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 md:gap-6 p-5 md:p-8 bg-white/[0.02] rounded-xl md:rounded-[2rem] border border-white/5 hover:border-[#00f2fe]/40 transition-all group">
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#7000ff] mt-2 shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_15px_#7000ff]"></span>
                    <span className="text-sm md:text-lg font-black text-gray-300 uppercase tracking-tighter text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10 md:space-y-16 lg:sticky lg:top-40">
            <div className="glass-card rounded-[2rem] md:rounded-[5rem] overflow-hidden border border-white/5 relative group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent z-10" />
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-auto aspect-video object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-[2000ms]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
               <button className="flex-1 bg-gradient-to-r from-[#00f2fe] to-[#7000ff] text-white py-4 md:py-6 rounded-xl md:rounded-[2rem] font-black text-base md:text-xl hover:scale-105 transition-all shadow-2xl shadow-purple-500/20 uppercase tracking-widest">
                 BOOK CONSULTATION
               </button>
               <button className="flex-1 bg-white/5 hover:bg-white/10 text-white py-4 md:py-6 rounded-xl md:rounded-[2rem] font-black text-base md:text-xl border border-white/10 transition-all uppercase tracking-widest">
                 RESOURCES
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
