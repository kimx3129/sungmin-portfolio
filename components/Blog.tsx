import { courses } from "@/lib/data";

export default function Blog() {
  return (
    <section
      id="courses"
      className="py-24 px-4 sm:px-6 relative"
      aria-labelledby="blog-heading"
    >
      {/* Top glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(99,102,241,0.07), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Teaching
          </p>
          <h2
            id="blog-heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            Courses & Lectures
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Making cloud and data engineering accessible to everyone — one course at a time.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <a
              key={course.id}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group rounded-2xl border border-white/[0.08] bg-surface hover:border-accent/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(99,102,241,0.12)] p-6 flex gap-5"
              aria-label={`${course.title} on ${course.platform} — opens in new tab`}
            >
              {/* Platform avatar */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent font-heading font-bold text-lg group-hover:bg-accent group-hover:text-white transition-colors duration-200"
                aria-hidden="true"
              >
                {course.platform[0]}
              </div>

              <div className="min-w-0">
                <p className="text-xs text-text-secondary mb-1 font-medium">
                  {course.platform}
                </p>
                <h3 className="font-heading text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
                  {course.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  {course.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-accent font-semibold">
                  {course.language}
                  <svg
                    viewBox="0 0 24 24"
                    width={12}
                    height={12}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Volunteer note */}
        <div className="reveal mt-12 rounded-2xl border border-white/[0.08] bg-surface/50 p-6 text-center">
          <p className="text-text-secondary text-sm">
            Also mentored{" "}
            <span className="text-white font-medium">"Hour of Code"</span>{" "}
            at DePaul University & Chicago Public Schools, and taught cybersecurity at{" "}
            <span className="text-white font-medium">BLUE1647</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
