
import React from 'react';
import { motion } from 'framer-motion';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-[0.7] tracking-tighter mb-12 text-charcoal">
            Human <br/> <span className="text-sage italic font-serif lowercase font-normal normal-case">Learning</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-charcoal/60 leading-tight">
            I teach in a way that feels clear, kind, and practical. No noise, just clarity.
          </p>
        </div>
        <div className="pb-4 border-b border-charcoal/10 flex justify-between items-end">
           <span className="text-xs font-black uppercase tracking-widest opacity-20">2024 / 2025 Sessions</span>
           <span className="text-xs font-black uppercase tracking-widest text-plum underline">Available for Booking</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/5 overflow-hidden rounded-[3rem] border border-charcoal/5 shadow-2xl">
        {COURSES.map((course, i) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: "rgba(255, 122, 92, 0.05)" }}
            className="bg-cream p-12 md:p-20 group transition-all"
          >
            <span className="text-xs font-black text-plum mb-12 block tracking-[0.5em] uppercase">Module 0{i + 1}</span>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-charcoal mb-8 group-hover:text-coral transition-colors">
              {course.title}
            </h3>
            <p className="text-lg font-light text-charcoal/70 leading-relaxed mb-12 max-w-md">
              {course.description}
            </p>
            <div className="flex gap-4">
               <span className="text-xs font-black uppercase px-4 py-2 border border-charcoal/10 rounded-full">Interactive</span>
               <span className="text-xs font-black uppercase px-4 py-2 border border-charcoal/10 rounded-full">60 Minutes</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-40 bg-charcoal text-cream rounded-[4rem] p-12 md:p-24 flex flex-col items-center text-center">
         <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10">Invite the <br/> <span className="text-coral italic font-serif lowercase font-normal normal-case">Conversation.</span></h2>
         <p className="text-xl opacity-60 max-w-2xl mb-12">Available for guest lectures, workshops, virtual events, and conferences worldwide.</p>
         <button className="px-16 py-6 bg-coral text-white rounded-full font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:text-charcoal transition-all">
            Book a Workshop
         </button>
      </div>
    </div>
  );
};

export default Courses;
