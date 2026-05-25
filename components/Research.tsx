import { publications, type Publication } from "@/lib/data";

export default function Research() {
  const books  = publications.filter((p) => p.type === "book");
  const papers = publications.filter((p) => p.type === "paper");

  return (
    <section
      id="research"
      className="py-24 px-4 sm:px-6 bg-surface/30 relative"
      aria-labelledby="research-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Publications
          </p>
          <h2
            id="research-heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            Research & Writing
          </h2>
        </div>

        {/* Books */}
        {books.length > 0 && (
          <div className="mb-16">
            <SectionLabel>Books</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {books.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </div>
        )}

        {/* Papers */}
        {papers.length > 0 && (
          <div>
            <SectionLabel>Journal Articles</SectionLabel>
            <div className="flex flex-col gap-6 mt-6">
              {papers.map((pub) => (
                <PublicationCard key={pub.id} pub={pub} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-xl font-semibold text-text-secondary flex items-center gap-3">
      <span className="w-8 h-px bg-accent/40" aria-hidden="true" />
      {children}
    </h3>
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article
      className="reveal group rounded-2xl border border-white/[0.08] bg-surface hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 p-6"
      aria-label={`Publication: ${pub.title}`}
    >
      {/* Type badge */}
      <span
        className={[
          "inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4",
          pub.type === "book"
            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
            : "bg-accent/15 text-accent border border-accent/25",
        ].join(" ")}
      >
        {pub.type === "book" ? "Book" : "Journal Article"}
      </span>

      {/* Title */}
      <h4 className="font-heading text-lg font-semibold text-white mb-1 group-hover:text-accent transition-colors duration-200 leading-snug">
        {pub.title}
      </h4>

      {/* Authors */}
      <p className="text-text-secondary text-sm mb-1">{pub.authors}</p>

      {/* Venue & year */}
      <p className="text-text-secondary text-sm italic mb-4">
        {pub.venue} &middot; {pub.year}
      </p>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-5">
        {pub.description}
      </p>

      {/* External link */}
      {pub.link && (
        <a
          href={pub.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-white font-medium transition-colors group/link"
          aria-label={`Open ${pub.title} in new tab`}
        >
          {pub.doi ? "View Article" : pub.type === "book" ? "View Book" : "View Publication"}
          <svg
            viewBox="0 0 24 24"
            width={14}
            height={14}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="group-hover/link:translate-x-0.5 transition-transform"
            aria-hidden="true"
          >
            <path
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
    </article>
  );
}
