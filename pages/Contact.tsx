
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="pt-40 px-6 md:px-12 max-w-7xl mx-auto pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div>
          <h1 className="text-8xl md:text-[10vw] font-black uppercase leading-[0.75] tracking-tighter mb-16 text-charcoal">
            Say <br/> <span className="text-plum italic font-serif lowercase font-normal normal-case">Hello</span>
          </h1>
          <p className="text-3xl font-light leading-snug text-charcoal/80 mb-16">
            I like building with people who care about <span className="text-coral font-serif italic">clarity</span>, learning, and meaningful results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/30 mb-8">What I Do</h3>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-charcoal">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-coral"></span> Concept Strategy</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-plum"></span> Creative Tech</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-sage"></span> Learning Design</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-charcoal"></span> Workshops</li>
              </ul>
            </div>
            <div className="p-8 bg-sage/10 rounded-3xl border border-sage/20 text-charcoal/70">
              <p className="text-sm italic font-serif leading-relaxed">
                "I prefer projects that help people grow and feel more capable in their work and lives."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-20 rounded-[4rem] shadow-2xl shadow-charcoal/5 border border-charcoal/5">
          <h3 className="text-3xl font-black uppercase mb-12 text-charcoal">Start a project</h3>
          <form className="space-y-10">
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/30 group-focus-within:text-plum transition-colors">Your Name</label>
              <input type="text" className="w-full bg-transparent border-b-2 border-charcoal/10 py-4 focus:border-plum transition-all outline-none text-xl font-medium" placeholder="Jane Doe" />
            </div>
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/30 group-focus-within:text-plum transition-colors">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b-2 border-charcoal/10 py-4 focus:border-plum transition-all outline-none text-xl font-medium" placeholder="jane@example.com" />
            </div>
            <div className="group space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/30 group-focus-within:text-plum transition-colors">The Problem or Goal</label>
              <textarea rows={4} className="w-full bg-transparent border-b-2 border-charcoal/10 py-4 focus:border-plum transition-all outline-none resize-none text-xl font-medium" placeholder="Tell me what you're building..."></textarea>
            </div>
            <button className="w-full py-6 bg-plum text-white font-black uppercase tracking-[0.25em] rounded-full hover:bg-coral hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-plum/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
