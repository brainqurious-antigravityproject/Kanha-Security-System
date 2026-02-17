
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

  const NavLink = ({ to, children, id, onClick, mobile }: { to: string, children?: React.ReactNode, id?: string, onClick?: () => void, mobile?: boolean }) => {
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

    const linkClasses = `text-[14px] font-semibold tracking-wide transition-colors ${
      mobile ? 'text-[#0B1F3A] hover:text-[#2F80ED]' : (isScrolled ? 'text-[#0B1F3A] hover:text-[#2F80ED]' : 'text-white hover:text-[#2F80ED]')
    }`;

    // If it's a regular route (not an anchor on the current page)
    if (!to.startsWith('#') || !isHome) {
      return (
        <Link to={to} onClick={onClick} className={linkClasses}>{children}</Link>
      );
    }

    // Anchor on home page
    return (
      <a href={to} onClick={handleClick} className={linkClasses}>{children}</a>
    );
  };

  const navbarBg = isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-[#0B1F3A]/90';
  const textColor = isScrolled || isMobileMenuOpen ? 'text-[#0B1F3A]' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 py-4 md:py-6 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2F80ED] rounded-[6px] flex items-center justify-center font-bold text-white text-xl">
            K
          </div>
          <span className={`text-2xl font-bold font-montserrat uppercase tracking-tight ${textColor}`}>KSS</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/#about">ABOUT</NavLink>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/#partners">PARTNERS</NavLink>
          <NavLink to="/#contact">CONTACT</NavLink>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:+919810021487" className="flex items-center gap-2 bg-[#2F80ED] text-white px-5 py-2.5 rounded-[6px] hover:brightness-110 transition-all font-bold text-[14px] shadow-sm">
            <Phone size={16} />
            <span className="hidden lg:inline">+919810021487</span>
          </a>
          <button className={`${textColor} md:hidden`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-6 shadow-xl flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <NavLink to="/" mobile onClick={() => setIsMobileMenuOpen(false)}>HOME</NavLink>
          <NavLink to="/#about" mobile onClick={() => setIsMobileMenuOpen(false)}>ABOUT</NavLink>
          <NavLink to="/services" mobile onClick={() => setIsMobileMenuOpen(false)}>SERVICES</NavLink>
          <NavLink to="/#partners" mobile onClick={() => setIsMobileMenuOpen(false)}>PARTNERS</NavLink>
          <NavLink to="/#contact" mobile onClick={() => setIsMobileMenuOpen(false)}>CONTACT</NavLink>
        </div>
      )}
    </nav>
  );
};
