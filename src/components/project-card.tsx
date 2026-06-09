"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  url: string;
  logo: string;
  accent: string;
  accentRgb: string;
  status?: string;
  hovered: boolean;
  onHover: (hovered: boolean) => void;
}

export function ProjectCard({
  title,
  desc,
  tech,
  url,
  logo,
  accent,
  accentRgb,
  status = "LIVE",
  hovered,
  onHover,
}: ProjectCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative infinity-border rounded-2xl"
      style={{
        padding: "1px",
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Inner card */}
      <div
        className="relative rounded-2xl p-6 h-full overflow-hidden"
        style={{
          background: "rgba(3, 0, 20, 0.9)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Ambient glow on hover — using brand accent */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl"
          style={{ background: accent }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-3xl"
          style={{ background: accent }}
        />

        {/* Infinity energy accent line at top */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, #00D4FF, ${accent}, transparent)`,
            backgroundSize: "200% 100%",
            animation: hovered ? "border-flow 3s linear infinite" : "none",
          }}
        />

        {/* Top row: logo + title + status */}
        <div className="flex items-center gap-3 mb-4 relative z-10">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{
              background: `rgba(${accentRgb}, 0.1)`,
              border: `1px solid rgba(${accentRgb}, 0.2)`,
              boxShadow: hovered ? `0 0 20px rgba(${accentRgb}, 0.2)` : "none",
            }}
          >
            <img
              src={logo}
              alt={title}
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors truncate">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {status && (
              <span
                className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase"
                style={{
                  background: `rgba(${accentRgb}, 0.15)`,
                  color: accent,
                  border: `1px solid rgba(${accentRgb}, 0.3)`,
                }}
              >
                {status}
              </span>
            )}
            <ExternalLink
              className="w-4 h-4 shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: `rgba(255,255,255,0.3)` }}
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 mb-5 leading-[1.7] relative z-10 group-hover:text-slate-300 transition-colors duration-300">
          {desc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg transition-all duration-300 group-hover:scale-[1.02]"
              style={{
                background: `rgba(${accentRgb}, 0.08)`,
                color: `rgba(${accentRgb}, 0.8)`,
                border: `1px solid rgba(${accentRgb}, 0.15)`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}, #00D4FF, ${accent}, transparent)`,
          }}
        />
      </div>
    </motion.a>
  );
}
