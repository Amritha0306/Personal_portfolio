import { useState } from "react";
import { Section, SectionHeading } from "./Section";
import { ImageModal } from "./ImageModal";
import { education, certifications } from "../data/education";

export function Education() {
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);

  return (
    <Section id="education">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Education & Certifications" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-teal-400">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-xl border border-navy-700/60 bg-navy-800/20 p-5"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="font-display font-semibold text-slate-100">
                        {edu.institution}
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">{edu.degree}</p>
                    </div>
                    <p className="font-mono text-sm text-slate-500">{edu.period}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <span className="text-teal-400">{edu.score}</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-500">{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-teal-400">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert.name}
                  className="inline-flex items-center rounded-lg border border-navy-700/60 bg-navy-800/30 px-4 py-2.5 text-sm text-slate-300 transition-colors hover:border-teal-500/30"
                >
                  {cert.name}
                  <span className="inline-block w-[6ch]" aria-hidden="true" />
                  <button
                    type="button"
                    onClick={() =>
                      cert.image
                        ? setPreview({ src: cert.image, title: cert.name })
                        : undefined
                    }
                    disabled={!cert.image}
                    className={`transition-colors ${
                      cert.image
                        ? "text-teal-400 hover:text-teal-300"
                        : "cursor-not-allowed text-slate-600"
                    }`}
                    aria-label={`View ${cert.name} certificate`}
                  >
                    <ViewIcon />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        open={!!preview}
        onClose={() => setPreview(null)}
        src={preview?.src ?? ""}
        title={preview?.title ?? ""}
      />
    </Section>
  );
}

function ViewIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}
