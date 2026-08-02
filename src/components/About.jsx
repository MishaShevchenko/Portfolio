import { AboutTerminal } from "./AboutTerminal";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="bg-white dark:bg-gray-900 py-20 overflow-hidden transition-colors duration-300"
      id="about"
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-12 md:gap-16">
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5, once: false }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 leading-loose space-y-4"
        >
          <SectionTitle text="about me" />
          <p className="text-lg md:text-xl">
            Full-stack developer with 3+ years of experience. Currently at{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              Drukwerkdeal
            </span>{" "}
            in the Netherlands, building e-commerce frontends with React,
            Gatsby, TypeScript, Node.js, and Contentful.
          </p>
          <p className="text-lg md:text-xl">
            I care about clean code, meaningful tests, and shipping things that
            work. Comfortable in Agile teams, code reviews, and cross-functional
            squads.
          </p>
        </motion.article>

        <AboutTerminal />
      </div>
    </section>
  );
};

export default About;
