import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FlowPilotModal } from './FlowPilotModal';

interface ProjectData {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  isFlowPilot?: boolean;
  association?: {
    event: string;
    category: string;
    sector: string;
  };
}

export const Projects: React.FC = () => {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'fullstack'>('all');

  const projects: ProjectData[] = [
    {
      number: '01',
      title: 'FLOWPILOT AI',
      category: 'AGENTIC AI / AUTOMATION',
      description:
        'An autonomous business process automation system that receives customer requests, understands intent, evaluates risk, validates decisions and either executes safe actions or escalates high-risk cases for human approval.',
      technologies: ['n8n', 'AI', 'LLM', 'Webhooks', 'APIs', 'Automation', 'JSON'],
      githubUrl: 'https://github.com/Pranavreddyedula/flowpilot-ai',
      isFlowPilot: true,
    },
    {
      number: '02',
      title: 'MEDIMIND',
      category: 'FULL STACK APPLICATION',
      description:
        'A Flask-based health tracking application with authentication, database storage, reporting and data visualization.',
      technologies: [
        'Python',
        'Flask',
        'Flask SQLAlchemy',
        'Flask Login',
        'SQLite',
        'Matplotlib',
        'FPDF',
        'HTML',
        'CSS',
        'JavaScript',
      ],
      githubUrl: 'https://github.com/Pranavreddyedula',
    },
    {
      number: '03',
      title: 'PERSONAL PORTFOLIO',
      category: 'WEB DEVELOPMENT',
      description:
        'A responsive personal portfolio built to showcase projects, skills, professional experience and creative technology work through an interactive experience.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/Pranavreddyedula',
    },
    {
      number: '04',
      title: 'AGENTIC AI FOR AUTONOMOUS WORKFLOW INTELLIGENCE',
      category: 'AI / INNOVATION',
      description:
        'An exploration of agentic AI systems capable of understanding requests, reasoning over decisions and autonomously executing structured workflows with human oversight when required.',
      technologies: ['Agentic Reasoning', 'Autonomous Workflows', 'Decision Architecture', 'LLM Guardrails'],
      githubUrl: 'https://github.com/Pranavreddyedula',
      association: {
        event: 'Bengaluru Tech Summit 2026',
        category: 'Breaking Boundaries',
        sector: 'IT & Deeptech',
      },
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'ai') return p.category.includes('AI') || p.category.includes('AUTOMATION');
    if (activeTab === 'fullstack') return p.category.includes('FULL STACK') || p.category.includes('WEB');
    return true;
  });

  return (
    <section
      id="projects"
      className="relative w-full bg-[#E9E9E7] pt-28 pb-24 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-black/[0.08]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16 pb-6 border-b border-black/[0.08]">
          <div>
            <div className="text-xs uppercase tracking-widest text-black/50 font-mono mb-2">
              03 / FEATURED WORK
            </div>
            <h2 className="font-heading text-[28px] sm:text-[34px] md:text-[42px] text-[#050505] tracking-[-0.02em]">
              THINGS I'VE BUILT
            </h2>
            <p className="text-[15px] text-black/60 font-body mt-1 max-w-xl">
              Engineered products spanning autonomous agentic workflows, full-stack applications, and deeptech research.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white/70 backdrop-blur-xs rounded-xl border border-black/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-body font-medium transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#050505] text-white shadow-xs'
                  : 'text-black/65 hover:text-black'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-1.5 rounded-lg text-xs font-body font-medium transition-all cursor-pointer ${
                activeTab === 'ai'
                  ? 'bg-[#050505] text-white shadow-xs'
                  : 'text-black/65 hover:text-black'
              }`}
            >
              AI &amp; Automation
            </button>
            <button
              onClick={() => setActiveTab('fullstack')}
              className={`px-4 py-1.5 rounded-lg text-xs font-body font-medium transition-all cursor-pointer ${
                activeTab === 'fullstack'
                  ? 'bg-[#050505] text-white shadow-xs'
                  : 'text-black/65 hover:text-black'
              }`}
            >
              Full Stack &amp; Web
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12 md:space-y-16">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
              className="group bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-8 md:p-10 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Editorial Information */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Meta Line: Number and Category */}
                    <div className="flex items-center gap-3 text-xs font-mono text-black/50 mb-3">
                      <span>PROJECT {project.number}</span>
                      <span>·</span>
                      <span className="tracking-wider text-black/70">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#050505] tracking-[-0.02em] mb-4">
                      {project.title}
                    </h3>

                    {/* Research Association badge if applicable */}
                    {project.association && (
                      <div className="mb-4 p-3.5 bg-[#F6F6F4] rounded-xl border border-black/[0.06] text-xs font-mono space-y-1">
                        <div className="text-black/50">RESEARCH SHOWCASE // POSTER PRESENTATION</div>
                        <div className="text-black/85 font-semibold">
                          {project.association.event}
                        </div>
                        <div className="text-black/60 flex items-center gap-2">
                          <span>Sector: {project.association.sector}</span>
                          <span>•</span>
                          <span>Category: {project.association.category}</span>
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-[15px] sm:text-[16px] text-black/75 font-body leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Flow diagram if FlowPilot */}
                    {project.isFlowPilot && (
                      <div className="mb-6 p-4 bg-[#F8F8F7] rounded-xl border border-black/10">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-black/50 mb-2">
                          Autonomous Decision Pipeline
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-black/80 font-medium">
                          <span>CAPTURE</span>
                          <span className="text-black/30">→</span>
                          <span>UNDERSTAND</span>
                          <span className="text-black/30">→</span>
                          <span>DECIDE</span>
                          <span className="text-black/30">→</span>
                          <span>VALIDATE</span>
                          <span className="text-black/30">→</span>
                          <span>ACT / ESCALATE</span>
                          <span className="text-black/30">→</span>
                          <span>NOTIFY</span>
                          <span className="text-black/30">→</span>
                          <span>LOG</span>
                        </div>
                      </div>
                    )}

                    {/* Technologies list */}
                    <div className="mb-8">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-black/45 mb-2">
                        Technologies
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-black/70 font-body">
                        {project.technologies.map((tech, idx) => (
                          <React.Fragment key={tech}>
                            <span>{tech}</span>
                            {idx < project.technologies.length - 1 && (
                              <span className="text-black/25">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/[0.08]">
                    {project.isFlowPilot && (
                      <button
                        onClick={() => setIsSimulatorOpen(true)}
                        className="bg-[#050505] text-white px-5 py-2.5 rounded-full text-xs font-body font-medium hover:bg-black/80 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center gap-1.5"
                      >
                        <span>Launch Decision Demo</span>
                        <span className="text-[11px]">⚡</span>
                      </button>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-black/20 text-[#050505] px-5 py-2.5 rounded-full text-xs font-body font-medium hover:border-black hover:bg-black/5 transition-all cursor-pointer active:scale-95 inline-flex items-center gap-1.5"
                    >
                      <span>View on GitHub</span>
                      <span className="text-[11px]">↗</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Visual Case Presentation */}
                <div className="lg:col-span-6">
                  {project.isFlowPilot && (
                    <div className="relative aspect-[16/10] bg-[#141517] rounded-2xl overflow-hidden p-6 border border-black/20 flex flex-col justify-between text-white font-mono group-hover:scale-[1.01] transition-transform duration-300">
                      {/* Terminal Top Bar */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                        <div className="flex items-center gap-2 text-white/60">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>FLOWPILOT-AI // RUNTIME ENGINE</span>
                        </div>
                        <span className="text-[10px] text-white/40">v1.2.0-PROD</span>
                      </div>

                      {/* Mock workflow visual */}
                      <div className="space-y-3 my-auto">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                          <span className="text-xs text-zinc-300">Test Case: Duplicate Payment #4029</span>
                          <span className="text-[10px] text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-500/10 rounded-sm">
                            AUTO_RESOLVED
                          </span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                          <span className="text-xs text-zinc-300">Confidence Metric:</span>
                          <span className="text-xs text-emerald-400 font-bold">0.95 (HIGH)</span>
                        </div>
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                          <span className="text-xs text-zinc-300">Safety Guardrail:</span>
                          <span className="text-[10px] text-zinc-300">Safe Action Dispatched</span>
                        </div>
                      </div>

                      {/* Status footer */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
                        <span>WEBHOOK LISTENER: ACTIVE</span>
                        <button
                          onClick={() => setIsSimulatorOpen(true)}
                          className="text-white hover:underline cursor-pointer"
                        >
                          TEST INTERACTIVE PIPELINE →
                        </button>
                      </div>
                    </div>
                  )}

                  {project.number === '02' && (
                    <div className="relative aspect-[16/10] bg-[#FAFAFA] rounded-2xl overflow-hidden p-6 border border-black/10 flex flex-col justify-between group-hover:scale-[1.01] transition-transform duration-300 shadow-inner">
                      <div className="flex items-center justify-between pb-3 border-b border-black/10">
                        <span className="font-heading text-sm text-[#050505] font-semibold">
                          MediMind // Patient Vitals &amp; Analytics
                        </span>
                        <span className="text-[11px] font-mono text-black/50">FLASK + SQLITE</span>
                      </div>

                      {/* Health metrics visualization cards */}
                      <div className="grid grid-cols-3 gap-3 my-auto">
                        <div className="p-3 bg-white rounded-xl border border-black/10 shadow-xs">
                          <div className="text-[10px] text-black/50 uppercase font-mono">Heart Rate</div>
                          <div className="text-xl font-heading font-semibold text-[#050505] mt-1">72 bpm</div>
                          <div className="text-[10px] text-emerald-600 mt-0.5">● Normal range</div>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-black/10 shadow-xs">
                          <div className="text-[10px] text-black/50 uppercase font-mono">Sleep Cycle</div>
                          <div className="text-xl font-heading font-semibold text-[#050505] mt-1">7.8 hrs</div>
                          <div className="text-[10px] text-emerald-600 mt-0.5">● Restorative</div>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-black/10 shadow-xs">
                          <div className="text-[10px] text-black/50 uppercase font-mono">Reports</div>
                          <div className="text-xl font-heading font-semibold text-[#050505] mt-1">PDF Gen</div>
                          <div className="text-[10px] text-blue-600 mt-0.5">● Export ready</div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs text-black/50 font-mono">
                        <span>DATA ENCRYPTION: SECURE</span>
                        <span>MATPLOTLIB CHART ENGINE</span>
                      </div>
                    </div>
                  )}

                  {project.number === '03' && (
                    <div className="relative aspect-[16/10] bg-[#E9E9E7] rounded-2xl overflow-hidden p-6 border border-black/15 flex flex-col justify-between group-hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex items-center justify-between pb-3 border-b border-black/10">
                        <span className="font-heading text-sm text-[#050505] font-semibold">
                          PRANAV® ✳︎ Visual Architecture
                        </span>
                        <span className="text-[11px] font-mono text-black/50">REACT + TAILWIND</span>
                      </div>

                      <div className="my-auto text-center space-y-2">
                        <div className="text-xs uppercase font-mono tracking-widest text-black/45">
                          Editorial Portfolio Experience
                        </div>
                        <div className="font-heading text-xl text-[#050505]">
                          Minimalist Creative Engineering
                        </div>
                        <div className="text-xs text-black/60 font-body">
                          Full viewport cinematic hero • Typewriter kinetics • 0-pill discipline
                        </div>
                      </div>

                      <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs text-black/50 font-mono">
                        <span>FRAMER MOTION: 120 FPS</span>
                        <span>PRODUCTION BUILD</span>
                      </div>
                    </div>
                  )}

                  {project.number === '04' && (
                    <div className="relative aspect-[16/10] bg-[#111214] text-white rounded-2xl overflow-hidden p-6 border border-black/20 flex flex-col justify-between group-hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="font-heading text-sm text-zinc-100 font-medium">
                          Bengaluru Tech Summit 2026
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 bg-white/10 rounded-sm text-zinc-300">
                          IT &amp; Deeptech
                        </span>
                      </div>

                      <div className="my-auto space-y-2 p-3 bg-white/5 rounded-xl border border-white/10">
                        <div className="text-[10px] font-mono text-white/50 tracking-wider">
                          RESEARCH POSTER // BREAKING BOUNDARIES
                        </div>
                        <div className="font-heading text-base text-zinc-100">
                          Autonomous Workflow Intelligence
                        </div>
                        <p className="text-xs text-zinc-400 font-body">
                          Investigation into autonomous reasoning loops that execute structured multi-step business operations with strict human oversight escalation.
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40 font-mono">
                        <span>SYSTEM REASONING MODEL</span>
                        <span>HUMAN-IN-THE-LOOP</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FlowPilot Decision Engine Simulator Modal */}
      <FlowPilotModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
      />
    </section>
  );
};
