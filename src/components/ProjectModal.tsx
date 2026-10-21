import React, { useEffect } from 'react';
import { X, ArrowUpRight, Github, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  allProjects: ProjectItem[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0c] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header & Close Button */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-500 uppercase">{project.index} //</span>
            <span className="text-xs font-mono text-accent-cyan uppercase tracking-widest">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-neutral-400 mt-2 tracking-wider">
            {project.subtitle} • {project.year}
          </p>
        </div>

        {/* Interactive Device Preview Banner */}
        <div className="w-full rounded-2xl border border-white/10 bg-[#0e0e11] p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-8 bg-white/[0.03] border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
            <span className="ml-3 text-[10px] font-mono text-neutral-400">https://sharepinz.site</span>
          </div>

          <div className="mt-8 text-center max-w-md space-y-4">
            {project.id === 'sharepinz' ? (
              <div className="p-6 rounded-xl border border-white/15 bg-black/60 backdrop-blur-md shadow-inner space-y-4">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  Active Share Session
                </div>
                <div className="text-4xl font-mono font-bold tracking-[0.3em] text-white">
                  5 9 1 0 4 2
                </div>
                <div className="text-[11px] text-neutral-500 font-mono">
                  TTL Expiry: 14m 58s • AES-256 Encrypted Transfer
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-xl border border-white/15 bg-black/60 backdrop-blur-md shadow-inner">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2">
                  System Architecture
                </div>
                <div className="text-xl font-display font-bold text-white">
                  {project.title} Engine
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  Verified Real-time Pipeline
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Overview & Problem / Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Problem Statement</h3>
            <p className="text-neutral-300 leading-relaxed font-sans">{project.problem}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Engineering Solution</h3>
            <p className="text-neutral-300 leading-relaxed font-sans">{project.solution}</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3 border-t border-white/[0.08] pt-6">
          <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Key Implementations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="border-t border-white/[0.08] pt-6 space-y-3">
          <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & Reliability */}
        <div className="border-t border-white/[0.08] pt-6 space-y-2">
          <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Technical Constraints Overcome</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">{project.challenges}</p>
        </div>

        {/* Action Buttons & Prev/Next */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-colors"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-neutral-300 hover:text-white hover:border-white text-xs font-mono tracking-wider transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            )}
          </div>

          {/* Navigation between projects (if multiple exist) */}
          {allProjects.length > 1 && (
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>PREV</span>
              </button>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-white/10 hover:border-white/30 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <span>NEXT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
