
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import WIP from './pages/WIP';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        <CustomCursor />
        <Navbar />
        <BackToTop />
        <main>
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/works" element={<PageWrapper><Works /></PageWrapper>} />
            <Route path="/learning" element={<PageWrapper><Courses /></PageWrapper>} />
            <Route path="/wip" element={<PageWrapper><WIP /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </main>
        
        {/* Editorial Footer */}
        <footer className="py-40 px-6 md:px-12 border-t border-charcoal/5 text-charcoal bg-white/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase mb-4 tracking-tighter">L. Kenney</h2>
              <p className="text-lg font-serif italic text-charcoal/30">Thinking clearly, creating fearlessly.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest opacity-30">Menu</h4>
                <div className="flex flex-col gap-2 uppercase text-xs font-black tracking-widest">
                  <Link to="/about" className="hover:text-coral transition-colors">About</Link>
                  <Link to="/works" className="hover:text-coral transition-colors">Works</Link>
                  <Link to="/learning" className="hover:text-coral transition-colors">Learning</Link>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest opacity-30">Connect</h4>
                <div className="flex flex-col gap-2 uppercase text-xs font-black tracking-widest">
                  <a href="#" className="hover:text-plum transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-plum transition-colors">Newsletter</a>
                </div>
              </div>
              <div className="space-y-4">
                 <h4 className="text-xs font-black uppercase tracking-widest opacity-30">Location</h4>
                 <p className="text-xs font-black uppercase tracking-widest">Digital Native • Planet Earth</p>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-black uppercase tracking-[0.4em] opacity-20">
             <p>© {new Date().getFullYear()} Lenise Kenney Studio</p>
             <p>Built with intention and soul</p>
          </div>
        </footer>

        {/* Beta Invitation Bubble - Bottom-Left Position Fixed for Mobile and Desktop */}
        <motion.div 
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          transition={{ delay: 5, type: 'spring' }}
          className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[80] pointer-events-none"
        >
          <Link to="/wip" className="bg-charcoal text-cream px-6 py-4 rounded-full flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] pointer-events-auto hover:bg-black hover:scale-105 transition-all group border border-white/10">
             <div className="w-2 h-2 bg-sage rounded-full animate-pulse group-hover:bg-white"></div>
             <span className="text-xs font-black uppercase tracking-widest leading-none">Join the Beta</span>
          </Link>
        </motion.div>
      </div>
    </Router>
  );
};

export default App;
