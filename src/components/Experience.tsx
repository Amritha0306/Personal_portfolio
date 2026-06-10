import { motion } from "framer-motion";
import { Section, SectionHeading } from "./Section";
import { experiences } from "../data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Experience"
          subtitle="Professional internships where I've applied my skills in real-world settings."
        />

        <div className="relative space-y-12">
          <div className="absolute top-2 bottom-2 left-[7px] hidden w-px bg-navy-700 md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative md:pl-10"
            >
              <div className="absolute top-2 left-0 hidden h-3.5 w-3.5 rounded-full border-2 border-teal-400 bg-navy-950 md:block" />

              <div className="rounded-xl border border-navy-700/60 bg-navy-800/20 p-6 transition-colors hover:border-teal-500/20">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-100">
                      {exp.role}
                    </h3>
                    <p className="text-teal-400">{exp.company}</p>
                  </div>
                  <p className="font-mono text-sm text-slate-500">{exp.period}</p>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.description.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
