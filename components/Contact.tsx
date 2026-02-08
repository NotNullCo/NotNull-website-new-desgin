
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { TRANSLATIONS } from '../constants';

interface ContactProps {
  lang: 'ar' | 'en';
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const t = TRANSLATIONS[lang];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className={`flex items-center justify-center gap-4 text-[#d4af37] font-musnad tracking-[0.4em] text-lg opacity-60 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
            <span>𐩥𐩵</span>
            <div className="w-12 h-px bg-[#d4af37]/30"></div>
            <span className={`tracking-normal uppercase text-base ${isRtl ? 'font-reem' : 'font-english'}`}>{t.contact.badge}</span>
          </div>
          <motion.h2 className={`text-3xl md:text-5xl font-bold mt-6 ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>
            {t.contact.title.split(' ').slice(0, -2).join(' ')} <span className="gold-metallic">{t.contact.title.split(' ').slice(-2).join(' ')}</span>
          </motion.h2>
          <div className="h-px w-24 bg-[#d4af37]/20 mx-auto mt-6"></div>
        </div>

        <div className={`flex flex-col lg:flex-row gap-12 items-start ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className="lg:w-1/3 space-y-10 w-full">
            <div className={`flex items-center gap-6 ${isRtl ? 'flex-row' : 'flex-row-reverse text-right'}`}>
              <div className="w-14 h-14 flex items-center justify-center border border-[#d4af37]/30 text-[#d4af37]"><Mail size={24} /></div>
              <div>
                <h4 className="text-xl font-bold text-white mb-0.5">{t.contact.email}</h4>
                <p className="text-gray-500 text-base">info@null-software.com</p>
              </div>
            </div>
            <div className={`flex items-center gap-6 ${isRtl ? 'flex-row' : 'flex-row-reverse text-right'}`}>
              <div className="w-14 h-14 flex items-center justify-center border border-[#d4af37]/30 text-[#d4af37]"><Phone size={24} /></div>
              <div>
                <h4 className="text-xl font-bold text-white mb-0.5">{t.contact.phone}</h4>
                <p className="text-gray-500 text-base" dir="ltr">+966 50 000 0000</p>
              </div>
            </div>
            <div className={`flex items-center gap-6 ${isRtl ? 'flex-row' : 'flex-row-reverse text-right'}`}>
              <div className="w-14 h-14 flex items-center justify-center border border-[#d4af37]/30 text-[#d4af37]"><MapPin size={24} /></div>
              <div>
                <h4 className="text-xl font-bold text-white mb-0.5">{t.contact.location}</h4>
                <p className="text-gray-500 text-base">{t.contact.loc_val}</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full bg-[#050505] p-10 border border-[#d4af37]/10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs text-[#d4af37]/80 uppercase tracking-widest font-bold">{t.contact.name_label}</label>
                <input type="text" className="w-full bg-white/5 border border-[#d4af37]/10 p-4 text-lg text-white focus:border-[#d4af37]/50 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-[#d4af37]/80 uppercase tracking-widest font-bold">{t.contact.email_label}</label>
                <input type="email" className="w-full bg-white/5 border border-[#d4af37]/10 p-4 text-lg text-white focus:border-[#d4af37]/50 transition-all outline-none" />
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-xs text-[#d4af37]/80 uppercase tracking-widest font-bold">{t.contact.msg_label}</label>
                <textarea rows={4} className="w-full bg-white/5 border border-[#d4af37]/10 p-4 text-lg text-white focus:border-[#d4af37]/50 transition-all outline-none resize-none"></textarea>
              </div>
              <div className="col-span-2">
                <button className="w-full py-5 bg-[#d4af37] text-black text-xl font-bold uppercase tracking-widest hover:bg-[#f6e05e] transition-all flex items-center justify-center gap-3">
                  {t.contact.send}
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
