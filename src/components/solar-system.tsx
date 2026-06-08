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

// Real orbital data (semi-major axis in AU, period in Earth years)
// Using Kepler's third law: T² = a³
// Scaled to screen pixels with log scaling for visibility
const REAL_ORBITS = [
  {
    name: "Mercury",
    size: 7,
    au: 0.387,
    period: 0.241,
    color: "#b5b5b5",
    glow: "rgba(180,180,180,0.25)",
  },
  {
    name: "Venus",
    size: 14,
    au: 0.723,
    period: 0.615,
    color: "#dba040",
    glow: "rgba(255,200,80,0.25)",
  },
  {
    name: "Earth",
    size: 16,
    au: 1.0,
    period: 1.0,
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.25)",
  },
  {
    name: "Mars",
    size: 12,
    au: 1.524,
    period: 1.881,
    color: "#c1440e",
    glow: "rgba(220,80,40,0.2)",
  },
  {
    name: "Jupiter",
    size: 30,
    au: 5.203,
    period: 11.86,
    color: "#d4944a",
    glow: "rgba(220,160,80,0.2)",
    hasBands: true,
  },
  {
    name: "Saturn",
    size: 26,
    au: 9.537,
    period: 29.46,
    color: "#d4b868",
    glow: "rgba(220,190,100,0.2)",
    hasRing: true,
  },
  {
    name: "Uranus",
    size: 20,
    au: 19.19,
    period: 84.01,
    color: "#60c8c8",
    glow: "rgba(96,200,200,0.15)",
  },
  {
    name: "Neptune",
    size: 18,
    au: 30.07,
    period: 164.8,
    color: "#4060d0",
    glow: "rgba(64,96,208,0.15)",
  },
];

// Map real AU to screen pixels (log scale for visibility)
function auToPixels(au: number, maxRadius: number): number {
  const minAU = 0.387;
  const maxAU = 30.07;
  // Log scale mapping
  const logMin = Math.log(minAU);
  const logMax = Math.log(maxAU);
  const logVal = Math.log(au);
  const normalized = (logVal - logMin) / (logMax - logMin);
  // Inner planets get a bit more space, outer ones compressed
  return 30 + normalized * (maxRadius - 30);
}

// Scale animation duration: 1 Earth year = baseDuration seconds
// Make it watchable — 1 year = 8 seconds
const BASE_YEAR = 8;

export function SolarSystem() {
  const isMobile = useIsMobile();
  const maxRadius = isMobile ? 150 : 400;

  // Calculate screen radii and durations
  const planets = REAL_ORBITS.map((p) => {
    const orbitR = auToPixels(p.au, maxRadius);
    const duration = p.period * BASE_YEAR;
    // Random starting angle so planets aren't all aligned
    const startAngle = (((p.au * 137.508) % 360) * Math.PI) / 180; // golden angle offset
    return { ...p, orbitR, duration, startAngle };
  });

  // Generate CSS keyframes
  const keyframesCSS = planets
    .map(
      (p, i) => `
    @keyframes orbit-${i} {
      0% {
        transform: translate(
          ${Math.cos(p.startAngle) * p.orbitR}px,
          ${Math.sin(p.startAngle) * p.orbitR}px
        );
      }
      25% {
        transform: translate(
          ${Math.cos(p.startAngle + Math.PI / 2) * p.orbitR}px,
          ${Math.sin(p.startAngle + Math.PI / 2) * p.orbitR}px
        );
      }
      50% {
        transform: translate(
          ${Math.cos(p.startAngle + Math.PI) * p.orbitR}px,
          ${Math.sin(p.startAngle + Math.PI) * p.orbitR}px
        );
      }
      75% {
        transform: translate(
          ${Math.cos(p.startAngle + Math.PI * 1.5) * p.orbitR}px,
          ${Math.sin(p.startAngle + Math.PI * 1.5) * p.orbitR}px
        );
      }
      100% {
        transform: translate(
          ${Math.cos(p.startAngle + Math.PI * 2) * p.orbitR}px,
          ${Math.sin(p.startAngle + Math.PI * 2) * p.orbitR}px
        );
      }
    }
  `
    )
    .join("\n");

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: keyframesCSS }} />

      {/* Orbit rings */}
      {planets.map((planet, i) => (
        <div
          key={`orbit-${i}`}
          className="absolute rounded-full"
          style={{
            width: planet.orbitR * 2,
            height: planet.orbitR * 2,
            top: `calc(50% - ${planet.orbitR}px)`,
            left: `calc(50% - ${planet.orbitR}px)`,
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        />
      ))}

      {/* Sun — center glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: isMobile ? 10 : 14,
          height: isMobile ? 10 : 14,
          top: "calc(50% - 5px)",
          left: "calc(50% - 5px)",
          background: "radial-gradient(circle, #fff 0%, #ffe066 30%, #ff8800 60%, transparent 100%)",
          boxShadow: "0 0 20px rgba(255,200,60,0.6), 0 0 60px rgba(255,140,0,0.3)",
        }}
      />

      {/* Planets */}
      {planets.map((planet, i) => (
        <div
          key={planet.name}
          className="absolute"
          style={{
            width: planet.size,
            height: planet.size,
            top: "calc(50% - 4px)",
            left: "calc(50% - 4px)",
            animation: `orbit-${i} ${planet.duration}s linear infinite`,
            willChange: "transform",
          }}
        >
          {/* Planet body */}
          <div
            className="w-full h-full rounded-full relative overflow-hidden"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${planet.color}, ${planet.color}88, ${planet.color}44)`,
              boxShadow: `0 0 ${planet.size}px ${planet.glow}, inset -${planet.size / 4}px -${planet.size / 4}px ${planet.size / 2}px rgba(0,0,0,0.6)`,
            }}
          >
            {planet.hasBands && (
              <>
                <div
                  className="absolute w-full"
                  style={{
                    top: "30%",
                    height: "8%",
                    background: "rgba(180,120,60,0.3)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  className="absolute w-full"
                  style={{
                    top: "50%",
                    height: "10%",
                    background: "rgba(200,140,60,0.25)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  className="absolute w-full"
                  style={{
                    top: "68%",
                    height: "6%",
                    background: "rgba(160,100,50,0.3)",
                    borderRadius: "50%",
                  }}
                />
              </>
            )}
          </div>

          {planet.hasRing && (
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: planet.size * 2.2,
                height: planet.size * 0.5,
                transform: "translate(-50%, -50%) rotateX(75deg)",
                borderRadius: "50%",
                border: "1.5px solid rgba(210,180,100,0.3)",
                boxShadow: "0 0 6px rgba(210,180,100,0.1)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
