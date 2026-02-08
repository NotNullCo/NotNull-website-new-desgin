
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Star } from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailsProps {
  service: Service;
  onBack: () => void;
  lang: 'ar' | 'en';
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, onBack, lang }) => {
  const isRtl = lang === 'ar';
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="fixed inset-0 z-[150] bg-[#020202] overflow-y-auto"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="sticky top-0 z-20 bg-[#020202]/90 backdrop-blur-xl border-b border-[#d4af37]/10 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-3 text-[#d4af37] hover:text-white transition-all group">
            <BackIcon className={`${isRtl ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'} transition-transform`} />
            <span className="font-bold">{isRtl ? 'العودة' : 'Back'}</span>
          </button>
          <span className="font-serif-lux font-bold gold-metallic text-xl">Not Null</span>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`flex flex-col md:flex-row items-start gap-12 mb-20`}>
            <div className="md:w-1/3 flex flex-col items-center text-center">
              <div className="relative mb-8 w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-[#d4af37]/20 rotate-45 animate-spin-slow"></div>
                <div className="relative z-10 text-[#d4af37] scale-[2]">{service.icon}</div>
              </div>
              <h1 className={`text-4xl md:text-5xl font-bold text-white mb-2 ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>{isRtl ? service.title_ar : service.title_en}</h1>
              <div className="h-1 w-20 bg-[#d4af37] mx-auto mt-4"></div>
            </div>

            <div className="md:w-2/3">
              <p className="text-2xl text-gray-300 font-light leading-relaxed mb-8">{isRtl ? service.details_ar : service.details_en}</p>
              <div className={`p-8 bg-white/5 ${isRtl ? 'border-r-4' : 'border-l-4'} border-[#d4af37] backdrop-blur-sm`}>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                   <Star className="text-[#d4af37]" size={18} />
                   {isRtl ? 'لماذا نوت نول؟' : 'Why Not Null?'}
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed">{isRtl ? service.whyUs_ar : service.whyUs_en}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {(isRtl ? service.features_ar : service.features_en).map((feature, i) => (
              <div key={i} className="flex items-start gap-5 p-6 bg-[#080808] border border-[#d4af37]/10 group hover:border-[#d4af37]/30 transition-all">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#d4af37]/10 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg mb-1">{feature}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetails;
