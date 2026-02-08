
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-6 gap-10 p-10 text-[#d4af37] font-musnad text-3xl">
          {[...Array(24)].map((_, i) => <span key={i}>𐩬𐩡</span>)}
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bayan-shadow bg-[#050505] border border-[#d4af37]/20 rounded-lg p-10 md:p-16 text-center relative"
        >
          <div className="flex justify-center mb-10">
            <svg viewBox="0 0 200 100" className="w-32 h-auto">
              <path d="M40 20 L160 20 M40 80 L160 80" stroke="#d4af37" strokeWidth="1" opacity="0.3" />
              <text x="50%" y="55%" textAnchor="middle" fill="#d4af37" className="font-reem text-4xl font-bold tracking-widest">بيان</text>
            </svg>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg md:text-xl text-[#d4af37] font-reem tracking-[0.2em] mb-2">الجمهور الكريم</h3>
            
            <p className="text-[#d4af37]/90 text-lg md:text-xl font-reem tracking-wide leading-relaxed">
              مبارك عليكم حقبة التحول الرقمي الجديدة، وكل عام ومشاريعكم في ريادة وتألق.
            </p>

            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mx-auto"></div>

            <p className="text-gray-300 text-base md:text-lg leading-[1.7] font-light text-justify md:text-center">
              عملت الفرق الفنية في شركة <span className="text-[#d4af37] font-bold">Not Null</span> على مدار الساعة، في محاولة لإنتاج وعرض حلول برمجية تثق بأنها ستكون محط تقدير وثناء. وبالرغم من كل العقبات التقنية، بذلنا كل ما بوسعنا لضمان تقديم تجربة فريدة، لنتجاوز المألوف ونصل إلى لحظة التميز المطلق التي تليق بطموحاتكم.
            </p>

            <p className="text-gray-200 text-base md:text-lg font-reem mt-8">
              نثق في قدرتنا على تجاوز التحديات، بفضل دعمكم المستمر وتقديركم لفلسفتنا البرمجية.
            </p>

            <div className="pt-12 flex flex-col items-center gap-3">
              <p className="text-[#d4af37] font-reem text-lg">شركة نوت نول للإنتاج البرمجي النوعي.</p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></div>
                <span className="font-serif-lux text-white text-xl tracking-[0.3em] lowercase">null</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
