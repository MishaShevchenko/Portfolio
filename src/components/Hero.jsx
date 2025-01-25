// import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import graduationImg from "../assets/Graduation picture2.JPG";
import { Typewriter } from "react-simple-typewriter";


const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">{`I'm Mykhailo`}</h1>
          <p className="mt-4 text-2xl text-slate-700 capitalize tracking-wide">
            <Typewriter
              words={[
                "Full Stack Developer 💻",
                "React Enthusiast ⚛️",
                "Node.js Expert 🌐",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/MishaShevchenko">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/misha-shevchenko/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
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
        </article>
        <article className="hidden md:block">
          <img src={graduationImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
