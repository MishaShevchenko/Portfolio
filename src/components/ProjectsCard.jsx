import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
export const ProjectCard = ({
  img,
  url,
  github,
  title,
  text,
  stack = [],
  theme,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-2xl border overflow-hidden flex flex-col
        ${
          theme === "dark"
            ? "bg-gray-800/80 border-gray-700"
            : "bg-white border-gray-200"
        }
        hover:border-emerald-400 dark:hover:border-emerald-500 transition-colors duration-300`}
    >
      {/* Image with hover overlay */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-400 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 flex-1 leading-relaxed line-clamp-3">
          {text}
        </p>

        {stack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
