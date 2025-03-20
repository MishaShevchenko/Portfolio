import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ img, url, github, title, text }) => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-800">
      {/* Проектное изображение */}
      <img src={img} alt={title} className="rounded-xl w-full h-48 object-cover" />

      {/* Название проекта */}
      <h3 className="text-xl font-bold text-emerald-400">{title}</h3>

      {/* Описание проекта */}
      <p className="text-gray-300">{text}</p>

      {/* Кнопки GitHub & Live Demo */}
      <div className="flex gap-4 mt-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
        >
          <FaGithub className="text-xl" />
          GitHub
        </a>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg transition"
        >
          <FaExternalLinkAlt className="text-xl" />
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
