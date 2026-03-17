
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PARTNER_LOGOS, CUSTOMER_LOGOS } from '../constants/constants';
import { ShieldCheck, Award, Handshake, Users } from 'lucide-react';

export const PartnersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#257995 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <span className="text-[#257995] text-[12px] font-bold tracking-[0.4em] uppercase font-inter border border-[#257995]/40 px-6 py-2 rounded-full">
              Strategic Ecosystem
            </span>
          </div>
          <h1 className="text-[42px] md:text-[64px] font-bold text-white font-montserrat uppercase tracking-tight leading-tight mb-6">
            OUR <span className="text-[#257995]">TRUSTED</span> NETWORK
          </h1>
          <p className="text-[18px] text-white/60 font-inter max-w-2xl mx-auto leading-relaxed">
            As authorized dealers for world-renowned security brands, we bridge the gap between cutting-edge technology and mission-critical implementation.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 mt-2 max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: "Authorized", label: "Branding Partner" },
            { icon: Award, title: "OEM", label: "Certified Engineers" },
            { icon: Handshake, title: "Direct", label: "Factory Tie-ups" },
            { icon: Users, title: "Diverse", label: "Client Portfolio" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-xl border border-gray-50 flex flex-col items-center text-center">
              <div className="text-[#257995] mb-3">
                <item.icon size={32} />
              </div>
              <h3 className="font-bold text-[#0B1F3A] font-montserrat uppercase text-sm">{item.title}</h3>
              <p className="text-xs text-[#6B7280] font-inter">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#0B1F3A] font-montserrat uppercase">BRANDS WE DEAL IN</h2>
          <div className="w-20 h-1 bg-[#257995] mx-auto rounded-full" />
          <p className="text-[#6B7280] font-inter max-w-xl mx-auto">
            We partner with industry-leading manufacturers to provide the most reliable hardware in the safety and automation sector.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {PARTNER_LOGOS.map((name, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 flex items-center justify-center text-center shadow-sm hover:shadow-lg hover:border-[#257995]/30 transition-all group min-h-[140px]">
              <span className="text-[14px] md:text-[16px] font-bold text-[#0B1F3A] font-montserrat uppercase tracking-tight group-hover:text-[#257995] transition-colors leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Showcase */}
      <section className="py-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-[32px] md:text-[42px] font-bold text-white font-montserrat uppercase">VALUED CUSTOMERS</h2>
            <div className="w-20 h-1 bg-[#257995] mx-auto rounded-full" />
            <p className="text-white/60 font-inter max-w-xl mx-auto">
              Trusted by some of the most prestigious organizations across commercial and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {CUSTOMER_LOGOS.map((name, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 flex items-center justify-center text-center hover:bg-white/10 transition-all min-h-[120px]">
                <span className="text-[13px] md:text-[15px] font-bold text-white font-montserrat uppercase tracking-tight leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 max-w-5xl mx-auto px-6 text-center">
        <div className="bg-white rounded-[32px] p-12 md:p-20 shadow-2xl border border-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#257995]/5 rounded-bl-full pointer-events-none" />
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0B1F3A] font-montserrat uppercase mb-6">Partner With Us</h2>
          <p className="text-[#6B7280] font-inter text-lg max-w-2xl mx-auto mb-10">
            Join our ecosystem of safety excellence. Whether you are an OEM or an enterprise seeking robust solutions, KSS is your trusted engineering partner.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-[#0B1F3A] text-white px-10 py-5 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#257995] transition-all shadow-lg font-montserrat">
              Get A Consultation
            </Link>
            <a href="tel:+919810021487" className="bg-white text-[#0B1F3A] border-2 border-[#0B1F3A] px-10 py-5 rounded-lg font-bold uppercase tracking-widest text-sm hover:bg-[#0B1F3A] hover:text-white transition-all font-montserrat">
              Call Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
