
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Globe, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
  lang: 'ar' | 'en';
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack, lang }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isRtl = lang === 'ar';
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.imageUrls.length) % project.imageUrls.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: isRtl ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isRtl ? -100 : 100 }}
      className="fixed inset-0 z-[160] bg-[#050505] overflow-y-auto"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="sticky top-0 z-10 bg-[#050505]/80 backdrop-blur-md border-b border-[#d4af37]/20 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors group">
            <BackIcon className={`${isRtl ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'} transition-transform`} />
            <span className="font-bold">{isRtl ? 'العودة للمشاريع' : 'Back to Projects'}</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="font-serif-lux font-bold gold-metallic text-xl">Not Null</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="relative group rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-[0_0_50px_rgba(212,175,55,0.1)] aspect-video bg-black/40">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={project.imageUrls[currentImageIndex]} 
                  alt={`${project.title_ar} - ${currentImageIndex + 1}`} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-black/40 border border-[#d4af37]/10 rounded-xl">
                <Globe className="text-[#d4af37] mb-3" />
                <h4 className="text-white mb-1">{isRtl ? 'نوع المشروع' : 'Project Category'}</h4>
                <p className="text-gray-400 text-sm">{isRtl ? project.category_ar : project.category_en}</p>
              </div>
              <div className="p-6 bg-black/40 border border-[#d4af37]/10 rounded-xl">
                <Shield className="text-[#d4af37] mb-3" />
                <h4 className="text-white mb-1">{isRtl ? 'حالة الأمان' : 'Security Status'}</h4>
                <p className="text-gray-400 text-sm">{isRtl ? 'مشفر بالكامل' : 'Fully Encrypted'}</p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h1 className={`text-4xl md:text-6xl font-bold mb-4 gold-metallic ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>
                {isRtl ? project.title_ar : project.title_en}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                {isRtl ? project.description_ar : project.description_en}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className={`text-2xl text-[#d4af37] ${isRtl ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-[#d4af37]`}>
                {isRtl ? 'عن المشروع' : 'About Project'}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {isRtl ? project.details_ar : project.details_en}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className={`text-2xl text-[#d4af37] ${isRtl ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-[#d4af37]`}>
                {isRtl ? 'المميزات الرئيسية' : 'Key Features'}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(isRtl ? project.features_ar : project.features_en).map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-[#d4af37] w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
