/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
    kind: "creative", title: "Kai Revengers", category: "Video Content Project", status: "Series in Production", role: "Creator, story direction, visual concept, editing direction", logo: "/logos/kai-revengers-64.svg", poster: "/kai-revengers-poster.jpg", year: "2026", stack: ["Video content", "Story planning", "Anime-inspired visuals", "Editing", "Character direction"],
    summary: "An anime-inspired video content project built around Kai, Haruma, rivalry arcs, and cinematic short-form storytelling.",
    problem: "Short-form video content needs a clear hook, recognizable characters, strong visual identity, and enough story momentum to make viewers follow the next episode.",
    goals: ["Build Kai Revengers as a recognizable video content series", "Develop Kai and Haruma through rivalry-driven arcs", "Create poster, trailer, episode, and edit assets with consistent visual direction"],
    features: ["Rivalry Arc poster direction", "Character-led story setup", "Urban anime-inspired mood", "Short-form video and trailer planning"],
    approach: "Kai Revengers is treated as an original content project: story, poster, visual tone, edit pacing, and character branding work together before full episode release.",
    challenges: ["Keeping character identity consistent across assets", "Balancing visual impact with clear story beats", "Turning poster energy into trailer and episode pacing"],
    limitations: ["Series is still in production", "Trailer and complete episode structure are pending", "Distribution and release cadence are still being shaped"],
    next: ["Finish official trailer", "Plan first episode structure", "Prepare release assets for the Rivalry Arc"]
  },
  "dragon-kings-last-contract": {
    kind: "creative", title: "The Dragon King’s Last Contract", category: "AI Film Series", status: "Series in Production", role: "Creator, story direction, poster concept, AI film workflow", logo: "/logos/kai-revengers-64.svg", poster: "/dragon-kings-last-contract-poster.jpg", year: "2026", stack: ["Seedance 2.0", "AI filmmaking", "Dark fantasy", "Trailer planning", "Poster direction"],
    summary: "A dark fantasy film series about a monster, a contract, and the girl sent to kill him, built with Seedance 2.0 workflows.",
    problem: "AI film series need more than striking visuals: they need coherent character motivation, repeatable style, strong scene continuity, and trailer pacing that sells the story.",
    goals: ["Build a cinematic dark fantasy series", "Use Seedance 2.0 for repeatable film-style shots", "Develop the Dragon King story through poster, trailer, and episode assets"],
    features: ["Gothic romance premise", "Dragon King visual identity", "Moonlit cathedral mood", "Contract and betrayal story hook"],
    approach: "The series starts from a strong key visual and story hook, then expands into shot planning, character consistency, trailer structure, and release-ready short film assets.",
    challenges: ["Maintaining character consistency across AI-generated scenes", "Preserving gothic tone without losing story clarity", "Turning poster premise into cinematic sequence flow"],
    limitations: ["Series is still in production", "Trailer and episode structure are still being shaped", "Final release format and cadence are not locked yet"],
    next: ["Define core characters and contract rules", "Create trailer shot list", "Generate first Seedance 2.0 scene tests"]
  }
} as const;

type ProjectSlug = keyof typeof projects;
type ProjectPageProps = { params: Promise<{ slug: string }> };

function getProject(slug: string) {
  return projects[slug as ProjectSlug];
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);

  if (!p) {
    return { title: "Project not found — Kaidevlab" };
  }

  const title = `${p.title} — Kaidevlab Project`;
  const description = p.summary;
  const url = `/work/${slug}`;
  const images = "poster" in p && p.poster ? [p.poster] : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Kaidevlab",
      type: "article",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export default async function Project({ params }: ProjectPageProps) {
  const { slug } = await params;
  const p = getProject(slug);

  if (!p) notFound();

  const creative = "kind" in p && p.kind === "creative";
  const labels = creative
    ? {
      problem: "Premise / story hook",
      goals: "Creative goals",
      features: "Visual direction",
      approach: "Production workflow",
      challenges: "Creative challenges",
      limitations: "Current progress",
      next: "Release plan",
    }
    : {
      problem: "Problem / opportunity",
      goals: "Product goals",
      features: "Key features",
      approach: "Technical / creative approach",
      challenges: "Challenges",
      limitations: "Current limitations",
      next: "Next steps",
    };

  return <main className="section detail-page">
    <a className="secondary" href="/work/">← Back to Work</a>
    <section className="detail-hero">
      <div><p className="eyebrow">{p.category}</p><h1>{p.title}</h1><p className="lead">{p.summary}</p><div className="detail-actions"><span className="status">{p.status}</span>{"liveUrl" in p && p.liveUrl && <a className="primary" href={p.liveUrl} target="_blank" rel="noreferrer">Visit Live Site</a>}</div></div>
      <div className="detail-card">{!creative && <img src={p.logo} alt="" aria-hidden="true"/>}<p><b>Role</b><br/>{p.role}</p><p><b>Year</b><br/>{p.year}</p><div className="stack">{p.stack.map(x=><span key={x}>{x}</span>)}</div></div>
    </section>
    {"poster" in p && p.poster && <figure className="detail-poster"><img src={p.poster} alt={`${p.title} poster`} /><figcaption>{p.title} key visual / poster.</figcaption></figure>}
    {creative && <section className="creative-facts" aria-label="Production facts"><span>Trailer: In production</span><span>Format: Short film / episodic series</span><span>Release: In planning</span></section>}
    <section className="detail-grid">
      <article><h2>{labels.problem}</h2><p>{p.problem}</p></article>
      <article><h2>{labels.goals}</h2><ul>{p.goals.map(x=><li key={x}>{x}</li>)}</ul></article>
      <article><h2>{labels.features}</h2><ul>{p.features.map(x=><li key={x}>{x}</li>)}</ul></article>
      <article><h2>{labels.approach}</h2><p>{p.approach}</p></article>
      <article><h2>{labels.challenges}</h2><ul>{p.challenges.map(x=><li key={x}>{x}</li>)}</ul></article>
      <article><h2>{labels.limitations}</h2><ul>{p.limitations.map(x=><li key={x}>{x}</li>)}</ul></article>
      <article><h2>{labels.next}</h2><ul>{p.next.map(x=><li key={x}>{x}</li>)}</ul></article>
    </section>
  </main>
}