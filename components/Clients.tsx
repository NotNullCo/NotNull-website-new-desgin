
import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS, TRANSLATIONS } from '../constants';

interface ClientsProps {
  lang: 'ar' | 'en';
}

const Clients: React.FC<ClientsProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const t = TRANSLATIONS[lang];
  
  // Triple the clients list for a perfect seamless loop
  // We animate only 1/3 of the total width to create the infinite illusion
  const tripledClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-24 bg-[#020202] overflow-hidden relative border-t border-b border-[#d4af37]/10">
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <div className="text-center">
          <div className={`flex items-center justify-center gap-4 text-[#d4af37] font-musnad tracking-[0.6em] mb-4 text-xl opacity-40 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
            <span>𐩦𐩧𐩫𐩱𐩱</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-3xl md:text-5xl font-bold text-white ${isRtl ? 'font-reem' : 'font-serif-lux'}`}
          >
            {t.clients.title.split(' ')[0]} <span className="gold-metallic">{t.clients.title.split(' ').slice(1).join(' ')}</span>
          </motion.h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mx-auto mt-6"></div>
        </div>
      </div>

      {/* 
          Infinite Marquee Container
          dir="ltr" is essential to keep the X-axis coordinates consistent 
      */}
      <div className="relative flex items-center overflow-hidden py-8" dir="ltr">
        <motion.div 
          className="flex flex-nowrap w-max items-center"
          animate={{ x: [0, "-33.333%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear",
          }}
        >
          {tripledClients.map((client, index) => (
            <div key={`${client.id}-${index}`} className="flex items-center justify-center px-12 md:px-20">
              <div className="relative group cursor-pointer flex flex-col items-center">
                <div className="relative">
                  {/* Subtle glow behind logo on hover */}
                  <div className="absolute inset-0 bg-[#d4af37]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-8 md:h-12 w-auto object-contain transition-all duration-700 brightness-0 invert opacity-30 group-hover:opacity-100 group-hover:invert-0 group-hover:brightness-100 group-hover:scale-110 relative z-10" 
                  />
                </div>
                <span className={`mt-4 text-[10px] text-[#d4af37]/60 tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 ${isRtl ? 'font-reem' : 'font-english'}`}>
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cinematic Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#020202] via-[#020202]/90 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#020202] via-[#020202]/90 to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Clients;
