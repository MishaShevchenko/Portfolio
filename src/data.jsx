import { nanoid } from "nanoid";
import { FaHtml5, FaYoutubeSquare, FaComments } from "react-icons/fa";

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
    title: "YouTube",
    icon: <FaYoutubeSquare className="h-16 w-16 text-emerald-500" />,
    text: "Experienced YouTube user, creating interactive and dynamic web applications with a focus on smooth user interactions and functionality.",
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
    url: "https://youtu.be/mjNx17nLfiI",
    github: "https://github.com/john-smilga",
    title: "first project",
    text: "This is a video I edited about what I am interested in besides design and coding.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://www.youtube.com/shorts/GP9IZpCjg6k",
    github: "https://github.com/john-smilga",
    title: "second project",
    text: "This is a random photo I edited using IbisPaint X.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://www.youtube.com/shorts/RLvAedyCBOI",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: `This is a short and simple cartoon that I created.`,
  },
];
