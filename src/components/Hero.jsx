import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Cube3D from "./Cube3D";

const Hero = () => {
  return (
    <motion.div
      className="bg-emerald-100 dark:bg-gray-900 py-24 relative"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold tracking-wider dark:text-white">{`I'm Mykhailo`}</h1>
          <p className="mt-4 text-2xl text-slate-700 dark:text-slate-300 capitalize tracking-wide">
            <span className="hidden sm:inline">
              <Typewriter
                words={[
                  "Full-Stack Developer 💻",
                  "React & Node.js Engineer ⚛️",
                  "TypeScript Enthusiast 🔷",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span className="sm:hidden">Full-Stack Developer 💻</span>
          </p>
          <p className="mt-2 text-lg text-slate-700 dark:text-slate-300 tracking-wide">
            3+ years building scalable web apps · Based in Veghel, Netherlands
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/MishaShevchenko"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 dark:text-white hover:text-black dark:hover:text-gray-300 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/misha-shevchenko/"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 dark:text-white hover:text-black dark:hover:text-gray-300 duration-300" />
            </a>
          </div>
          <div className="flex gap-4 mt-10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition-colors dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="border border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 px-5 py-2 rounded-md hover:bg-gray-800 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.article>
        <Cube3D />
      </div>
    </motion.div>
  );
};

export default Hero;
