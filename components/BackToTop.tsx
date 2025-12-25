
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: '#1D1F24' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[80] w-12 h-12 md:w-14 md:h-14 bg-charcoal text-cream rounded-full flex flex-col items-center justify-center shadow-2xl pointer-events-auto border border-white/10 group"
          aria-label="Back to top"
        >
          <motion.span 
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-xl leading-none font-serif italic"
          >
            ↑
          </motion.span>
          <span className="text-[7px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity -mt-1">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
