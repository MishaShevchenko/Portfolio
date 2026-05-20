import { nanoid } from "nanoid";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaCode, FaServer, FaLayerGroup } from "react-icons/fa";
import { SiTypescript, SiRedux, SiTailwindcss, SiPostgresql, SiGit, SiLinux, SiFigma, SiMongodb, SiFirebase, SiNextdotjs, SiPostman, SiPlaywright, SiGatsby, SiNetlify } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#experience", text: "experience" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  { id: 1,  icon: <FaReact style={{ color: "#61DAFB" }} />,          name: "React" },
  { id: 2,  icon: <FaNodeJs style={{ color: "#83CD29" }} />,         name: "Node.js" },
  { id: 3,  icon: <SiTypescript style={{ color: "#3178C6" }} />,     name: "TypeScript" },
  { id: 4,  icon: <FaJs style={{ color: "#F7DF1E" }} />,             name: "JavaScript" },
  { id: 5,  icon: <SiGatsby style={{ color: "#663399" }} />,         name: "Gatsby" },
  { id: 6,  icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js" },
  { id: 7,  icon: <SiTailwindcss style={{ color: "#38B2AC" }} />,    name: "Tailwind CSS" },
  { id: 8,  icon: <SiRedux style={{ color: "#764ABC" }} />,          name: "Redux" },
  { id: 9,  icon: <FaHtml5 style={{ color: "#E34F26" }} />,          name: "HTML5" },
  { id: 10, icon: <FaCss3Alt style={{ color: "#1572B6" }} />,        name: "CSS3" },
  { id: 11, icon: <SiPlaywright style={{ color: "#2EAD33" }} />,     name: "Playwright" },
  { id: 12, icon: <SiMongodb style={{ color: "#47A248" }} />,        name: "MongoDB" },
  { id: 13, icon: <SiPostgresql style={{ color: "#336791" }} />,     name: "PostgreSQL" },
  { id: 14, icon: <SiFirebase style={{ color: "#FFCA28" }} />,       name: "Firebase" },
  { id: 15, icon: <SiGit style={{ color: "#F05032" }} />,            name: "Git" },
  { id: 16, icon: <SiNetlify style={{ color: "#00C7B7" }} />,        name: "Netlify" },
  { id: 17, icon: <SiFigma style={{ color: "#F24E1E" }} />,          name: "Figma" },
  { id: 18, icon: <SiPostman style={{ color: "#FF6C37" }} />,        name: "Postman" },
  { id: 19, icon: <SiLinux style={{ color: "#FCC624" }} />,          name: "Linux" },
];


export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://contentful-cms-mike.netlify.app/",
    github: "https://github.com/MishaShevchenko/temp-contentful-app",
    title: "Contentful CMS",
    text: "A content management system powered by Contentful and React. Dynamically fetches and displays content with structured data retrieval, optimized rendering performance, and a clean editorial workflow.",
    stack: ["React", "Contentful", "Tailwind CSS", "Netlify"],
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://e-commerce-mykhailo.netlify.app/",
    github: "https://github.com/MishaShevchenko/E-Commerce",
    title: "E-Commerce Store",
    text: "Full-featured store with product filtering, sorting, pagination, a shopping cart, Firebase authentication, and order management. Users can browse, add to cart, and securely place orders.",
    stack: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"],
  },
];

export const currentRole = {
  id: nanoid(),
  role: "Full-Stack Developer",
  company: "Drukwerkdeal",
  location: "Deventer, Netherlands",
  period: "June 2025 – Present",
  techs: ["React", "Gatsby", "TypeScript", "Node.js", "Contentful", "Algolia", "Statsig", "Playwright", "AWS", "GitLab CI", "Netlify", "Sentry"],
  bullets: [
    "Building and maintaining e-commerce frontends with React, Gatsby, and TypeScript at scale.",
    "Headless CMS integration with Contentful and search powered by Algolia for fast product discovery.",
    "A/B experimentation and feature flagging using Statsig to test and optimise user flows.",
    "Working with CimCommerce (Cockpit) e-commerce backend and AWS infrastructure.",
    "E2E and API test coverage with Playwright; zero-downtime deployments via GitLab CI and Netlify.",
    "Production monitoring through Sentry and New Relic; web vitals tracking via SpeedCurve.",
    "Cross-functional Agile squad: daily standups (POSM), sprint planning, stakeholder demos, retrospectives.",
  ],
};

export const experience = [
  {
    id: nanoid(),
    role: "Freelance Developer",
    company: "Self-employed",
    period: "Jan 2023 – Present",
    bullets: [
      "Built and deployed 10+ web apps using React, Redux, Tailwind CSS, and Firebase.",
      "Set up CI/CD pipelines with GitHub Actions and Netlify.",
    ],
  },
  {
    id: nanoid(),
    role: "Backend Intern",
    company: "HackYourFuture",
    period: "Jan 2024 – Oct 2024",
    bullets: [
      "Backend development in a 6-person Agile team using Node.js, Express, and SQL.",
      "Integrated JWT authentication, REST endpoints, and third-party services.",
    ],
  },
  {
    id: nanoid(),
    role: "Full-Stack Intern",
    company: "EPAM Systems",
    period: "Feb 2022 – Dec 2022",
    bullets: [
      "Built React components, optimized SQL queries, contributed to cloud deployment.",
      "Collaborated with designers and senior engineers on real client projects.",
    ],
  },
];

export const services = [
  {
    id: nanoid(),
    title: "Frontend Development",
    icon: FaCode,
    gradient: "from-emerald-400 to-cyan-500",
    photo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&auto=format&fit=crop",
    techs: ["React", "TypeScript", "Tailwind CSS", "Redux", "React Query"],
    description: [
      "Building responsive, accessible, and high-performance user interfaces.",
      "Working with React, TypeScript, and modern UI libraries (Tailwind, MUI, Chakra UI).",
      "State management with Redux Toolkit, React Query, and Context API.",
      "API integration with RESTful and GraphQL services.",
      "Cross-browser compatibility, SEO, and accessibility best practices.",
      "Close collaboration with designers and backend engineers.",
    ],
  },
  {
    id: nanoid(),
    title: "Backend Development",
    icon: FaServer,
    gradient: "from-violet-500 to-purple-600",
    photo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&auto=format&fit=crop",
    techs: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT"],
    description: [
      "Designing and building RESTful APIs with Node.js and Express.",
      "Database modeling and optimization with MongoDB and SQL (MySQL, PostgreSQL).",
      "Authentication and authorization using JWT and OAuth.",
      "Scalable, secure server-side architecture.",
      "CI/CD pipelines with GitHub Actions and deployment on Vercel and Render.",
    ],
  },
  {
    id: nanoid(),
    title: "Full-Stack Development",
    icon: FaLayerGroup,
    gradient: "from-orange-400 to-rose-500",
    photo: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&auto=format&fit=crop",
    techs: ["Next.js", "Gatsby", "Contentful", "Playwright", "GitLab CI"],
    description: [
      "End-to-end development: from database schema to pixel-perfect UI.",
      "Server-side rendering and static generation with Next.js and Gatsby.",
      "Headless CMS integration using Contentful for structured content delivery.",
      "E2E and API testing with Playwright across frontend and backend services.",
      "CI/CD automation with GitLab Pipelines and Netlify for zero-downtime deployments.",
    ],
  },
];


