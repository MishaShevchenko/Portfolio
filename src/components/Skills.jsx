import { motion } from "framer-motion";
import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <motion.section
      className="py-20 align-element"
      id="skills"
      initial={{ opacity: 0 }} // Start empty
      whileInView={{ opacity: 1 }} // Become visible when in viewport
      viewport={{ amount: 0.5, once: false }} // Re-trigger on scroll up
      transition={{ duration: 0.8 }}
    >
      {/* Section Title */}
      <SectionTitle text="tech stack" />

      {/* Skills Grid */}
      <motion.div
        className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: false }} // Trigger when 50% is visible
        variants={{
          hidden: {}, // Default state for children
          visible: {
            transition: {
              staggerChildren: 0.2, // Stagger animation between cards
            },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, scale: 0.7 }} // Start hidden and smaller
            whileInView={{ opacity: 1, scale: 1 }} // Animate to full size and visible
            viewport={{ amount: 0.5, once: false }} // Re-trigger
            transition={{ duration: 1 }}
          >
            <SkillsCard {...skill} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
