import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import graduationImg from "../assets/Graduation picture2.JPG";

const Hero = () => {
  return (
    <motion.div
      className="bg-emerald-100 dark:bg-gray-900 py-24 relative"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        {/* Left Section - Text */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold tracking-wider dark:text-white">{`I'm Mykhailo`}</h1>
          <p className="mt-4 text-2xl text-slate-700 dark:text-slate-300 capitalize tracking-wide">
            {/* Typewriter effect */}
            <span className="hidden sm:inline">
              <Typewriter
                words={["Full Stack Developer 💻", "React Enthusiast ⚛️", "Node.js Expert 🌐"]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <span className="sm:hidden">Full Stack Developer 💻, React Enthusiast ⚛️, Node.js Expert 🌐</span>
          </p>
          <p className="mt-2 text-lg text-slate-700 dark:text-slate-300 capitalize tracking-wide">
            Turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/MishaShevchenko" aria-label="GitHub Profile">
              <FaGithubSquare className="h-8 w-8 text-slate-500 dark:text-white hover:text-black dark:hover:text-gray-300 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/misha-shevchenko/" aria-label="LinkedIn Profile">
              <FaLinkedin className="h-8 w-8 text-slate-500 dark:text-white hover:text-black dark:hover:text-gray-300 duration-300" />
            </a>
          </div>
          <div className="text-center my-10">
            <a
              href="https://www.canva.com/design/DAFbJkrBoKI/KMp0c46LGia90_pGftDsBg/edit?utm_content=DAFbJkrBoKI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
            >
              View My Resume
            </a>
          </div>
        </motion.article>

        {/* Right Section - Image */}
        <motion.article
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
<motion.img
  src={graduationImg}
  alt="Graduation"
  className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] 
             h-auto object-cover rounded-lg shadow-md 
             border border-gray-300 dark:border-gray-600 
             mt-[-50px] sm:mt-[-60px] md:mt-[-70px] lg:mt-[-75px] 
             ml-[60px] sm:ml-[80px] md:ml-[100px] lg:ml-[120px]
             transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
/>



        </motion.article>
      </div>
    </motion.div>
  );
};

export default Hero;
