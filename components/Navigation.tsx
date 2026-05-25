"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Education",          href: "#education"       },
  { label: "Experience",         href: "#experience"      },
  { label: "Projects",           href: "#projects"        },
  { label: "Courses & Lectures", href: "#courses"         },
  { label: "Research",           href: "#research"        },
  { label: "Certifications",     href: "#certifications"  },
  { label: "Contact",            href: "#contact"         },
];

export default function Navigation() {
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen,      setMenuOpen]      = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight whichever section the user has scrolled into
      let current = "";
      for (const { href } of NAV_ITEMS) {
        const el = document.getElementById(href.slice(1));
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = href.slice(1);
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent",
      ].join(" ")}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-lg font-bold text-white hover:text-accent transition-colors duration-200"
          aria-label="Sungmin Kim — back to top"
        >
          SK<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={[
                  "text-sm font-medium transition-colors duration-200",
                  activeSection === href.slice(1)
                    ? "text-accent"
                    : "text-text-secondary hover:text-white",
                ].join(" ")}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA button */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors duration-200"
          aria-label="Go to contact section"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-text-secondary hover:text-white transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#111111] border-b border-white/[0.08] px-4 pb-4"
        >
          <ul className="flex flex-col gap-1 pt-2" role="list">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block text-center px-5 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
