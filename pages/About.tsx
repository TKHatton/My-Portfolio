
import React from 'react';
import { motion } from 'framer-motion';
import FlashingImages from '../components/FlashingImages';
import ScrollSection from '../components/ScrollSection';

const FLASH_IMAGES = [
  '/images/2 black women at bonfire.png',
  '/images/bliss on swing 1.png',
  '/images/Lady Flower Window3.png',
  '/images/Pleasure Mania 1.png',
  '/images/Whitney Houston.1.png',
  '/images/white locs.png',
  '/images/toddler in garden.png',
];

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="lg:sticky lg:top-40 h-fit">
           <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.75] tracking-tighter text-charcoal mb-12">
             Inside <br/> the <span className="text-coral italic font-serif lowercase font-normal normal-case">Mind</span>
           </h1>
           <div className="aspect-square relative group">
              <FlashingImages images={FLASH_IMAGES} interval={120} />
              <div className="absolute -bottom-6 -right-6 bg-charcoal text-cream p-8 rounded-3xl max-w-[200px] shadow-2xl hidden md:block">
                 <p className="text-xs font-serif italic leading-relaxed opacity-80">
                   "Each piece carries a feeling and a story. Hover to reveal the hidden narrative."
                 </p>
              </div>
           </div>
        </div>

        <div className="space-y-48 pt-20">
          <section>
            <span className="text-xs font-black uppercase tracking-[0.5em] text-plum mb-10 block">The Narrative</span>
            <p className="text-4xl md:text-5xl font-light leading-[1.1] text-charcoal mb-12">
              I experiment. I learn in <span className="text-sage font-serif italic">public</span>. I build things that start small and grow over time.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
               <div className="p-8 bg-white rounded-3xl border border-charcoal/5 shadow-xl">
                  <h4 className="text-xs font-black uppercase mb-4 opacity-40">Method</h4>
                  <p className="text-sm font-medium">Concept first. Polish later. Learn Always.</p>
               </div>
               <div className="p-8 bg-white rounded-3xl border border-charcoal/5 shadow-xl">
                  <h4 className="text-xs font-black uppercase mb-4 opacity-40">Philosophy</h4>
                  <p className="text-sm font-medium">Systems should serve human intuition.</p>
               </div>
            </div>
          </section>

          <section className="bg-plum p-12 md:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-xs font-black uppercase tracking-widest mb-12 opacity-60">Published Works</h3>
                <h4 className="text-5xl md:text-6xl font-serif italic mb-10 leading-[0.9]">"You Are the Genius. <br/> AI Is Just a Tool"</h4>
                <p className="text-xl font-light opacity-80 mb-12 max-w-lg">
                  Writing helps me see patterns. This book is a guide to staying grounded in your voice in a tech-heavy world.
                </p>
                <button className="px-12 py-5 bg-white text-plum rounded-full text-xs font-black uppercase tracking-widest shadow-xl hover:bg-coral hover:text-white transition-all">
                  Read the Preface
                </button>
             </div>
             <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-coral/20 blur-[120px] rounded-full"></div>
          </section>

          <section>
             <h2 className="text-xs font-black uppercase tracking-[0.5em] text-charcoal/30 mb-12 block">The Art Series</h2>
             <div className="space-y-24">
                <div className="group">
                   <h3 className="text-4xl font-black uppercase mb-4 group-hover:text-coral transition-colors">Metamorphosis</h3>
                   <p className="text-lg font-light text-charcoal/60 italic font-serif leading-relaxed">
                     Moments of quiet change. Soft strength. The space right before life shifts direction.
                   </p>
                </div>
                <div className="group">
                   <h3 className="text-4xl font-black uppercase mb-4 group-hover:text-plum transition-colors">Imagination Edge</h3>
                   <p className="text-lg font-light text-charcoal/60 italic font-serif leading-relaxed">
                     Visual stories that explore growth, identity, and where logic ends.
                   </p>
                </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
