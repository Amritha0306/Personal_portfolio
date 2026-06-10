export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    company: "Mindmatrix",
    role: "Android App Development Using Gen AI Intern",
    period: "February 2026 – May 2026",
    description: [
      "Developed Android applications integrating generative AI capabilities for enhanced user experiences.",
      "Worked with modern mobile development practices and AI APIs to build intelligent app features.",
      "Collaborated with the team to deliver production-ready mobile solutions.",
    ],
  },
  {
    company: "ABHIMO Technologies Private Limited",
    role: "Software Engineer Intern",
    period: "July 2025 – September 2025",
    description: [
      "Built and maintained software solutions as part of an agile development team.",
      "Applied object-oriented programming principles and REST API design in real-world projects.",
      "Contributed to full-stack development using modern web technologies.",
    ],
  },
];
