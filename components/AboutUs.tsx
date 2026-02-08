
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { TRANSLATIONS } from '../constants';

interface AboutUsProps {
  lang: 'ar' | 'en';
}

const AboutUs: React.FC<AboutUsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  return (
    <section id="about-us" className="py-24 bg-[#050505] relative overflow-hidden border-t border-[#d4af37]/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-block mb-6">
            <div className={`flex items-center gap-4 text-[#d4af37] font-musnad tracking-[0.4em] text-lg opacity-60 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
              <span>𐩬𐩡</span>
              <div className="w-12 h-px bg-[#d4af37]/30"></div>
              <span className={`tracking-normal text-base uppercase ${isRtl ? 'font-reem' : 'font-english'}`}>{t.about.badge}</span>
            </div>
          </motion.div>

          <motion.h2 className={`text-3xl md:text-5xl font-bold mb-8 leading-tight ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>
            {t.about.title}
          </motion.h2>

          <motion.div className="relative p-8 md:p-12 border border-[#d4af37]/10 bg-black/40 backdrop-blur-sm">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light font-reem">
              {t.about.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group relative p-8 bg-[#080808] border border-[#d4af37]/10 transition-all overflow-hidden">
            <div className="w-14 h-14 flex items-center justify-center bg-[#d4af37]/5 border border-[#d4af37]/20 mb-6 rotate-45 group-hover:rotate-0 transition-transform">
              <Target size={28} className="text-[#d4af37] -rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
            <h4 className={`text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>{t.about.mission_title}</h4>
            <p className="text-gray-400 text-base leading-relaxed font-light font-reem">{t.about.mission_desc}</p>
          </div>
          <div className="group relative p-8 bg-[#080808] border border-[#d4af37]/10 transition-all overflow-hidden">
            <div className="w-14 h-14 flex items-center justify-center bg-[#d4af37]/5 border border-[#d4af37]/20 mb-6 rotate-45 group-hover:rotate-0 transition-transform">
              <Eye size={28} className="text-[#d4af37] -rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
            <h4 className={`text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>{t.about.vision_title}</h4>
            <p className="text-gray-400 text-base leading-relaxed font-light font-reem">{t.about.vision_desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
