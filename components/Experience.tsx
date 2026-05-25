import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 relative"
      aria-labelledby="experience-heading"
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(99,102,241,0.05), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Career
          </p>
          <h2
            id="experience-heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            Work Experience
          </h2>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <article
                key={exp.id}
                className="reveal relative sm:pl-16"
                style={{ transitionDelay: `${idx * 80}ms` }}
                aria-label={`Experience: ${exp.role} at ${exp.company}`}
              >
                {/* Timeline dot */}
                <div
                  className={[
                    "absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden sm:flex items-center justify-center",
                    exp.current
                      ? "border-accent bg-accent animate-pulse"
                      : "border-accent bg-background",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  {!exp.current && (
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  )}
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-surface hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.10)] p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-heading text-xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-accent font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="inline-block text-xs font-mono text-text-secondary border border-white/10 rounded-full px-3 py-1">
                        {exp.period}
                      </span>
                      <p className="text-text-secondary text-xs mt-1.5 flex items-center justify-end gap-1">
                        <LocationIcon />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5" role="list" aria-label="Key contributions">
                    {exp.highlights.map((h) => (
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
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]" role="list" aria-label="Technologies used">
                    {exp.tech.map((tag) => (
                      <span
                        key={tag}
                        role="listitem"
                        className="text-xs px-2.5 py-1 rounded-full border border-accent/25 bg-accent/10 text-accent font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" width={12} height={12} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
