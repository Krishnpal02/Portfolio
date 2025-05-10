import { Github, Linkedin, Twitter, Briefcase, Code, MonitorSmartphone, PenTool } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export const fullName = "Krishnpal Chouhan";
export const professionalTitle = "Software Engineer";
export const emailAddress = "krishnpalchouhan02@example.com"; // Placeholder email

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  { name: "GitHub", Icon: Github, url: "https://github.com/Krishnpal02" },
  { name: "LinkedIn", Icon: Linkedin, url: "https://www.linkedin.com/in/krishnpal-chouhan-777a79217/" },
  
];

export const heroData = {
  greeting: "Hi, my name is",
  name: fullName,
  title: "I build things for the web.",
  subtitle: "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on crafting accessible, human-centered products that solve real-world problems.",
  ctaLabel: "Get In Touch",
  ctaLink: "#contact",
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "Hello! I'm Krishnpal, a software engineer with a deep passion for creating elegant and efficient solutions. My journey into technology began with a fascination for how bits and bytes could translate into tangible, impactful applications. I thrive on transforming complex problems into intuitive digital experiences.",
    "I'm a firm believer in continuous learning and collaboration. Outside of coding, I enjoy exploring new technologies and staying active. I'm always eager to connect with like-minded individuals and explore new opportunities."
  ],
  techIntro: "Here are a few technologies I've been working with recently:",
  skills: [
    "JavaScript (ES6+)",  "React", "Node.js", 
    "Python", "REST APIs", "AWS", 
    "GitLab & GitHub", "Tailwind CSS", "Figma"
  ],
};

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  Icon?: React.ElementType; // Optional icon
}

export const experiencesData: Experience[] = [
  {
    id: "exp1",
    company: "GammaStack",
    role: "Solution Engineer",
    duration: "March 2025 - Present",
    description: [
      "Expert Front-End Development: Built dynamic, scalable web applications using React, Redux, and Redux Saga, delivering responsive user interfaces and seamless state management for complex, high-performance projects.",
      "Efficient Code Management: Leveraged Git and GitLab for robust version control and CI/CD pipelines, ensuring collaborative, error-free codebases and streamlined deployments.",
      "Problem-Solving Excellence: Designed and implemented innovative solutions to technical challenges, optimizing application performance and enhancing user experience through clean, maintainable code.",
    ],
    Icon: Briefcase,
  }
];

export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageHint: string; // For data-ai-hint
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  category: string;
  Icon?: React.ElementType;
}

export const projectCategories = ["All", "Web App", "Mobile App", "UI/UX Design"];

export const projectsData: Project[] = [
  {
    id: "proj1",
    title: "This Portfoilo",
    description: "I crafted a sophisticated e-commerce web application utilizing React for dynamic UI rendering, Redux and Redux Saga for efficient state management and Tailwind CSS for sleek, responsive styling.",
    imageSrc: "  https://picsum.photos/seed/meditation/600/400",
    imageHint: "CRM dashboard",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "FireBase", "Stripe","React"],
    category: "Web App",
    Icon: MonitorSmartphone,
  },
  {
    id: "proj3",
    title: "Job Finder ",
    description: "A complete ML system built for Finding perfect job for you by just simplly entering your resume and get the best match for you.",
    imageSrc: "https://picsum.photos/id/24/4855/1803",
    imageHint: "design system",
    tags: ["Google Colab", "NLP" , "ML","NLTK"],
    category: "ML / NLP",
    Icon: PenTool,
  },
  {
    id: "proj4",
    title: "E-commerse Webside",
    description: "A web application helping businesses to sell their products on internet and to make the business worldwide known make this using react , JS ,saga for state management  and tailwind css for stylling and make it responsive so that it can be accessable in any device .",
    imageSrc: "https://picsum.photos/id/36/367/267",
    imageHint: "sustainability dashboard",
    tags: ["React","Redux","Saga","Tailwind-CSS"],
    category: "Web App",
    Icon: MonitorSmartphone,
  },
];

export const contactData = {
  title: "Get In Touch",
  intro: "I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!",
  formLabels: {
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    submit: "Send Message",
  }
};
