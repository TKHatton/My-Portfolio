
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Learning', path: '/learning' },
    { name: 'Beta', path: '/wip' },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-[90] py-6 px-6 md:px-12 flex justify-between items-center pointer-events-none">
        <div className="flex items-center pointer-events-auto">
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-black tracking-tighter uppercase hover:opacity-70 transition-opacity flex items-center"
          >
            <span className="font-serif italic lowercase font-normal text-plum normal-case mr-1.5">L.</span>
            <span>Kenney</span>
          </Link>
        </div>

        <div className="flex items-center gap-6 pointer-events-auto">
          {/* Desktop-only Horizontal Links (Shown on LG and up) */}
          <div className="hidden lg:flex gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] font-black transition-all hover:text-plum ${
                  location.pathname === link.path ? 'text-charcoal' : 'text-charcoal/30'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Work With Me Button - Persistent Charcoal Style */}
          <Link
            to="/contact"
            className="hidden sm:block px-8 py-3.5 bg-charcoal text-cream text-xs uppercase font-black tracking-[0.25em] rounded-full hover:bg-black hover:scale-105 transition-all shadow-xl"
          >
            Work With Me
          </Link>

          {/* Mobile-only Hamburger (Visible below LG breakpoint) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-white border border-charcoal/5 rounded-full shadow-lg"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              className="w-6 h-0.5 bg-charcoal rounded-full"
            />
            <motion.span 
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-charcoal rounded-full"
            />
            <motion.span 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              className="w-6 h-0.5 bg-charcoal rounded-full"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[85] bg-cream flex flex-col justify-center px-10"
          >
            <div className="space-y-8">
              <span className="text-xs font-black uppercase tracking-[0.5em] text-plum/40 block">Explore the Lab</span>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-charcoal hover:text-coral transition-colors flex items-baseline gap-4"
                  >
                    <span className="text-sm font-serif italic text-plum opacity-30">0{navLinks.indexOf(link) + 1}</span>
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="pt-12 mt-12 border-t border-charcoal/5">
                <Link
                  to="/contact"
                  className="text-3xl font-black uppercase tracking-tighter text-charcoal flex items-center gap-4 hover:text-plum"
                >
                  Work With Me <span className="text-lg">→</span>
                </Link>
              </div>
            </div>

            <div className="absolute top-20 right-[-10%] w-64 h-64 bg-sage/10 blur-[100px] rounded-full -z-10"></div>
            <div className="absolute bottom-10 left-[-10%] w-80 h-80 bg-coral/10 blur-[100px] rounded-full -z-10"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
