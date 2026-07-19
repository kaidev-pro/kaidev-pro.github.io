/* eslint-disable @next/next/no-html-link-for-pages */
const projects = {
  "8agents": {
    title: "8Agents", category: "AI Product", status: "Building", role: "Product strategy, AI systems, frontend, learning workflow design", logo: "/logos/8agents-128.webp", liveUrl: "https://8agents.xyz", year: "2026", stack: ["Next.js", "TypeScript", "AI model APIs", "Learning design", "Content systems"],
    summary: "A structured platform for learning, designing, and developing AI agents.",
    problem: "AI agent learning often feels fragmented: scattered tutorials, unclear progression, and little connection between concept, architecture, and implementation.",
    goals: ["Turn AI-agent learning into structured paths", "Connect concepts with builder workflows", "Support practical progression from beginner to product thinking"],
    features: ["Guided learning paths", "Agent design concepts", "Builder-oriented explanations", "Multi-language growth path"],
    approach: "The platform is shaped as an educational product first, with clear IA, reusable content sections, and room for deeper interactive modules later.",
    challenges: ["Balancing beginner clarity with advanced AI system topics", "Avoiding hype-driven claims", "Keeping content maintainable as agent tooling changes"],
    limitations: ["Still building deeper hands-on modules", "Community and advanced examples are future phases"],
    next: ["Expand guided modules", "Add practical agent architecture examples", "Improve onboarding and project-based learning"]
  },
  "8router": {
    title: "8Router", category: "Developer Tool", status: "Beta / Active Development", role: "Architecture, routing logic, product direction, developer experience", logo: "/logos/8router-mark.svg", liveUrl: "https://8router.8agents.xyz", year: "2026", stack: ["Gateway architecture", "OpenAI-compatible API", "Provider routing", "Fallback", "Credentials"],
    summary: "An OpenAI-compatible gateway for routing, fallback, credentials, and multi-provider AI access.",
    problem: "AI apps often depend on one provider or require repetitive integration work across model APIs, credentials, fallback behavior, and routing rules.",
    goals: ["Provide one OpenAI-compatible entry point", "Support routing and fallback across providers", "Make credentials and provider access easier to manage"],
    features: ["OpenAI-compatible interface", "Multi-provider routing", "Fallback behavior", "Credential management concepts", "Developer-first configuration"],
    approach: "8Router is designed as a gateway layer: apps talk to one API shape while routing logic handles provider selection and resilience behind the scenes.",
    challenges: ["Keeping compatibility predictable", "Designing safe fallback behavior", "Documenting routing rules clearly for developers"],
    limitations: ["Beta status; API behavior can still evolve", "Some provider-specific features need careful normalization"],
    next: ["Strengthen docs", "Add more routing examples", "Improve observability and failure reporting"]
  },
  "nihongogate": {
    title: "NihongoGate", category: "Education Product", status: "Active Development", role: "Product engineering, learning design, content structure", logo: "/logos/nihongogate-64.svg", liveUrl: "https://nihongogate.kaidevlab.com", year: "2026", stack: ["Next.js", "Learning paths", "Japanese", "SSW", "Content architecture"],
    summary: "A Japanese and SSW learning platform built around structured, practical learning workflows.",
    problem: "Learners need structured guidance that connects language study, practical routines, and real preparation goals instead of isolated lessons.",
    goals: ["Make Japanese learning feel structured", "Support practical SSW preparation", "Create a clear study path for independent learners"],
    features: ["Learning-path structure", "Practical study categories", "Content-first architecture", "Room for future practice tools"],
    approach: "NihongoGate focuses on clarity and progression: learners should know where they are, what to study next, and why each section matters.",
    challenges: ["Keeping language content accurate", "Balancing product UI with educational depth", "Designing for future localization and content growth"],
    limitations: ["Practice tooling is still expanding", "Content depth will grow over time"],
    next: ["Add more structured modules", "Improve content taxonomy", "Plan interactive practice features"]
  },
  "rakusaku": {
    title: "Rakusaku", category: "Digital Commerce Prototype", status: "Prototype — Payment Integration Pending", role: "Commerce architecture, brand, UX, prototype direction", logo: "/logos/rakusaku-128.webp", liveUrl: "https://rakusaku.com", year: "2026", stack: ["Commerce UX", "Catalog structure", "Brand system", "Frontend prototype"],
    summary: "A game top-up platform exploring commerce architecture, product experience, and playful branding.",
    problem: "Game top-up experiences often need strong trust signals, clear product choices, simple ordering, and careful payment handling.",
    goals: ["Prototype a clean commerce experience", "Explore playful but trustworthy branding", "Prepare structure for future payment integration"],
    features: ["Product catalog direction", "Top-up flow exploration", "Playful brand visuals", "Prototype storefront experience"],
    approach: "Rakusaku is presented honestly as a prototype. Product and brand foundations are visible, but live payment operations are not active.",
    challenges: ["Avoiding production-ready claims before payment integration", "Designing trust without fake metrics", "Separating prototype UX from live commerce operations"],
    limitations: ["Payment gateway integration and live commerce operations are not yet active", "No Buy Now / transactional CTA on Kaidevlab"],
    next: ["Finalize payment gateway requirements", "Improve order-state design", "Prepare compliance and operational checklist"]
  },
  "kai-revengers": {
    title: "Kai Revengers", category: "Creative AI", status: "Series in Production", role: "Creative direction, story development, AI-assisted production, editing direction", logo: "/logos/kai-revengers-64.svg", year: "2026", stack: ["AI video", "Storyboarding", "Editing", "Character direction", "Visual production"],
    summary: "A character-led visual storytelling experiment exploring cinematic pacing, edits, and AI-assisted production.",
    problem: "AI-assisted video can look impressive but often lacks coherent story, pacing, and production discipline.",
    goals: ["Develop Kai as a recognizable creative character", "Practice cinematic storytelling workflows", "Build a repeatable AI-assisted production process"],
    features: ["Character development", "Episode planning", "Visual experimentation", "Opening and closing motion direction"],
    approach: "The project is treated as an in-production creative lab, not a finished flagship. It supports the Kaidevlab creative pillar while product work remains central.",
    challenges: ["Maintaining visual consistency across AI-generated shots", "Balancing speed with story clarity", "Avoiding overclaiming before trailer and episodes are complete"],
    limitations: ["Series is still in production", "Not a flagship case study yet", "Trailer and complete episode structure are pending"],
    next: ["Complete planned episodes", "Finish official trailer", "Prepare final creative case study"]
  }
} as const;
export async function generateStaticParams(){return Object.keys(projects).map(slug=>({slug}))}
export default async function Project({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const p = projects[slug as keyof typeof projects] ?? projects["8agents"];
  return <main className="section detail-page">
    <a className="secondary" href="/work/">← Back to Work</a>
    <section className="detail-hero">
      <div><p className="eyebrow">{p.category}</p><h1>{p.title}</h1><p className="lead">{p.summary}</p><div className="detail-actions"><span className="status">{p.status}</span>{"liveUrl" in p && p.liveUrl && <a className="primary" href={p.liveUrl} target="_blank" rel="noreferrer">Visit Live Site</a>}</div></div>
      <div className="detail-card"><img src={p.logo} alt="" aria-hidden="true"/><p><b>Role</b><br/>{p.role}</p><p><b>Year</b><br/>{p.year}</p><div className="stack">{p.stack.map(x=><span key={x}>{x}</span>)}</div></div>
    </section>
    <section className="detail-grid">
      <article><h2>Problem / opportunity</h2><p>{p.problem}</p></article>
      <article><h2>Product goals</h2><ul>{p.goals.map(x=><li key={x}>{x}</li>)}</ul></article>
      <article><h2>Key features</h2><ul>{p.features.map(x=><li key={x}>{x}</li>)}</ul></article>
      <article><h2>Technical / creative approach</h2><p>{p.approach}</p></article>
      <article><h2>Challenges</h2><ul>{p.challenges.map(x=><li key={x}>{x}</li>)}</ul></article>
      <article><h2>Current limitations</h2><ul>{p.limitations.map(x=><li key={x}>{x}</li>)}</ul></article>
      <article><h2>Next steps</h2><ul>{p.next.map(x=><li key={x}>{x}</li>)}</ul></article>
    </section>
  </main>
}