export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  icon: "languages" | "frontend" | "backend" | "data" | "devops" | "tools";
  skills: Skill[];
}

const icon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "languages",
    skills: [
      { name: "C", icon: icon("c/c-original.svg") },
      { name: "Java", icon: icon("java/java-original.svg") },
      { name: "Python", icon: icon("python/python-original.svg") },
      { name: "SQL", icon: icon("postgresql/postgresql-original.svg") },
    ],
  },
  {
    category: "Frontend",
    icon: "frontend",
    skills: [
      { name: "HTML", icon: icon("html5/html5-original.svg") },
      { name: "CSS", icon: icon("css3/css3-original.svg") },
      { name: "JavaScript", icon: icon("javascript/javascript-original.svg") },
      { name: "TypeScript", icon: icon("typescript/typescript-original.svg") },
      { name: "React", icon: icon("react/react-original.svg") },
      { name: "Tailwind CSS", icon: icon("tailwindcss/tailwindcss-original.svg") },
    ],
  },
  {
    category: "Backend",
    icon: "backend",
    skills: [
      { name: "Node.js", icon: icon("nodejs/nodejs-original.svg") },
      { name: "Express.js", icon: icon("express/express-original.svg") },
      { name: "Spring Boot", icon: icon("spring/spring-original.svg") },
      { name: "Flask", icon: icon("flask/flask-original.svg") },
    ],
  },
  {
    category: "Database",
    icon: "data",
    skills: [
      { name: "MongoDB", icon: icon("mongodb/mongodb-original.svg") },
      { name: "PostgreSQL", icon: icon("postgresql/postgresql-original.svg") },
      { name: "MySQL", icon: icon("mysql/mysql-original.svg") },
      
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "devops",
    skills: [
      { name: "Docker", icon: icon("docker/docker-original.svg") },
      { name: "Jenkins", icon: icon("jenkins/jenkins-original.svg") },
      { name: "GitHub ", icon: icon("github/github-original.svg") },
      { name: "GCP", icon: icon("googlecloud/googlecloud-original.svg") },
      { name: "Firebase", icon: icon("firebase/firebase-plain.svg") },
    ],
  },
  {
    category: "Tools",
    icon: "tools",
    skills: [
      { name: "Git", icon: icon("git/git-original.svg") },
      { name: "VS Code", icon: icon("vscode/vscode-original.svg") },
      { name: "Postman", icon: icon("postman/postman-original.svg") },
      { name: "Jupyter", icon: icon("jupyter/jupyter-original.svg") },
      { name: "Eclipse", icon: icon("eclipse/eclipse-original.svg") },
    ],
  },
];

export const softSkills = [
  { name: "Problem Solving", icon: "puzzle" },
  { name: "Debugging", icon: "bug" },
  { name: "Leadership", icon: "users" },
  { name: "Team Collaboration", icon: "handshake" },
  { name: "Adaptability", icon: "refresh" },
  { name: "Time Management", icon: "clock" },
] as const;

export type SoftSkillIcon = (typeof softSkills)[number]["icon"];
