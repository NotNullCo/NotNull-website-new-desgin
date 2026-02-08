
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textSize?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", showText = false, textSize = "text-2xl" }) => {
  return (
    <div className="flex items-center gap-3 group">
      <svg 
        viewBox="0 0 160 280" 
        className={`${className} transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]`}
      >
        <defs>
          <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b8860b" />
            <stop offset="25%" stopColor="#f6e05e" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="75%" stopColor="#f6e05e" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>
        </defs>
        
        {/* Zig-Zag Body - Balanced Center */}
        <path 
          d="M 115,20 L 45,90 L 115,160 L 45,230" 
          fill="none" 
          stroke="url(#logoGoldGrad)" 
          strokeWidth="28" 
          strokeLinecap="round" 
          strokeLinejoin="miter"
        />
        
        {/* Diamond (The "Dot" part - Perfect Bottom Center) */}
        <rect 
          x="70" y="250" width="20" height="20" 
          fill="url(#logoGoldGrad)" 
          transform="rotate(45 80 260)" 
        />
        
        {/* Subtle Internal Reflection Line */}
        <path 
          d="M 115,20 L 45,90 L 115,160 L 45,230" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeOpacity="0.2"
          transform="translate(-3, 0)"
        />
      </svg>
      
      {showText && (
        <span className={`font-gothic ${textSize} text-white lowercase tracking-tight group-hover:text-[#d4af37] transition-colors duration-300`}>
          not null
        </span>
      )}
    </div>
  );
};

export default Logo;
