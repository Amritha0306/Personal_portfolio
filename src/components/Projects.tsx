import { useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { ImageModal } from "./ImageModal";
import { projects } from "../data/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const [certificatePreview, setCertificatePreview] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <Section id="projects" className="bg-navy-900/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="End-to-end applications spanning android, full-stack web, and AI-powered systems."
        />

        <div className="grid gap-8">
          {featured.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group grid gap-6 rounded-xl border border-navy-700/60 bg-navy-800/20 p-6 transition-all hover:border-teal-500/30 md:p-8 ${
                project.mobileLayout
                  ? "md:grid-cols-[auto_1fr] md:gap-4"
                  : "md:grid-cols-2 md:gap-6"
              } ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div
                className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-navy-700/40 bg-gradient-to-br ${project.gradient} ${
                  project.mobileLayout
                    ? "h-[260px] w-[130px]"
                    : "h-[220px] w-full"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`transition-transform duration-500 group-hover:scale-[1.03] ${
                    project.mobileLayout
                      ? "h-full w-full object-cover object-top"
                      : "h-full w-full object-cover object-center"
                  }`}
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-teal-400/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-slate-100">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400/60" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-slate-500">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  {project.github && (
                    <ProjectLink href={project.github} icon={<GitHubIcon />}>
                      GitHub
                    </ProjectLink>
                  )}
                  {project.certificateImage && (
                    <button
                      type="button"
                      onClick={() =>
                        setCertificatePreview({
                          src: project.certificateImage!,
                          title: `${project.title} Certificate`,
                        })
                      }
                      className="inline-flex items-center gap-2 text-sm text-teal-400 transition-colors hover:text-teal-300"
                    >
                      <img
                        src={project.certificateImage}
                        alt=""
                        className="h-4 w-4 rounded object-cover"
                      />
                      Certificate
                    </button>
                  )}
                  {project.publication && (
                    <ProjectLink href={project.publication} icon={<PublicationIcon />}>
                      View Publication
                    </ProjectLink>
                  )}
                  {project.live && (
                    <ProjectLink href={project.live} icon={<ExternalIcon />}>
                      Live Demo
                    </ProjectLink>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ImageModal
        open={!!certificatePreview}
        onClose={() => setCertificatePreview(null)}
        src={certificatePreview?.src ?? ""}
        title={certificatePreview?.title ?? ""}
      />
    </Section>
  );
}

function ProjectLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-teal-400 transition-colors hover:text-teal-300"
    >
      {icon}
      {children}
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function PublicationIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}
