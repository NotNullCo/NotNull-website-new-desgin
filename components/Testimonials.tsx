
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS, TRANSLATIONS } from '../constants';

interface TestimonialsProps {
  lang: 'ar' | 'en';
}

interface TestimonialCardProps {
  testimonial: typeof TESTIMONIALS[0];
  isRtl: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isRtl }) => (
  <div 
    className="w-[400px] md:w-[450px] flex-shrink-0 p-8 mx-4 bg-white/[0.03] border border-[#d4af37]/10 rounded-2xl backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] group relative overflow-hidden"
    dir={isRtl ? 'rtl' : 'ltr'}
  >
    {/* Musnad Watermark */}
    <div className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} font-musnad text-6xl text-[#d4af37]/5 select-none transition-all group-hover:text-[#d4af37]/10 group-hover:scale-110`}>
      {testimonial.symbol}
    </div>

    <div className="relative z-10">
      <div className="mb-6 text-[#d4af37]">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15L15 20L10 25L5 20L10 15Z" fill="currentColor" opacity="0.4" />
          <path d="M15 10L20 15L15 20L10 15L15 10Z" fill="currentColor" />
          <path d="M25 10L30 15L25 20L20 15L25 10Z" fill="currentColor" opacity="0.6" />
        </svg>
      </div>

      <p className={`text-gray-300 text-lg leading-relaxed mb-8 italic ${isRtl ? 'font-reem' : 'font-light'}`}>
        "{isRtl ? testimonial.text_ar : testimonial.text_en}"
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-[#d4af37] rounded-full scale-110 blur-[2px] opacity-0 group-hover:opacity-40 transition-opacity"></div>
          <img 
            src={testimonial.avatar} 
            alt={isRtl ? testimonial.name_ar : testimonial.name_en} 
            className="w-12 h-12 rounded-full object-cover border border-[#d4af37]/30 relative z-10"
          />
        </div>
        <div className={isRtl ? 'text-right' : 'text-left'}>
          <h4 className={`text-white font-bold text-base group-hover:text-[#d4af37] transition-colors ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>
            {isRtl ? testimonial.name_ar : testimonial.name_en}
          </h4>
          <p className="text-gray-500 text-[10px] tracking-widest uppercase">
            {isRtl ? testimonial.role_ar : testimonial.role_en}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const t = TRANSLATIONS[lang];

  // Divide the 12 testimonials into two groups of 6
  const row1Items = TESTIMONIALS.slice(0, 6);
  const row2Items = TESTIMONIALS.slice(6, 12);

  // Triple each group for a truly seamless infinite loop
  const row1Data = [...row1Items, ...row1Items, ...row1Items];
  const row2Data = [...row2Items, ...row2Items, ...row2Items];

  return (
    <section className="py-24 bg-[#030303] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`flex items-center justify-center gap-4 text-[#d4af37] font-musnad tracking-[0.4em] text-lg opacity-60 mb-4 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <span>𐩥𐩵</span>
            <div className="w-12 h-px bg-[#d4af37]/30"></div>
            <span className={`tracking-normal uppercase text-sm ${isRtl ? 'font-reem' : 'font-english'}`}>{t.testimonials.badge}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-3xl md:text-5xl font-bold mb-4 ${isRtl ? 'font-reem' : 'font-serif-lux'}`}
          >
            {t.testimonials.title.split(' ').slice(0, -2).join(' ')} <span className="gold-metallic">{t.testimonials.title.split(' ').slice(-2).join(' ')}</span>
          </motion.h2>
          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">{t.testimonials.desc}</p>
        </div>
      </div>

      {/* Row 1: Leftwards Marquee */}
      <div className="relative mb-8 flex overflow-hidden" dir="ltr">
        <motion.div 
          className="flex flex-nowrap w-max"
          animate={{ x: [0, "-33.333%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear",
          }}
        >
          {row1Data.map((item, idx) => (
            <TestimonialCard key={`row1-${idx}`} testimonial={item} isRtl={isRtl} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: Rightwards Marquee */}
      <div className="relative flex overflow-hidden" dir="ltr">
        <motion.div 
          className="flex flex-nowrap w-max"
          animate={{ x: ["-33.333%", 0] }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: "linear",
          }}
        >
          {row2Data.map((item, idx) => (
            <TestimonialCard key={`row2-${idx}`} testimonial={item} isRtl={isRtl} />
          ))}
        </motion.div>
      </div>
      
      {/* Cinematic Fading Masks */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#030303] via-[#030303]/90 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#030303] via-[#030303]/90 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;
