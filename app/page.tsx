"use client";

import { useEffect } from "react";
import Navigation    from "@/components/Navigation";
import Hero          from "@/components/Hero";
import Education     from "@/components/Education";
import Experience    from "@/components/Experience";
import Projects      from "@/components/Projects";
import Blog          from "@/components/Blog";          // Courses & Lectures
import Research      from "@/components/Research";
import Certifications from "@/components/Certifications";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";

export default function Home() {
  // Intersection Observer — triggers .reveal → .reveal.visible transitions
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      {/* Section order: 최종학력 → 회사이력 → Projects → Courses & Lectures → Research → 자격증 → Contact */}
      <Education />
      <Experience />
      <Projects />
      <Blog />
      <Research />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
