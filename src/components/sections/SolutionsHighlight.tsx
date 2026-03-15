import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const SolutionsHighlight = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Row 1: Content Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#257995]"></span>
                <span className="text-[14px] font-bold text-[#257995] uppercase tracking-widest font-inter">Precision Monitoring</span>
              </div>
              <h2 className="text-[32px] md:text-[42px] font-bold text-[#0B1F3A] font-montserrat uppercase leading-tight">
                ADVANCED AI-POWERED <br />
                <span className="text-[#257995]">SURVEILLANCE</span>
              </h2>
              <p className="text-[17px] text-[#6B7280] font-inter leading-relaxed max-w-xl">
                Transform your security posture with intelligent video analytics. Our high-definition ecosystems go beyond simple recording, utilizing real-time behavioral detection and object recognition to secure your infrastructure 24/7.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-3 bg-[#0B1F3A] text-white px-8 py-4 rounded-[6px] text-[14px] font-bold uppercase tracking-widest font-montserrat hover:bg-[#257995] transition-all shadow-lg group">
              Learn About Surveillance <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Surveillance Systems" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1F3A]/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Row 2: Image Left, Content Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#257995]"></span>
                <span className="text-[14px] font-bold text-[#257995] uppercase tracking-widest font-inter">Unified Infrastructure</span>
              </div>
              <h2 className="text-[32px] md:text-[42px] font-bold text-[#0B1F3A] font-montserrat uppercase leading-tight">
                INTEGRATED BUILDING <br />
                <span className="text-[#257995]">AUTOMATION</span>
              </h2>
              <p className="text-[17px] text-[#6B7280] font-inter leading-relaxed max-w-xl">
                Simplify complex operations through centralized Building Management Systems (BMS). From energy optimization to climate control and fire safety, our unified dashboards provide complete command over your facility's vital functions.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-3 bg-[#0B1F3A] text-white px-8 py-4 rounded-[6px] text-[14px] font-bold uppercase tracking-widest font-montserrat hover:bg-[#257995] transition-all shadow-lg group">
              Explore BMS Solutions <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="Building Management Automation" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#0B1F3A]/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Row 3: Content Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#257995]"></span>
                <span className="text-[14px] font-bold text-[#257995] uppercase tracking-widest font-inter">Seamless Access</span>
              </div>
              <h2 className="text-[32px] md:text-[42px] font-bold text-[#0B1F3A] font-montserrat uppercase leading-tight">
                INTELLIGENT ACCESS <br />
                <span className="text-[#257995]">MANAGEMENT</span>
              </h2>
              <p className="text-[17px] text-[#6B7280] font-inter leading-relaxed max-w-xl">
                Deploy next-generation biometric and cloud-based access control systems. Our scalable hardware solutions ensure high-security transit while maintaining frictionless entry for authorized personnel across global facilities.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center gap-3 bg-[#0B1F3A] text-white px-8 py-4 rounded-[6px] text-[14px] font-bold uppercase tracking-widest font-montserrat hover:bg-[#257995] transition-all shadow-lg group">
              View Access Solutions <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200" 
                alt="Intelligent Access Management" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1F3A]/40 to-transparent" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
