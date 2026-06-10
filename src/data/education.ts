import javaFullStack from "../assets/Javafullstack.png";
import cloudComputing from "../assets/cloud computing.png";
import awsCloud from "../assets/Aws cloud.png";
import devops from "../assets/devops.png";
import androidDev from "../assets/android dev.png";

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
}

export interface Certification {
  name: string;
  image?: string;
}

export const education: Education[] = [
  {
    institution: "Srinivas Institute of Technology",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "2022 – 2026",
    score: "CGPA: 8.5",
    location: "Mangalore, Karnataka",
  },
  {
    institution: "Viveka Pre-University College",
    degree: "P.C.M.C",
    period: "2020 – 2022",
    score: "Percentage: 89.66%",
    location: "Udupi, Karnataka",
  },
  {
    institution: "Government High School Manuru Padukare",
    degree: "S.S.L.C",
    period: "2020",
    score: "Percentage: 91.52%",
    location: "Udupi, Karnataka",
  },
];

export const certifications: Certification[] = [
  { name: "Java Full Stack Developer", image: javaFullStack },
  { name: "Data Analytics" },
  { name: "Cloud Computing", image: cloudComputing },
  { name: "HTML5" },
  { name: "Node.js" },
  { name: "AWS Data Engineering", image: awsCloud },
  { name: "DevOps Fundamentals", image: devops },
  { name: "Android Developer", image: androidDev },
  { name: "DBMS Using SQL" },
];
