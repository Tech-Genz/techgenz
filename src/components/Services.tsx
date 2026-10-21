import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="relative w-full bg-[#050505] py-28 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">02 //</span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">CORE CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase">
              WHAT WE <span className="font-serif italic font-normal text-white">BUILD.</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-sans leading-relaxed">
            Engineered software solutions delivering speed, security, and expressive interactivity across the full stack.
          </p>
        </div>

        {/* Numbered Editorial List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="group transition-colors duration-300 hover:bg-white/[0.02]"
              >
                {/* Main Row */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 focus:outline-none cursor-pointer"
                >
                  {/* Left: Index & Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="text-sm sm:text-base font-mono text-neutral-500 group-hover:text-accent-cyan transition-colors">
                      {service.index}
                    </span>
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-neutral-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Short description & Chevron toggle */}
                  <div className="flex items-center justify-between md:justify-end gap-6 md:max-w-md w-full md:w-auto">
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans line-clamp-2 md:text-right">
                      {service.description}
                    </p>
                    <div className="flex-shrink-0 p-2 rounded-full border border-white/10 group-hover:border-white/30 text-neutral-400 group-hover:text-white transition-all">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-white' : ''
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Capability Drawer */}
                {isExpanded && (
                  <div className="pb-8 pt-2 px-6 sm:px-16 animate-fadeIn text-sm text-neutral-300 border-t border-white/[0.04]">
                    <div className="max-w-3xl space-y-4">
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {service.expandedDetail}
                      </p>

                      <div className="pt-2">
                        <div className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase mb-3">
                          KEY COMPETENCIES
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                            >
                              • {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
