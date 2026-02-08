
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA, TRANSLATIONS } from '../constants';
import { Plus, Minus } from 'lucide-react';

interface FAQProps {
  lang: 'ar' | 'en';
}

const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isRtl = lang === 'ar';
  const t = TRANSLATIONS[lang];

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-[#d4af37] font-musnad tracking-[0.5em] mb-4 text-xl opacity-40"
          >
            𐩩𐩯𐩱𐩥𐩡
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-bold ${isRtl ? 'font-reem' : 'font-serif-lux'}`}
          >
            {t.faq.title.split(' ').slice(0, -1).join(' ')} <span className="gold-metallic">{t.faq.title.split(' ').slice(-1)}</span>
          </motion.h2>
          <p className="text-gray-400 mt-6 text-lg font-light max-w-xl mx-auto">{t.faq.desc}</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={item.id} 
              className={`border border-[#d4af37]/10 bg-[#050505] rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-[#d4af37]/40 shadow-[0_0_20px_rgba(212,175,55,0.05)]' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-right transition-colors hover:bg-[#d4af37]/5"
              >
                <span className={`text-lg font-bold text-white ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>
                  {isRtl ? item.q_ar : item.q_en}
                </span>
                <span className="text-[#d4af37] ml-4">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed border-t border-[#d4af37]/5 pt-4">
                      {isRtl ? item.a_ar : item.a_en}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
