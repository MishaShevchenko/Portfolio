import { links } from "../data";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="bg-emerald-100 dark:bg-gray-800 text-black dark:text-white transition-colors duration-300">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 justify-between">
        <h2 className="text-3xl font-bold">
          Web <span className="text-emerald-600 dark:text-emerald-400">Dev</span>
        </h2>
        
        <div className="flex gap-x-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="capitalize text-lg tracking-wide hover:text-emerald-600 dark:hover:text-emerald-400 duration-300"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* ОДНА кнопка для темы */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-full shadow-md hover:scale-110 transition-transform duration-300"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
