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

/**
 * Central infinity glow effect behind the hero section.
 * Creates a radial purple/blue energy field centered on the hero.
 */
export function CosmicGlow() {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Central infinity glow — pulsating purple/blue */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 350 : 700,
          height: isMobile ? 350 : 700,
          background: "radial-gradient(circle, rgba(123, 47, 190, 0.2) 0%, rgba(0, 212, 255, 0.08) 35%, transparent 70%)",
          animation: "pulse-glow 6s ease-in-out infinite",
          filter: `blur(${isMobile ? 40 : 80}px)`,
        }}
      />

      {/* Secondary blue energy */}
      <div
        className="absolute"
        style={{
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? 200 : 450,
          height: isMobile ? 200 : 450,
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 60%)",
          animation: "pulse-glow 4s ease-in-out 2s infinite",
          filter: `blur(${isMobile ? 30 : 60}px)`,
        }}
      />

      {/* Light rays — radiating infinity energy */}
      {!isMobile && (
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 900,
            height: 900,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                width: "1.5px",
                height: "450px",
                transformOrigin: "top center",
                transform: `rotate(${i * 45}deg)`,
                background: `linear-gradient(180deg, rgba(123, 47, 190, 0.1), rgba(0, 212, 255, 0.04), transparent)`,
                animation: `ray-pulse 8s ease-in-out ${i * 0.6}s infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* Vignette — darken edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(3, 0, 20, 0.6) 100%)",
        }}
      />
    </div>
  );
}
