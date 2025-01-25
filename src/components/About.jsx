import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3, // Staggered effect
    },
  }),
};

const About = () => {
  const lines = [
    "I am a full-stack developer with a passion for crafting exceptional user experiences.",
    "My expertise spans HTML, CSS, SCSS, JavaScript, React, Node.js, and MySQL.",
    "I combine design aesthetics with technical proficiency to create engaging and robust interfaces.",
    "With insights from IT support and cybersecurity, I ensure the reliability and scalability of web applications.",
  ];

  return (
    <motion.section
      className="bg-white py-20"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5, once: false }} // Trigger when 50% is visible
      transition={{ duration: 0.8 }}
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        {/* Image Section */}
        <motion.img
          src={aboutSvg}
          alt="About illustration"
          className="w-full h-64"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 1 }}
        />

        {/* Text Section */}
        <motion.article
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 1 }}
        >
          <SectionTitle text="about me" />
          <div className="text-slate-600 mt-8 leading-loose">
            {/* Staggered Text Animation */}
            {lines.map((line, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                className="text-lg md:text-xl"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
};

export default About;
