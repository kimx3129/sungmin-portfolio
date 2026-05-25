"use client";

import { useEffect, useRef } from "react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating particle background
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

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      r: number; alpha: number;
    };

    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vx:    (Math.random() - 0.5) * 0.3,
      vy:    (Math.random() - 0.5) * 0.3,
      r:     Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    let animId: number;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x = (p.x + p.vx + canvas.width)  % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`;
        ctx.fill();
      }
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
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.22), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 animate-fade-in">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          {personalInfo.name}
        </h1>

        {/* Role */}
        <p className="font-heading text-xl sm:text-2xl font-semibold text-accent mb-2">
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p className="text-text-secondary text-base sm:text-lg mb-2">
          {personalInfo.tagline}
        </p>

        {/* Company & location */}
        <p className="text-text-secondary text-sm mb-10">
          @ {personalInfo.company}&nbsp;&nbsp;|&nbsp;&nbsp;{personalInfo.location}
        </p>

        {/* Bio blurb */}
        <p className="mt-12 text-text-secondary text-sm max-w-xl mx-auto leading-relaxed">
          {personalInfo.bio[0]}
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary/60 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
