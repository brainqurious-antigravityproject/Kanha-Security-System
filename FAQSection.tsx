
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from './constants';

const FAQItem: React.FC<{ item: any; isOpen: boolean; toggle: () => void }> = ({ item, isOpen, toggle }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button 
      onClick={toggle}
      className="w-full py-6 flex items-center justify-between text-left group transition-all"
    >
      <span className={`text-[17px] md:text-[19px] font-bold font-montserrat transition-colors ${isOpen ? 'text-[#2F80ED]' : 'text-[#0B1F3A] group-hover:text-[#2F80ED]'}`}>
        {item.question}
      </span>
      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#2F80ED] text-white rotate-180' : 'bg-gray-100 text-[#0B1F3A]'}`}>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
      <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-relaxed font-inter">
        {item.answer}
      </p>
    </div>
  </div>
);

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Header */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-[#2F80ED]"></span>
              <span className="text-[14px] font-bold text-[#2F80ED] uppercase tracking-widest font-inter">Information Hub</span>
            </div>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#0B1F3A] font-montserrat uppercase leading-tight tracking-tight">
              FREQUENTLY <br />
              <span className="text-[#2F80ED]">ASKED</span> QUESTIONS
            </h2>
            <p className="text-[16px] text-[#6B7280] font-inter max-w-sm">
              Finding the right security solution can be complex. Here are answers to some of our most common inquiries.
            </p>
            <div className="pt-8">
              <div className="bg-[#F5F7FA] p-6 rounded-[12px] flex items-start gap-4 border border-gray-100">
                <div className="w-10 h-10 bg-[#2F80ED] text-white rounded-full flex items-center justify-center shrink-0">
                  <HelpCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-[15px] mb-1 font-montserrat">Still have questions?</h4>
                  <p className="text-[13px] text-[#6B7280] mb-3 font-inter">Our experts are here to help you design your perfect system.</p>
                  <a href="#contact" className="text-[#2F80ED] font-bold text-[13px] uppercase tracking-wider hover:underline font-inter">Get in touch →</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-[24px] p-6 md:p-10 shadow-sm">
            <div className="divide-y divide-gray-100">
              {FAQS.map((faq, idx) => (
                <FAQItem 
                  key={idx} 
                  item={faq} 
                  isOpen={openIndex === idx} 
                  toggle={() => setOpenIndex(openIndex === idx ? null : idx)} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
