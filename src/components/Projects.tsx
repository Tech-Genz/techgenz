import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, ShieldCheck, Key, RefreshCw, Layers } from 'lucide-react';
import { PROJECTS, ProjectItem, BRAND_CONFIG } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activePin, setActivePin] = useState('739 421');
  const [isCopied, setIsCopied] = useState(false);

  const generateDemoPin = () => {
    const p1 = Math.floor(100 + Math.random() * 900);
    const p2 = Math.floor(100 + Math.random() * 900);
    setActivePin(`${p1} ${p2}`);
    setIsCopied(false);
  };

  const copyPin = () => {
    navigator.clipboard?.writeText(activePin.replace(/\s+/g, ''));
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const sharepinz = PROJECTS.find((p) => p.id === 'sharepinz') || PROJECTS[0];
  const otherProjects = PROJECTS.filter((p) => p.id !== 'sharepinz');

  return (
    <section id="projects" className="relative w-full bg-[#050505] py-28 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">03 //</span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">FEATURED REPERTOIRE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase">
              SELECTED <span className="font-serif italic font-normal text-white">work.</span>
            </h2>
          </div>

          <div className="md:max-w-md space-y-3">
            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
              Real software engineered for utility, zero friction, and high-performance execution.
            </p>
            <a
              href={BRAND_CONFIG.githubOrg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white hover:text-black hover:border-white text-xs font-mono tracking-wider transition-all duration-300 text-neutral-300 group"
            >
              <span>EXPLORE ALL REPOSITORIES</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* PRIMARY FEATURED PROJECT: SHAREPINZ */}
        <div className="relative mb-24 rounded-3xl border border-white/15 bg-gradient-to-b from-[#111114] to-[#08080a] p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Device Mockup */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative w-full rounded-2xl border border-white/10 bg-[#060608] shadow-2xl overflow-hidden group">
                {/* Browser/System Top Bar */}
                <div className="h-9 bg-[#121216] border-b border-white/[0.08] flex items-center justify-between px-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 tracking-wider">
                    sharepinz.techgenz.dev
                  </span>
                  <div className="w-10" />
                </div>

                {/* Interactive Simulated Product Interface */}
                <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center space-y-6 min-h-[380px]">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white">
                    <Key className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-accent-cyan px-2.5 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                      INTERACTIVE DEMO MOCK
                    </span>
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-white mt-3">
                      SharePinz File Gateway
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
                      Generate an ephemeral 6-digit access key to send files securely with zero registration.
                    </p>
                  </div>

                  {/* PIN Display Card */}
                  <div className="p-5 rounded-xl border border-white/15 bg-black/70 backdrop-blur-md w-full max-w-xs shadow-inner">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">
                      Target Access Key
                    </div>
                    <div className="text-3xl font-mono font-bold tracking-[0.25em] text-white">
                      {activePin}
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <button
                        onClick={copyPin}
                        className="px-3 py-1 rounded text-[11px] font-mono bg-white/[0.08] hover:bg-white/[0.18] text-white transition-colors"
                      >
                        {isCopied ? 'PIN Copied!' : 'Copy Key'}
                      </button>
                      <button
                        onClick={generateDemoPin}
                        className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
                        title="Generate new PIN"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-500">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" /> AES-256 Storage
                    </span>
                    <span>•</span>
                    <span>Auto TTL Expiry</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Information Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-500">01 //</span>
                <span className="text-xs font-mono tracking-widest uppercase text-accent-cyan">
                  {sharepinz.category}
                </span>
              </div>

              <div>
                <h3 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                  SHARE<span className="font-serif italic text-neutral-400">PINZ</span>
                </h3>
                <p className="text-xs font-mono text-neutral-400 tracking-wider mt-1 uppercase">
                  {sharepinz.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                {sharepinz.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
                  TECHNOLOGIES
                </div>
                <div className="flex flex-wrap gap-2">
                  {sharepinz.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedProject(sharepinz)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors shadow-lg cursor-pointer"
                >
                  <span>CASE STUDY DETAILS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {sharepinz.repoUrl && (
                  <a
                    href={sharepinz.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-neutral-300 hover:text-white hover:border-white text-xs font-mono tracking-wider transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GITHUB</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ADDITIONAL PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl border border-white/[0.08] bg-[#0b0b0e] p-7 flex flex-col justify-between hover:border-white/25 transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-6">
                  <span>{project.index} //</span>
                  <span className="uppercase text-neutral-400">{project.year}</span>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {project.title}{' '}
                    {project.italicWord && (
                      <span className="font-serif italic font-normal text-neutral-400 text-xl">
                        {project.italicWord}
                      </span>
                    )}
                  </h3>
                  <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-neutral-500">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span>VIEW SPECIFICATION</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PROJECTS}
      />
    </section>
  );
};
