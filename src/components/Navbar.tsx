import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 md:px-10 py-4 sm:py-5 flex justify-between items-center transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#E9E9E7]/90 backdrop-blur-md border-b border-black/[0.06]'
            : 'bg-transparent'
        }`}
      >
        {/* Left Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-heading font-medium tracking-[-0.03em] text-[#050505] text-[20px] sm:text-[22px] md:text-[25px] flex items-center gap-1 group text-left cursor-pointer transition-opacity duration-200 hover:opacity-75 focus-visible:outline-hidden"
        >
          <span>PRANAV®</span>
          <span className="text-[26px] sm:text-[30px] leading-none inline-block transform group-hover:rotate-45 transition-transform duration-300">
            ✳︎
          </span>
        </button>

        {/* Center Desktop Navigation (md and up) */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1 text-[21px] lg:text-[23px] text-[#050505] font-body"
        >
          {navLinks.map((item, index) => (
            <React.Fragment key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="hover:opacity-55 transition-opacity duration-200 cursor-pointer focus-visible:outline-hidden"
              >
                {item.label}
              </button>
              {index < navLinks.length - 1 && (
                <span className="text-[#050505] select-none mr-2">,</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right Desktop Get In Touch (md and up) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollTo('contact')}
            className="text-[20px] lg:text-[22px] text-[#050505] underline underline-offset-4 hover:opacity-55 transition-opacity duration-200 cursor-pointer font-body focus-visible:outline-hidden"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Hamburger Button (below md) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative w-9 h-9 flex flex-col justify-center items-center gap-1.5 z-50 p-1 cursor-pointer focus-visible:outline-hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {/* Top Line */}
          <span
            className={`w-6 h-[2px] bg-[#050505] transition-all duration-300 ease-in-out transform origin-center ${
              mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
            }`}
          />
          {/* Middle Line */}
          <span
            className={`w-6 h-[2px] bg-[#050505] transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
            }`}
          />
          {/* Bottom Line */}
          <span
            className={`w-6 h-[2px] bg-[#050505] transition-all duration-300 ease-in-out transform origin-center ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Full-Screen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#E9E9E7] md:hidden flex flex-col justify-between px-8 pt-28 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest text-black/40 font-mono">
                Index / Menu
              </span>
              <div className="flex flex-col gap-5">
                {navLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-left font-heading text-[32px] sm:text-[38px] text-[#050505] hover:opacity-55 transition-opacity"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-black/10 flex flex-col gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="text-left text-[22px] text-[#050505] underline underline-offset-4"
              >
                Get in touch
              </button>
              <div className="text-xs font-mono text-black/50">
                Sai Pranav Reddy • AI & Full Stack Developer
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
