import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const About = () => {
  const lines = [
    "I am a full-stack developer with expertise in building modern web applications. My tech stack includes JavaScript, TypeScript, React, Node.js, and databases like MongoDB and MySQL. I focus on creating efficient, scalable, and user-friendly applications. With experience in IT support and cybersecurity, I ensure security and reliability in web development.",
  ];

  return (
    <section
      className="bg-white dark:bg-gray-900 py-20 overflow-hidden transition-colors duration-300"
      id="aboфut"
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        {/* Image Section */}
        <motion.img
          src={aboutSvg}
          alt="Innovative technology illustration"
          className="w-full h-72 md:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 1 }}
        />

        {/* Text Section */}
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 mt-8 leading-loose space-y-4"
        >
          <SectionTitle text="about me" />
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
              }}
              className="text-lg md:text-xl"
            >
              {line}
            </motion.p>
          ))}
        </motion.article>
      </div>
    </section>
  );
};

export default About;
