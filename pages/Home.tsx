
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollSection from '../components/ScrollSection';
import KineticIntro from '../components/KineticIntro';

const Home: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="relative">
      {!introFinished && <KineticIntro onComplete={() => setIntroFinished(true)} />}
      
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-40">
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-[0.75] tracking-tighter text-charcoal mb-12 mix-blend-multiply"
          >
            Creative <br/>
            <span className="text-plum italic font-serif lowercase font-normal normal-case ml-[10vw]">Technologist</span>
          </motion.h1>
          
          <div className="absolute top-0 right-0 hidden lg:block">
            <span className="vertical-text text-xs font-black uppercase tracking-[1em] text-charcoal/20 select-none">
              LENISE KENNEY • EST. 19XX • STUDIO LAB
            </span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mt-24"
        >
          <p className="text-2xl md:text-4xl font-light text-charcoal/80 leading-tight max-w-xl">
            Helping people <span className="text-coral font-serif italic">think clearly</span> and create with confidence through elegant systems.
          </p>
          <div className="flex flex-col gap-4">
             <Link to="/works" className="group flex items-center gap-6 text-xs font-black uppercase tracking-[0.3em]">
                View Portfolio
                <div className="h-[1px] w-24 bg-charcoal/20 group-hover:w-40 group-hover:bg-coral transition-all duration-500"></div>
             </Link>
          </div>
        </motion.div>
      </section>

      <ScrollSection className="bg-sage/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-black uppercase tracking-[0.5em] text-plum/60 mb-4 block">Meet Lenise</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Video on Left */}
            <div className="relative order-2 lg:order-1">
              <div className="relative bg-charcoal p-3 md:p-4 rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.3)] overflow-hidden border-[8px] border-charcoal group hover:border-plum transition-all duration-500">
                <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-video">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/Rose.png"
                  >
                    <source src="/videos/hero-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              {/* Enhanced glow effect */}
              <div className="absolute -inset-8 bg-plum/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
            </div>

            {/* Text on Right */}
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
                Creating <br/> with <span className="font-serif italic lowercase font-normal normal-case text-plum">purpose.</span>
              </h2>
              <p className="text-xl md:text-2xl font-light text-charcoal/70 leading-relaxed mb-12">
                I build tools that help people think clearly, learn deeply, and create with confidence. Watch the video to learn more about my approach.
              </p>
              <Link to="/about" className="px-12 py-5 bg-charcoal text-cream rounded-full text-xs font-black uppercase tracking-widest hover:bg-plum hover:scale-105 transition-all inline-block shadow-2xl">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </ScrollSection>

      <ScrollSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square">
             <div className="absolute -inset-4 border border-charcoal/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
             <img src="https://picsum.photos/seed/editorial/800/800" className="w-full h-full object-cover rounded-full grayscale mix-blend-multiply opacity-80" alt="Process" />
          </div>
          <div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12">Art as <br/> <span className="text-coral italic font-serif lowercase font-normal normal-case">Narrative.</span></h2>
            <p className="text-xl md:text-2xl font-light text-charcoal/70 leading-relaxed mb-12">
              My art sits at the edge of imagination and reflection. I use it to explore change, memory, and possibility.
            </p>
            <Link to="/about" className="px-12 py-5 bg-charcoal text-cream rounded-full text-xs font-black uppercase tracking-widest hover:bg-plum hover:scale-105 transition-all inline-block shadow-2xl">
              Explore the Stories
            </Link>
          </div>
        </div>
      </ScrollSection>

      {/* Floating thought bubble egg */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-32 right-12 hidden lg:block pointer-events-none z-50"
      >
        <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-2xl rounded-br-none shadow-xl border border-charcoal/5">
           <span className="text-[10px] font-bold italic text-plum tracking-tighter">Stay curious.</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
