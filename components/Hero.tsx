"use client";

import { useEffect, useRef, useState } from "react";

// Roles that cycle in the typewriter
const ROLES = [
  "AI Agent Engineer",
  "Senior Software Engineer",
  "AWS Author & Instructor",
  "Data Engineering Expert",
];

// Tech badge config
const BADGES = [
  { label: "AI Agents",   bg: "bg-pink-500/15",    text: "text-pink-300",    border: "border-pink-500/30"    },
  { label: "LangGraph",   bg: "bg-indigo-500/15",  text: "text-indigo-300",  border: "border-indigo-500/30"  },
  { label: "Claude API",  bg: "bg-purple-500/15",  text: "text-purple-300",  border: "border-purple-500/30"  },
  { label: "AWS",         bg: "bg-orange-500/15",  text: "text-orange-300",  border: "border-orange-500/30"  },
  { label: "GCP",         bg: "bg-blue-500/15",    text: "text-blue-300",    border: "border-blue-500/30"    },
  { label: "Python",      bg: "bg-yellow-500/15",  text: "text-yellow-300",  border: "border-yellow-500/30"  },
  { label: "dbt",         bg: "bg-teal-500/15",    text: "text-teal-300",    border: "border-teal-500/30"    },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting,  setDeleting]  = useState(false);

  // ── Typewriter effect ──────────────────────────────────────────────────────
  useEffect(() => {
    const target = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
    } else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  // ── Animated ripple-dot grid ───────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const SPACING = 44;
    let frame = 0;
    let animId: number;

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width  / 2;
      const cy = canvas.height / 2;
      const cols = Math.ceil(canvas.width  / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;
          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
          const wave  = Math.sin(dist / 90 - frame * 0.018) * 0.5 + 0.5;
          const alpha = wave * 0.18;
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99,102,241,${alpha})`;
          ctx.fill();
        }
      }
      frame++;
      animId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Animated dot grid ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Gradient overlays ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 35%, rgba(99,102,241,0.20) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 50% at 15% 85%, rgba(139,92,246,0.12) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom fade — blends into next section */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0a0a0a)",
        }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">

        {/* Status pill */}
        <div className="hero-in-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          Senior Software Engineer&nbsp;·&nbsp;Tempus AI&nbsp;·&nbsp;San Jose, CA
        </div>

        {/* ── Name — gradient ── */}
        <h1
          className="hero-in-2 font-heading font-extrabold tracking-tight mb-5 leading-none"
          style={{
            fontSize: "clamp(3.2rem, 9vw, 6.5rem)",
            background:
              "linear-gradient(130deg, #ffffff 0%, #c7d2fe 45%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Sungmin Kim
        </h1>

        {/* ── Typewriter role ── */}
        <div
          className="hero-in-3 font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent mb-7 h-12 flex items-center justify-center gap-0.5"
          aria-live="polite"
          aria-label={`Role: ${ROLES[roleIdx]}`}
        >
          <span>{displayed}</span>
          <span
            className="inline-block w-[3px] h-9 bg-accent rounded-full animate-pulse ml-0.5"
            aria-hidden="true"
          />
        </div>

        {/* ── Punchy one-liner ── */}
        <p className="hero-in-4 text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Building{" "}
          <span className="text-white font-semibold">intelligent AI Agents</span>
          {" "}and{" "}
          <span className="text-white font-semibold">scalable data systems</span>
          {" "}at the intersection of{" "}
          <span className="text-accent font-semibold">LLMs, Cloud Engineering,</span>
          {" "}and{" "}
          <span className="text-accent font-semibold">Data Infrastructure</span>.
        </p>

        {/* ── Tech badge strip ── */}
        <div className="hero-in-5 flex flex-wrap items-center justify-center gap-2.5">
          {BADGES.map(({ label, bg, text, border }, i) => (
            <span
              key={label}
              className={`
                text-sm px-4 py-1.5 rounded-full border font-medium
                transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg
                ${bg} ${text} ${border}
              `}
              style={{ animationDelay: `${0.75 + i * 0.07}s` }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary/50"
        style={{ animation: "heroBounce 2s ease-in-out infinite" }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-[0.2em] uppercase">scroll</span>
        <svg
          viewBox="0 0 24 24"
          width={16}
          height={16}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
