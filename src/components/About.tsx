import React from 'react';
import { ArrowUpRight, Target, Eye, Sparkles, GraduationCap, Github, Globe } from 'lucide-react';
import { BRAND_CONFIG } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-[#050505] py-28 border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">01 //</span>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">ABOUT TECH GENZ</span>
        </div>

        {/* Section Heading */}
        <div className="mb-14">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase leading-[1.05]">
            FOUR MINDS.<br />
            <span className="font-serif italic font-normal text-white">ONE VISION.</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-mono tracking-widest text-accent-cyan uppercase">
            Motto: &ldquo;{BRAND_CONFIG.motto}&rdquo;
          </p>
        </div>

        {/* Core Narrative / About Us */}
        <div className="max-w-4xl mb-16 space-y-6">
          <p className="text-lg sm:text-2xl text-neutral-200 font-sans font-light leading-relaxed">
            {BRAND_CONFIG.about}
          </p>
          <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            {BRAND_CONFIG.closing}
          </p>
        </div>

        {/* Editorial Pillars: Motive, Vision, Motto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Motive */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-sm space-y-4 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              01 // PURPOSE
            </div>
            <h3 className="text-xl font-display font-bold text-white tracking-tight">
              Our Motive
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
              {BRAND_CONFIG.motive}
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-sm space-y-4 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan">
              <Eye className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              02 // HORIZON
            </div>
            <h3 className="text-xl font-display font-bold text-white tracking-tight">
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
              {BRAND_CONFIG.vision}
            </p>
          </div>

          {/* Motto & Culture */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-sm space-y-4 hover:border-white/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent-cyan">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              03 // CREED
            </div>
            <h3 className="text-xl font-display font-bold text-white tracking-tight">
              Our Motto
            </h3>
            <blockquote className="text-sm sm:text-base font-serif italic text-white leading-relaxed">
              &ldquo;{BRAND_CONFIG.motto}&rdquo;
            </blockquote>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              Engineering beyond limitations through relentless curiosity, architectural discipline, and high-impact digital craft.
            </p>
          </div>
        </div>

        {/* College Connection & Academic Foundation */}
        <div className="p-8 sm:p-10 rounded-3xl border border-white/[0.12] bg-gradient-to-br from-[#0e0e12] to-[#070709] backdrop-blur-md mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-neutral-300">
                <GraduationCap className="w-3.5 h-3.5 text-accent-cyan" />
                <span>COLLEGE STUDENT COMMUNITY CONNECTION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                {BRAND_CONFIG.college.name}
              </h3>
              <p className="text-xs font-mono text-accent-cyan">
                {BRAND_CONFIG.college.location}
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-2xl">
                Tech Genz was formed by members of the student community at NBKRIST. We collaborate to build software solutions, explore emerging technologies, and grow as developers and innovators while operating independently as a student developer team.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
              <a
                href={BRAND_CONFIG.college.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/[0.04] hover:bg-white/[0.1] text-xs font-mono tracking-wider text-white transition-all group"
              >
                <span>OFFICIAL COLLEGE PORTAL</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-[11px] font-mono text-neutral-500 text-center lg:text-right">
                nbkrist.org // Vidyanagar
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Quick Links / Team Handoff */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#team"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white hover:text-accent-cyan transition-colors group"
            >
              <span>MEET OUR FOUR TEAM MEMBERS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <span className="text-neutral-700 font-mono hidden sm:inline">/</span>
            <a
              href={BRAND_CONFIG.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB REPOSITORY ↗</span>
            </a>
            <span className="text-neutral-700 font-mono hidden sm:inline">/</span>
            <a
              href={BRAND_CONFIG.websiteUrl}
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>TECHGENZ.SITE</span>
            </a>
          </div>

          <div className="text-xs font-mono text-neutral-500">
            STUDENT TECH COLLECTIVE // NBKRIST
          </div>
        </div>
      </div>
    </section>
  );
};
