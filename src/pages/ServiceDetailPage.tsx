import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle, ChevronRight, Plus, Minus,
  Building, Shield, Lock, Camera, Flame, Fence, Video, Network, Megaphone, Search, Car, Database, Lightbulb, Zap, Droplets 
} from 'lucide-react';
import { SERVICES } from '../constants/constants';

const FAQItem: React.FC<{ faq: { question: string; answer: string }; isOpen: boolean; toggle: () => void }> = ({ faq, isOpen, toggle }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button 
      onClick={toggle}
      className="w-full py-5 md:py-6 flex items-center justify-between text-left group"
    >
      <span className={`text-[16px] md:text-[17px] font-bold font-montserrat transition-colors ${isOpen ? 'text-[#257995]' : 'text-[#0B1F3A] group-hover:text-[#257995]'}`}>
        {faq.question}
      </span>
      <div className={`shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#257995] text-white rotate-180' : 'bg-gray-100 text-[#0B1F3A]'}`}>
        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
      <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-relaxed font-inter">
        {faq.answer}
      </p>
    </div>
  </div>
);

export const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return null;

  const IconComponent = ({
    Building, Shield, Lock, Camera, Flame, Fence, Video, Network, Megaphone, Search, Car, Database, Lightbulb, Zap, Droplets
  } as any)[service.icon] || Shield;

  return (
    <div className="bg-[#F5F7FA] min-h-screen text-[#0B1F3A]">
      {/* Detail Header & Breadcrumbs */}
      <div className="pt-28 md:pt-36 pb-12 md:pb-20 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#257995 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <nav className="flex flex-wrap items-center gap-y-2 gap-x-2 text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-white/40 mb-8 md:mb-12 font-inter">
            <Link to="/" className="hover:text-[#257995] transition-colors">Home</Link>
            <ChevronRight size={12} className="md:size-[14px]" />
            <Link to="/services" className="hover:text-[#257995] transition-colors">Services</Link>
            <ChevronRight size={12} className="md:size-[14px]" />
            <span className="text-[#257995] truncate max-w-[150px] md:max-w-none">{service.title}</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
            <div className="space-y-4">
              <h1 className="text-[28px] md:text-[48px] lg:text-[56px] font-bold text-white font-montserrat uppercase leading-[1.2] md:leading-[1.1] tracking-tight">
                {service.title}
              </h1>
              <div className="w-16 md:w-20 h-1 bg-[#257995]" />
            </div>
            <div className="hidden md:flex w-20 h-20 lg:w-24 lg:h-24 bg-[#257995]/10 rounded-2xl items-center justify-center text-[#257995] border border-[#257995]/20">
              <IconComponent size={40} className="lg:size-12" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          {/* Main Visual Area - Prioritized for all screens */}
          <div className="lg:col-span-6 lg:order-2 space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 group aspect-video lg:aspect-square md:aspect-video">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
          </div>

          {/* Text Content Area */}
          <div className="lg:col-span-6 lg:order-1 space-y-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-[16px] md:text-[19px] leading-[1.7] md:leading-[1.8] text-[#4B5563] font-inter">
                {service.description}
              </p>
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#257995]/5 rounded-bl-full -z-0" />
              <div className="relative z-10">
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#0B1F3A] mb-8 font-montserrat uppercase flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-[#257995] rounded-full" />
                  SYSTEM FEATURES
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-xl border border-gray-50 group hover:border-[#257995]/30 transition-all">
                      <CheckCircle className="text-[#257995] shrink-0 mt-0.5" size={18} />
                      <span className="text-[14px] md:text-[15px] font-bold text-[#1F2937] font-inter leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            {service.ctaText && (
              <div className="bg-[#257995] rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-all" />
                <div className="relative z-10 space-y-6 md:space-y-8">
                  <h3 className="text-[24px] md:text-[34px] font-bold font-montserrat uppercase leading-tight">
                    Start your security <br className="hidden md:block" /> Transformation
                  </h3>
                  <p className="text-[16px] md:text-[18px] opacity-90 font-inter max-w-lg">
                    {service.ctaText}
                  </p>
                  <a 
                    href="tel:+919810021487"
                    className="inline-block bg-white text-[#257995] w-full md:w-auto px-10 py-4 md:py-5 rounded-lg font-bold text-[14px] md:text-[15px] uppercase tracking-widest hover:bg-[#0B1F3A] hover:text-white transition-all shadow-lg font-montserrat text-center"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mt-20 md:mt-32 pt-16 md:pt-20 border-t border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#257995]"></span>
                  <span className="text-[11px] md:text-[12px] font-bold text-[#257995] uppercase tracking-[0.3em] font-inter">Solution Insights</span>
                </div>
                <h2 className="text-[28px] md:text-[32px] font-bold text-[#0B1F3A] font-montserrat uppercase leading-tight">
                  SERVICE <br />
                  <span className="text-[#257995]">FAQS</span>
                </h2>
                <p className="text-[15px] md:text-[16px] text-[#6B7280] font-inter leading-relaxed">
                  Deep dive into technical and operational details for {service.title}.
                </p>
              </div>

              <div className="lg:col-span-8 bg-white border border-gray-100 rounded-2xl p-6 md:p-12 shadow-sm">
                <div className="divide-y divide-gray-100">
                  {service.faqs.map((faq, idx) => (
                    <FAQItem 
                      key={idx} 
                      faq={faq} 
                      isOpen={openFaqIndex === idx} 
                      toggle={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};