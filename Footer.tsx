
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="py-16 md:py-24 border-t border-white/5 bg-[#030014]">
    <div className="max-w-[95%] lg:max-w-[85%] 2xl:max-w-[80%] mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 md:gap-24 mb-16 md:mb-24">
        <div className="col-span-2 space-y-8 md:space-y-12 text-white">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#00f2fe] to-[#7000ff] rounded-lg md:rounded-[1.2rem] flex items-center justify-center font-black text-white text-2xl md:text-3xl shadow-xl shadow-purple-500/20">K</div>
            <span className="text-2xl md:text-4xl font-black tracking-tighter">KSS</span>
          </div>
          <p className="text-gray-500 max-w-sm text-sm md:text-lg leading-relaxed font-medium">
            Kanha Security System is an electronic security, safety & automation leader based in New Delhi, India. 
            Securing the world, one innovation at a time.
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-10 text-white">
          <h4 className="font-black text-sm md:text-xl uppercase tracking-widest text-white">Links</h4>
          <ul className="space-y-4 md:space-y-6 text-gray-500 text-xs md:text-base font-bold">
            <li><Link to="/" className="hover:text-[#00f2fe] transition-colors">Home</Link></li>
            <li><a href="#" className="hover:text-[#00f2fe] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#00f2fe] transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-[#00f2fe] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="space-y-6 md:space-y-10 text-white">
          <h4 className="font-black text-sm md:text-xl uppercase tracking-widest text-white">Platform</h4>
          <ul className="space-y-4 md:space-y-6 text-gray-500 text-xs md:text-base font-bold">
            <li><a href="#" className="hover:text-[#00f2fe] transition-colors">mPass</a></li>
            <li><a href="#" className="hover:text-[#00f2fe] transition-colors">LinQ2</a></li>
            <li><a href="#" className="hover:text-[#00f2fe] transition-colors">InfoShield</a></li>
            <li><a href="#" className="hover:text-[#00f2fe] transition-colors">Cyber Sphere</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 text-[10px] md:text-base text-gray-600 font-black uppercase tracking-widest text-center">
        <p>© 2026 Kanha Security System. Engineered for excellence.</p>
        <div className="flex gap-8 md:gap-12">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
