"use client";

import { AnimatedBackground } from "@/components/animated-background";
import { CosmicGlow } from "@/components/cosmic-glow";
import { CustomCursor } from "@/components/custom-cursor";

import { ProjectCard } from "@/components/project-card";
import { CosmicEnergy } from "@/components/cosmic-energy";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  GitFork,
  Mail,
  Send,
  ExternalLink,
  Code2,
  Database,
  Server,
  Globe,
  Terminal,
  Zap,
  Layers,
  Briefcase,
  ChevronUp,
  MapPin,
  FileText,
  CheckCircle2,
  Rocket,
} from "lucide-react";

const SKILLS = [
  { name: "AI Agents", icon: Rocket },
  { name: "Next.js", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Python", icon: Terminal },
  { name: "FastAPI", icon: Server },
  { name: "Docker", icon: Layers },
  { name: "PostgreSQL", icon: Database },
  { name: "Tailwind CSS", icon: Globe },
  { name: "Vercel", icon: Zap },
  { name: "Telegram Bot API", icon: Send },
];

const TRUST_MARKERS = [
  { label: "Live products shipped", value: "2" },
  { label: "Autonomous agents built", value: "15+" },
  { label: "Core stack", value: "Next.js / FastAPI" },
  { label: "Timezone", value: "Japan (JST)" },
];

const HIRE_SIGNALS = [
  "Ships complete product flows from UI to backend APIs, database, Docker, and deploy.",
  "Builds AI automation with multi-provider LLMs, Telegram workflows, and production monitoring.",
  "Comfortable turning vague product ideas into working MVPs with practical, minimal code.",
];

const PROJECTS = [
  {
    title: "8Agents",
    desc: "Production AI-agent SaaS platform with 15+ autonomous agents, real-time task delegation, multi-provider AI integration, and Telegram-based monitoring for operations.",
    tech: ["Next.js", "FastAPI", "Docker", "PostgreSQL", "Redis", "Telegram Bot API"],
    url: "https://8agents.xyz",
    logo: "/logos/8agents.svg",
    accent: "#f97316",
    accentRgb: "249,115,22",
    status: "LIVE",
    impact: ["15+ agents", "Multi-provider AI", "Telegram ops"],
  },
  {
    title: "RakuSaku",
    desc: "Digital services marketplace with payment gateway integration, automated supplier fulfillment through Digiflazz, and admin workflows for managing orders.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Digiflazz API", "Duitku"],
    url: "https://rakusaku.com",
    logo: "/logos/rakusaku.svg",
    accent: "#ec4899",
    accentRgb: "236,72,153",
    status: "LIVE",
    impact: ["Payments", "Supplier API", "Admin dashboard"],
  },
];

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
        <h2 className="text-3xl font-bold">
          {children}
        </h2>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400/50" />
      </div>
    </Reveal>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #7B2FBE, #00D4FF, #7B2FBE)",
      }}
    />
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full border border-purple-500/40 backdrop-blur-sm flex items-center justify-center hover:border-blue-400/60 transition-all"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ pointerEvents: visible ? "auto" : "none", background: "rgba(123, 47, 190, 0.15)" }}
    >
      <ChevronUp className="w-5 h-5 text-blue-400" />
    </motion.button>
  );
}

/**
 * Animated infinity symbol as a background decoration element
 */
function InfinityDecor({ className, size = "8rem" }: { className?: string; size?: string }) {
  return (
    <span
      className={`infinity-symbol inline-block select-none pointer-events-none ${className || ""}`}
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      ∞
    </span>
  );
}

