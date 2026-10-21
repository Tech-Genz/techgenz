import React from 'react';
import { ArrowUpRight, Github, Code2, Terminal, Cpu } from 'lucide-react';
import { TEAM_MEMBERS, BRAND_CONFIG } from '../data/portfolioData';

export const Team: React.FC = () => {
  return (
    <section id="team" className="relative w-full bg-[#050505] py-28 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">04 //</span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">CORE COLLECTIVE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase">
              THE PEOPLE <span className="font-serif italic font-normal text-white">behind the code.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-sans leading-relaxed">
            A tight-knit quad of builders combining architectural rigor, intuitive visual design, and deep technical curiosity.
          </p>
        </div>

        {/* 4 Team Member Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-7 flex flex-col justify-between hover:border-white/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Top Row: Index & Monogram Avatar */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-neutral-500 group-hover:text-accent-cyan transition-colors">
                    {member.index} //
                  </span>

                  {/* Stylized Monogram Avatar with Geometric Frame */}
                  <div className="relative w-12 h-12 rounded-xl border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] flex items-center justify-center font-display font-bold text-sm tracking-wider text-white shadow-inner group-hover:scale-105 transition-transform">
                    <span>{member.avatarPlaceholder}</span>
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent-cyan/80 ring-2 ring-[#0c0c0e]" />
                  </div>
                </div>

                {/* Member Name & Role */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-neutral-100">
                    {member.name}
                  </h3>
                  <div className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20">
                    {member.role}
                  </div>
                </div>

                {/* Short Bio */}
                <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
                  {member.shortBio}
                </p>

                {/* Key Skills Badges */}
                <div className="space-y-2 mb-8">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                    Core Focus
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action / Profile Link */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-500">TECH GENZ LAB</span>
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GITHUB ↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
