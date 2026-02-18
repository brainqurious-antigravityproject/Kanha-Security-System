import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="bg-[#0B1F3A] py-20 border-t border-white/10 text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#2F80ED] rounded-[6px] flex items-center justify-center font-bold text-white text-2xl">K</div>
            <span className="text-3xl font-bold font-montserrat uppercase tracking-tight">KSS</span>
          </div>
          <p className="text-white/60 text-[17px] max-w-md font-inter leading-relaxed">
            Industry leader in electronic security and automated protection. Committed to securing infrastructure with precision and innovation.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-[14px] font-bold text-[#2F80ED] uppercase tracking-widest font-montserrat">Navigation</h4>
          <ul className="space-y-4 text-white/50 text-[14px] font-bold font-inter">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Platforms</Link></li>
            <li><Link to="/partners" className="hover:text-white transition-colors">Our Partners</Link></li>
            <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-[14px] font-bold text-[#2F80ED] uppercase tracking-widest font-montserrat">Information</h4>
          <ul className="space-y-4 text-white/50 text-[14px] font-bold font-inter">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[14px] text-white/30 font-bold font-inter uppercase tracking-widest gap-6">
        <p>© 2026 Kanha Security System. All rights reserved.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </div>
  </footer>
);
