
import React from 'react';
import { motion } from 'framer-motion';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children, className = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`min-h-screen flex flex-col justify-center px-6 md:px-24 py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default ScrollSection;
