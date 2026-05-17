import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ img, url, github, title, text, stack = [], theme }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col
      ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
      <img
        src={img}
        alt={title}
        className="rounded-xl w-full h-48 object-cover"
        loading="lazy"
      />
      <h2 className="text-2xl font-semibold mt-4 mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 flex-1">{text}</p>

      {stack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4 mt-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
        >
          <FaGithub className="text-xl" /> GitHub
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg transition"
        >
          <FaExternalLinkAlt className="text-xl" /> Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
