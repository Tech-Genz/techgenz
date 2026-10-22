import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { ParticlePortrait } from './ParticlePortrait';
import { BRAND_CONFIG } from '../data/portfolioData';

interface HeroProps {
  scrollProgress: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollProgress }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTeam = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#team');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between items-center bg-[#050505] overflow-hidden pt-24 pb-12 select-none"
    >
      {/* 3D Particle Portrait Canvas */}
      <ParticlePortrait scrollProgress={scrollProgress} />

      {/* Atmospheric Radial Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#050505_95%)] z-10" />

      {/* Top Studio Indicator */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between pt-6">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_10px_#00F0FF] animate-pulse" />
          <span className="text-[11px] font-mono tracking-widest text-neutral-300 uppercase">
            TECH GENZ // SOFTWARE &amp; TECHNOLOGY TEAM
          </span>
        </div>

        {/* Optional Ambient Audio Toggle */}
        <button
          onClick={toggleSound}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] text-[10px] font-mono tracking-widest text-neutral-400 hover:text-white transition-all duration-300"
          title="Toggle ambient audio"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-accent-cyan" />
              <span>SOUND ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
              <span>SOUND OFF</span>
            </>
          )}
        </button>
      </div>

      {/* Center Cinematic Typography & Hero Focal Point */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-end my-auto text-center pointer-events-none pb-4">
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-4 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          <p className="text-[11px] sm:text-xs font-mono tracking-[0.25em] text-neutral-300 uppercase">
            SOFTWARE &amp; TECHNOLOGY TEAM
          </p>
        </div>

        {/* Hero Title: Primary Brand Heading TECH GENZ */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-display font-black tracking-tight leading-[0.92] text-metallic uppercase drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]">
          TECH GENZ
        </h1>

        {/* Headline: WE BUILD WHAT'S NEXT. */}
        <p className="mt-4 text-xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-wide uppercase">
          {BRAND_CONFIG.tagline}
        </p>

        {/* Motto: IDEAS ENGINEERED BEYOND LIMITS */}
        <p className="mt-2 text-xs sm:text-sm font-mono tracking-widest text-accent-cyan uppercase">
          &ldquo;{BRAND_CONFIG.supportingHeadline}&rdquo;
        </p>

        {/* Subtitle statement */}
        <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-neutral-300 font-sans font-light leading-relaxed px-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          {BRAND_CONFIG.intro}
        </p>
      </div>

      {/* Hero Bottom Bar: Editorial Descriptor + Actions + Scroll Indicator */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/[0.06]">
        {/* Editorial Descriptor */}
        <div className="text-center sm:text-left">
          <div className="text-sm sm:text-base font-display text-white tracking-wide">
            <span className="font-bold">TECH GENZ</span>{' '}
            <span className="font-serif italic text-neutral-400 text-lg">— Software &amp; Technology Team</span>
          </div>
          <div className="text-xs font-mono text-neutral-400 tracking-wider mt-0.5">
            {BRAND_CONFIG.subDescriptor}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#projects"
            onClick={scrollToWork}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] group"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#team"
            onClick={scrollToTeam}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/50 text-xs font-mono tracking-wider uppercase transition-all duration-300"
          >
            MEET THE TEAM
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-neutral-500 tracking-widest">
          <span>SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-neutral-400" />
        </div>
      </div>
    </section>
  );
};
