import { AboutTerminal } from "./AboutTerminal";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const About = () => (
  <Section id="about" particles={false} minHeight="min-h-[80vh]">
    <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">
      <motion.article
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5, once: false }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-slate-600 dark:text-slate-300 leading-loose space-y-4"
      >
        <SectionTitle text="about me" />
        <p className="text-lg md:text-xl">
          Full-stack developer with 3+ years of experience, most recently at
          Drukwerkdeal, part of Cimpress and the largest digital print platform
          in the Netherlands, building e-commerce frontends with React, Gatsby,
          TypeScript, Node.js, and Contentful.
        </p>
        <p className="text-lg md:text-xl">
          Before engineering I founded and ran my own B2B business. That still
          shapes how I work: I care what a change does for the product, not only
          whether the PR is green.
        </p>
        <p className="text-lg md:text-xl">
          Comfortable in Agile squads, code reviews, and owning a feature from
          UI through tests to production.
        </p>
      </motion.article>

      <AboutTerminal />
    </div>
  </Section>
);

export default About;
