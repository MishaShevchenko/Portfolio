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
    url: "https://menu-react-application.netlify.app/",
    github: "https://github.com/MishaShevchenko",
    title: "first project",
    text: "The Menu app, built with React, simplifies the display and management of menu items. Users can explore categorized menu items effortlessly, with features like dynamic rendering and category filtering enhancing the browsing experience.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://accordion-app-react-new.netlify.app/",
    github: "https://github.com/MishaShevchenko",
    title: "second project",
    text: "The Accordion project enables users to effortlessly navigate through a list of questions and answers using React. It offers interactive toggling functionality for each question, streamlining the exploration process.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://tours-projectreact.netlify.app",
    github: "https://github.com/MishaShevchenko",
    title: "third project",
    text: `The Tours app, powered by React, simplifies tour management with features like fetching, viewing, and interacting with tour data, including a "read more" functionality, along with a "re-fetch" option for updated listings.`,
  },
];
