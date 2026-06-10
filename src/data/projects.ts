import busmateImg from "../assets/busmate.jpeg";
import smartDataImg from "../assets/Smart data.png";
import emailAgImg from "../assets/email-ag.png";
import gramakhataImg from "../assets/gramakhata.jpeg";
import publicationImg from "../assets/publication.png";

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  image: string;
  github?: string;
  live?: string;
  publication?: string;
  certificateImage?: string;
  featured: boolean;
  gradient: string;
  mobileLayout?: boolean;
}

export const projects: Project[] = [
  {
    title: "BUSMATE",
    description:
      "A smart travel safety application that keeps trusted friends and family updated throughout a user's bus journey.",
    highlights: [
      "Designed a user-friendly mobile interface to improve travel convenience and safety",
      "Implemented real-time tracking and notification sharing",
      "Published in JETIR, Vol. 12, Issue 7, July 2025",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Node.js", "Firebase"],
    image: busmateImg,
    github: "https://github.com/Amritha0306/BUSMATE",
    publication: "https://www.jetir.org/view?paper=JETIRGX06042",
    certificateImage: publicationImg,
    featured: true,
    gradient: "from-teal-500/20 to-cyan-500/10",
    mobileLayout: true,
  },
  {
    title: "Smart Data Analysis",
    description:
      "An intelligent data analysis platform for automated data processing, monitoring, and business insights.",
    highlights: [
      "Implemented automated pipelines for data ingestion, cleaning, transformation, and reporting with version control",
      "Designed interactive KPI dashboards for real-time analytics and decision-making",
    ],
    techStack: ["React", "Python", "DVC", "MongoDB"],
    image: smartDataImg,
    live: "https://smartdataanalysis.vercel.app/",
    featured: true,
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    title: "AI Email Filtering & Notification System",
    description:
      "An AI-powered email management platform that aggregates, categorizes, searches, and automates email responses across multiple accounts.",
    highlights: [
      "Implemented real-time email synchronization, AI categorization, and automated replies using Gemini API",
      "Built responsive dashboards with advanced search, webhook notifications, and multi-account management",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Elasticsearch",
      "Tailwind CSS",
    ],
    image: emailAgImg,
    github: "https://github.com/Amritha0306/outbox",
    featured: true,
    gradient: "from-violet-500/20 to-purple-500/10",
  },
  {
    title: "Grama-Khata",
    description:
      "Grama-Khata is a digital ledger to store incomes and outgoings in village shops replacing the physical vahi books.",
    highlights: [
      "Designed highest due based customer categories and stored all the informations in Room database to focus on offline first integrity",
      "Implemented SMS/WhatsApp reminders to the customers who has dues using Android intents",
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Room Database", "Android Intents"],
    image: gramakhataImg,
    github: "https://github.com/Amritha0306/Grama-Khata",
    featured: true,
    gradient: "from-emerald-500/20 to-teal-500/10",
    mobileLayout: true,
  },
];
