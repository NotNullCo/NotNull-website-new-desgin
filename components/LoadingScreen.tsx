
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LOADING_TEXTS = [
  "جاري تهيئة الوجود الرقمي...",
  "استدعاء عراقة المسند...",
  "تجاوز الفراغ المنطقي...",
  "Not Null: القيمة تبدأ هنا"
];

const LoadingScreen: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % LOADING_TEXTS.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]"></div>
      
      <div className="relative w-24 h-40 mb-12">
        <motion.svg 
          viewBox="0 0 160 280" 
          className="w-full h-full drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        >
          {/* Diamond Symbol - Moved to Bottom */}
          <motion.rect 
            x="71" y="252" width="18" height="18"
            transform="rotate(45 80 261)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="fill-[#d4af37]"
          />
          {/* Correct Zig-Zag (Shifted Up) */}
          <motion.path 
            d="M 115,20 L 45,90 L 115,160 L 45,230" 
            fill="none" 
            stroke="#d4af37" 
            strokeWidth="24" 
            strokeLinecap="butt"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      <div className="text-center relative z-10">
        <motion.div 
          key={textIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="h-8"
        >
          <p className="text-[#d4af37] font-reem text-xl tracking-wide">
            {LOADING_TEXTS[textIndex]}
          </p>
        </motion.div>
        
        <div className="w-64 h-[2px] bg-white/5 mt-6 mx-auto relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
