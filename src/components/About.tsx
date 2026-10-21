import React from 'react';
import { ArrowUpRight, Cpu, Compass, ShieldCheck } from 'lucide-react';
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
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">ABOUT THE STUDIO</span>
        </div>

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase leading-[1.05]">
            FOUR MINDS.<br />
            <span className="font-serif italic font-normal text-white">ONE VISION.</span>
          </h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Core Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl text-neutral-200 font-sans font-light leading-relaxed">
              {BRAND_CONFIG.about}
            </p>

            <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
              We approach every challenge not as a routine coding exercise, but as an opportunity to build
              resilient systems that withstand real-world constraints. From zero-latency real-time applications
              to interactive 3D particle environments and robust cloud backends, our work is defined by precision,
              clarity, and performance.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <a
                href="#team"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white hover:text-accent-cyan transition-colors group"
              >
                <span>MEET THE TEAM MEMBERS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-neutral-700 font-mono">/</span>
              <a
                href={BRAND_CONFIG.githubOrg}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
              >
                GITHUB ORG ↗
              </a>
            </div>
          </div>

          {/* Right Column: Clean Editorial Principles & Metric Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Principles Panel */}
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/60 backdrop-blur-sm space-y-6">
              <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase border-b border-white/[0.06] pb-4">
                ENGINEERING PILLARS
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-semibold text-white">Performance-First Architecture</h3>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      Lightweight payloads, hardware-accelerated 3D computations, and zero bloat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-semibold text-white">Intentional Interaction</h3>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      Every transition, micro-interaction, and layout decision serves user comprehension.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-semibold text-white">Resilient Reliability</h3>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      Type safety, strict schema contracts, and self-healing cloud microservices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Studio Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-white/[0.06] bg-[#09090b] text-center">
                <div className="text-2xl font-display font-bold text-white">04</div>
                <div className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase mt-1">Specialists</div>
              </div>
              <div className="p-4 rounded-xl border border-white/[0.06] bg-[#09090b] text-center">
                <div className="text-2xl font-display font-bold text-white">100%</div>
                <div className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase mt-1">Collaborative</div>
              </div>
              <div className="p-4 rounded-xl border border-white/[0.06] bg-[#09090b] text-center">
                <div className="text-2xl font-display font-bold text-white">60+</div>
                <div className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase mt-1">FPS Target</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
