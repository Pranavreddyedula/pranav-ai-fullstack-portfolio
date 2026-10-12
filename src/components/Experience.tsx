import React from 'react';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#E9E9E7] pt-28 pb-24 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-black/[0.08]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-14 md:mb-16 pb-6 border-b border-black/[0.08]">
          <div>
            <h2 className="font-heading text-[28px] sm:text-[34px] md:text-[40px] text-[#050505] tracking-[-0.02em]">
              EXPERIENCE &amp; PATH
            </h2>
            <p className="text-[15px] text-black/60 font-body mt-1">
              Practical grounding in commercial communication evolving into technical systems development.
            </p>
          </div>
          <div className="text-xs uppercase tracking-widest text-black/50 font-mono">
            04 / TRAJECTORY
          </div>
        </div>

        {/* Experience Timeline Card */}
        <div className="bg-white rounded-3xl border border-black/[0.08] p-7 sm:p-10 mb-12 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-black/[0.08]">
            <div>
              <div className="text-xs font-mono tracking-widest text-black/50 mb-1">
                RECENT COMMERCIAL EXPERIENCE
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl text-[#050505]">
                EduExpose
              </h3>
            </div>
            <div className="text-right">
              <span className="font-mono text-sm font-medium text-black/80">
                Sales &amp; Marketing
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
            <div className="md:col-span-4">
              <div className="text-xs font-mono uppercase tracking-wider text-black/45 mb-2">
                Core Domains &amp; Competencies
              </div>
              <ul className="space-y-2 text-sm text-black/80 font-body">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                  <span>Customer communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                  <span>Marketing &amp; outreach strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                  <span>Lead generation &amp; qualification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                  <span>Business development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/60" />
                  <span>Digital communications</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-8 flex flex-col justify-between">
              <p className="text-[15px] sm:text-[16px] text-black/75 font-body leading-relaxed mb-6">
                Direct experience engaging customers, managing high-touch communication, identifying product-market touchpoints, and driving outreach initiatives. This commercial exposure provides genuine empathy for customer friction, conversion bottlenecks, and the operational pain points that automated systems are built to resolve.
              </p>

              {/* Visual Bridge: Business -> Technology */}
              <div className="p-4 bg-[#F7F7F5] rounded-2xl border border-black/[0.06]">
                <div className="text-[11px] font-mono uppercase tracking-widest text-black/50 mb-2">
                  EVOLUTION OF FOCUS
                </div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-[#050505]">
                  <span>BUSINESS GROUNDING</span>
                  <span className="text-black/35 font-normal">→</span>
                  <span className="px-2 py-0.5 bg-[#050505] text-white rounded-md">
                    TECHNOLOGY FOCUS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Direction Banner */}
        <div className="bg-[#111214] text-white rounded-3xl p-7 sm:p-10 shadow-md">
          <div className="text-xs font-mono uppercase tracking-widest text-white/50 mb-3">
            TECHNICAL DIRECTION &amp; SPECIALIZATION
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-heading text-lg sm:text-2xl md:text-3xl text-zinc-100">
            <span>SOFTWARE ENGINEERING</span>
            <span className="text-white/30 text-xl font-light">→</span>
            <span>AI</span>
            <span className="text-white/30 text-xl font-light">→</span>
            <span>AUTOMATION</span>
            <span className="text-white/30 text-xl font-light">→</span>
            <span className="text-emerald-400">FULL STACK</span>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-body max-w-2xl leading-relaxed">
            Bridging real-world organizational needs with programmatic solutions: turning repetitive manual workflows into autonomous, self-healing event pipelines.
          </p>
        </div>
      </div>
    </section>
  );
};
