import { currentRole, experience } from "../data";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300"
    >
      <div className="align-element">
        <SectionTitle text="experience" />

        {/* ── Current Role – featured card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-emerald-100 dark:border-emerald-900 overflow-hidden"
        >
          {/* Green accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 to-cyan-500" />

          <div className="p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-full mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Current Role
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {currentRole.role}
                </h3>
                <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                  {currentRole.company}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">{currentRole.period}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">{currentRole.location}</p>
              </div>
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {currentRole.techs.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5">
              {currentRole.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Previous Roles ── */}
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
            Previous
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-5 hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{item.period}</p>
                <h4 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                  {item.role}
                </h4>
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                  {item.company}
                </p>
                <ul className="space-y-1.5">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
