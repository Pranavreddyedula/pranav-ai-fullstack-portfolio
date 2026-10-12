import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroVisual } from './HeroVisual';
import { useTypewriter } from '../hooks/useTypewriter';

export const Hero: React.FC = () => {
  const [isUnblurred, setIsUnblurred] = useState(false);
  const { displayText, isDone } = useTypewriter(
    'Glad you stopped in. Good ideas tend to find me. Now, what are we building?',
    { speed: 38, delay: 600 }
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#E9E9E7] flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Top subtle grid or empty space preserving editorial aesthetic */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Side: Editorial Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 z-10 max-w-2xl">
          {/* Blurred Intro Label */}
          <div
            onClick={() => setIsUnblurred(!isUnblurred)}
            className="cursor-pointer group select-none transition-all duration-300 mb-4 sm:mb-6"
            title="Click to toggle clarity"
          >
            <p
              style={{
                filter: isUnblurred ? 'none' : 'blur(4px)',
                fontSize: 'clamp(18px, 3.2vw, 26px)',
              }}
              className="text-[#050505] font-body leading-snug tracking-[-0.01em] transition-[filter] duration-400"
            >
              Hey there, meet PRANAV,
              <br />
              AI &amp; Automation Builder
              <br />
              Building intelligent systems, one idea at a time.
            </p>
          </div>

          {/* Typewriter text */}
          <div className="min-h-[72px] sm:min-h-[84px] md:min-h-[96px] mb-4 sm:mb-6 flex items-start">
            <h1 className="font-heading font-medium text-[26px] sm:text-[34px] md:text-[42px] lg:text-[46px] leading-[1.14] tracking-[-0.02em] text-[#050505] text-balance">
              <span>{displayText}</span>
              {!isDone && (
                <span className="inline-block w-[3px] h-[1em] ml-1 bg-[#050505] align-middle animate-blink" />
              )}
            </h1>
          </div>

          {/* Supporting line */}
          <div className="mb-8 sm:mb-10 text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.2em] text-black/60 font-body">
            AI • FULL STACK • AUTOMATION • DIGITAL PRODUCTS
          </div>

          {/* Hero Action Pill Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Pill 1 */}
            <button
              onClick={() => scrollTo('projects')}
              className="bg-white text-[#050505] border border-black/10 px-5 sm:px-6 py-2.5 rounded-full text-[13px] sm:text-[14px] font-body font-medium hover:bg-[#050505] hover:text-white transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              Explore my work
            </button>

            {/* Pill 2 */}
            <button
              onClick={() => scrollTo('skills')}
              className="bg-white text-[#050505] border border-black/10 px-5 sm:px-6 py-2.5 rounded-full text-[13px] sm:text-[14px] font-body font-medium hover:bg-[#050505] hover:text-white transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              What I build
            </button>

            {/* Pill 3 */}
            <a
              href="https://github.com/Pranavreddyedula"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#050505] border border-black/10 px-5 sm:px-6 py-2.5 rounded-full text-[13px] sm:text-[14px] font-body font-medium hover:bg-[#050505] hover:text-white transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              View GitHub
            </a>

            {/* Pill 4 */}
            <button
              onClick={() => scrollTo('contact')}
              className="bg-white text-[#050505] border border-black/10 px-5 sm:px-6 py-2.5 rounded-full text-[13px] sm:text-[14px] font-body font-medium hover:bg-[#050505] hover:text-white transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              Connect with me
            </button>

            {/* Social Outlined Pill */}
            <a
              href="https://www.linkedin.com/in/sai-pranav-a61593280"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/30 text-[#050505] px-5 sm:px-6 py-2.5 rounded-full text-[13px] sm:text-[14px] font-body font-medium hover:border-black hover:bg-black/5 transition-all duration-200 cursor-pointer active:scale-95 inline-flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <span className="text-[12px]">↗</span>
            </a>
          </div>
        </div>

        {/* Right Side / Center: Large Cinematic Hero Visual */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 w-full py-4 lg:py-0">
          <HeroVisual />
        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="w-full flex justify-between items-center text-xs text-black/40 font-mono pt-6 border-t border-black/[0.08]">
        <div>SAI PRANAV REDDY // 2026</div>
        <div className="flex items-center gap-2">
          <span>SCROLL TO EXPLORE</span>
          <span className="animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
};
