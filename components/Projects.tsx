import { projects } from "@/lib/data";

// Map tech tags to colour classes
const TECH_COLORS: Record<string, string> = {
  Python:          "bg-blue-500/20   text-blue-300   border-blue-500/30",
  Flask:           "bg-gray-500/20   text-gray-300   border-gray-500/30",
  "scikit-learn":  "bg-orange-500/20 text-orange-300 border-orange-500/30",
  pandas:          "bg-teal-500/20   text-teal-300   border-teal-500/30",
  Matplotlib:      "bg-blue-600/20   text-blue-400   border-blue-600/30",
  R:               "bg-cyan-500/20   text-cyan-300   border-cyan-500/30",
  Tableau:         "bg-blue-700/20   text-blue-400   border-blue-700/30",
  "D3.js":         "bg-orange-600/20 text-orange-400 border-orange-600/30",
  ggplot2:         "bg-pink-500/20   text-pink-300   border-pink-500/30",
  tidyverse:       "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "MIT Scheme":    "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Lisp:            "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "AI / Game Theory": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
};

function techClass(tag: string): string {
  return TECH_COLORS[tag] ?? "bg-accent/10 text-accent border-accent/20";
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 relative"
      aria-labelledby="projects-heading"
    >
      {/* Subtle bottom glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(99,102,241,0.06), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Selected Work
          </p>
          <h2
            id="projects-heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            Projects
          </h2>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="reveal group relative rounded-2xl border border-white/[0.08] bg-surface hover:border-accent/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(99,102,241,0.15)] overflow-hidden flex flex-col"
              style={{ transitionDelay: `${idx * 60}ms` }}
              aria-label={`Project: ${project.title}`}
            >
              {/* Hover accent bar */}
              <div
                className="h-[3px] bg-gradient-to-r from-accent to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Year */}
                <span className="self-start text-xs text-text-secondary border border-white/10 rounded-full px-2.5 py-0.5 mb-4 font-mono">
                  {project.year}
                </span>

                {/* Title */}
                <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5" role="list" aria-label="Highlights">
                  {project.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      role="listitem"
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium ${techClass(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links (when available) */}
                {(project.link || project.github) && (
                  <div className="flex gap-3 mt-5 pt-4 border-t border-white/[0.06]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-white transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GitHubIcon />
                        Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-white transition-colors"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLinkIcon />
                        Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Icon helpers
// ---------------------------------------------------------------------------
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
