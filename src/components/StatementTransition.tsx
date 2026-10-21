import React from 'react';

export const StatementTransition: React.FC = () => {
  return (
    <section className="relative w-full bg-[#050505] py-32 border-t border-b border-white/[0.08] overflow-hidden select-none">
      {/* Background Subtle Gradient Sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06)_0%,_transparent_70%)] pointer-events-none" />

      {/* Decorative Matrix Grid Dots */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-noise" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>TECH GENZ MANIFESTO</span>
        </div>

        {/* Oversized Statement */}
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-display font-extrabold tracking-tighter leading-none text-metallic uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
          IDEAS INTO <span className="font-serif italic font-normal text-white">reality.</span>
        </h2>

        <p className="max-w-xl mx-auto text-xs sm:text-sm md:text-base font-mono text-neutral-400 tracking-wider uppercase">
          Break it if you can. It still ships. Built beyond boundaries.
        </p>

        {/* Minimal Horizontal Editorial Divider */}
        <div className="pt-8 flex items-center justify-center gap-3">
          <span className="w-12 h-[1px] bg-white/20" />
          <span className="text-[10px] font-mono text-neutral-600 tracking-widest">// 04 //</span>
          <span className="w-12 h-[1px] bg-white/20" />
        </div>
      </div>
    </section>
  );
};
