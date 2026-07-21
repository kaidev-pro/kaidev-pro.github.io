/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { motion, type Variants } from "framer-motion";
import { Code, Cpu, Palette, Video } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  { slug: "8agents", name: "8Agents", category: "AI Product", status: "Building", role: "Product, AI systems, frontend", summary: "A structured platform for learning, designing, and developing AI agents.", liveUrl: "https://8agents.xyz", logo: "/logos/8agents-128.webp", stack: ["AI agents", "Learning workflows", "Product systems"], tone: "agent" },
  { slug: "8router", name: "8Router", category: "Developer Tool", status: "Beta / Active Development", role: "Architecture, routing, product", summary: "An OpenAI-compatible gateway for routing, fallback, credentials, and multi-provider AI access.", liveUrl: "https://8router.8agents.xyz", logo: "/logos/8router-mark.svg", stack: ["Model routing", "Fallback", "Credentials"], tone: "router" },
  { slug: "nihongogate", name: "NihongoGate", category: "Education Product", status: "Active Development", role: "Product engineering, learning design", summary: "A Japanese and SSW learning platform built around structured, practical learning workflows.", liveUrl: "https://nihongogate.kaidevlab.com", logo: "/logos/nihongogate-64.svg", stack: ["Japanese", "SSW", "Learning paths"], tone: "education" },
  { slug: "rakusaku", name: "Rakusaku", category: "Digital Commerce Prototype", status: "Prototype — Payment Integration Pending", role: "Commerce architecture, brand, UX", summary: "A game top-up platform exploring commerce architecture, product experience, and playful branding.", liveUrl: "https://rakusaku.com", logo: "/logos/rakusaku-128.webp", stack: ["Commerce UX", "Catalog", "Prototype"], tone: "commerce", disclaimer: "The core platform and brand experience are in development. Payment gateway integration and live commerce operations are not yet active." },
];