export default function HomeClient() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <CustomCursor />

      <BackToTop />

      {/* Hero */}
      <section ref={heroRef} className="min-h-[92vh] py-24 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Parallax background elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            y: heroBgY,
            scale: heroScale,
          }}
        >
          <CosmicGlow />
          <CosmicEnergy />
        </motion.div>

        {/* Cosmic energy effects matching Gojo image */}
        <CosmicEnergy />

        {/* Floating infinity symbols in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>

          <div className="absolute top-[15%] left-[10%] opacity-[0.07]">
            <InfinityDecor size="12rem" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] opacity-[0.05]">
            <InfinityDecor size="10rem" />
          </div>
          <div className="absolute top-[60%] left-[70%] opacity-[0.04]">
            <InfinityDecor size="6rem" />
          </div>
        </div>

        <motion.div
          className="text-center max-w-3xl relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="text-sm tracking-[0.24em] uppercase mb-6 text-blue-400/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Full-Stack Developer · AI Automation · Product Builder
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-6 hero-name leading-tight"
          >
            <span className="inline-block">Bagus Wiranto</span>
            <br />
            <span className="inline-block">Wicaksono</span>
          </motion.h1>
          <Reveal>
            <div className="mb-8 space-y-4">
              <p className="text-xl md:text-2xl text-slate-200 leading-[1.55] font-medium">
                I build production-ready web apps, AI automations, and SaaS workflows from idea to deploy.
              </p>
              <p className="text-base md:text-lg text-slate-400 leading-[1.8]">
                Founder of <a href="https://8agents.xyz" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">8Agents</a> and <a href="https://rakusaku.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 underline underline-offset-4">RakuSaku</a>. Based in Japan, open to remote full-stack, product engineer, and AI automation roles.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#projects" className="btn-primary px-6 py-3 rounded-xl text-white font-medium">
                <span>View Projects</span>
              </a>
              <a href="https://www.linkedin.com/in/bagus-wiranto-wicaksono-1ba320301" target="_blank" rel="noopener noreferrer" className="btn-outline px-6 py-3 rounded-xl text-white font-medium">
                LinkedIn
              </a>
              <a href="#contact" className="btn-outline px-6 py-3 rounded-xl text-white font-medium">
                Contact Me
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 max-w-3xl mx-auto">
              {TRUST_MARKERS.map((item) => (
                <div key={item.label} className="glass-card rounded-2xl px-4 py-3 text-left">
                  <p className="text-lg font-bold gradient-text">{item.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </motion.div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* About */}
      <section id="about" className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader>
            About <span className="gradient-text">Me</span>
          </SectionHeader>
          <Reveal>
            <div className="infinity-border">
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative shrink-0">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/50">
                      <img
                        src="/profile.jpg"
                        alt="Bagus Wiranto Wicaksono"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Pulsing glow ring */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: "2px solid transparent",
                        background: "linear-gradient(135deg, rgba(123, 47, 190, 0.3), rgba(0, 212, 255, 0.3)) border-box",
                        WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        animation: "profile-glow 3s ease-in-out infinite",
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-slate-300 leading-[1.8] mb-4">
                      I&apos;m a self-taught full-stack developer based in Japan, focused on building practical products that connect polished frontend UX with reliable backend systems and AI automation.
                    </p>
                    <p className="text-slate-300 leading-[1.8] mb-5">
                      I shipped <strong className="text-orange-400">8Agents</strong>, an AI-agent SaaS platform, and <strong className="text-pink-400">RakuSaku</strong>, a digital services marketplace with payment and supplier integrations. I like small teams, clear outcomes, and production-minded engineering.
                    </p>
                    <div className="grid gap-3 mb-5">
                      {HIRE_SIGNALS.map((signal) => (
                        <div key={signal} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                          <span>{signal}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-400 text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-400" /> Based in Japan (JST) · Open to remote USD opportunities
                      <InfinityDecor size="1.2rem" className="opacity-30" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Skills */}
      <section id="skills" className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader>
            Tech <span className="gradient-text">Stack</span>
          </SectionHeader>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-4">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="glass-card rounded-xl px-5 py-3 flex items-center gap-2 cursor-default spatial-hover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  style={{
                    animationDelay: `${i * 0.3}s`,
                  }}
                >
                  <skill.icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Projects */}
      <section id="projects" className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader>
            Featured <span className="gradient-text">Projects</span>
          </SectionHeader>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <Reveal key={project.title}>
                <ProjectCard
                  title={project.title}
                  desc={project.desc}
                  tech={project.tech}
                  url={project.url}
                  logo={project.logo}
                  accent={project.accent}
                  accentRgb={project.accentRgb}
                  status={project.status}
                  impact={project.impact}
                  hovered={hoveredProject === project.title}
                  onHover={(h) => setHoveredProject(h ? project.title : null)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Experience */}
      <section id="experience" className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader>
            <span className="gradient-text">Experience</span>
          </SectionHeader>
          <Reveal>
            <div className="infinity-border">
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(123, 47, 190, 0.15)" }}>
                      <ExternalLink className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Founder & Developer</h3>
                      <p className="text-orange-400 text-sm">8Agents · 2026 - Present</p>
                      <p className="text-slate-400 text-sm mt-1">AI Agent SaaS platform for real work via Telegram</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(0, 212, 255, 0.1)" }}>
                      <ExternalLink className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Founder & Developer</h3>
                      <p className="text-pink-400 text-sm">RakuSaku · 2026 - Present</p>
                      <p className="text-slate-400 text-sm mt-1">Game top-up & digital services marketplace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Contact */}
      <section id="contact" className="py-28 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader>
            Get in <span className="gradient-text">Touch</span>
          </SectionHeader>
          <Reveal>
            <p className="text-slate-300 mb-8 leading-[1.8]">
              Open to remote full-stack, product engineer, and AI automation roles. Best fit: teams shipping SaaS, internal tools, automation, or AI-enabled products.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2 spatial-hover"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <a
                href="mailto:baguswirantowicaksono@gmail.com"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2 spatial-hover"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://github.com/baguswiranto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2 spatial-hover"
              >
                <GitFork className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://t.me/kaikazukii"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2 spatial-hover"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
              <a
                href="https://x.com/Kiminoheroo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2 spatial-hover"
              >
                <ExternalLink className="w-4 h-4" />
                X
              </a>
              <a
                href="https://www.linkedin.com/in/bagus-wiranto-wicaksono-1ba320301"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-3 rounded-xl text-white font-medium flex items-center gap-2 spatial-hover"
              >
                <Briefcase className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm" style={{ borderTop: "1px solid rgba(123, 47, 190, 0.1)" }}>
        <div className="flex items-center justify-center gap-2">
          <span className="text-purple-500/40 text-lg">∞</span>
          <p>© 2026 Bagus Wiranto Wicaksono. All rights reserved.</p>
          <span className="text-blue-400/40 text-lg">∞</span>
        </div>
      </footer>
    </>
  );
}
