import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// Character-by-character scroll reveal component
const CharacterRevealParagraph: React.FC<{
  text: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}> = ({ text, progress, range, className = '' }) => {
  const characters = text.split('');
  const total = characters.length;

  return (
    <p className={className}>
      {characters.map((char, index) => {
        const start = range[0] + (index / total) * (range[1] - range[0]);
        const end = start + (1 / total) * (range[1] - range[0]);
        return (
          <CharacterSpan
            key={index}
            char={char}
            progress={progress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

const CharacterSpan: React.FC<{
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 40%'],
  });

  const p1 = "I'm Sai Pranav Reddy, a Computer Science graduate focused on building intelligent digital products, AI-powered automation and modern web applications.";
  const p2 = "I enjoy turning ideas into working products — from AI agents and automated workflows to full-stack applications and interactive digital experiences.";
  const p3 = "My approach is simple: understand the problem, build the right system, test it in the real world and keep improving it.";

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-[#E9E9E7] pt-28 pb-24 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-black/[0.08]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-14 md:mb-20 pb-6 border-b border-black/[0.08]">
          <h2 className="font-heading text-[28px] sm:text-[34px] md:text-[40px] text-[#050505] tracking-[-0.02em]">
            ABOUT PRANAV
          </h2>
          <div className="text-xs uppercase tracking-widest text-black/50 font-mono">
            01 / MANIFESTO &amp; BACKGROUND
          </div>
        </div>

        {/* Scroll Character Reveal Text */}
        <div className="max-w-4xl space-y-8 sm:space-y-10 mb-20 md:mb-24">
          <CharacterRevealParagraph
            text={p1}
            progress={scrollYProgress}
            range={[0.0, 0.35]}
            className="font-body text-[24px] sm:text-[30px] md:text-[38px] leading-[1.25] text-[#050505] tracking-[-0.015em]"
          />

          <CharacterRevealParagraph
            text={p2}
            progress={scrollYProgress}
            range={[0.35, 0.7]}
            className="font-body text-[22px] sm:text-[27px] md:text-[34px] leading-[1.3] text-[#050505] tracking-[-0.01em]"
          />

          <CharacterRevealParagraph
            text={p3}
            progress={scrollYProgress}
            range={[0.7, 1.0]}
            className="font-body text-[20px] sm:text-[24px] md:text-[30px] leading-[1.35] text-[#050505] tracking-[-0.01em]"
          />
        </div>

        {/* Credentials & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-black/[0.08]">
          {/* Education Card */}
          <div className="bg-white/80 backdrop-blur-sm p-7 rounded-2xl border border-black/[0.08] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-black/50 mb-3">
                EDUCATION // ACADEMIC FOUNDATION
              </div>
              <h3 className="font-heading text-[20px] sm:text-[22px] text-[#050505] mb-1">
                Tirumala Engineering College
              </h3>
              <p className="text-[15px] text-black/75 mb-3 font-body">
                B.Tech — Computer Science &amp; Engineering
              </p>
            </div>
            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
              <span className="text-xs text-black/50">Degree Status</span>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#050505] text-white rounded-md tracking-wider">
                COMPLETED
              </span>
            </div>
          </div>

          {/* Positioning / Focus Card */}
          <div className="bg-white/80 backdrop-blur-sm p-7 rounded-2xl border border-black/[0.08] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-black/50 mb-3">
                TECHNICAL ORIENTATION
              </div>
              <h3 className="font-heading text-[20px] sm:text-[22px] text-[#050505] mb-2">
                Applied AI &amp; Modern Systems
              </h3>
              <p className="text-[14px] text-black/70 leading-relaxed font-body">
                Focused on deploying production automation architectures, agentic reasoning pipelines, and responsive web products that solve real friction.
              </p>
            </div>
            <div className="pt-4 border-t border-black/[0.06] flex items-center gap-2 text-xs text-black/60 font-mono">
              <span>ACTIVE PRACTICE</span>
              <span>•</span>
              <span>FULL LIFECYCLE</span>
            </div>
          </div>

          {/* Professional Direction */}
          <div className="bg-white/80 backdrop-blur-sm p-7 rounded-2xl border border-black/[0.08] shadow-xs flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-black/50 mb-3">
                CAREER TRAJECTORY
              </div>
              <h3 className="font-heading text-[20px] sm:text-[22px] text-[#050505] mb-2">
                Engineering Direction
              </h3>
              <div className="space-y-1.5 text-[14px] text-black/80 font-body">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#050505]" />
                  <span>Software Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#050505]" />
                  <span>AI &amp; Agentic Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#050505]" />
                  <span>Autonomous Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#050505]" />
                  <span>Full Stack Development</span>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-black/[0.06] text-xs font-mono text-black/50">
              AVAILABLE FOR HIGH-IMPACT ROLES
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
