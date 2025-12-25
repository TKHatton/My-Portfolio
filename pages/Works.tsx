
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ART_WORKS, APP_WORKS } from '../constants';
import { WorkItem } from '../types';

const Works: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const allWorks = [...ART_WORKS, ...APP_WORKS];

  return (
    <div className="pt-40 px-6 md:px-12 pb-32 max-w-7xl mx-auto">
      <header className="mb-32">
        <h1 className="text-7xl md:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter mb-10 text-charcoal">
          Selected <br/> <span className="text-plum italic font-serif lowercase font-normal normal-case">Works</span>
        </h1>
        <div className="h-1 w-24 bg-coral mb-10"></div>
        <p className="text-2xl md:text-3xl max-w-3xl text-charcoal/60 font-light">
          Simple digital tools and visual experiments designed to help you slow down and feel steadier.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {allWorks.map((work) => (
          <motion.div
            key={work.id}
            layoutId={work.id}
            onClick={() => setSelectedWork(work)}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] mb-8 bg-sage/10 relative shadow-xl group-hover:shadow-charcoal/10 transition-shadow">
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 filter saturate-[0.2] group-hover:saturate-100"
              />
              <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-widest rounded-full text-charcoal opacity-0 group-hover:opacity-100 transition-opacity">
                View Project
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold uppercase tracking-tight text-charcoal group-hover:text-plum transition-colors">{work.title}</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-coral font-black italic">{work.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-charcoal/95 backdrop-blur-sm overflow-y-auto"
          >
            <div className="max-w-6xl w-full bg-cream rounded-[3rem] overflow-hidden shadow-2xl relative">
              <button 
                onClick={() => setSelectedWork(null)}
                className="absolute top-10 right-10 z-10 w-12 h-12 bg-charcoal text-cream rounded-full flex items-center justify-center font-black hover:bg-coral transition-colors"
              >
                ✕
              </button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-[400px] lg:h-full min-h-[500px]">
                  <img src={selectedWork.image} className="w-full h-full object-cover" alt={selectedWork.title} />
                </div>
                <div className="p-10 md:p-20 flex flex-col justify-center text-charcoal">
                   <span className="text-xs uppercase tracking-[0.4em] text-plum font-black mb-6 block italic">{selectedWork.category}</span>
                   <h2 className="text-5xl md:text-6xl font-black uppercase mb-10 leading-none">{selectedWork.title}</h2>
                   <p className="text-2xl font-light mb-10 leading-relaxed text-charcoal/80">
                     {selectedWork.description}
                   </p>
                   {selectedWork.meaning && (
                     <div className="mb-10 p-8 bg-sage/10 rounded-2xl border-l-4 border-sage">
                       <h4 className="text-xs font-black uppercase opacity-40 mb-3 tracking-widest">The Meaning</h4>
                       <p className="text-xl italic font-serif">{selectedWork.meaning}</p>
                     </div>
                   )}
                   {selectedWork.fullStory && (
                      <div className="opacity-60">
                        <h4 className="text-xs font-black uppercase mb-3 tracking-widest">Background</h4>
                        <p className="text-lg">{selectedWork.fullStory}</p>
                      </div>
                   )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Works;
