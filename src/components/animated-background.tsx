"use client";

import { useEffect, useRef, useState } from "react";

// Deterministic star positions for SSR
const STARS = Array.from({ length: 80 }, (_, i) => {
  const h1 = ((i * 157 + 31) % 100) / 100;
  const h2 = ((i * 89 + 17) % 100) / 100;
  const h3 = ((i * 233 + 7) % 100) / 100;
  const h4 = ((i * 67 + 43) % 100) / 100;
  return {
    top: `${h1 * 100}%`,
    left: `${h2 * 100}%`,
    size: 0.5 + h3 * 2,
    opacity: 0.15 + h4 * 0.5,
    duration: 3 + h3 * 5,
    delay: h4 * 4,
  };
});

function ShootingStar() {
  const style = {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 50}%`,
    animationDuration: `${0.6 + Math.random() * 0.8}s`,
    animationDelay: `${Math.random() * 0.3}s`,
  };

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...style,
        width: "120px",
        height: "1px",
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(168,85,247,0.6), transparent)",
        transform: `rotate(${20 + Math.random() * 30}deg)`,
        animation: `shoot ${style.animationDuration} ease-out ${style.animationDelay} forwards`,
        borderRadius: "50%",
        boxShadow: "0 0 6px 1px rgba(168,85,247,0.4)",
      }}
    />
  );
}

function CursorTrail() {
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
  const mouse = useRef({ x: 0, y: 0 });
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

    const colors = ["#a855f7", "#22d3ee", "#818cf8", "#ffffff"];

    const handleMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Spawn particles on move
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.5,
          life: 1,
          maxLife: 30 + Math.random() * 20,
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
        p.vy -= 0.02; // slight upward drift

        if (p.life <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life * 0.6;
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

export function AnimatedBackground() {
  const [shootingStars, setShootingStars] = useState<number[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  // Shooting stars at random intervals
  useEffect(() => {
    const spawn = () => {
      const id = Date.now() + Math.random();
      setShootingStars((prev) => [...prev.slice(-3), id]); // max 4 at a time
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s !== id));
      }, 2000);

      // Random next spawn: 2-6 seconds
      setTimeout(spawn, 2000 + Math.random() * 4000);
    };
    const initial = setTimeout(spawn, 3000);
    return () => clearTimeout(initial);
  }, []);

  // Mouse parallax for nebula
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const nebulaOffset1 = {
    x: (mousePos.x - 0.5) * 40,
    y: (mousePos.y - 0.5) * 40,
  };
  const nebulaOffset2 = {
    x: (mousePos.x - 0.5) * -30,
    y: (mousePos.y - 0.5) * -30,
  };

  return (
    <>
      <CursorTrail />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Nebula glow 1 — follows mouse */}
        <div
          className="absolute rounded-full blur-[120px] opacity-15 pointer-events-none transition-transform duration-[2000ms] ease-out"
          style={{
            top: "10%",
            left: "20%",
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            transform: `translate(${nebulaOffset1.x}px, ${nebulaOffset1.y}px)`,
          }}
        />
        {/* Nebula glow 2 — follows mouse (opposite) */}
        <div
          className="absolute rounded-full blur-[120px] opacity-10 pointer-events-none transition-transform duration-[2000ms] ease-out"
          style={{
            top: "60%",
            right: "10%",
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)",
            transform: `translate(${nebulaOffset2.x}px, ${nebulaOffset2.y}px)`,
          }}
        />

        {/* Stars */}
        {STARS.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              backgroundColor:
                i % 5 === 0
                  ? "#22d3ee"
                  : i % 7 === 0
                    ? "#818cf8"
                    : "#fff",
              ["--star-opacity" as string]: star.opacity,
              ["--duration" as string]: `${star.duration}s`,
              ["--delay" as string]: `${star.delay}s`,
            }}
          />
        ))}

        {/* Shooting stars */}
        {shootingStars.map((id) => (
          <ShootingStar key={id} />
        ))}
      </div>
    </>
  );
}
