import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#E9E9E7] pt-12 pb-16 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-black/[0.08]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div>
          {/* First Line */}
          <div className="font-heading font-medium text-2xl sm:text-3xl tracking-[-0.03em] text-[#050505] mb-2">
            SAI PRANAV REDDY®
          </div>

          {/* Second Line */}
          <div className="text-xs sm:text-sm font-mono tracking-widest text-black/60 uppercase mb-2">
            AI • FULL STACK • AUTOMATION
          </div>

          {/* Third Line */}
          <div className="text-xs text-black/45 font-body">
            © 2026 Sai Pranav Reddy. All rights reserved.
          </div>
        </div>

        {/* Right side navigation actions */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://pranav-cinematic-portfolio-rust.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-mono text-black/70 hover:text-black transition-colors cursor-pointer flex items-center gap-1 underline underline-offset-4"
          >
            <span>Creative Portfolio</span>
            <span>↗</span>
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="text-xs sm:text-sm font-mono text-black/75 hover:text-black transition-colors cursor-pointer flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
