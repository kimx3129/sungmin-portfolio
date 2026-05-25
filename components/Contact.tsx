"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";

type FormState = { name: string; email: string; message: string };
type Status    = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form,   setForm]   = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrMsg("");

    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const data = (await res.json()) as { success?: boolean; error?: string; message?: string };

      if (!res.ok) {
        setStatus("error");
        setErrMsg(data.error ?? "Something went wrong.");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus("error");
      setErrMsg("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 bg-surface/30 relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-16 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-white"
          >
            Contact
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Open to collaboration, speaking invitations, and interesting problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Contact links ── */}
          <div className="reveal space-y-4">
            <ContactLink
              icon="email"
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
            <ContactLink
              icon="linkedin"
              label="LinkedIn"
              value="sungminkim510"
              href={personalInfo.linkedin}
            />
            <ContactLink
              icon="github"
              label="GitHub"
              value="kimx3129"
              href={personalInfo.github}
            />

            {/* Skills chip cloud */}
            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-surface p-5">
              <h3 className="font-heading text-xs font-semibold text-text-secondary uppercase tracking-widest mb-4">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Agentic Programming", "AI Engineering", "Harness Engineering",
                  "Python", "Java", "C++", "AWS", "GCP", "Data Engineering", "Machine Learning",
                  "LangGraph", "LangChain", "dbt", "Flask", "R", "Tableau", "D3.js", "SQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full border border-accent/25 bg-accent/10 text-accent font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Contact form ── */}
          <form
            onSubmit={handleSubmit}
            className="reveal space-y-4"
            aria-label="Contact form"
            noValidate
          >
            <Field
              id="name"
              label="Name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-secondary mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-white placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 transition-colors text-sm resize-none"
              />
            </div>

            {/* Status feedback */}
            {status === "success" && (
              <p
                className="text-emerald-400 text-sm bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3"
                role="status"
              >
                Message sent! I will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p
                className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                role="alert"
              >
                {errMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-xl bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-semibold transition-all duration-200 shadow-[0_2px_12px_rgba(99,102,241,0.35)] hover:shadow-[0_4px_20px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function Field({
  id, label, type, value, onChange, placeholder, required,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-white placeholder-text-secondary/50 focus:outline-none focus:border-accent/50 transition-colors text-sm"
      />
    </div>
  );
}

function ContactLink({
  icon, label, value, href,
}: {
  icon: "email" | "linkedin" | "github";
  label: string;
  value: string;
  href:  string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.08] bg-surface hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 group"
      aria-label={`${label}: ${value}`}
    >
      <span className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-200 flex-shrink-0">
        <IconFor icon={icon} />
      </span>
      <div className="min-w-0">
        <p className="text-xs text-text-secondary mb-0.5">{label}</p>
        <p className="text-sm text-white font-medium truncate group-hover:text-accent transition-colors duration-200">
          {value}
        </p>
      </div>
    </a>
  );
}

function IconFor({ icon }: { icon: "email" | "linkedin" | "github" }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  // email
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
