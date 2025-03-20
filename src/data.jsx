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
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://contentful-cms-mike.netlify.app/",
    github: "https://github.com/MishaShevchenko",
    title: "Contentful CMS",
    text: "A content management system (CMS) powered by Contentful and React. It dynamically fetches and displays content, making it easy to manage and update projects. The project showcases structured content retrieval and rendering with optimized performance.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://contentful-cms-mike.netlify.app/project/1zk7K33oX6i97fc95Q133k",
    github: "https://github.com/MishaShevchenko",
    title: "E-commerce",
    text: "A full-featured e-commerce store built with React, Redux Toolkit, and Firebase. It includes product filtering, sorting, pagination, a shopping cart, authentication, and order management. Users can browse, add items to their cart, and securely place orders.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://contentful-cms-mike.netlify.app/project/2NepQ8lVGHYYnMNtTlmFNL",
    github: "https://github.com/MishaShevchenko",
    title: "MixMaster",
    text: `MixMaster lets users search for cocktails and view detailed drink info using the Cocktail DB API. Built with React Router for seamless navigation and React Query for caching, it delivers a smooth multi-page experience optimized for performance.`,
  },
];