const notes = [
  ["Behind the Kaidevlab redesign", "Behind the Build", "How hero video, product proof, and brand system come together."],
  ["Designing AI agent learning paths", "AI & Agents", "Notes from shaping structured workflows for agent builders."],
  ["Creative AI as production lab", "Creative AI", "Experiments across characters, motion, editing, and storytelling."],
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
  const [theme, setTheme] = useState(() => (typeof document === "undefined" ? "light" : document.documentElement.dataset.theme || "light"));
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }
  return (
    <main>
      <header className="site-header">
        <a className="brand brand-logo" href="#top" aria-label="Kaidevlab home"><Image className="logo-light" src="/brand/kaidevlab-logo-light.webp" alt="Kaidevlab" fill sizes="250px" priority /><Image className="logo-dark" src="/brand/kaidevlab-logo-dark.webp" alt="" aria-hidden="true" fill sizes="250px" priority /></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#notes">Lab Notes</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <button className="ghost" onClick={toggleTheme} aria-label="Toggle light and dark theme">{theme === "dark" ? "Daylight" : "Midnight"}</button>
        <a className="talk" href="mailto:kai@kaidevlab.com">Let’s Talk</a>
      </header>

      <section id="top" className="hero section">
        <svg className="pcb-trace hero-pcb" viewBox="0 0 1200 720" aria-hidden="true">
          <path d="M70 520 H230 V455 H390 V395 H520" />
          <path d="M180 170 H320 V245 H470" />
          <path d="M760 120 H900 V210 H1120" />
          <path d="M680 610 H840 V535 H1040" />
          <circle cx="70" cy="520" r="4" />
          <circle cx="520" cy="395" r="5" />
          <circle cx="470" cy="245" r="4" />
          <circle cx="1120" cy="210" r="5" />
          <circle cx="1040" cy="535" r="4" />
        </svg>
        <motion.div className="hero-copy" initial="hidden" animate="show" variants={reveal}>
          <p className="eyebrow">CREATIVE TECHNOLOGIST & INDEPENDENT BUILDER</p>
          <h1>Building products, systems, and stories at the intersection of AI, code, and creativity.</h1>
          <p className="lead">I turn ideas into digital products, developer tools, learning platforms, and creative experiences.</p>
          <div className="actions"><a className="primary" href="#work">Explore My Work</a><a className="secondary" href="#about">Meet Kai</a></div>
          <p className="meta">Based in Japan · Building independently</p>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}>
          <div className="lab-orbit orbit-one" aria-hidden="true" />
          <div className="lab-orbit orbit-two" aria-hidden="true" />
          <div className="media-panel" aria-label="Kai holographic coding hero video">
            <video width="1280" height="720" autoPlay muted loop playsInline preload="metadata" poster="/media/kai-hero/kai-hero-poster.webp" aria-hidden="true">
              <source src="/media/kai-hero/kai-hero.webm" type="video/webm" />
              <source src="/media/kai-hero/kai-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </section>

      <section className="signal" aria-label="Current signal">
        <span><b>CURRENTLY BUILDING</b> — 8Agents</span>
        <span><b>CURRENTLY EXPLORING</b> — AI agents, creative AI, and digital storytelling</span>
        <span><b>STATUS</b> — Open to interesting collaborations</span>
      </section>

      <section id="work" className="section blueprint-section">
        <div className="module-label" aria-hidden="true"><span>MODULE 01</span><span>SELECTED WORK</span></div>
        <div className="section-head"><p className="eyebrow">SELECTED WORK</p><h2>Real products, honest status, clear proof.</h2></div>
        <div className="project-grid">
          {projects.slice(0, 4).map((p, i) => <motion.article className={`project ${i === 0 ? "featured" : ""} tone-${p.tone}`} key={p.name} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} whileHover={{ y: -5 }}>
            <div className="thumb project-visual">
              <div className="visual-grid" aria-hidden="true" />
              <Image src={p.logo} alt="" aria-hidden="true" width={88} height={88} />
              <div className="visual-lines" aria-hidden="true"><span /><span /><span /></div>
              <strong>{p.name}</strong>
            </div>
            <p className="chip">{p.category}</p><h3>{p.name}</h3><p>{p.summary}</p><p className="status">{p.status}</p><p className="role">Kai’s role: {p.role}</p><div className="stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>{p.disclaimer && <p className="disclaimer">{p.disclaimer}</p>}<div className="project-actions"><a href={`/work/${p.slug}`}>View Project</a>{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer">Live Site</a>}</div>
          </motion.article>)}
        </div>
      </section>

      <section className="section split"><div><p className="eyebrow">WHAT I DO</p><h2>Build · Code · Create</h2></div><div className="capabilities-grid">{[{
            icon: <Code size={24} />,
            title: "Product Engineering",
            desc: "From concept and architecture to interface, backend, deployment, and iteration.",
          },
          {
            icon: <Cpu size={24} />,
            title: "AI Systems",
            desc: "AI agents, model routing, automation, prompt systems, and generative workflows.",
          },
          {
            icon: <Palette size={24} />,
            title: "Creative Direction",
            desc: "Brand identities, interface direction, digital characters, and content concepts.",
          },
          {
            icon: <Video size={24} />,
            title: "Visual Storytelling",
            desc: "Video editing, cinematic pacing, subtitles, sound direction, and AI-assisted production.",
          },
        ].map((cap, i) => (
          <motion.div
            className="capability-card"
            key={i}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="icon-wrap">{cap.icon}</div>
            <h3>{cap.title}</h3>
            <p>{cap.desc}</p>
          </motion.div>
        ))}
      </div></section>

      <section className="section split"><div><p className="eyebrow">NOW BUILDING & LEARNING</p><h2>Kaidevlab is not a museum of finished work.</h2><p>It is a living record of what I’m building, learning, and improving.</p></div><ul><li>Building: 8Agents, 8Router, NihongoGate, Kaidevlab redesign</li><li>Learning: video editing, cinematic storytelling, AI-assisted filmmaking, product storytelling, creative direction</li></ul></section>

      <section id="about" className="section about"><p className="eyebrow">ABOUT KAI</p><h2>I’m Kai, an independent builder based in Japan.</h2><p>I create digital products and explore how AI, design, code, and storytelling can work together to turn ideas into useful and memorable experiences.</p><p>I learn by building. Some projects become products, some become experiments, and others become stories—but each one becomes part of Kaidevlab.</p><a className="secondary" href="/about/">More About Me</a></section>

      <section id="notes" className="section lab-notes-section">
        <div className="section-head">
          <p className="eyebrow">LAB NOTES</p>
          <h2>Build logs, tutorials, and field notes from the lab.</h2>
        </div>
        <div className="notes-journal">
          {notes.map((n, i) => (
            <article className="journal-entry" key={n[0]}>
              <div className="entry-meta">
                <span className="entry-id">ENTRY_00{i + 1}</span>
                <span className="entry-category">{n[1]}</span>
              </div>
              <div className="entry-content">
                <h3>{n[0]}</h3>
                <p>{n[2]}</p>
              </div>
              <div className="entry-footer">
                <span className="entry-date">JULY 2026</span>
                <a className="entry-link" href={`/lab-notes/`}>READ_LOG</a>
              </div>
            </article>
          ))}
        </div>
        <div className="section-footer-actions">
          <a className="secondary" href="/lab-notes/">Access All Logs</a>
        </div>
      </section>

      <section id="contact" className="section cta"><div className="cta-glow" aria-hidden="true" /><p className="eyebrow">OPEN TO COLLABORATION</p><h2>Have an idea, collaboration, or interesting problem?</h2><p>Let’s explore what we can build together — from useful products and AI systems to creative worlds with a strong point of view.</p><div className="cta-tags" aria-label="Collaboration areas"><span>Product build</span><span>AI systems</span><span>Creative worlds</span></div><a className="primary" href="mailto:kai@kaidevlab.com">Start a Conversation</a></section>

      <footer><a className="brand brand-logo" href="#top" aria-label="Kaidevlab home"><Image className="logo-light" src="/brand/kaidevlab-logo-light.webp" alt="Kaidevlab" fill sizes="250px" /><Image className="logo-dark" src="/brand/kaidevlab-logo-dark.webp" alt="" aria-hidden="true" fill sizes="250px" /></a><p>Build · Code · Create</p><div><a href="https://x.com/Kiminoheroo">X</a><a href="https://github.com/">GitHub</a><a href="https://www.linkedin.com/">LinkedIn</a><a href="mailto:kai@kaidevlab.com">Email</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></div><small>© 2026 Kaidevlab. The personal creative technology lab of Kai.</small></footer>
    </main>
  );
}
