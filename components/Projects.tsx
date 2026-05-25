"use client";

import { projects, type Project } from "@/lib/data";

// ── Tech tag colour map ──────────────────────────────────────────────────────
const TECH_COLORS: Record<string, string> = {
  LangGraph:       "bg-indigo-500/20  text-indigo-300  border-indigo-500/30",
  "Claude API":    "bg-purple-500/20  text-purple-300  border-purple-500/30",
  "Next.js 14":    "bg-gray-500/20    text-gray-300    border-gray-500/30",
  TypeScript:      "bg-blue-500/20    text-blue-300    border-blue-500/30",
  "Tailwind CSS":  "bg-cyan-500/20    text-cyan-300    border-cyan-500/30",
  Vercel:          "bg-white/10       text-white/70    border-white/20",
  Python:          "bg-yellow-500/20  text-yellow-300  border-yellow-500/30",
  Flask:           "bg-gray-500/20    text-gray-300    border-gray-500/30",
  "scikit-learn":  "bg-orange-500/20  text-orange-300  border-orange-500/30",
  pandas:          "bg-teal-500/20    text-teal-300    border-teal-500/30",
  Matplotlib:      "bg-blue-600/20    text-blue-400    border-blue-600/30",
  R:               "bg-cyan-500/20    text-cyan-300    border-cyan-500/30",
  Tableau:         "bg-blue-700/20    text-blue-400    border-blue-700/30",
  "D3.js":         "bg-orange-600/20  text-orange-400  border-orange-600/30",
  ggplot2:         "bg-pink-500/20    text-pink-300    border-pink-500/30",
  tidyverse:       "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "MIT Scheme":    "bg-purple-500/20  text-purple-300  border-purple-500/30",
  Lisp:            "bg-violet-500/20  text-violet-300  border-violet-500/30",
  "AI / Game Theory": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
};

function techClass(tag: string): string {
  return TECH_COLORS[tag] ?? "bg-accent/10 text-accent border-accent/20";
}

// ── Agent pipeline node ──────────────────────────────────────────────────────
function AgentNode({ name, role, index }: { name: string; role: string; index: number }) {
  const colors = [
    "from-indigo-500/20  to-indigo-600/10  border-indigo-500/40  text-indigo-300",
    "from-purple-500/20  to-purple-600/10  border-purple-500/40  text-purple-300",
    "from-blue-500/20    to-blue-600/10    border-blue-500/40    text-blue-300",
    "from-teal-500/20    to-teal-600/10    border-teal-500/40    text-teal-300",
    "from-amber-500/20   to-amber-600/10   border-amber-500/40   text-amber-300",
    "from-emerald-500/20 to-emerald-600/10 border-emerald-500/40 text-emerald-300",
  ];
  const c = colors[index % colors.length];

  return (
    <div className={`bg-gradient-to-br ${c} border rounded-xl p-3 flex-1 min-w-0`}>
      <p className="font-semibold text-xs mb-1 truncate">{name}</p>
      <p className="text-white/50 text-[10px] leading-tight line-clamp-2">{role}</p>
    </div>
  );
}

// ── Arrow ────────────────────────────────────────────────────────────────────
function Arrow() {
  return (
    <svg
      viewBox="0 0 24 8"
      width={28}
      height={10}
      fill="none"
      className="flex-shrink-0 text-white/25"
      aria-hidden="true"
    >
      <path d="M0 4h20M16 1l4 3-4 3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Featured project card ────────────────────────────────────────────────────
function FeaturedCard({ project }: { project: Project }) {
  return (
    <article
      className="reveal group relative rounded-2xl border border-accent/20 bg-[#111118] hover:border-accent/40 transition-all duration-300 overflow-hidden mb-8"
      aria-label={`Featured project: ${project.title}`}
    >
      {/* Top accent gradient bar */}
      <div
        className="h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
        aria-hidden="true"
      />

      <div className="p-6 sm:p-8 lg:p-10">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold text-accent tracking-widest uppercase border border-accent/30 bg-accent/10 rounded-full px-3 py-1">
                ✦ Featured Project
              </span>
              <span className="text-xs text-text-secondary border border-white/10 rounded-full px-2.5 py-0.5 font-mono">
                {project.year}
              </span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
          </div>

          {/* Links */}
          {(project.link || project.github) && (
            <div className="flex gap-3 flex-shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-text-secondary hover:text-white hover:border-white/30 transition-all"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <GitHubIcon />
                  GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-xs text-white font-semibold transition-colors"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLinkIcon />
                  Live Site
                </a>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl">
          {project.description}
        </p>

        {/* Agent pipeline --------------------------------------------------- */}
        {project.agents && (
          <div className="mb-8">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-4">
              LangGraph Agent Pipeline
            </p>

            {/* Flow diagram */}
            <div className="flex flex-wrap items-center gap-1.5 mb-4">
              {project.agents.map((agent, i) => (
                <div key={agent.name} className="flex items-center gap-1.5 min-w-0">
                  <AgentNode name={agent.name} role={agent.role} index={i} />
                  {i < project.agents!.length - 1 && <Arrow />}
                </div>
              ))}
            </div>

            {/* Retry note */}
            <p className="text-xs text-text-secondary flex items-center gap-1.5">
              <span className="text-amber-400">⟳</span>
              QA / Debug Agent can loop back to Code Generator up to 2× via conditional StateGraph edges before proceeding to deployment.
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-6">
          {/* Highlights */}
          <div className="flex-1 min-w-[200px]">
            <p className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-3">
              Highlights
            </p>
            <ul className="space-y-2" role="list">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="flex-shrink-0">
            <p className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-3">
              Stack
            </p>
            <div className="flex flex-wrap gap-2 max-w-xs">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2.5 py-1 rounded-full border font-medium ${techClass(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ── Regular project card ─────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="reveal group relative rounded-2xl border border-white/[0.08] bg-surface hover:border-accent/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] overflow-hidden flex flex-col"
      style={{ transitionDelay: `${index * 60}ms` }}
      aria-label={`Project: ${project.title}`}
    >
      <div className="h-[3px] bg-gradient-to-r from-accent to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

      <div className="p-6 flex flex-col flex-1">
        <span className="self-start text-xs text-text-secondary border border-white/10 rounded-full px-2.5 py-0.5 mb-4 font-mono">
          {project.year}
        </span>

        <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <ul className="space-y-1.5 mb-5" role="list" aria-label="Highlights">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-text-secondary">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-5" role="list" aria-label="Technologies">
          {project.tech.map((tag) => (
            <span key={tag} role="listitem" className={`text-xs px-2.5 py-1 rounded-full border font-medium ${techClass(tag)}`}>
              {tag}
            </span>
          ))}
        </div>

        {(project.link || project.github) && (
          <div className="flex gap-3 pt-4 border-t border-white/[0.06]">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-white transition-colors"
                aria-label={`${project.title} GitHub`}>
                <GitHubIcon /> Code
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-white transition-colors"
                aria-label={`${project.title} live`}>
                <ExternalLinkIcon /> Live
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest      = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 relative"
      aria-labelledby="projects-heading"
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(99,102,241,0.07), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-12 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Selected Work
          </p>
          <h2 id="projects-heading" className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Projects
          </h2>
        </div>

        {/* Featured card */}
        {featured && <FeaturedCard project={featured} />}

        {/* Other projects grid */}
        {rest.length > 0 && (
          <>
            <p className="reveal text-xs font-semibold text-white/30 tracking-widest uppercase mb-6">
              Other Projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ── Icon helpers ─────────────────────────────────────────────────────────────
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
