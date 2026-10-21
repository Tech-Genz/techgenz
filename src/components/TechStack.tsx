import React, { useEffect, useRef, useState } from 'react';
import { TECH_STACK, TechItem } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const categories = [
    { id: 'all', label: 'ALL TECHNOLOGIES' },
    { id: 'frontend', label: 'FRONTEND & UI' },
    { id: 'backend', label: 'BACKEND & DATA' },
    { id: 'creative', label: 'CREATIVE & 3D' },
    { id: 'ai', label: 'AI & SYSTEMS' }
  ];

  const filteredStack = activeCategory === 'all'
    ? TECH_STACK
    : TECH_STACK.filter((item) => item.category === activeCategory);

  // Subtle interactive node topology simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const nodeCount = width < 768 ? 16 : 28;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
        vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
        radius: 1.5 + Math.random() * 2,
      });
    }

    let animationId: number;

    const renderTopology = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connection lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 130;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(renderTopology);
      }
    };

    renderTopology();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="technology" className="relative w-full bg-[#050505] py-28 border-t border-white/[0.08] overflow-hidden">
      {/* Background Interactive Topology Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">05 //</span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">TECHNICAL STACK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-metallic uppercase">
              BUILT WITH <span className="font-serif italic font-normal text-white">purpose.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-sans leading-relaxed">
            Curated tools and robust frameworks selected strictly for their stability, execution speed, and developer ergonomics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/[0.06]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technology Pill Grid (Inspired by the Reference Recording's "THE STACK") */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {filteredStack.map((tech) => (
            <div
              key={tech.name}
              className="group p-4 rounded-xl border border-white/[0.08] bg-[#09090c]/80 backdrop-blur-sm hover:border-white/30 hover:bg-[#111115] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 group-hover:bg-accent-cyan transition-colors" />
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  {tech.category}
                </span>
              </div>

              <div>
                <div className="text-base font-display font-bold text-white group-hover:translate-x-0.5 transition-transform">
                  {tech.name}
                </div>
                <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                  {tech.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
