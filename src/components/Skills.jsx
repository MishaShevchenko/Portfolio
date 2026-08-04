import { motion } from "framer-motion";
import { skills } from "../data";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const categories = {
  frontend: "Frontend",
  testing: "Testing",
  backend: "Backend",
  tools: "Tools & DevOps",
  methodologies: "Methodologies",
};

const categoryOrder = [
  "frontend",
  "testing",
  "backend",
  "tools",
  "methodologies",
];

const Skills = () => {
  const grouped = categoryOrder.reduce((acc, key) => {
    acc[key] = skills.filter((s) => s.category === key);
    return acc;
  }, {});

  return (
    <Section id="skills" particles minHeight="" center={false}>
      <SectionTitle text="My Tech Stack" />
      <p className="text-center text-slate-500 dark:text-slate-400 mt-2 mb-8 max-w-xl mx-auto text-sm">
        Technologies, tools, and practices I use to ship production-grade
        software.
      </p>

      <div className="space-y-8">
        {categoryOrder.map((cat, catIdx) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
          >
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
              {categories[cat]}
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
              {grouped[cat].map((skill, idx) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="group flex flex-col items-center gap-1.5 p-2.5 rounded-lg 
                    bg-white/70 dark:bg-gray-800/70 
                    border border-gray-100 dark:border-gray-700 
                    hover:border-emerald-300 dark:hover:border-emerald-500
                    hover:shadow-md hover:shadow-emerald-500/10 
                    transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <span className="text-[11px] font-medium text-slate-700 dark:text-slate-200 text-center leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
