"use client";

import { useEffect, useState } from "react";

// Deterministic star positions (50 stars, pure CSS animation)
const MOBILE_STARS = Array.from({ length: 50 }, (_, i) => ({
  left: `${(i * 7.3 * (i % 3 + 1)) % 100}%`,
  top: `${(i * 11.7 * (i % 2 + 1)) % 100}%`,
  size: i % 3 === 0 ? 3 : i % 5 === 0 ? 1 : 2,
  duration: 2 + (i % 5),
  delay: (i * 0.4) % 5,
  opacity: 0.3 + (i % 5) * 0.15,
}));

function useScrollReveal() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll("[data-reveal]");
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return revealed;
}

export default function MobilePage() {
  const revealed = useScrollReveal();

  const isRevealed = (id: string) => revealed.has(id);

  const sectionClass = (id: string, base = "") =>
    `section-hidden ${isRevealed(id) ? "section-revealed" : ""} ${base}`;

  return (
    <>
      {/* Stars Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {MOBILE_STARS.map((star, i) => (
          <div
            key={i}
            className="mobile-star"
            style={{
              left: star.left,
              top: star.top,
              "--star-size": `${star.size}px`,
              "--star-duration": `${star.duration}s`,
              "--star-delay": `${star.delay}s`,
              "--star-opacity": star.opacity,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden z-[1]">
        <div className="text-center max-w-3xl relative z-10">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 text-blue-400/70">
            Full-Stack Developer
          </p>
          <h1 className="text-5xl font-black mb-6 hero-name leading-tight">
            <span className="inline-block">Bagus Wiranto</span>
            <br />
            <span className="inline-block">Wicaksono</span>
          </h1>
          <div>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-[1.8]">
              Full-stack developer who rapidly masters new technologies to ship AI-powered platforms.
              <br />
              Founder of{" "}
              <a href="https://8agents.xyz" target="_blank" className="text-orange-400 underline underline-offset-4">
                8Agents
              </a>{" "}
              &{" "}
              <a href="https://rakusaku.com" target="_blank" className="text-pink-400 underline underline-offset-4">
                RakuSaku
              </a>
              .
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects-m" className="btn-primary px-6 py-3 rounded-xl text-white font-medium">
              View Projects
            </a>
            <a href="#contact-m" className="btn-outline px-6 py-3 rounded-xl text-white font-medium">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* About */}
      <section
        id="about-m"
        data-reveal
        className={sectionClass("about-m", "py-20 px-4")}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10 section-header">
            <div className="section-header-aura" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
            <h2 className="text-3xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400/50" />
          </div>
          <div className="rounded-2xl p-8 glass-card">
            <div className="flex flex-col items-center gap-6 mb-4">
              <div className="relative shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/50">
                  <img
                    src="/profile.jpg"
                    alt="Bagus Wiranto Wicaksono"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-slate-300 leading-[1.8] mb-4">
                  I&apos;m a self-taught full-stack developer and entrepreneur based in Japan, driven by curiosity and a hunger to learn. I thrive on rapidly acquiring new skills and technologies — then turning them into production-ready products that solve real problems.
                </p>
                <p className="text-slate-300 leading-[1.8] mb-4">
                  From zero to production in months: I mastered Next.js, FastAPI, Docker, and Telegram Bot API to build <strong className="text-orange-400">8Agents</strong> (AI Agent marketplace) and <strong className="text-pink-400">RakuSaku</strong> (digital services marketplace) — two SaaS platforms now live and serving users.
                </p>
                <p className="text-slate-400 text-sm">
                  Based in Japan 🇯🇵 · Open to collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Skills */}
      <section
        id="skills-m"
        data-reveal
        className={sectionClass("skills-m", "py-20 px-4")}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10 section-header">
            <div className="section-header-aura" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
            <h2 className="text-3xl font-bold">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400/50" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Self-taught", "Next.js", "TypeScript", "Python", "FastAPI", "Docker", "PostgreSQL", "Tailwind CSS", "Vercel"].map((skill) => (
              <div key={skill} className="glass-card rounded-xl px-4 py-2.5">
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Projects */}
      <section
        id="projects-m"
        data-reveal
        className={sectionClass("projects-m", "py-20 px-4")}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10 section-header">
            <div className="section-header-aura" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
            <h2 className="text-3xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400/50" />
          </div>
          <div className="grid gap-4">
            {[
              { title: "8Agents", desc: "AI Agent SaaS platform. 15+ autonomous agents with real-time task delegation, multi-provider AI integration (OpenAI, Anthropic, local models), and production monitoring via Telegram.", url: "https://8agents.xyz", accent: "#f97316", status: "LIVE", logo: "/logos/8agents.svg" },
              { title: "RakuSaku", desc: "Game top-up & digital services marketplace. Payment gateway integration (QRIS, e-wallets, bank transfer), automated supplier fulfillment via Digiflazz API, and admin dashboard.", url: "https://rakusaku.com", accent: "#ec4899", status: "LIVE", logo: "/logos/rakusaku.svg" },
            ].map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.1)" }}>
                    {project.logo && <img src={project.logo} alt="" className="w-5 h-5" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg" style={{ color: project.accent }}>{project.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: project.accent + "20", color: project.accent }}>{project.status}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Experience */}
      <section
        id="experience-m"
        data-reveal
        className={sectionClass("experience-m", "py-20 px-4")}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10 section-header">
            <div className="section-header-aura" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Experience</span>
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400/50" />
          </div>
          <div className="glass-card rounded-2xl p-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(123, 47, 190, 0.15)" }}>
                  <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
                <div>
                  <h3 className="font-bold">Founder & Developer</h3>
                  <p className="text-orange-400 text-sm">8Agents · 2026 - Present</p>
                  <p className="text-slate-400 text-sm mt-1">AI Agent SaaS platform for real work via Telegram</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(0, 212, 255, 0.1)" }}>
                  <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
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
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Contact */}
      <section
        id="contact-m"
        data-reveal
        className={sectionClass("contact-m", "py-20 px-4")}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-10 section-header">
            <div className="section-header-aura" />
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
            <h2 className="text-3xl font-bold">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400/50" />
          </div>
          <p className="text-slate-300 mb-8 leading-[1.8]">
            Open to remote opportunities. Let&apos;s build something great together.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { label: "Email", href: "mailto:baguswirantowicaksono@gmail.com" },
              { label: "GitHub", href: "https://github.com/baguswiranto" },
              { label: "Telegram", href: "https://t.me/kaikazukii" },
              { label: "X", href: "https://x.com/Kiminoheroo" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/bagus-wiranto-wicaksono-1ba320301" },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-outline px-5 py-3 rounded-xl text-white font-medium">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm" style={{ borderTop: "1px solid rgba(123, 47, 190, 0.1)" }}>
        <p>© 2026 Bagus Wiranto Wicaksono. All rights reserved.</p>
      </footer>
    </>
  );
}
