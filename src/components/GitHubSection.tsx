import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Static fallback repos
  const fallbackRepos: Repo[] = [
    {
      id: 1,
      name: 'flowpilot-ai',
      description: 'Autonomous business process automation and agentic decision pipeline with safe action guardrails.',
      html_url: 'https://github.com/Pranavreddyedula/flowpilot-ai',
      language: 'JavaScript / Python',
      stargazers_count: 12,
      forks_count: 3,
    },
    {
      id: 2,
      name: 'medimind',
      description: 'Flask-powered healthcare monitoring system with user auth, SQLite database, and automated clinical reporting.',
      html_url: 'https://github.com/Pranavreddyedula',
      language: 'Python',
      stargazers_count: 8,
      forks_count: 2,
    },
    {
      id: 3,
      name: 'sai-pranav-portfolio',
      description: 'Production creative technology portfolio showcasing AI systems, automation architecture, and web engineering.',
      html_url: 'https://github.com/Pranavreddyedula',
      language: 'TypeScript',
      stargazers_count: 15,
      forks_count: 4,
    },
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const res = await fetch(
          'https://api.github.com/users/Pranavreddyedula/repos?sort=updated&per_page=6',
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setRepos(data);
          } else {
            setRepos(fallbackRepos);
          }
        } else {
          setRepos(fallbackRepos);
        }
      } catch {
        setRepos(fallbackRepos);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const terminalLines = [
    'idea',
    'code',
    'integrate AI',
    'automate',
    'test',
    'deploy',
    'repeat',
  ];

  return (
    <section
      id="code"
      className="relative w-full bg-[#E9E9E7] pt-24 pb-24 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-black/[0.08]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-14 md:mb-16 pb-6 border-b border-black/[0.08]">
          <div>
            <div className="text-xs uppercase tracking-widest text-black/50 font-mono mb-2">
              05 / OPEN SOURCE
            </div>
            <h2 className="font-heading text-[28px] sm:text-[34px] md:text-[40px] text-[#050505] tracking-[-0.02em]">
              OPEN SOURCE / CODE
            </h2>
            <a
              href="https://github.com/Pranavreddyedula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-black/70 hover:text-black font-mono underline underline-offset-4 mt-1 inline-block transition-colors"
            >
              github.com/Pranavreddyedula
            </a>
          </div>

          <a
            href="https://github.com/Pranavreddyedula"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#050505] text-white px-6 py-2.5 rounded-full text-xs font-medium hover:bg-black/85 transition-all cursor-pointer self-start sm:self-auto inline-flex items-center gap-1.5 shadow-xs active:scale-95"
          >
            <span>VISIT GITHUB</span>
            <span className="text-[11px]">↗</span>
          </a>
        </div>

        {/* Terminal and Repos Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Terminal Visual */}
          <div className="lg:col-span-4 bg-[#141517] text-white rounded-3xl p-6 sm:p-7 border border-black/20 shadow-md font-mono">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-[11px] text-white/40 ml-2">pranav@builder:~</span>
            </div>

            <div className="space-y-2.5 text-xs text-zinc-300">
              {terminalLines.map((line, idx) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-emerald-400 select-none">&gt;</span>
                  <span className="font-medium tracking-wide">{line}</span>
                </motion.div>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-emerald-400 select-none">&gt;</span>
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[10px] text-white/40">
              RUNNING CONTINUOUS FEEDBACK LOOP
            </div>
          </div>

          {/* Repositories Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {isLoading ? (
              <div className="col-span-2 py-12 text-center text-xs font-mono text-black/40">
                LOADING REPOSITORIES...
              </div>
            ) : (
              repos.slice(0, 4).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white p-6 rounded-2xl border border-black/[0.08] hover:border-black/30 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-heading font-medium text-base text-[#050505] group-hover:underline">
                        {repo.name}
                      </span>
                      <span className="text-xs text-black/40 font-mono">↗</span>
                    </div>
                    <p className="text-xs text-black/65 font-body line-clamp-3 leading-relaxed mb-4">
                      {repo.description || 'Public repository by Sai Pranav Reddy.'}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-black/50">
                    <span className="text-black/80">{repo.language || 'Code'}</span>
                    <div className="flex items-center gap-3">
                      <span>★ {repo.stargazers_count}</span>
                      <span>⑂ {repo.forks_count}</span>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
