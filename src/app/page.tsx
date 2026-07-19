"use client";

import { useState } from "react";

const projects = [
  { name: "8Agents", category: "AI Product", status: "Building", role: "Product, AI systems, frontend", summary: "A structured platform for learning, designing, and developing AI agents." },
  { name: "8Router", category: "Developer Tool", status: "Beta / Active Development", role: "Architecture, routing, product", summary: "An OpenAI-compatible gateway for routing, fallback, credentials, and multi-provider AI access." },
  { name: "NihongoGate", category: "Education Product", status: "Active Development", role: "Product engineering, learning design", summary: "A Japanese and SSW learning platform built around structured, practical learning workflows." },
  { name: "Rakusaku", category: "Digital Commerce Prototype", status: "Prototype — Payment Integration Pending", role: "Commerce architecture, brand, UX", summary: "A game top-up platform exploring commerce architecture, product experience, and playful branding.", disclaimer: "The core platform and brand experience are in development. Payment gateway integration and live commerce operations are not yet active." },
];

const notes = [
  ["Behind the Kaidevlab redesign", "Behind the Build", "How hero video, product proof, and brand system come together."],
  ["Designing AI agent learning paths", "AI & Agents", "Notes from shaping structured workflows for agent builders."],
  ["Creative AI as production lab", "Creative AI", "Experiments across characters, motion, editing, and storytelling."],
];

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
        <a className="brand brand-logo" href="#top" aria-label="Kaidevlab home"><img className="logo-light" src="/brand/kaidevlab-logo-light.webp" alt="Kaidevlab" /><img className="logo-dark" src="/brand/kaidevlab-logo-dark.webp" alt="" aria-hidden="true" /></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#notes">Lab Notes</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <button className="ghost" onClick={toggleTheme} aria-label="Toggle light and dark theme">{theme === "dark" ? "Daylight" : "Midnight"}</button>
        <a className="talk" href="mailto:kai@kaidevlab.com">Let’s Talk</a>
      </header>

      <section id="top" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">CREATIVE TECHNOLOGIST & INDEPENDENT BUILDER</p>
          <h1>Building products, systems, and stories at the intersection of AI, code, and creativity.</h1>
          <p className="lead">I turn ideas into digital products, developer tools, learning platforms, and creative experiences.</p>
          <div className="actions"><a className="primary" href="#work">Explore My Work</a><a className="secondary" href="#about">Meet Kai</a></div>
          <p className="meta">Based in Japan · Building independently</p>
        </div>
        <div className="hero-visual">
          <div className="lab-orbit orbit-one" aria-hidden="true" />
          <div className="lab-orbit orbit-two" aria-hidden="true" />
          <div className="media-panel" aria-label="Kai holographic coding hero video">
            <div className="panel-topline" aria-hidden="true"><span>KAIDEVLAB / LIVE LOOP</span><span>16:9 · NO CROP</span></div>
            <video width="1280" height="720" autoPlay muted loop playsInline preload="metadata" poster="/media/kai-hero/kai-hero-poster.webp" aria-hidden="true">
              <source src="/media/kai-hero/kai-hero.webm" type="video/webm" />
              <source src="/media/kai-hero/kai-hero.mp4" type="video/mp4" />
            </video>
            <div className="panel-readout" aria-hidden="true"><span className="dot" />DAYLIGHT LAB ACTIVE</div>
          </div>
        </div>
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
          {projects.map((p, i) => <article className={`project ${i === 0 ? "featured" : ""}`} key={p.name}>
            <div className="thumb"><span>{p.name}</span></div><p className="chip">{p.category}</p><h3>{p.name}</h3><p>{p.summary}</p><p className="status">{p.status}</p><p className="role">Kai’s role: {p.role}</p>{p.disclaimer && <p className="disclaimer">{p.disclaimer}</p>}<a href={`/work/${p.name.toLowerCase().replace("8router", "8router").replace(" ", "-")}`}>View Project</a>
          </article>)}
        </div>
      </section>

      <section className="section split"><div><p className="eyebrow">WHAT I DO</p><h2>Build · Code · Create</h2></div><div className="capabilities">{["Product Engineering — From concept and architecture to interface, backend, deployment, and iteration.","AI Systems — AI agents, model routing, automation, prompt systems, and generative workflows.","Creative Direction — Brand identities, interface direction, digital characters, and content concepts.","Visual Storytelling — Video editing, cinematic pacing, subtitles, sound direction, and AI-assisted production."].map(x => <p key={x}>{x}</p>)}</div></section>

      <section className="section lab"><p className="eyebrow">CREATIVE LAB</p><h2>Kai character development, brand motion, AI-assisted visual production, and Kai Revengers.</h2><p className="status inline">Kai Revengers — Series in Production</p></section>

      <section className="section split"><div><p className="eyebrow">NOW BUILDING & LEARNING</p><h2>Kaidevlab is not a museum of finished work.</h2><p>It is a living record of what I’m building, learning, and improving.</p></div><ul><li>Building: 8Agents, 8Router, NihongoGate, Kaidevlab redesign</li><li>Learning: video editing, cinematic storytelling, AI-assisted filmmaking, product storytelling, creative direction</li></ul></section>

      <section id="about" className="section about"><p className="eyebrow">ABOUT KAI</p><h2>I’m Kai, an independent builder based in Japan.</h2><p>I create digital products and explore how AI, design, code, and storytelling can work together to turn ideas into useful and memorable experiences.</p><p>I learn by building. Some projects become products, some become experiments, and others become stories—but each one becomes part of Kaidevlab.</p><a className="secondary" href="/about/">More About Me</a></section>

      <section id="notes" className="section"><div className="section-head"><p className="eyebrow">LAB NOTES</p><h2>Build logs, tutorials, project notes, and experiments.</h2></div><div className="notes">{notes.map(n => <article key={n[0]}><p className="chip">{n[1]}</p><h3>{n[0]}</h3><p>{n[2]}</p><small>19 July 2026 · 4 min read</small></article>)}</div></section>

      <section id="contact" className="section cta"><h2>Have an idea, collaboration, or interesting problem?</h2><p>Let’s explore what we can build together.</p><a className="primary" href="mailto:kai@kaidevlab.com">Start a Conversation</a></section>

      <footer><a className="brand brand-logo" href="#top" aria-label="Kaidevlab home"><img className="logo-light" src="/brand/kaidevlab-logo-light.webp" alt="Kaidevlab" /><img className="logo-dark" src="/brand/kaidevlab-logo-dark.webp" alt="" aria-hidden="true" /></a><p>Build · Code · Create</p><div><a href="https://x.com/Kiminoheroo">X</a><a href="https://github.com/">GitHub</a><a href="https://www.linkedin.com/">LinkedIn</a><a href="mailto:kai@kaidevlab.com">Email</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></div><small>© 2026 Kaidevlab. The personal creative technology lab of Kai.</small></footer>
    </main>
  );
}
