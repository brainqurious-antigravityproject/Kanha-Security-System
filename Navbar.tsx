
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const NavLink = ({ to, children, id, onClick }: { to: string, children?: React.ReactNode, id?: string, onClick?: () => void }) => {
    const handleClick = (e: React.MouseEvent) => {
      if (onClick) onClick();
      if (isHome && to.startsWith('#')) {
        const element = document.getElementById(to.substring(1));
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (isHome && to.startsWith('#')) {
      return (
        <a href={to} onClick={handleClick} className="hover:text-white/80 md:hover:text-[#00f2fe] transition-colors uppercase tracking-widest text-xs font-bold block py-4 md:py-2">{children}</a>
      );
    }
    return (
      <Link to={id ? `/#${id}` : '/'} onClick={handleClick} className="hover:text-white/80 md:hover:text-[#00f2fe] transition-colors uppercase tracking-widest text-xs font-bold block py-4 md:py-2">{children}</Link>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-[#030014]/95 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-4 lg:py-6'}`}>
      <div className="max-w-[95%] lg:max-w-[85%] 2xl:max-w-[80%] mx-auto px-4 flex justify-between items-center relative z-[110]">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#00f2fe] to-[#7000ff] rounded-lg flex items-center justify-center font-bold text-white text-lg lg:text-xl shadow-lg shadow-purple-500/20">
            K
          </div>
          <span className="text-xl lg:text-2xl font-black tracking-tighter text-white">KSS</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-gray-400">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="#about" id="about">ABOUT</NavLink>
          <NavLink to="#services" id="services">SERVICES</NavLink>
          <NavLink to="#partners" id="partners">PARTNERS</NavLink>
          <NavLink to="#contact" id="contact">CONTACT</NavLink>
        </div>

        <div className="flex items-center gap-3 lg:gap-4">
          <a href="tel:+919595959595" className="flex items-center gap-2 bg-[#00f2fe] text-[#030014] px-4 lg:px-6 py-2 rounded-full text-[10px] lg:text-xs font-black hover:bg-white transition-all uppercase tracking-widest shadow-lg shadow-cyan-500/20">
            <Phone size={14} fill="currentColor" />
            <span className="hidden sm:inline">+91 9595959595</span>
          </a>
          <button className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Right to Left with Blue Gradient */}
      <div className={`md:hidden fixed inset-0 z-[105] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
        
        {/* Drawer */}
        <div className={`absolute top-0 right-0 w-[80%] h-full bg-gradient-to-br from-[#00f2fe] to-[#7000ff] shadow-2xl transition-transform duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-24 pb-10 px-8 text-white">
            <div className="flex flex-col gap-4 items-start w-full">
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</NavLink>
              <NavLink to="#about" id="about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</NavLink>
              <NavLink to="#services" id="services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</NavLink>
              <NavLink to="#partners" id="partners" onClick={() => setIsMobileMenuOpen(false)}>PARTNERS</NavLink>
              <NavLink to="#contact" id="contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</NavLink>
            </div>
            
            <div className="mt-auto pt-10 border-t border-white/20">
               <div className="flex flex-col items-start gap-2">
                 <span className="text-[10px] uppercase font-black tracking-widest opacity-70">Support Line</span>
                 <a href="tel:+919595959595" className="text-xl font-black flex items-center gap-3">
                   <Phone size={20} /> +91 9595959595
                 </a>
               </div>
               <button className="w-full mt-6 bg-white text-[#7000ff] py-4 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                 PARTNER LOGIN
               </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
