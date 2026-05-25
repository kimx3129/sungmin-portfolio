import { education } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 bg-surface/30 relative"
      aria-labelledby="education-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Academic Background
          </p>
          <h2
            id="education-heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            Education
          </h2>
        </div>

        {/* Education timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <article
                key={edu.id}
                className="reveal relative sm:pl-16"
                style={{ transitionDelay: `${idx * 80}ms` }}
                aria-label={`Education: ${edu.school}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-accent bg-background hidden sm:flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-surface hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.10)] p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-white mb-1">
                        {edu.school}
                      </h3>
                      <p className="text-accent font-medium text-sm">
                        {edu.degree} · {edu.major}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="inline-block text-xs font-mono text-text-secondary border border-white/10 rounded-full px-3 py-1">
                        {edu.period}
                      </span>
                      {edu.location && (
                        <p className="text-text-secondary text-xs mt-1.5 flex items-center justify-end gap-1">
                          <LocationIcon />
                          {edu.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="space-y-1.5" role="list" aria-label="Highlights">
                      {edu.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0"
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
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
