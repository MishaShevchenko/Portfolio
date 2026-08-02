import { nanoid } from "nanoid";
import contentfulImg from "../src/assets/contentful-cms-mike.png";
import ecommerceImg from "../src/assets/e-commerce-mykhailo.png";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaMobileAlt,
  FaUniversalAccess,
  FaTachometerAlt,
  FaVial,
  FaServer,
  FaBolt,
  FaSitemap,
  FaBroom,
  FaUsers,
  FaUserFriends,
  FaClipboardCheck,
  FaCodeBranch,
  FaChartLine,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiGatsby,
  SiNextdotjs,
  SiPlaywright,
  SiMongodb,
  SiFirebase,
  SiNetlify,
  SiFigma,
  SiPostman,
  SiLinux,
  SiJest,
  SiGraphql,
  SiVite,
  SiContentful,
  SiAlgolia,
  SiSentry,
  SiGitlab,
  SiGithubactions,
  SiJira,
  SiStorybook,
  SiExpress,
} from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#experience", text: "experience" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
];

export const skills = [
  // ── Frontend ──
  {
    id: nanoid(),
    icon: <FaReact style={{ color: "#61DAFB" }} />,
    name: "React",
    category: "frontend",
  },
  {
    id: nanoid(),
    icon: <SiTypescript style={{ color: "#3178C6" }} />,
    name: "TypeScript",
    category: "frontend",
  },
  {
    id: nanoid(),
    icon: <SiRedux style={{ color: "#764ABC" }} />,
    name: "Redux / RTK",
    category: "frontend",
  },
  {
    id: nanoid(),
    icon: <SiTailwindcss style={{ color: "#38B2AC" }} />,
    name: "Tailwind CSS",
    category: "frontend",
  },
  {
    id: nanoid(),
    icon: <SiGatsby style={{ color: "#663399" }} />,
    name: "Gatsby",
    category: "frontend",
  },
  {
    id: nanoid(),
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    name: "Next.js",
    category: "frontend",
  },
  {
    id: nanoid(),
    icon: <FaHtml5 style={{ color: "#E34F26" }} />,
    name: "HTML5",
    category: "frontend",
  },
  {
    id: nanoid(),
    icon: <FaCss3Alt style={{ color: "#1572B6" }} />,
    name: "CSS3 / SCSS",
    category: "frontend",
  },
  {
    id: nanoid(),
    icon: <FaMobileAlt style={{ color: "#3B82F6" }} />,
    name: "Responsive Design",
    category: "frontend",
  },
  {
    id: nanoid(),
    icon: <FaUniversalAccess style={{ color: "#8B5CF6" }} />,
    name: "Accessibility",
    category: "frontend",
  },
  {
    id: nanoid(),
    icon: <FaTachometerAlt style={{ color: "#F59E0B" }} />,
    name: "Performance",
    category: "frontend",
  },
  {
    id: nanoid(),
    icon: <SiStorybook style={{ color: "#FF4785" }} />,
    name: "Storybook",
    category: "frontend",
  },

  // ── Testing ──
  {
    id: nanoid(),
    icon: <SiJest style={{ color: "#C21325" }} />,
    name: "Jest",
    category: "testing",
  },
  {
    id: nanoid(),
    icon: <SiPlaywright style={{ color: "#2EAD33" }} />,
    name: "Playwright",
    category: "testing",
  },
  {
    id: nanoid(),
    icon: <FaVial style={{ color: "#10B981" }} />,
    name: "Component Testing",
    category: "testing",
  },

  // ── Backend ──
  {
    id: nanoid(),
    icon: <FaNodeJs style={{ color: "#83CD29" }} />,
    name: "Node.js",
    category: "backend",
  },
  {
    id: nanoid(),
    icon: <SiExpress className="text-gray-800 dark:text-gray-200" />,
    name: "Express.js",
    category: "backend",
  },
  {
    id: nanoid(),
    icon: <FaServer style={{ color: "#6366F1" }} />,
    name: "REST APIs",
    category: "backend",
  },
  {
    id: nanoid(),
    icon: <SiGraphql style={{ color: "#E10098" }} />,
    name: "GraphQL",
    category: "backend",
  },
  {
    id: nanoid(),
    icon: <FaBolt style={{ color: "#F59E0B" }} />,
    name: "Webhooks",
    category: "backend",
  },

  // ── Tools & DevOps ──
  {
    id: nanoid(),
    icon: <FaGit style={{ color: "#F05032" }} />,
    name: "Git",
    category: "tools",
  },
  {
    id: nanoid(),
    icon: <SiGithubactions style={{ color: "#2088FF" }} />,
    name: "GitHub Actions",
    category: "tools",
  },
  {
    id: nanoid(),
    icon: <SiGitlab style={{ color: "#FC6D26" }} />,
    name: "GitLab CI/CD",
    category: "tools",
  },
  {
    id: nanoid(),
    icon: <SiJira style={{ color: "#0052CC" }} />,
    name: "Jira",
    category: "tools",
  },
  {
    id: nanoid(),
    icon: <SiFigma style={{ color: "#F24E1E" }} />,
    name: "Figma",
    category: "tools",
  },
  {
    id: nanoid(),
    icon: <SiPostman style={{ color: "#FF6C37" }} />,
    name: "Postman",
    category: "tools",
  },
  {
    id: nanoid(),
    icon: <SiSentry style={{ color: "#362D59" }} />,
    name: "Sentry",
    category: "tools",
  },
  {
    id: nanoid(),
    icon: <SiContentful style={{ color: "#F05757" }} />,
    name: "Contentful",
    category: "tools",
  },
  {
    id: nanoid(),
    icon: <SiAlgolia style={{ color: "#003DFF" }} />,
    name: "Algolia",
    category: "tools",
  },
  {
    id: nanoid(),
    icon: <SiVite style={{ color: "#646CFF" }} />,
    name: "Vite",
    category: "tools",
  },

  // ── Methodologies ──
  {
    id: nanoid(),
    icon: <FaSitemap style={{ color: "#3B82F6" }} />,
    name: "Agile",
    category: "methodologies",
  },
  {
    id: nanoid(),
    icon: <FaBroom style={{ color: "#10B981" }} />,
    name: "Clean Code",
    category: "methodologies",
  },
  {
    id: nanoid(),
    icon: <FaUsers style={{ color: "#F59E0B" }} />,
    name: "Scrum",
    category: "methodologies",
  },
  {
    id: nanoid(),
    icon: <FaUserFriends style={{ color: "#8B5CF6" }} />,
    name: "Pair Programming",
    category: "methodologies",
  },
  {
    id: nanoid(),
    icon: <FaClipboardCheck style={{ color: "#EC4899" }} />,
    name: "Code Reviews",
    category: "methodologies",
  },
  {
    id: nanoid(),
    icon: <FaCodeBranch style={{ color: "#F05032" }} />,
    name: "Git Flow",
    category: "methodologies",
  },
  {
    id: nanoid(),
    icon: <FaChartLine style={{ color: "#10B981" }} />,
    name: "A/B Testing (Statsig)",
    category: "methodologies",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: contentfulImg,
    url: "https://contentful-cms-mike.netlify.app/",
    github: "https://github.com/MishaShevchenko/temp-contentful-app",
    title: "Contentful CMS",
    text: "A content management system powered by Contentful and React. Dynamically fetches and displays content with structured data retrieval, optimized rendering performance, and a clean editorial workflow.",
    stack: ["React", "Contentful", "Tailwind CSS", "Netlify"],
  },
  {
    id: nanoid(),
    img: ecommerceImg,
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
  location: "Veghel, Netherlands",
  period: "June 2025 – Present",
  techs: [
    "React",
    "Gatsby",
    "TypeScript",
    "Node.js",
    "Contentful",
    "Algolia",
    "Statsig",
    "Playwright",
    "AWS",
    "GitLab CI",
    "Netlify",
    "Sentry",
  ],
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
    role: "Full-Stack Developer Intern",
    company: "HackYourFuture",
    period: "Jan 2024 – Oct 2024",
    bullets: [
      "Built a full-stack web application from scratch as part of a 6-person Agile/Scrum team.",
      "Responsible for React frontend architecture and seamless REST API integration with Node.js.",
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
    photo:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&auto=format&fit=crop",
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
    photo:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&auto=format&fit=crop",
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
    photo:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&auto=format&fit=crop",
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
