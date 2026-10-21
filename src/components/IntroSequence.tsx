import React, { useEffect, useRef, useState } from 'react';

interface IntroSequenceProps {
  onComplete: () => void;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fadingOut, setFadingOut] = useState(false);
  const [skipHover, setSkipHover] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      onComplete();
      return;
    }

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create offscreen canvas to sample text pixels
    const textCanvas = document.createElement('canvas');
    const textCtx = textCanvas.getContext('2d');
    if (!textCtx) {
      onComplete();
      return;
    }

    textCanvas.width = width;
    textCanvas.height = height;

    const fontSize = Math.min(width * 0.12, 130);
    textCtx.font = `800 ${fontSize}px "Space Grotesk", sans-serif`;
    textCtx.fillStyle = '#FFFFFF';
    textCtx.textAlign = 'center';
    textCtx.textBaseline = 'middle';
    textCtx.fillText('TECH GENZ', width / 2, height / 2);

    const imgData = textCtx.getImageData(0, 0, width, height);
    const data = imgData.data;

    const particles: Particle[] = [];
    const step = width < 768 ? 5 : 4; // Particle density

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        const alpha = data[index + 3];

        if (alpha > 140) {
          // Disperse initially outward
          const angle = Math.random() * Math.PI * 2;
          const distance = 150 + Math.random() * 450;
          const startX = width / 2 + Math.cos(angle) * distance;
          const startY = height / 2 + Math.sin(angle) * distance;

          const shade = 180 + Math.floor(Math.random() * 75);
          const color = `rgb(${shade}, ${shade + 5}, ${shade + 15})`;

          particles.push({
            x: startX,
            y: startY,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
            size: 1.8 + Math.random() * 1.6,
            alpha: 0.1 + Math.random() * 0.9,
            color
          });
        }
      }
    }

    let animationFrameId: number;
    let startTime = performance.now();
    let hasTriggeredFinish = false;

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = (currentTime - startTime) / 1000;

      // Dark background with center metallic glow
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Central metallic spotlight glow
      const glowAlpha = Math.min(0.25, elapsed * 0.12);
      const glowGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width * 0.45
      );
      glowGrad.addColorStop(0, `rgba(255, 255, 255, ${glowAlpha})`);
      glowGrad.addColorStop(0.5, `rgba(180, 200, 220, ${glowAlpha * 0.3})`);
      glowGrad.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Assemble particles
      const easeSpeed = Math.min(0.12, 0.04 + elapsed * 0.04);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = p.originX - p.x;
        const dy = p.originY - p.y;

        p.vx += dx * 0.04;
        p.vy += dy * 0.04;

        p.vx *= 0.82;
        p.vy *= 0.82;

        p.x += p.vx * easeSpeed * 2.2;
        p.y += p.vy * easeSpeed * 2.2;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Shimmer sweep across letters after assembly (at ~1.8s)
      if (elapsed > 1.6) {
        const sweepProgress = (elapsed - 1.6) * 1.5;
        const sweepX = width * 0.2 + sweepProgress * width * 0.6;

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const sweepGrad = ctx.createLinearGradient(sweepX - 80, 0, sweepX + 80, 0);
        sweepGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        sweepGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.35)');
        sweepGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = sweepGrad;
        ctx.fillRect(width * 0.15, height * 0.35, width * 0.7, height * 0.3);
        ctx.restore();
      }

      // Finish sequence after 2.8s
      if (elapsed > 2.8 && !hasTriggeredFinish) {
        hasTriggeredFinish = true;
        setFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 600);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Keyboard shortcut (Escape to skip)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        setFadingOut(true);
        setTimeout(onComplete, 300);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setFadingOut(true);
    setTimeout(onComplete, 300);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-opacity duration-700 cursor-pointer ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Skip action in top right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        onMouseEnter={() => setSkipHover(true)}
        onMouseLeave={() => setSkipHover(false)}
        className="absolute bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs uppercase tracking-widest text-neutral-400 hover:text-white hover:border-white/50 transition-all duration-300"
      >
        <span>Skip Intro</span>
        <span className="text-[10px] text-neutral-500">[ESC]</span>
      </button>

      {/* Subtle brand indicator at bottom */}
      <div className="absolute bottom-8 left-8 text-xs font-mono tracking-widest text-neutral-500 uppercase">
        TECH GENZ // SYSTEM INIT
      </div>
    </div>
  );
};
