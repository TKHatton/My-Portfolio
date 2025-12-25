
import React from 'react';
import { motion } from 'framer-motion';

const KineticIntro: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const sentence = "I build creative tools, art, and learning experiences that help people think clearly and create with confidence.";
  const words = sentence.split(" ");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 5, duration: 1.2, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center p-12 text-center"
    >
      <div className="max-w-4xl flex flex-wrap justify-center gap-x-4 gap-y-2">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: i * 0.1,
              duration: 1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className={`text-2xl md:text-5xl font-black uppercase tracking-tighter ${
              ['creative', 'tools', 'art', 'confidence'].includes(word.toLowerCase().replace(/[.,]/g, '')) 
              ? 'text-coral italic font-serif lowercase font-normal normal-case' 
              : 'text-cream'
            }`}
          >
            {word}
          </motion.span>
        ))}
      </div>
      
      {/* Progress Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 4.5, ease: "easeInOut" }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-sage origin-left"
      />
    </motion.div>
  );
};

export default KineticIntro;
