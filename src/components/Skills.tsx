import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  index: string;
  category: string;
  description: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories: SkillCategory[] = [
    {
      index: '01',
      category: 'AI & INTELLIGENCE',
      description: 'Reasoning pipelines, autonomous agents, and model integration',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Generative AI', 'AI Agents'],
    },
    {
      index: '02',
      category: 'AUTOMATION & WORKFLOWS',
      description: 'Event-driven systems, webhooks, and decision engines',
      skills: ['n8n', 'Workflow Automation', 'API Integration', 'Webhooks', 'Decision Systems'],
    },
    {
      index: '03',
      category: 'FRONTEND ENGINEERING',
      description: 'Modern, reactive interfaces with editorial precision',
      skills: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      index: '04',
      category: 'BACKEND & DATA',
      description: 'Robust server logic, REST architectures, and persistence',
      skills: ['Node.js', 'Flask', 'REST APIs', 'SQLite'],
    },
    {
      index: '05',
      category: 'CORE LANGUAGES',
      description: 'Typed systems, scripting, and analytical querying',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    },
    {
      index: '06',
      category: 'DEV TOOLS & INFRA',
      description: 'Version control, build orchestration, and deployment',
      skills: ['Git', 'GitHub', 'Vite', 'Vercel', 'Render', 'PowerShell'],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full bg-[#E9E9E7] pt-28 pb-24 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-black/[0.08]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-14 md:mb-16 pb-6 border-b border-black/[0.08]">
          <div>
            <h2 className="font-heading text-[28px] sm:text-[34px] md:text-[40px] text-[#050505] tracking-[-0.02em]">
              WHAT I BUILD WITH
            </h2>
            <p className="text-[15px] text-black/60 font-body mt-1">
              Curated stack spanning autonomous automation, applied intelligence, and modern web systems.
            </p>
          </div>
          <div className="text-xs uppercase tracking-widest text-black/50 font-mono">
            02 / TECHNICAL STACK
          </div>
        </div>

        {/* Minimalist Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const isHovered = activeCategory === cat.category;
            return (
              <motion.div
                key={cat.index}
                onMouseEnter={() => setActiveCategory(cat.category)}
                onMouseLeave={() => setActiveCategory(null)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white/80 backdrop-blur-xs p-7 rounded-2xl border border-black/[0.08] hover:border-black/30 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-black/45 tracking-widest">
                      {cat.index}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        isHovered ? 'bg-[#050505]' : 'bg-black/15'
                      }`}
                    />
                  </div>

                  <h3 className="font-heading text-[18px] sm:text-[20px] text-[#050505] tracking-[-0.01em] mb-1.5">
                    {cat.category}
                  </h3>
                  <p className="text-[13px] text-black/60 font-body mb-6 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Skills list - clean unboxed typography with dot separators */}
                <div className="pt-4 border-t border-black/[0.06]">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[14px] text-black/85 font-body">
                    {cat.skills.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span className="hover:text-black hover:font-medium transition-colors">
                          {skill}
                        </span>
                        {sIdx < cat.skills.length - 1 && (
                          <span className="text-black/30 select-none text-xs">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Editorial Subtext */}
        <div className="mt-12 pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-black/50">
          <div>ENGINEERING PHILOSOPHY: PRAGMATISM • OBSERVABILITY • RESILIENCE</div>
          <div>CONSTANTLY ITERATING AND EXPANDING</div>
        </div>
      </div>
    </section>
  );
};
