"use client";

import { useEffect, useRef, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

/**
 * Cursor trail effect — purple/blue cursed energy particles
 * that follow the mouse on desktop.
 */
function CursedCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
    }>
  >([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#7B2FBE", "#00D4FF", "#a855f7", "#00D4FF88"];

    const handleMouse = (e: MouseEvent) => {
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.3,
          life: 1,
          maxLife: 25 + Math.random() * 20,
          size: Math.random() * 2.5 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => {
        p.life -= 1 / p.maxLife;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.015;

        if (p.life <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life * 0.5;
        ctx.fill();
        ctx.globalAlpha = 1;

        return true;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouse);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}

/**
 * Floating cursed energy particles in the background.
 * Purple/blue glowing dots that float upward.
 */
const PARTICLE_COUNT_DESKTOP = 40;
const PARTICLE_COUNT_MOBILE = 15;

const PARTICLES_DESKTOP = Array.from({ length: PARTICLE_COUNT_DESKTOP }, (_, i) => {
  const h1 = ((i * 157 + 31) % 100) / 100;
  const h2 = ((i * 89 + 17) % 100) / 100;
  const h3 = ((i * 233 + 7) % 100) / 100;
  return {
    left: `${h1 * 100}%`,
    size: 1 + h3 * 3,
    opacity: 0.2 + h3 * 0.4,
    duration: 15 + h3 * 25,
    delay: h2 * 10,
    drift: `${(i % 2 === 0 ? 1 : -1) * (10 + h2 * 30)}px`,
    color: i % 3 === 0 ? "rgba(123, 47, 190, 0.6)" : i % 4 === 0 ? "rgba(0, 212, 255, 0.5)" : "rgba(168, 85, 247, 0.4)",
  };
});

const PARTICLES_MOBILE = PARTICLES_DESKTOP.slice(0, PARTICLE_COUNT_MOBILE);

export function AnimatedBackground() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Cursor trail — desktop only */}
      {!isMobile && <CursedCursorTrail />}

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Void black base with purple radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(123, 47, 190, 0.12) 0%, rgba(3, 0, 20, 0) 60%)",
          }}
        />

        {/* Secondary blue glow */}
        <div
          className="absolute"
          style={{
            top: "60%",
            right: "15%",
            width: isMobile ? 250 : 400,
            height: isMobile ? 250 : 400,
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)",
            animation: "pulse-glow 8s ease-in-out 2s infinite",
            filter: `blur(${isMobile ? 60 : 100}px)`,
          }}
        />

        {/* Infinity field grid */}
        {!isMobile && <div className="grid-field" />}

        {/* Cursed energy particles */}
        {(isMobile ? PARTICLES_MOBILE : PARTICLES_DESKTOP).map((p, i) => (
          <div
            key={i}
            className="cursed-particle"
            style={{
              left: p.left,
              bottom: "-5%",
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              ["--drift" as string]: p.drift,
              ["--particle-opacity" as string]: p.opacity,
            }}
          />
        ))}

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 30%, rgba(3, 0, 20, 0.7) 100%)",
          }}
        />
      </div>
    </>
  );
}
