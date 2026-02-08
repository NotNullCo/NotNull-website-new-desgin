
import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { TRANSLATIONS } from '../constants';

interface HeaderProps {
  lang: 'ar' | 'en';
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about-us' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.team, href: '#team' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-black/95 py-3 border-b border-[#d4af37]/10 backdrop-blur-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between flex-row-reverse">
        
        {/* Logo - عودة للحجم المتناسق */}
        <a href="#home" className="flex items-center">
          <Logo className="w-10 h-12" showText={false} />
        </a>

        {/* Desktop Navigation - عودة للخط المتوسط الراقي */}
        <div className={`hidden lg:flex items-center gap-10 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-[14px] font-medium tracking-[0.2em] uppercase text-gray-400 hover:text-[#d4af37] transition-all duration-300 ${isRtl ? 'font-reem' : 'font-english'}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-3 text-[#d4af37] hover:text-white transition-all duration-300 group px-4 py-2 ${
              isRtl ? 'border-r border-gray-800' : 'border-l border-gray-800'
            }`}
          >
            <Languages size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="text-[12px] font-bold tracking-widest uppercase">{lang === 'ar' ? 'EN' : 'AR'}</span>
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleLanguage} className="text-[#d4af37] p-2 border border-[#d4af37]/20 rounded-full">
            <span className="text-sm font-bold">{lang === 'ar' ? 'EN' : 'AR'}</span>
          </button>
          
          <button 
            className="text-[#d4af37]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-black border-t border-[#d4af37]/10 p-10 flex flex-col gap-8 h-screen z-50 overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-3xl text-center text-white hover:text-[#d4af37] transition-colors ${isRtl ? 'font-reem' : 'font-serif-lux'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
