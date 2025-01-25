import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const ProjectsCard = ({ url, img, title, text, github }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-2xl duration-300 transform hover:scale-105 overflow-hidden">
      <div className="relative">
        <img src={img} alt={title} className="w-full object-cover h-64" />
        {/* Оверлей с названием */}
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 duration-300 flex items-center justify-center">
          {/* <h3 className="text-white text-lg font-semibold">{title}</h3> */}
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl tracking-wide font-semibold text-slate-800">
          {title}
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
        <div className="mt-6 flex gap-x-4">
          <a
            href={url}
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-700 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbWorldWww className="h-6 w-6" />
          </a>
          <a
            href={github}
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-700 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="h-6 w-6" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
