
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { TEAM_MEMBERS, TRANSLATIONS } from '../constants';

interface TeamProps {
  lang: 'ar' | 'en';
}

const Team: React.FC<TeamProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const t = TRANSLATIONS[lang];

  return (
    <section id="team" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h3 className="text-[#d4af37] font-musnad tracking-[0.5em] mb-4 text-xl">𐩬𐩡 𐩱𐩰𐩧𐩱𐩵</motion.h3>
          <motion.h2 className={`text-4xl md:text-5xl font-bold ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>
            {t.team.title.split(' ')[0]} <span className="gold-metallic">{t.team.title.split(' ').slice(1).join(' ')}</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light">{t.team.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div key={member.id} className="group relative">
              <div className="relative overflow-hidden rounded-2xl bg-black/40 border border-[#d4af37]/10 group-hover:border-[#d4af37]/50 transition-all duration-500">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={member.image} alt={isRtl ? member.name_ar : member.name_en} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent flex items-end justify-center pb-8 gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={member.linkedin} className="p-3 bg-black/80 text-[#d4af37] border border-[#d4af37]/30 rounded-full hover:bg-[#d4af37] hover:text-black transition-all"><Linkedin size={20} /></a>
                    <a href={member.twitter} className="p-3 bg-black/80 text-[#d4af37] border border-[#d4af37]/30 rounded-full hover:bg-[#d4af37] hover:text-black transition-all"><Twitter size={20} /></a>
                  </div>
                </div>
                <div className="p-6 text-center bg-black/60 backdrop-blur-sm">
                  <h4 className={`text-xl font-bold text-white mb-1 group-hover:text-[#d4af37] transition-colors ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>
                    {isRtl ? member.name_ar : member.name_en}
                  </h4>
                  <p className="text-sm text-gray-500 font-light tracking-wide uppercase">
                    {isRtl ? member.role_ar : member.role_en}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
