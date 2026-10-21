import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ParticlePortraitProps {
  scrollProgress?: number;
  interactive?: boolean;
}

export const ParticlePortrait: React.FC<ParticlePortraitProps> = ({
  scrollProgress = 0,
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    let isWebGLAvailable = false;
    try {
      const testCanvas = document.createElement('canvas');
      isWebGLAvailable = !!(
        window.WebGLRenderingContext &&
        (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'))
      );
    } catch {
      isWebGLAvailable = false;
    }

    if (!isWebGLAvailable) {
      setWebGlSupported(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.08);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.45, 4.6);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL initialization failed, falling back:', e);
      setWebGlSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Generate Human Bust Point Cloud
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 14000 : 28000;

    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);
    const twinkleSpeeds = new Float32Array(particleCount);

    let index = 0;

    // Helper: add point with jitter
    const addPoint = (
      x: number,
      y: number,
      z: number,
      colR: number,
      colG: number,
      colB: number,
      sz: number
    ) => {
      if (index >= particleCount) return;
      const i3 = index * 3;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      colors[i3] = colR;
      colors[i3 + 1] = colG;
      colors[i3 + 2] = colB;

      sizes[index] = sz;
      twinkleSpeeds[index] = 0.5 + Math.random() * 2.5;

      velocities[i3] = 0;
      velocities[i3 + 1] = 0;
      velocities[i3 + 2] = 0;

      index++;
    };

    // 1. Head & Face (Refined Cranium, Jawline, Nose, Eyes, Cheeks, Hair)
    const headCount = Math.floor(particleCount * 0.42);
    for (let i = 0; i < headCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      // Radii for oval human head
      let rx = 0.56;
      let ry = 0.72;
      let rz = 0.60;

      let x = rx * Math.sin(phi) * Math.cos(theta);
      let y = ry * Math.cos(phi) + 0.95;
      let z = rz * Math.sin(phi) * Math.sin(theta);

      // Taper jaw and chin gracefully
      if (y < 0.95) {
        const factor = 1.0 - (0.95 - y) * 0.70;
        x *= Math.max(0.45, factor);
        z *= Math.max(0.55, factor);
      }

      // Forehead & temples curvature
      if (y > 1.15 && Math.abs(x) < 0.45) {
        z += 0.04;
      }

      // Nose bridge definition
      const isNose = z > 0.38 && Math.abs(x) < 0.16 && y > 0.75 && y < 1.05;
      if (isNose) {
        z += 0.12 * (1.0 - Math.abs(x) / 0.16);
      }

      // Eye socket indentations
      const isEyeSocket = z > 0.35 && y > 0.95 && y < 1.10 && Math.abs(x) > 0.14 && Math.abs(x) < 0.32;
      if (isEyeSocket) {
        z -= 0.05;
      }

      // Hair volume on top and sides
      if (y > 1.05 || Math.abs(x) > 0.48) {
        const hairJitter = (Math.random() - 0.5) * 0.12;
        x += hairJitter;
        y += Math.random() * 0.10;
        z += hairJitter;
      }

      // Organic subtle displacement
      x += (Math.random() - 0.5) * 0.025;
      y += (Math.random() - 0.5) * 0.025;
      z += (Math.random() - 0.5) * 0.025;

      // Color palette: silver metallic with luminous specular highlights
      const brightness = 0.60 + Math.random() * 0.40;
      const isSpecular = isNose || (y > 0.8 && Math.abs(x) < 0.38 && z > 0.28);
      
      const r = isSpecular ? brightness * 0.96 : brightness * 0.75;
      const g = isSpecular ? brightness * 0.98 : brightness * 0.80;
      const b = isSpecular ? brightness * 1.0 : brightness * 0.88;

      const sz = (isSpecular ? 3.0 : 2.0) + Math.random() * 1.2;
      addPoint(x, y, z, r, g, b, sz);
    }

    // 2. Neck & Collar
    const neckCount = Math.floor(particleCount * 0.14);
    for (let i = 0; i < neckCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const heightFrac = Math.random(); // 0 (collar) to 1 (chin)
      const y = 0.22 + heightFrac * 0.48;

      const radius = 0.30 + (1 - heightFrac) * 0.08;
      let x = Math.cos(angle) * radius;
      let z = Math.sin(angle) * (radius * 0.9);

      if (z < -0.1) z *= 0.8;

      const isShirtCollar = y < 0.36 && Math.abs(x) < 0.28 && z > 0.18;
      const brightness = isShirtCollar ? 0.95 : 0.45 + Math.random() * 0.35;
      const r = brightness * 0.85;
      const g = brightness * 0.90;
      const b = brightness * 0.98;

      addPoint(x, y, z, r, g, b, isShirtCollar ? 2.8 : 1.9);
    }

    // 3. Shoulders, Chest & Suit Jacket (Wider, Tailored Cut)
    const torsoCount = Math.floor(particleCount * 0.38);
    for (let i = 0; i < torsoCount; i++) {
      const t = Math.random();
      const y = 0.28 - t * 1.6;

      // Tailored shoulder spread
      const shoulderSpread = 1.60 + t * 0.75;
      const x = (Math.random() - 0.5) * 2 * shoulderSpread;

      const depthRadius = 0.50 + t * 0.25;
      const normalizedX = x / shoulderSpread;
      const maxZ = Math.sqrt(Math.max(0, 1 - normalizedX * normalizedX)) * depthRadius;
      
      const z = (Math.random() * 1.4 - 0.45) * maxZ;

      // V-neck lapel & tie line down center
      const isCenterStripe = Math.abs(x) < 0.12 && z > 0.18 && y > -1.2;
      const isLapelEdge = Math.abs(Math.abs(x) - (0.18 + (0.28 - y) * 0.30)) < 0.06 && z > 0.22;

      let brightness = 0.38 + Math.random() * 0.35;
      let r = brightness * 0.80;
      let g = brightness * 0.85;
      let b = brightness * 0.95;

      if (isCenterStripe || isLapelEdge) {
        brightness = 0.90 + Math.random() * 0.10;
        r = brightness * 0.92;
        g = brightness * 0.96;
        b = brightness;
      }

      addPoint(x, y, z, r, g, b, (isCenterStripe || isLapelEdge) ? 2.8 : 2.0);
    }

    // 4. Atmospheric Starfield / Floating Luminous Dust
    while (index < particleCount) {
      const x = (Math.random() - 0.5) * 8.0;
      const y = (Math.random() - 0.5) * 6.0;
      const z = (Math.random() - 0.5) * 5.0;
      const brightness = 0.25 + Math.random() * 0.35;
      addPoint(x, y, z, brightness * 0.75, brightness * 0.85, brightness * 0.98, 1.4);
    }

    // Create BufferGeometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture (Clean square/circular point sprite)
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      // Soft square with rounded corners and bright center
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(230, 240, 255, 0.9)');
      grad.addColorStop(0.7, 'rgba(160, 185, 220, 0.4)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const particleTexture = createParticleTexture();

    // Material with additive blending for cinematic shimmer
    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.038 : 0.046,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false };
    const raycaster = new THREE.Raycaster();
    const mouse3D = new THREE.Vector2(-999, -999);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouse.targetX = (clientX / width) * 2 - 1;
      mouse.targetY = -(clientY / height) * 2 + 1;
      mouse.isHovered = true;

      mouse3D.x = mouse.targetX;
      mouse3D.y = mouse.targetY;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = 0;
      mouse.targetY = 0;
      mouse3D.x = -999;
      mouse3D.y = -999;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation for parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x = mouse.x * 0.35;
      camera.position.y = 0.2 + mouse.y * 0.25;
      camera.lookAt(0, 0.35, 0);

      // Subtle gentle rotation
      pointCloud.rotation.y = Math.sin(elapsedTime * 0.3) * 0.05 + mouse.x * 0.08;
      pointCloud.rotation.x = Math.cos(elapsedTime * 0.25) * 0.03 - mouse.y * 0.06;

      // Project mouse to 3D plane at z ≈ 0 for repulsion
      raycaster.setFromCamera(mouse3D, camera);
      const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const intersectionPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(intersectPlane, intersectionPoint);

      const posArray = geometry.attributes.position.array as Float32Array;

      // Interaction radius
      const repelRadius = 0.75;
      const repelStrength = 0.18;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        let cx = posArray[i3];
        let cy = posArray[i3 + 1];
        let cz = posArray[i3 + 2];

        // Repel from mouse intersection
        if (mouse.isHovered && mouse3D.x > -900) {
          const dx = cx - intersectionPoint.x;
          const dy = cy - intersectionPoint.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < repelRadius * repelRadius && distSq > 0.0001) {
            const dist = Math.sqrt(distSq);
            const force = (1.0 - dist / repelRadius) * repelStrength;
            velocities[i3] += (dx / dist) * force;
            velocities[i3 + 1] += (dy / dist) * force;
            velocities[i3 + 2] += force * 0.4;
          }
        }

        // Spring force returning to original position
        const springK = 0.07;
        const damping = 0.88;

        const fx = (ox - cx) * springK;
        const fy = (oy - cy) * springK;
        const fz = (oz - cz) * springK;

        velocities[i3] = (velocities[i3] + fx) * damping;
        velocities[i3 + 1] = (velocities[i3 + 1] + fy) * damping;
        velocities[i3 + 2] = (velocities[i3 + 2] + fz) * damping;

        // Subtle breathing / wave movement
        const wave = Math.sin(elapsedTime * twinkleSpeeds[i] + ox * 2.0) * 0.003;

        posArray[i3] += velocities[i3];
        posArray[i3 + 1] += velocities[i3 + 1] + wave;
        posArray[i3 + 2] += velocities[i3 + 2];
      }

      geometry.attributes.position.needsUpdate = true;

      // React to scroll progress (dissolve/fade)
      if (scrollProgress > 0) {
        material.opacity = Math.max(0.1, 0.92 - scrollProgress * 1.2);
        pointCloud.position.y = -scrollProgress * 1.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
      geometry.dispose();
      material.dispose();
      if (particleTexture) particleTexture.dispose();
      renderer.dispose();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [scrollProgress, interactive]);

  // Fallback rendering if WebGL is unavailable
  if (!webGlSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-72 h-96 opacity-60">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-2xl" />
          <svg viewBox="0 0 200 280" className="w-full h-full text-white/30 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <ellipse cx="100" cy="70" rx="35" ry="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 80,115 L 80,140 Q 50,145 25,180 L 15,260 L 185,260 L 175,180 Q 150,145 120,140 L 120,115" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      style={{ touchAction: 'none' }}
    />
  );
};
