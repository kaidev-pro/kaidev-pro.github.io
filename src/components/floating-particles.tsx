"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

/**
 * Cursed energy floating particles effect.
 * Appears when hovering on project cards (or any active state).
 */
export function FloatingParticles({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!active || isMobile) {
      setParticles([]);
      return;
    }

    const colors = ["#7B2FBE", "#00D4FF", "#a855f7"];
    const spawn = () => {
      const id = Date.now() + Math.random();
      const p: Particle = {
        id,
        x: Math.random() * 100,
        y: 100,
        size: 2 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 1 + Math.random() * 1.5,
      };
      setParticles((prev) => [...prev.slice(-6), p]);
      setTimeout(() => {
        setParticles((prev) => prev.filter((pp) => pp.id !== id));
      }, p.duration * 1000);
    };

    const interval = setInterval(spawn, 200);
    return () => clearInterval(interval);
  }, [active, isMobile]);

  if (isMobile) return null;

  return (
    <AnimatePresence>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            bottom: 0,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            willChange: "transform, opacity",
          }}
          initial={{ opacity: 0.8, y: 0 }}
          animate={{
            opacity: 0,
            y: -80 - Math.random() * 60,
            x: (Math.random() - 0.5) * 40,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: p.duration, ease: "easeOut" }}
        />
      ))}
    </AnimatePresence>
  );
}
