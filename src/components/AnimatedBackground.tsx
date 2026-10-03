import React, { useEffect, useRef } from 'react';

/**
 * AnimatedBackground — Architectural Cartography & Surveyor Grid
 * Design System:
 * - Crisp pure white / paper canvas (#FFFFFF)
 * - Delicate architectural drafting grid (hairline lines in faint navy rgba(9, 30, 58, 0.035))
 * - Soft ambient light green (#10B981) and deep blue (#091E3A) atmospheric drift
 * - Micro crosshairs (+) echoing cartographic precision
 */
export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    interface AmbientOrb {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
      pulseOffset: number;
    }

    const orbs: AmbientOrb[] = [
      {
        x: width * 0.2,
        y: height * 0.25,
        radius: Math.min(width, height) * 0.4,
        vx: 0.08,
        vy: 0.05,
        color: '16, 185, 129', // emerald light green
        alpha: 0.045,
        pulseSpeed: 0.0008,
        pulseOffset: 0,
      },
      {
        x: width * 0.8,
        y: height * 0.35,
        radius: Math.min(width, height) * 0.38,
        vx: -0.06,
        vy: 0.07,
        color: '9, 30, 58', // deep architectural navy
        alpha: 0.025,
        pulseSpeed: 0.0007,
        pulseOffset: Math.PI / 2,
      },
      {
        x: width * 0.5,
        y: height * 0.8,
        radius: Math.min(width, height) * 0.35,
        vx: 0.05,
        vy: -0.06,
        color: '16, 185, 129',
        alpha: 0.035,
        pulseSpeed: 0.001,
        pulseOffset: Math.PI,
      },
    ];

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -orb.radius * 0.5 || orb.x > width + orb.radius * 0.5) orb.vx *= -1;
        if (orb.y < -orb.radius * 0.5 || orb.y > height + orb.radius * 0.5) orb.vy *= -1;

        const currentAlpha = orb.alpha + Math.sin(time * orb.pulseSpeed + orb.pulseOffset) * 0.01;

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        gradient.addColorStop(0, `rgba(${orb.color}, ${Math.max(0.005, currentAlpha)})`);
        gradient.addColorStop(0.6, `rgba(${orb.color}, ${Math.max(0.002, currentAlpha * 0.3)})`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Architectural Surveyor Hairline Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #091E3A 1px, transparent 1px),
            linear-gradient(to bottom, #091E3A 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
};
