import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="bg-white py-20"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }} // Trigger when 50% is visible
      transition={{ duration: 0.8 }}
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        {/* Image Section */}
        <motion.img
          src={aboutSvg}
          alt="About illustration"
          className="w-full h-64"
          initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
          whileInView={{ x: 0, opacity: 1 }} // Move to center
          viewport={{ amount: 0.5, once: false }} // Re-trigger on scroll up
          transition={{ duration: 1 }}
        />

        {/* Text Section */}
        <motion.article
          initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
          whileInView={{ x: 0, opacity: 1 }} // Move to center
          viewport={{ amount: 0.5, once: false }} // Re-trigger on scroll up
          transition={{ duration: 1, delay: 0.2 }}
        >
          <SectionTitle text="about me" />
          <div className="text-slate-600 mt-8 leading-loose">
            <p className="text-xl">
              <Typewriter
                words={[
                  "I am a full-stack developer with a passion for crafting exceptional user experiences.",
                  "My expertise spans HTML, CSS, SCSS, JavaScript, React, Node.js, and MySQL.",
                  "I combine design aesthetics with technical proficiency to create engaging and robust interfaces.",
                  "With insights from IT support and cybersecurity, I ensure the reliability and scalability of web applications.",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
};

export default About;
