
import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: 'ar' | 'en';
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {[...Array(60)].map((_, i) => (
          <div 
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
              '--duration': `${3 + Math.random() * 5}s`
            } as any}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-8 gold-glow">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 160 280" className="w-32 md:w-48">
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#b8860b" />
                    <stop offset="25%" stopColor="#f6e05e" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="75%" stopColor="#f6e05e" />
                    <stop offset="100%" stopColor="#b8860b" />
                  </linearGradient>
                </defs>
                <path d="M 115,20 L 45,90 L 115,160 L 45,230" fill="none" stroke="url(#goldGradient)" strokeWidth="24" strokeLinecap="butt" strokeLinejoin="miter" />
                <rect x="71" y="252" width="18" height="18" fill="url(#goldGradient)" transform="rotate(45 80 261)" />
              </svg>
            </motion.div>
          </div>

          <div className="flex flex-col items-center mb-8">
            <h1 className="font-gothic text-5xl md:text-9xl text-[#d4af37] tracking-tight lowercase leading-none">
              not null
            </h1>
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mt-4"></div>
          </div>

          <h2 className={`text-xl md:text-3xl font-light mb-12 tracking-wide text-gray-300 ${isRtl ? 'font-reem leading-relaxed' : 'font-serif-lux'}`}>
             {t.hero.subtitle.split(' ').slice(0, -2).join(' ')} <span className="gold-metallic font-bold">{t.hero.subtitle.split(' ').slice(-2).join(' ')}</span>
          </h2>
          
          <div className={`flex flex-col md:flex-row items-center justify-center gap-8 ${isRtl ? 'font-reem' : 'font-english font-semibold'}`}>
            <button className="px-12 py-4 text-lg bg-[#d4af37] text-black hover:bg-[#f6e05e] transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
              {t.hero.cta_start}
            </button>
            <button className="px-12 py-4 text-lg border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all">
              {t.hero.cta_work}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
