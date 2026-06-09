"use client";

import { useState, useCallback } from "react";

/**
 * "Domain Expansion" floating button that triggers a full-screen
 * purple void overlay with Gojo portrait and "Unlimited Void" text.
 */
export function DomainExpansion() {
  const [isActive, setIsActive] = useState(false);

  const triggerDomain = useCallback(() => {
    if (isActive) return;
    setIsActive(true);
    // Auto-dismiss after animation duration
    setTimeout(() => setIsActive(false), 4000);
  }, [isActive]);

  return (
    <>
      {/* Floating button */}
      <button
        className="domain-btn"
        onClick={triggerDomain}
        aria-label="Domain Expansion"
      >
        <span className="infinity-icon">∞</span>
        Domain Expansion
      </button>

      {/* Full-screen overlay */}
      {isActive && (
        <div className="domain-expansion-overlay" key={Date.now()}>
          {/* Infinity particles inside domain */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 25 }).map((_, i) => {
              const x = ((i * 47 + 13) % 100);
              const y = ((i * 73 + 31) % 100);
              const size = 2 + (i % 4);
              const delay = (i * 0.12);
              return (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: size,
                    height: size,
                    background: i % 3 === 0 ? "#1F5AFF" : i % 3 === 1 ? "#7B2FBE" : "#D1E6FF",
                    boxShadow: `0 0 ${size * 5}px ${i % 3 === 0 ? "rgba(31,90,255,0.7)" : i % 3 === 1 ? "rgba(123,47,190,0.7)" : "rgba(209,230,255,0.5)"}`,
                    animation: `cursed-float ${2 + (i % 3)}s ease-in-out ${delay}s infinite`,
                    ["--drift" as string]: `${(i % 2 === 0 ? 1 : -1) * (20 + i * 3)}px`,
                    ["--particle-opacity" as string]: "0.8",
                  }}
                />
              );
            })}
          </div>

          {/* Gojo portrait — slides in from right */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: "5%",
              bottom: "0",
              width: "min(45vw, 400px)",
              height: "min(80vh, 600px)",
              opacity: 0,
              animation: "gojo-domain-enter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
              filter: "drop-shadow(0 0 60px rgba(31, 90, 255, 0.5)) drop-shadow(0 0 120px rgba(123, 47, 190, 0.3))",
            }}
          >
            <img
              src="/gojo-domain.png"
              alt="Gojo Satoru"
              className="w-full h-full object-contain"
              style={{
                maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
              }}
            />
          </div>

          {/* Center text — left side */}
          <div
            className="relative z-10 text-center"
            style={{
              position: "absolute",
              left: "8%",
              top: "50%",
              transform: "translateY(-50%)",
              maxWidth: "50%",
            }}
          >
            <div
              className="text-center mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                background: "linear-gradient(135deg, #D1E6FF, #1F5AFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "domain-text-glow 1.5s ease-in-out infinite",
              }}
            >
              ∞
            </div>
            <div className="domain-expansion-text">
              Unlimited Void
            </div>
            <div className="mt-4 text-sm tracking-[0.3em] text-blue-300/50 uppercase">
              無量空処
            </div>
            <div
              className="mt-6 text-xs tracking-[0.15em] text-purple-300/30 uppercase"
              style={{ animation: "fadeIn 1s ease 1s forwards", opacity: 0 }}
            >
              Domain Expansion
            </div>
          </div>
        </div>
      )}
    </>
  );
}
