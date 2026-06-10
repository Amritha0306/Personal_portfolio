import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { site } from "../data/site";

const inputClass =
  "w-full rounded-lg border border-navy-700 bg-navy-800/40 px-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 outline-none transition-colors focus:border-teal-500/50";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name || "Portfolio visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nWebsite: ${form.website || "N/A"}\n\n${form.message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" className="bg-navy-900/50">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
              Contact <span className="font-bold">Me</span>
            </h2>
            <p className="mt-4 max-w-md text-slate-400 leading-relaxed">
              I'm currently open to software engineering opportunities. Whether you have a
              question, a project idea, or just want to connect — my inbox is always open.
            </p>

            <div className="mt-10 space-y-1">
              <p className="font-display text-xl font-bold text-slate-100">{site.name}</p>
              <p className="text-sm text-slate-400">{site.titles}</p>
              <a
                href={`mailto:${site.email}`}
                className="block text-sm text-teal-400 transition-colors hover:text-teal-300"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phone}`}
                className="block text-sm text-slate-400 transition-colors hover:text-teal-400"
              >
                {site.phone}
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              <SocialBox href={`mailto:${site.email}`} label="Email">
                <GmailIcon />
              </SocialBox>
              <SocialBox href={site.linkedin} label="LinkedIn">
                <LinkedInIcon />
              </SocialBox>
              <SocialBox href={site.github} label="GitHub">
                <GitHubIcon />
              </SocialBox>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-3"
          >
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            <input
              type="url"
              placeholder="Your website (If exists)"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className={inputClass}
            />
            <textarea
              placeholder="How can I help?*"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
            <div className="col-span-2 flex justify-center pt-1">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg bg-teal-500 px-8 py-2.5 text-sm font-medium text-navy-950 transition-colors hover:bg-teal-400"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </Section>
  );
}

function SocialBox({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-700 bg-navy-800/40 text-slate-400 transition-colors hover:border-teal-500/40 hover:text-teal-400"
    >
      {children}
    </a>
  );
}

function GmailIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
