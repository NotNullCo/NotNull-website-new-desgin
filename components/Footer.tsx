
import React from 'react';
import Logo from './Logo';
import { TRANSLATIONS } from '../constants';

interface FooterProps {
  lang: 'ar' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const t = TRANSLATIONS[lang];

  return (
    <footer className="py-16 bg-black border-t border-[#d4af37]/10">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-10 ${isRtl ? '' : 'md:flex-row-reverse'}`}>
          <div className="flex items-center gap-3">
             <Logo className="w-6 h-8" showText={true} textSize="text-xl" />
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm mb-2">
              &copy; {new Date().getFullYear()} {t.footer.copy}
            </p>
            <p className="text-gray-700 text-[10px] font-musnad tracking-[0.3em] uppercase">
              𐩬𐩡 𐩥𐩧𐩤𐩧 𐩩𐩨𐩫
            </p>
          </div>

          <div className="flex gap-8 font-serif-lux">
            <a href="#" className="text-gray-500 hover:text-[#d4af37] transition-all text-sm uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-[#d4af37] transition-all text-sm uppercase tracking-widest">X / Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
