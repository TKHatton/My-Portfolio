
import React from 'react';
import StudioWall from '../components/StudioWall';

const WIP: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-32 text-center">
        <div className="inline-block px-4 py-1 bg-sage/20 rounded-full text-xs font-black uppercase tracking-[0.3em] text-charcoal mb-8">
           Live Lab • Experimental
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-[0.7] tracking-tighter mb-12 text-charcoal">
          Studio <br/> <span className="text-coral italic font-serif lowercase font-normal normal-case">Wall</span>
        </h1>
        <p className="text-2xl md:text-3xl font-light text-charcoal/60 max-w-3xl mx-auto">
          Unfinished ideas. Early builds. Things I am testing, improving, and shaping in public.
        </p>
      </header>

      <div className="relative">
        <StudioWall />
        
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-charcoal/[0.02] rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      </div>

      <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-12 md:p-24 rounded-[4rem] shadow-2xl shadow-charcoal/5 border border-charcoal/5">
         <div>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Join the <br/> <span className="text-plum italic font-serif lowercase font-normal normal-case">Beta Group</span></h2>
            <p className="text-xl font-light text-charcoal/70 mb-12 max-w-md">
              Testing helps these projects become stronger. If you enjoy early builds and honest feedback, I would love your help.
            </p>
         </div>
         <form className="space-y-6">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-cream border-2 border-charcoal/5 px-8 py-6 rounded-3xl focus:border-coral transition-colors outline-none text-xl"
            />
            <button className="w-full py-6 bg-charcoal text-white rounded-3xl font-black uppercase tracking-widest hover:bg-black hover:scale-[1.02] transition-all shadow-xl shadow-plum/20">
              Sign Up for Lab Access
            </button>
         </form>
      </div>
    </div>
  );
};

export default WIP;
