import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const NowBuilding: React.FC = () => {
  const words = [
    'AI AGENTS',
    'AUTOMATION',
    'FULL STACK',
    'CLOUD',
    'INTEGRATIONS',
    'INTELLIGENT WORKFLOWS',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="relative w-full bg-[#E9E9E7] py-20 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-black/[0.08] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Section Label */}
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-black/50 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>CURRENT FOCUS // NOW BUILDING</span>
        </div>

        {/* Dynamic Animated Word Ticker */}
        <div className="h-[52px] sm:h-[68px] md:h-[84px] flex items-center justify-center overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={words[currentIndex]}
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -35, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] text-[#050505]"
            >
              {words[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Supporting statement */}
        <p className="max-w-2xl text-[16px] sm:text-[18px] md:text-[20px] text-black/70 font-body leading-relaxed text-balance">
          Currently focused on building software systems that combine AI, automation and modern web technologies.
        </p>

        {/* Minimal Marquee Stream of Capabilities */}
        <div className="w-full mt-12 pt-8 border-t border-black/[0.06] overflow-hidden whitespace-nowrap">
          <div className="inline-flex gap-8 font-mono text-xs uppercase tracking-widest text-black/40 animate-pulse">
            <span>• AGENTIC ORCHESTRATION</span>
            <span>• EVENT-DRIVEN PIPELINES</span>
            <span>• RESPONSIVE FRONTEND SYSTEMS</span>
            <span>• ROBUST BACKEND APIS</span>
            <span>• PROMPT ENGINEERING &amp; EVALS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
