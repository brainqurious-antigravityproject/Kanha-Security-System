
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../../constants/constants';
import { ServiceCard } from '../ServiceCard';

export const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-[#1F2937]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[14px] font-bold text-[#257995] uppercase tracking-[0.2em] block mb-4 font-inter">Our Expertise</span>
          <h2 className="text-[36px] font-semibold text-white font-montserrat uppercase">EXPLORE OUR PLATFORMS</h2>
          <p className="text-[17px] text-white/60 mt-4 max-w-2xl font-inter">
            Comprehensive electronic security and safety solutions designed for the modern threat landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.slice(0, 6).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button 
            onClick={() => navigate('/services')}
            className="bg-transparent border-2 border-[#257995] text-white px-12 py-4 rounded-[6px] text-[14px] font-bold hover:bg-[#257995] transition-all uppercase tracking-widest font-montserrat"
          >
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};
