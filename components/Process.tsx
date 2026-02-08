
import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS, TRANSLATIONS } from '../constants';

interface ProcessProps {
  lang: 'ar' | 'en';
}

const Process: React.FC<ProcessProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const t = TRANSLATIONS[lang];

  return (
    <section id="process" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-[#d4af37] font-musnad tracking-[0.5em] mb-4 text-xl opacity-40"
          >
            𐩬𐩡 𐩥𐩧𐩤𐩧
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-bold ${isRtl ? 'font-reem' : 'font-serif-lux'}`}
          >
            {t.process.title.split(' ').slice(0, -1).join(' ')} <span className="gold-metallic">{t.process.title.split(' ').slice(-1)}</span>
          </motion.h2>
          <p className="text-gray-400 mt-6 text-lg font-light max-w-xl mx-auto">{t.process.desc}</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full border border-[#d4af37]/20 flex items-center justify-center bg-black group-hover:border-[#d4af37] transition-all duration-500 relative z-10">
                    <span className="text-[#d4af37] group-hover:scale-110 transition-transform">
                      {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
                    </span>
                  </div>
                  {/* Musnad Numbering */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#d4af37]/10 rounded-full flex items-center justify-center font-musnad text-[#d4af37] text-xl border border-[#d4af37]/20 backdrop-blur-sm">
                    {step.musnad}
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 text-white group-hover:text-[#d4af37] transition-colors ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>
                  {isRtl ? step.title_ar : step.title_en}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed px-4">
                  {isRtl ? step.desc_ar : step.desc_en}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
