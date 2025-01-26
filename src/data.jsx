import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://contentful-cms-mike.netlify.app/",
    github: "https://github.com/MishaShevchenko",
    title: "Explore the E-commerce Demo",
    text: "Each project reflects my continuous growth in both front-end and back-end development. I've gained experience in responsive design, working with APIs, and implementing dynamic content. To see more details and explore live demos of these projects, check the links below.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://contentful-cms-mike.netlify.app/",
    github: "https://github.com/MishaShevchenko",
    title: "Try the To-Do App Live",
    text: "These projects represent different stages of my journey in web development, highlighting various levels of complexity and technical skill. From integrating third-party APIs to creating responsive, user-friendly designs, each project has taught me valuable lessons. For more information and live demonstrations, follow the links below.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://contentful-cms-mike.netlify.app/",
    github: "https://github.com/MishaShevchenko",
    title: "Read the Blog App Codebase",
    text: `Through these projects, I have developed a solid foundation in both front-end and back-end technologies, exploring areas like API integration, dynamic data handling, and modern web development practices. To see the projects in action and learn more, please visit the links below.`,
  },
];
