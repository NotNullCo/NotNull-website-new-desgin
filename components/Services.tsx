
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, TRANSLATIONS } from '../constants';
import { Service } from '../types';
import { ChevronDown } from 'lucide-react';

interface ServicesProps {
  onServiceSelect?: (service: Service) => void;
  lang: 'ar' | 'en';
}

const INITIAL_SERVICES_COUNT = 6;

const Services: React.FC<ServicesProps> = ({ onServiceSelect, lang }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_SERVICES_COUNT);
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const displayedServices = SERVICES.slice(0, visibleCount);
  const hasMore = visibleCount < SERVICES.length;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-[#d4af37] font-musnad tracking-[0.5em] mb-4 text-xl opacity-40"
          >
            𐩥𐩧𐩤𐩧 𐩱𐩰𐩧𐩱𐩵
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-bold ${isRtl ? 'font-reem' : 'font-serif-lux'}`}
          >
            {t.services.title.split(' ')[0]} <span className="gold-metallic">{t.services.title.split(' ').slice(1).join(' ')}</span>
          </motion.h2>
          <p className="text-gray-400 mt-6 text-lg font-light max-w-xl mx-auto">{t.services.desc}</p>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service, index) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => onServiceSelect?.(service)}
                className="group relative p-10 bg-[#050505] border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all cursor-pointer overflow-hidden rounded-xl"
              >
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>

                <div className="relative mb-8 w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 border border-[#d4af37]/20 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                  <div className="relative z-10 text-[#d4af37] group-hover:scale-110 transition-transform">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                  </div>
                </div>

                <h3 className={`text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>
                  {isRtl ? service.title_ar : service.title_en}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-base">
                  {isRtl ? service.desc_ar : service.desc_en}
                </p>
                
                <div className="mt-8 flex items-center gap-4 text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <span className="text-xs font-bold tracking-widest uppercase">{t.services.more}</span>
                  <span className="font-musnad text-lg">𐩰</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="mt-16 text-center">
            <button 
              onClick={handleShowMore} 
              className="group relative px-12 py-5 border border-[#d4af37]/20 text-[#d4af37] text-sm hover:text-black transition-all overflow-hidden rounded-full bg-black hover:border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
            >
              <span className="relative z-10 flex items-center gap-3 font-bold tracking-widest uppercase">
                {t.services.load_more}
                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform -z-0"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
