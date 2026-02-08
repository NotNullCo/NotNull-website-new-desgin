
import React, { useEffect, useState } from 'react';

const MUSNAD_CHARS = [
  '𐩠', '𐩡', '𐩢', '𐩣', '𐩤', '𐩥', '𐩦', '𐩧', '𐩨', '𐩩', 
  '𐩪', '𐩫', '𐩬', '𐩭', '𐩮', '𐩯', '𐩰', '𐩱', '𐩲', '𐩳'
];

const MusnadBackground: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; char: string; left: string; duration: string; size: string; delay: string }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      char: MUSNAD_CHARS[Math.floor(Math.random() * MUSNAD_CHARS.length)],
      left: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`,
      size: `${20 + Math.random() * 30}px`,
      delay: `${-Math.random() * 20}s`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="musnad-particle font-musnad"
          style={{
            left: p.left,
            bottom: '-10%',
            fontSize: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
};

export default MusnadBackground;
