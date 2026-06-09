"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Detailed Gojo Satoru portrait SVG — based on Kai's character description.
 * Snow-white spiky hair (duri ke atas), black blindfold, Six Eyes glow,
 * tall lean athletic build, Jujutsu High uniform, confident smirk.
 * Cursed energy aura and floating particles.
 */
export function GojoSilhouette() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const timer = setTimeout(() => setIsVisible(true), 1500);

    // Subtle mouse tracking for parallax
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouse);
      clearTimeout(timer);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        right: "0%",
        top: "2%",
        width: "380px",
        height: "600px",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 3s ease-in",
        transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
      }}
    >
      <svg
        viewBox="0 0 340 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 0 40px rgba(31, 90, 255, 0.15))" }}
      >
        <defs>
          {/* Hair gradient - snow white */}
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#F0F0F0" />
            <stop offset="100%" stopColor="#D8D8D8" />
          </linearGradient>

          {/* Outline - purple/blue cursed energy */}
          <linearGradient id="outlineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2FBE" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#1F5AFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7B2FBE" stopOpacity="0.8" />
          </linearGradient>

          {/* Six Eyes glow */}
          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#D1E6FF" />
            <stop offset="60%" stopColor="#1F5AFF" />
            <stop offset="100%" stopColor="rgba(31, 90, 255, 0)" />
          </radialGradient>

          {/* Energy aura */}
          <radialGradient id="auraGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgba(31, 90, 255, 0.3)" />
            <stop offset="40%" stopColor="rgba(123, 47, 190, 0.15)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>

          {/* Blindfold fabric */}
          <linearGradient id="blindfoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A0A0A" />
            <stop offset="30%" stopColor="#1A1A1A" />
            <stop offset="70%" stopColor="#1A1A1A" />
            <stop offset="100%" stopColor="#0A0A0A" />
          </linearGradient>

          {/* Uniform gradient - dark black */}
          <linearGradient id="uniformGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A1A1A" />
            <stop offset="100%" stopColor="#0F0F0F" />
          </linearGradient>

          {/* Eye blur filter */}
          <filter id="eyeBlur">
            <feGaussianBlur stdDeviation="3" />
          </filter>

          <filter id="auraBlur">
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>

        {/* === CURSED ENERGY AURA BACKGROUND === */}
        <ellipse
          cx="170"
          cy="250"
          rx="150"
          ry="220"
          fill="url(#auraGrad)"
          filter="url(#auraBlur)"
          style={{ animation: "gojo-aura-pulse 4s ease-in-out infinite" }}
        />

        {/* === FLOATING ENERGY PARTICLES === */}
        {[
          { cx: 60, cy: 150, r: 2, delay: 0 },
          { cx: 280, cy: 180, r: 1.5, delay: 0.5 },
          { cx: 90, cy: 350, r: 2.5, delay: 1 },
          { cx: 250, cy: 400, r: 1.8, delay: 1.5 },
          { cx: 140, cy: 100, r: 1.2, delay: 2 },
          { cx: 200, cy: 450, r: 2, delay: 2.5 },
          { cx: 100, cy: 250, r: 1.5, delay: 0.8 },
          { cx: 240, cy: 300, r: 2.2, delay: 1.3 },
        ].map((p, i) => (
          <circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="#1F5AFF"
            opacity="0.6"
            style={{
              animation: `gojo-particle-float 4s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}

        {/* === RAMBUT PUTIH SPIKY KE ATAS === */}
        {/* Center spike (tallest) */}
        <path
          d="M170 25 L165 8 L170 0 L175 8 L170 25"
          fill="url(#hairGrad)"
          stroke="#E0E0E0"
          strokeWidth="0.5"
        />

        {/* Left spikes */}
        <path
          d="M160 30 L148 10 L145 32"
          fill="url(#hairGrad)"
          stroke="#E8E8E8"
          strokeWidth="0.5"
        />
        <path
          d="M148 35 L132 15 L130 38"
          fill="url(#hairGrad)"
          stroke="#E8E8E8"
          strokeWidth="0.5"
        />
        <path
          d="M138 42 L118 25 L120 48"
          fill="url(#hairGrad)"
          stroke="#E0E0E0"
          strokeWidth="0.5"
        />
        <path
          d="M128 50 L105 38 L112 58"
          fill="url(#hairGrad)"
          stroke="#E0E0E0"
          strokeWidth="0.5"
        />
        <path
          d="M120 60 L95 55 L108 70"
          fill="url(#hairGrad)"
          stroke="#D8D8D8"
          strokeWidth="0.5"
        />

        {/* Right spikes */}
        <path
          d="M180 30 L192 10 L195 32"
          fill="url(#hairGrad)"
          stroke="#E8E8E8"
          strokeWidth="0.5"
        />
        <path
          d="M192 35 L208 15 L210 38"
          fill="url(#hairGrad)"
          stroke="#E8E8E8"
          strokeWidth="0.5"
        />
        <path
          d="M202 42 L222 25 L220 48"
          fill="url(#hairGrad)"
          stroke="#E0E0E0"
          strokeWidth="0.5"
        />
        <path
          d="M212 50 L235 38 L228 58"
          fill="url(#hairGrad)"
          stroke="#E0E0E0"
          strokeWidth="0.5"
        />
        <path
          d="M220 60 L245 55 L232 70"
          fill="url(#hairGrad)"
          stroke="#D8D8D8"
          strokeWidth="0.5"
        />

        {/* Hair volume base */}
        <ellipse
          cx="170"
          cy="70"
          rx="60"
          ry="40"
          fill="url(#hairGrad)"
          stroke="#E0E0E0"
          strokeWidth="0.5"
        />

        {/* === KEPALA === */}
        <ellipse
          cx="170"
          cy="110"
          rx="48"
          ry="55"
          fill="#F5E6D3"
          stroke="url(#outlineGrad)"
          strokeWidth="1.2"
        />

        {/* === PENUTUP MATA HITAM (Black Blindfold) === */}
        <rect
          x="120"
          y="95"
          width="100"
          height="22"
          rx="11"
          fill="url(#blindfoldGrad)"
          stroke="#333"
          strokeWidth="0.8"
        />
        {/* Blindfold fabric folds */}
        <path
          d="M125 106 Q170 103, 215 106"
          stroke="#2A2A2A"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M128 112 Q170 109, 212 112"
          stroke="#252525"
          strokeWidth="0.3"
          fill="none"
        />
        {/* Blindfold edge highlight */}
        <path
          d="M120 106 Q170 100, 220 106"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.5"
          fill="none"
        />

        {/* === SIX EYES (behind blindfold - subtle glow) === */}
        <ellipse
          cx="148"
          cy="106"
          rx="6"
          ry="4"
          fill="url(#eyeGlow)"
          filter="url(#eyeBlur)"
          className="gojo-eye-left"
          style={{ animation: "gojo-eye-glow 3s ease-in-out infinite" }}
        />
        <ellipse
          cx="192"
          cy="106"
          rx="6"
          ry="4"
          fill="url(#eyeGlow)"
          filter="url(#eyeBlur)"
          className="gojo-eye-right"
          style={{ animation: "gojo-eye-glow 3s ease-in-out 0.15s infinite" }}
        />

        {/* === HIDUNG === */}
        <path
          d="M170 120 L168 135 Q170 137, 172 135 L170 120"
          stroke="rgba(180, 150, 130, 0.4)"
          strokeWidth="0.8"
          fill="none"
        />

        {/* === MULT (Confident smirk - playful Gojo) === */}
        <path
          d="M155 148 Q162 152, 170 150 Q178 148, 185 145"
          stroke="rgba(180, 130, 120, 0.6)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Slight smile line */}
        <path
          d="M158 150 Q170 155, 182 148"
          stroke="rgba(180, 130, 120, 0.2)"
          strokeWidth="0.5"
          fill="none"
        />

        {/* === LEHER (jangkung) === */}
        <path
          d="M155 162 L155 195 Q155 202, 158 208"
          stroke="url(#outlineGrad)"
          strokeWidth="1.3"
          fill="none"
        />
        <path
          d="M185 162 L185 195 Q185 202, 182 208"
          stroke="url(#outlineGrad)"
          strokeWidth="1.3"
          fill="none"
        />
        {/* Neck shadow */}
        <ellipse
          cx="170"
          cy="168"
          rx="12"
          ry="4"
          fill="rgba(200, 180, 160, 0.2)"
        />

        {/* === SERAGAM JUJUTSU HIGH (Hitam pekat) === */}
        {/* Left shoulder + collar */}
        <path
          d="M158 208 Q130 215, 95 235 Q65 255, 45 285"
          stroke="url(#outlineGrad)"
          strokeWidth="1.3"
          fill="none"
        />
        {/* Right shoulder + collar */}
        <path
          d="M182 208 Q210 215, 245 235 Q275 255, 295 285"
          stroke="url(#outlineGrad)"
          strokeWidth="1.3"
          fill="none"
        />

        {/* High collar (Jujutsu High style) */}
        <path
          d="M148 210 L148 230 Q148 235, 152 238"
          stroke="#2A2A2A"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M192 210 L192 230 Q192 235, 188 238"
          stroke="#2A2A2A"
          strokeWidth="1"
          fill="none"
        />
        {/* Collar V-neck detail */}
        <path
          d="M152 238 L170 265 L188 238"
          stroke="#333"
          strokeWidth="0.8"
          fill="none"
        />
        {/* Inner collar line */}
        <path
          d="M158 240 L170 258 L182 240"
          stroke="#252525"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />

        {/* === BADAN (Tall, lean athletic) === */}
        {/* Torso left */}
        <path
          d="M45 285 Q40 350, 50 420 Q60 490, 110 540"
          stroke="url(#outlineGrad)"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Torso right */}
        <path
          d="M295 285 Q300 350, 290 420 Q280 490, 230 540"
          stroke="url(#outlineGrad)"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Waist line (lean body) */}
        <path
          d="M85 380 Q170 370, 255 380"
          stroke="url(#outlineGrad)"
          strokeWidth="0.6"
          fill="none"
          opacity="0.4"
        />

        {/* === LENGAN KIRI (relaxed, casual) === */}
        <path
          d="M95 235 Q70 260, 55 295 Q45 325, 50 355 Q55 375, 65 385"
          stroke="url(#outlineGrad)"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Left hand */}
        <ellipse
          cx="65"
          cy="390"
          rx="8"
          ry="6"
          fill="#F5E6D3"
          stroke="url(#outlineGrad)"
          strokeWidth="0.8"
          opacity="0.7"
        />

        {/* === LENGAN KANAN (two fingers up - Infinity pose) === */}
        <path
          d="M245 235 Q270 260, 285 295 Q295 325, 290 355 Q285 375, 275 385"
          stroke="url(#outlineGrad)"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Right hand */}
        <ellipse
          cx="275"
          cy="390"
          rx="8"
          ry="6"
          fill="#F5E6D3"
          stroke="url(#outlineGrad)"
          strokeWidth="0.8"
          opacity="0.7"
        />
        {/* Two fingers up */}
        <path
          d="M270 388 L262 415"
          stroke="#1F5AFF"
          strokeWidth="1"
          fill="none"
          opacity="0.8"
          strokeLinecap="round"
        />
        <path
          d="M275 387 L268 418"
          stroke="#1F5AFF"
          strokeWidth="1"
          fill="none"
          opacity="0.8"
          strokeLinecap="round"
        />

        {/* === INFINITY SYMBOL floating near hand === */}
        <text
          x="248"
          y="435"
          fill="none"
          stroke="#1F5AFF"
          strokeWidth="0.8"
          fontSize="22"
          opacity="0.4"
          style={{ animation: "gojo-infinity-float 3s ease-in-out infinite" }}
        >
          ∞
        </text>

        {/* === KAKI (Long legs - tall posture) === */}
        <path
          d="M110 540 Q108 555, 105 575"
          stroke="url(#outlineGrad)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M230 540 Q232 555, 235 575"
          stroke="url(#outlineGrad)"
          strokeWidth="1"
          fill="none"
        />

        {/* === CURSED ENERGY AURA GLOW EFFECTS === */}
        {/* Blue energy wisps */}
        <path
          d="M80 200 Q90 180, 100 190"
          stroke="#1F5AFF"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
          style={{ animation: "gojo-energy-wisp 4s ease-in-out infinite" }}
        />
        <path
          d="M260 220 Q250 200, 240 210"
          stroke="#1F5AFF"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
          style={{ animation: "gojo-energy-wisp 4s ease-in-out 1s infinite" }}
        />
        <path
          d="M100 400 Q110 380, 120 390"
          stroke="#7B2FBE"
          strokeWidth="0.6"
          fill="none"
          opacity="0.25"
          style={{ animation: "gojo-energy-wisp 4s ease-in-out 2s infinite" }}
        />
      </svg>
    </div>
  );
}
