"use client";

import { useEffect, useState } from "react";

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

// Cosmic dust particles
const DUST_COUNT = 20;
const DUST = Array.from({ length: DUST_COUNT }, (_, i) => {
  const h1 = ((i * 131 + 47) % 100) / 100;
  const h2 = ((i * 97 + 23) % 100) / 100;
  const h3 = ((i * 199 + 11) % 100) / 100;
  return {
    top: `${h1 * 100}%`,
    left: `${h2 * 100}%`,
    size: 1 + h3 * 3,
    opacity: 0.1 + h3 * 0.3,
    duration: 10 + h3 * 20,
    delay: h1 * 10,
    color: i % 3 === 0 ? "rgba(168,85,247,0.5)" : i % 4 === 0 ? "rgba(34,211,238,0.4)" : "rgba(255,255,255,0.3)",
  };
});

export function CosmicGlow() {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Central star glow — pulsating */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 300 : 600,
          height: isMobile ? 300 : 600,
          background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(34,211,238,0.08) 30%, transparent 70%)",
          animation: "pulse-glow 6s ease-in-out infinite",
          willChange: "opacity, transform",
        }}
      />

      {/* Secondary glow — warm */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 200 : 400,
          height: isMobile ? 200 : 400,
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 60%)",
          animation: "pulse-glow 4s ease-in-out 2s infinite",
          willChange: "opacity",
        }}
      />

      {/* Light rays — radiating outward */}
      {!isMobile && (
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 800,
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                width: "2px",
                height: "400px",
                transformOrigin: "top center",
                transform: `rotate(${i * 30}deg)`,
                background: `linear-gradient(180deg, rgba(168,85,247,0.08), rgba(34,211,238,0.04), transparent)`,
                animation: `ray-pulse 8s ease-in-out ${i * 0.5}s infinite`,
                willChange: "opacity",
              }}
            />
          ))}
        </div>
      )}

      {/* Cosmic dust */}
      {DUST.map((d, i) => (
        <div
          key={`dust-${i}`}
          className="absolute rounded-full"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            backgroundColor: d.color,
            animation: `dust-float ${d.duration}s ease-in-out ${d.delay}s infinite alternate`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Vignette — darken edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(3,0,20,0.6) 100%)",
        }}
      />
    </div>
  );
}
