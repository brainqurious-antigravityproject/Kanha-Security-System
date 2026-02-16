
import React from 'react';
import { Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

export const ContactSection = () => (
  <section id="contact" className="py-12 lg:py-24">
    <div className="max-w-[95%] lg:max-w-[85%] 2xl:max-w-[80%] mx-auto px-4">
      <div className="glass-card rounded-[3rem] lg:rounded-[5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-white/5">
        <div className="p-6 md:p-16 lg:p-20 space-y-10 md:space-y-16">
          <div className="text-left">
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 md:mb-8 leading-none whitespace-nowrap">LET'S <span className="gradient-text">TALK</span></h2>
            <p className="text-sm md:text-xl text-gray-400 leading-relaxed font-medium">Ready to secure your digital and physical infrastructure? Our team is available 24/7.</p>
          </div>

          <div className="space-y-8 md:space-y-12">
            <div className="flex flex-row items-center gap-4 md:gap-8 group text-left">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-[1.2rem] md:rounded-[1.5rem] bg-[#00f2fe]/10 flex items-center justify-center border border-[#00f2fe]/20 group-hover:scale-110 transition-all shrink-0">
                <Phone className="text-[#00f2fe] w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div>
                <h4 className="text-base md:text-xl font-black text-white mb-1 md:mb-2 uppercase tracking-widest">Phone</h4>
                <p className="text-gray-400 text-sm md:text-lg font-bold">+91 9810021487</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 md:gap-8 group text-left">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-[1.2rem] md:rounded-[1.5rem] bg-[#7000ff]/10 flex items-center justify-center border border-[#7000ff]/20 group-hover:scale-110 transition-all shrink-0">
                <Mail className="text-[#7000ff] w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div>
                <h4 className="text-base md:text-xl font-black text-white mb-1 md:mb-2 uppercase tracking-widest">Email</h4>
                <p className="text-gray-400 text-sm md:text-lg font-bold break-all">info.kssystem19@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex justify-start gap-6 md:gap-8">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 md:w-14 md:h-14 rounded-[1rem] md:rounded-[1.2rem] border border-white/5 flex items-center justify-center hover:bg-[#00f2fe] hover:text-[#030014] hover:border-[#00f2fe] transition-all duration-500">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white/[0.01] p-6 md:p-16 lg:p-20 border-t lg:border-t-0 lg:border-l border-white/5">
          <form className="space-y-6 md:space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.2em]">First Name</label>
                <input type="text" className="w-full bg-black/40 border border-white/5 rounded-xl md:rounded-2xl px-6 md:px-8 py-3 md:py-4 focus:border-[#00f2fe] focus:outline-none transition-all text-white font-bold" placeholder="Alex" />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Last Name</label>
                <input type="text" className="w-full bg-black/40 border border-white/5 rounded-xl md:rounded-2xl px-6 md:px-8 py-3 md:py-4 focus:border-[#00f2fe] focus:outline-none transition-all text-white font-bold" placeholder="Rivers" />
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Work Email</label>
              <input type="email" className="w-full bg-black/40 border border-white/5 rounded-xl md:rounded-2xl px-6 md:px-8 py-3 md:py-4 focus:border-[#00f2fe] focus:outline-none transition-all text-white font-bold" placeholder="alex@corporate.com" />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Message</label>
              <textarea rows={4} className="w-full bg-black/40 border border-white/5 rounded-xl md:rounded-2xl px-6 md:px-8 py-3 md:py-4 focus:border-[#00f2fe] focus:outline-none transition-all text-white font-bold resize-none" placeholder="Tell us about your requirements..."></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-[#00f2fe] to-[#7000ff] text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:opacity-90 transition-all shadow-2xl shadow-purple-500/40 uppercase tracking-[0.2em]">
              SEND ENQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
