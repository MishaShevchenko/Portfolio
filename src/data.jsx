import { nanoid } from "nanoid";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython  } from "react-icons/fa";
import { SiTypescript, SiRedux, SiTailwindcss, SiPostgresql, SiDocker, SiGit, SiLinux, SiFigma, SiMongodb, SiFirebase, SiNextdotjs, SiPostman  } from "react-icons/si";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  { id: 1, icon: <FaReact style={{ color: "#61DAFB" }} />, name: "React" },
  { id: 2, icon: <FaNodeJs style={{ color: "#83CD29" }} />, name: "Node.js" },
  { id: 3, icon: <FaHtml5 style={{ color: "#E34F26" }} />, name: "HTML5" },
  { id: 4, icon: <FaCss3Alt style={{ color: "#1572B6" }} />, name: "CSS3" },
  { id: 5, icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "JavaScript" },
  { id: 6, icon: <FaPython style={{ color: "#3776AB" }} />, name: "Python" },
  { id: 7, icon: <SiMongodb style={{ color: "#47A248" }} />, name: "MongoDB" },
  { id: 8, icon: <SiFirebase style={{ color: "#FFCA28" }} />, name: "Firebase" },
  { id: 9, icon: <SiNextdotjs style={{ color: "black" }} />, name: "Next.js" },
  { id: 10, icon: <SiTypescript style={{ color: "#3178C6" }} />, name: "TypeScript" },
  { id: 11, icon: <SiRedux style={{ color: "#764ABC" }} />, name: "Redux" },
  { id: 12, icon: <SiTailwindcss style={{ color: "#38B2AC" }} />, name: "Tailwind CSS" },
  { id: 13, icon: <SiPostgresql style={{ color: "#336791" }} />, name: "PostgreSQL" },
  { id: 14, icon: <SiDocker style={{ color: "#0db7ed" }} />, name: "Docker" },
  { id: 15, icon: <SiGit style={{ color: "#F05032" }} />, name: "Git" },
  { id: 16, icon: <SiLinux style={{ color: "#FCC624" }} />, name: "Linux" },
  { id: 17, icon: <SiFigma style={{ color: "#F24E1E" }} />, name: "Figma" },
  { id: 18, icon: <SiPostman style={{ color: "#FF6C37" }} />, name: "Postman" },
];


export const projects = [
 
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://contentful-cms-mike.netlify.app/",
    github: "https://github.com/MishaShevchenko/temp-contentful-app",
    title: "Contentful CMS",
    text: "A content management system (CMS) powered by Contentful and React. It dynamically fetches and displays content, making it easy to manage and update projects. The project showcases structured content retrieval and rendering with optimized performance.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://e-commerce-mykhailo.netlify.app/",
    github: "https://github.com/MishaShevchenko/E-Commerce",
    title: "E-commerce",
    text: "A full-featured e-commerce store built with React, Redux Toolkit, and Firebase. It includes product filtering, sorting, pagination, a shopping cart, authentication, and order management. Users can browse, add items to their cart, and securely place orders.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://mixmaster-mike.netlify.app/",
    github: "https://github.com/MishaShevchenko/Mixmaster",
    title: "MixMaster",
    text: `MixMaster lets users search for cocktails and view detailed drink info using the Cocktail DB API. Built with React Router for seamless navigation and React Query for caching, it delivers a smooth multi-page experience optimized for performance.`,
  },
];

export const services = [
  {
    title: "Frontend Development",
    description: [
     "Creating and developing responsive and interactive user interfaces.",
      "Optimizing performance and ensuring cross-browser compatibility.",
      "Working with React, TypeScript, and modern UI libraries (Tailwind, Material UI, Chakra UI).",
      "Implementing state management using Redux, React Query, and Context API.",
      "Ensuring accessibility and SEO optimization.",
      "Integrating APIs and working with GraphQL & RESTful services.",
      "Using graphic editors and design tools to create and refine UI components.",
      "Managing version control with Git and GitHub for efficient collaboration.",
      "Collaborating closely with designers, backend developers, and other team members to build seamless and fully functional web applications."
    ],
  },
  {
    title: "Backend Development",
    description: [
      "Developing RESTful APIs using Node.js and Express.js.",
      "Managing databases with MongoDB, including data modeling.",
      "Designing and optimizing relational databases with SQL (MySQL, PostgreSQL).",
      "Implementing authentication and authorization (JWT, OAuth).",
      "Building scalable and secure server-side applications.",
      "Deploying backend services on cloud platforms like Vercel and Render.",
    ],
  },
  {
    title: "Full-Stack Development",
    description: [
      "Integrating frontend and backend for seamless web applications.",
      "Using Firebase for authentication and cloud storage.",
      "Optimizing API performance and database queries.",
      "Handling server-side rendering with Next.js.",
      "Managing version control with Git and GitHub."
    ],
  },
];


