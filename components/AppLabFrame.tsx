
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AppLabFrameProps {
  title: string;
  description: string;
  purpose: string;
  image: string;
}

const AppLabFrame: React.FC<AppLabFrameProps> = ({ title, description, purpose, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 group">
      <div className="order-2 lg:order-1">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-plum mb-6 block italic">App Prototype</span>
        <h3 className="text-5xl font-black uppercase mb-8 tracking-tighter text-charcoal">{title}</h3>
        <p className="text-xl font-light text-charcoal/80 mb-10 leading-relaxed max-w-lg">
          {description}
        </p>
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-sage/10 rounded-full border border-sage/30">
          <div className="w-2 h-2 rounded-full bg-plum animate-pulse"></div>
          <span className="text-xs font-bold text-charcoal/60 italic">{purpose}</span>
        </div>
      </div>

      <div 
        className="order-1 lg:order-2 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative bg-charcoal p-4 rounded-[3rem] shadow-2xl overflow-hidden aspect-[4/3] border-[10px] border-charcoal">
          <motion.div 
            animate={{ scale: isHovered ? 1.05 : 1 }}
            className="w-full h-full rounded-[2rem] overflow-hidden bg-cream"
          >
            <img src={image} className="w-full h-full object-cover grayscale brightness-90 contrast-110" alt={title} />
          </motion.div>
          {/* Label Tag */}
          <div className="absolute top-8 right-8 bg-coral text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
             Experimental
          </div>
        </div>
        {/* Subtle shadow glow */}
        <div className="absolute -inset-4 bg-plum opacity-5 blur-[100px] rounded-full -z-10 group-hover:opacity-10 transition-opacity"></div>
      </div>
    </div>
  );
};

export default AppLabFrame;
