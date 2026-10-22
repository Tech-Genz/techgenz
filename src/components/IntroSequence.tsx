import React, { useEffect, useRef, useState } from 'react';

interface IntroSequenceProps {
  onComplete: () => void;
}

interface Particle {
  baseAngle: number;
  initialRadius: number;
  currentRadius: number;
  targetRadius: number;
  angularSpeed: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  color: string;
  seed: number;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fadingOut, setFadingOut] = useState(false);
  const [phase, setPhase] = useState<number>(0); // 0: init/converge, 1: flash/burst, 2: wordmark, 3: tagline
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const hasFinishedRef = useRef(false);

  // Skip handler
  const handleSkip = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  useEffect(() => {
    // Prevent background scrolling during intro
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.body.style.overflow = originalOverflow;
      onComplete();
      return;
    }

    // Sequence timing milestones
    const t1 = setTimeout(() => setPhase(1), 950);   // Flash ignition & burst
    const t2 = setTimeout(() => setPhase(2), 1250);  // TECH GENZ wordmark reveal
    const t3 = setTimeout(() => setPhase(3), 1950);  // IDEAS ENGINEERED BEYOND LIMITS reveal
    const t4 = setTimeout(() => {
      if (!hasFinishedRef.current) {
        setFadingOut(true);
      }
    }, 4300); // Begin graceful fadeout after >2.3s of full brand visibility
    const t5 = setTimeout(() => {
      if (!hasFinishedRef.current) {
        hasFinishedRef.current = true;
        onComplete();
      }
    }, 4950); // Complete sequence

    timeoutsRef.current = [t1, t2, t3, t4, t5];

    // Canvas particle system setup
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const centerX = width / 2;
    const centerY = height / 2;
    const maxDimension = Math.max(width, height);
    const particleCount = width < 768 ? 160 : 320;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAngle = Math.random() * Math.PI * 2;
      const initialRadius = 160 + Math.random() * (maxDimension * 0.55);
      const isCyan = Math.random() < 0.28;
      const alpha = 0.3 + Math.random() * 0.7;
      const color = isCyan
        ? `rgba(0, 240, 255, ${alpha})`
        : `rgba(240, 245, 255, ${alpha})`;

      // Outer halo target after convergence
      const minHalo = Math.min(width, height) * 0.22;
      const maxHalo = Math.min(width, height) * 0.52;
      const targetRadius = minHalo + Math.random() * (maxHalo - minHalo);

      particles.push({
        baseAngle,
        initialRadius,
        currentRadius: initialRadius,
        targetRadius,
        angularSpeed: (0.4 + Math.random() * 0.8) * (Math.random() < 0.5 ? 1 : -1),
        size: 1.2 + Math.random() * 2.2,
        alpha,
        baseAlpha: alpha,
        color,
        seed: Math.random() * 100
      });
    }

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = (currentTime - startTime) / 1000;
      const cx = width / 2;
      const cy = height / 2;

      // Dark background fill
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Phase 0 -> 1: Cosmic Convergence (0.0s to 1.0s)
      // Phase 1 -> 2: Flash Burst & Halo expansion (1.0s to 1.3s)
      // Phase 2 -> 3: Ambient Halo Orbit (1.3s+)
      const isConverging = elapsed < 1.0;
      const isBursting = elapsed >= 1.0 && elapsed < 1.4;

      // 1. Ambient Central Glow
      const glowBaseAlpha = isConverging
        ? Math.min(0.35, elapsed * 0.35)
        : Math.max(0.18, 0.35 - (elapsed - 1.0) * 0.05);

      const radialGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, width * 0.5);
      radialGlow.addColorStop(0, `rgba(0, 240, 255, ${glowBaseAlpha * 0.4})`);
      radialGlow.addColorStop(0.3, `rgba(255, 255, 255, ${glowBaseAlpha * 0.15})`);
      radialGlow.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Central Flash Ignition at 1.0s - 1.35s
      if (isBursting) {
        const burstProgress = (elapsed - 1.0) / 0.35;
        const flashIntensity = Math.sin(burstProgress * Math.PI) * 0.7;

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const flashGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(width, height) * 0.65);
        flashGrad.addColorStop(0, `rgba(255, 255, 255, ${flashIntensity})`);
        flashGrad.addColorStop(0.25, `rgba(0, 240, 255, ${flashIntensity * 0.7})`);
        flashGrad.addColorStop(0.7, `rgba(0, 240, 255, ${flashIntensity * 0.2})`);
        flashGrad.addColorStop(1, 'rgba(5, 5, 5, 0)');
        ctx.fillStyle = flashGrad;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }

      // 3. Render Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (isConverging) {
          // Inward spiral toward center
          const convergeProgress = Math.min(1, elapsed / 0.95);
          // Ease-in quad
          const ease = convergeProgress * convergeProgress;
          p.currentRadius = p.initialRadius * (1 - ease) + 8 * ease;
          const currentAngle = p.baseAngle + p.angularSpeed * elapsed * (1 + ease * 4);

          const px = cx + Math.cos(currentAngle) * p.currentRadius;
          const py = cy + Math.sin(currentAngle) * p.currentRadius;

          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(px, py, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Rebound and orbit in expansive outer halo around the text
          const postElapsed = elapsed - 1.0;
          const expandProgress = Math.min(1, postElapsed / 0.5);
          // Smooth ease-out
          const easeOut = 1 - Math.pow(1 - expandProgress, 3);

          p.currentRadius = 8 + (p.targetRadius - 8) * easeOut;
          const currentAngle = p.baseAngle + p.angularSpeed * (1.0 + postElapsed * 0.4);

          // Gentle ambient float
          const floatX = Math.cos(elapsed * 1.5 + p.seed) * 12;
          const floatY = Math.sin(elapsed * 1.5 + p.seed) * 12;

          const px = cx + Math.cos(currentAngle) * p.currentRadius + floatX;
          const py = cy + Math.sin(currentAngle) * p.currentRadius + floatY;

          // Twinkle effect
          const twinkle = 0.75 + Math.sin(elapsed * 3 + p.seed) * 0.25;

          ctx.fillStyle = p.color.replace(/[\d\.]+\)$/, `${p.baseAlpha * twinkle})`);
          ctx.beginPath();
          ctx.arc(px, py, p.size * 0.55, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 4. Subtle Shimmer Sweep across the background at 2.2s
      if (elapsed >= 2.0 && elapsed < 3.2) {
        const sweepProgress = (elapsed - 2.0) / 1.2;
        const sweepX = cx - width * 0.6 + sweepProgress * width * 1.2;

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const sweepGrad = ctx.createLinearGradient(sweepX - 100, 0, sweepX + 100, 0);
        sweepGrad.addColorStop(0, 'rgba(0, 240, 255, 0)');
        sweepGrad.addColorStop(0.5, 'rgba(0, 240, 255, 0.15)');
        sweepGrad.addColorStop(1, 'rgba(0, 240, 255, 0)');
        ctx.fillStyle = sweepGrad;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Keyboard controls (Escape, Space, Enter to skip)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      timeoutsRef.current.forEach((t) => clearTimeout(t));
    };
  }, [onComplete]);

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-opacity duration-700 cursor-pointer overflow-hidden ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Tech Genz intro animation. Click to skip."
    >
      {/* 1. Background Particle & Flash Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      />

      {/* 2. Dedicated HTML Brand Name & Tagline Overlay (Never obscured by particles) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8 pointer-events-none select-none">
        {/* Soft Electric-Cyan Backlight Halo */}
        <div
          className={`absolute w-[92vw] max-w-4xl h-72 sm:h-96 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ${
            phase >= 2
              ? 'bg-accent-cyan/15 opacity-100 scale-100'
              : phase >= 1
              ? 'bg-white/10 opacity-70 scale-75'
              : 'opacity-0 scale-50'
          }`}
        />

        {/* Brand Name: TECH GENZ */}
        <div
          className={`relative transition-all duration-700 ease-out transform ${
            phase >= 2
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-90 translate-y-4'
          }`}
        >
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-display font-extrabold tracking-tight uppercase leading-none text-white whitespace-nowrap drop-shadow-[0_0_40px_rgba(0,240,255,0.45)] select-none">
            TECH GENZ
          </h1>
        </div>

        {/* Tagline: IDEAS ENGINEERED BEYOND LIMITS */}
        <div
          className={`relative mt-4 sm:mt-7 transition-all duration-700 delay-100 ease-out transform ${
            phase >= 3
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 px-2">
            <span className="hidden sm:inline-block w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-accent-cyan/80" />
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base font-mono tracking-[0.18em] xs:tracking-[0.24em] sm:tracking-[0.38em] text-neutral-200 uppercase font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] whitespace-nowrap">
              IDEAS ENGINEERED BEYOND LIMITS
            </p>
            <span className="hidden sm:inline-block w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-accent-cyan/80" />
          </div>
        </div>
      </div>

      {/* 3. System Status Indicator (Top-left on mobile, bottom-left on desktop to prevent overlap) */}
      <div className="absolute top-8 left-6 sm:top-auto sm:bottom-8 sm:left-8 z-30 flex items-center gap-2.5 text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase select-none pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F0FF] animate-pulse" />
        <span>
          {phase === 0 && 'TECH GENZ // SYSTEM INIT'}
          {phase === 1 && 'TECH GENZ // CONVERGING CORE'}
          {phase === 2 && 'TECH GENZ // BRAND REVEAL'}
          {phase >= 3 && 'TECH GENZ // SYSTEM ONLINE'}
        </span>
      </div>

      {/* 4. Skip Intro Button at bottom-right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-[11px] sm:text-xs uppercase font-mono tracking-widest text-neutral-300 hover:text-white hover:border-white/50 transition-all duration-300 shadow-xl cursor-pointer"
        title="Skip intro animation"
      >
        <span>Skip Intro</span>
        <span className="text-[10px] text-neutral-500">[ESC]</span>
      </button>
    </div>
  );
};
