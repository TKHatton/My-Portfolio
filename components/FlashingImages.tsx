
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlashingImagesProps {
  images: string[];
  interval?: number;
}

const FlashingImages: React.FC<FlashingImagesProps> = ({ images, interval = 100 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Small chance to stay on the same image for a "jitter" effect
      if (Math.random() > 0.1) {
        setIndex((prev) => (prev + 1) % images.length);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-zinc-200 rounded-3xl shadow-inner group">
      <img
        src={images[index]}
        alt="Creative visual sequence"
        className="w-full h-full object-cover filter contrast-125 saturate-[0.8] transition-opacity duration-75"
      />
      {/* Dynamic noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Subtle color flash overlays to feel more "fun" */}
      <div className="absolute inset-0 mix-blend-soft-light opacity-20 pointer-events-none group-hover:bg-plum transition-colors duration-500"></div>
    </div>
  );
};

export default FlashingImages;
