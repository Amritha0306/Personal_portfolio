import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { site } from "../data/site";

const areaColors = [
  "from-teal-500/20 to-teal-500/5 border-teal-500/20",
  "from-violet-500/20 to-violet-500/5 border-violet-500/20",
  "from-blue-500/20 to-blue-500/5 border-blue-500/20",
  "from-amber-500/20 to-amber-500/5 border-amber-500/20",
];

export function About() {
  return (
    <Section id="about">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" />

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-left text-base leading-7 text-slate-400 md:text-[1.05rem] md:leading-8"
          >
            <p className="text-pretty">{site.about}</p>
            {site.aboutExtra.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 rounded-full bg-teal-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />

            <div className="relative space-y-4">
              <div className="overflow-hidden rounded-2xl border border-navy-700/60 bg-gradient-to-br from-navy-800/80 to-navy-900/60 p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-teal-400">
                  What I focus on
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-slate-100">
                  Turning ideas into real products
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-40" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-400" />
                  </span>
                  <span className="text-sm text-slate-400">Open to new opportunities</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {site.focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -3 }}
                    className={`rounded-xl border bg-gradient-to-br p-4 ${areaColors[index % areaColors.length]}`}
                  >
                    <h4 className="font-display text-sm font-semibold text-slate-100">
                      {area.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                      {area.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl border border-navy-700/60 bg-navy-800/40 p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Currently exploring
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Generative AI", "System Design", "Cloud Native", "Mobile UX"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-navy-700/80 bg-navy-900/60 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
