import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 bg-surface/30 relative"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2
            id="certifications-heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            Certifications
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Professional certifications and credentials earned over the years.
          </p>
        </div>

        {/* Certification grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={`${cert.name}-${idx}`}
              className="reveal group rounded-2xl border border-white/[0.08] bg-surface hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.10)] p-5 flex gap-4 items-start"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {/* Badge icon */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors duration-200"
                aria-hidden="true"
              >
                <BadgeIcon />
              </div>

              <div className="min-w-0">
                <h3 className="font-heading text-sm font-semibold text-white leading-snug mb-1 group-hover:text-accent transition-colors duration-200">
                  {cert.name}
                </h3>
                <p className="text-text-secondary text-xs mb-1">{cert.issuer}</p>
                <span className="inline-block text-xs font-mono text-accent/70 border border-accent/20 rounded-full px-2 py-0.5">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" className="text-accent">
      <path d="M12 15l-3 3 1-4-3-2.5 4-.5L12 8l1.5 3 4 .5-3 2.5 1 4z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
