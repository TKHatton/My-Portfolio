
import React from 'react';
import { motion } from 'framer-motion';
import { WIP_ITEMS } from '../constants';

const StudioWall: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-4">
      {WIP_ITEMS.map((item, idx) => {
        const rotation = (idx % 3 === 0) ? -2 : (idx % 3 === 1) ? 3 : -1;
        return (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
            style={{ rotate: rotation }}
            className="relative bg-white p-8 pb-16 shadow-2xl shadow-charcoal/10 border border-charcoal/5 group transition-all"
          >
            {/* Tape Effect */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-sage/30 backdrop-blur-sm rotate-2 z-20"></div>

            {/* Thumbnail Image */}
            {item.image && (
              <div className="mb-6 -mx-8 -mt-8 h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            <div className={`mb-8 flex justify-between items-start ${item.image ? 'mt-8' : ''}`}>
              <span className="text-xs font-black uppercase tracking-widest text-plum/60">{item.status}</span>
              <span className="text-xs font-serif italic text-charcoal/20">#{idx + 1}</span>
            </div>

            <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter text-charcoal leading-none">{item.title}</h3>
            <p className="text-sm font-medium text-charcoal/70 leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="border-t border-charcoal/5 pt-6 mt-auto">
              <div className="flex items-center gap-2 mb-4">
                 <div className="h-1 flex-1 bg-charcoal/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: idx === 0 ? '40%' : '75%' }}
                      className="h-full bg-coral"
                    />
                 </div>
                 <span className="text-xs font-black">{idx === 0 ? '40%' : '75%'}</span>
              </div>
              <button
                onClick={() => {
                  if (item.url) {
                    window.open(item.url, '_blank');
                  }
                }}
                className="text-xs font-black uppercase tracking-widest border-b-2 border-charcoal pb-1 hover:text-coral hover:border-coral transition-colors"
              >
                {item.url ? 'Visit App' : 'Request Access'}
              </button>
            </div>

            {/* Scribble Easter Egg */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="font-serif italic text-xs text-plum">"Refining the flow..."</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StudioWall;
