import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const About = () => {
  const lines = [
    "I am a full-stack developer with a passion for crafting exceptional user experiences.",
    "My expertise spans HTML, CSS, SCSS, JavaScript, React, Node.js, and MySQL.",
    "I combine design aesthetics with technical proficiency to create engaging and robust interfaces.",
    "With insights from IT support and cybersecurity, I ensure the reliability and scalability of web applications.",
  ];

  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        {/* Image Section */}
        <motion.img
          src={aboutSvg}
          alt="About illustration"
          className="w-full h-64"
          initial={{
            x: 0, // No sliding for mobile
            opacity: 0,
          }}
          whileInView={{
            x: 0, // Keep content static for mobile
            opacity: 1,
          }}
          viewport={{
            amount: 0.5,
            once: false,
          }}
          transition={{
            duration: 1,
          }}
          className="sm:hidden md:block" // Only apply advanced animations for larger screens
        />

        {/* Text Section */}
        <motion.article
          initial={{
            x: 0, // No sliding for mobile
            opacity: 0,
          }}
          whileInView={{
            x: 0, // Keep content static for mobile
            opacity: 1,
          }}
          viewport={{
            amount: 0.5,
            once: false,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="text-slate-600 mt-8 leading-loose space-y-4"
        >
          <SectionTitle text="about me" />
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{
                amount: 0.5,
              }}
              transition={{
                delay: i * 0.2,
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
