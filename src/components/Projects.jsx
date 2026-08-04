import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Projects = ({ theme }) => {
  return (
    <Section id="projects" particles={false}>
      <SectionTitle text="web creations" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-center text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-10"
      >
        Some of my recent work. Real projects, deployed to
        production.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <ProjectsCard theme={theme} key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
