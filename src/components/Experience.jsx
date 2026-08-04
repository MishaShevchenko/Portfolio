import { currentRole, experience } from "../data";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import BulletList from "./BulletList";

const Experience = () => (
  <Section id="experience" bg="bg-gray-50/80 dark:bg-gray-800/80" particles>
    <SectionTitle text="experience" />

    {/* Current Role */}
    <Card
      className="mt-10 bg-white/70 dark:bg-gray-900/70 shadow-lg border-emerald-100 dark:border-emerald-900 overflow-hidden"
      hover={false}
    >
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
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {currentRole.period}
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              {currentRole.location}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {currentRole.techs.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        <BulletList items={currentRole.bullets} />
      </div>
    </Card>

    {/* Previous */}
    <div className="mt-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
        Previous
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {experience.map((item, index) => (
          <Card
            key={item.id}
            delay={index * 0.1}
            className="bg-white/70 dark:bg-gray-900/70 border-gray-100 dark:border-gray-700 p-5"
          >
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">
              {item.period}
            </p>
            <h4 className="text-base font-bold text-gray-900 dark:text-white">
              {item.role}
            </h4>
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
              {item.company}
            </p>
            <BulletList
              items={item.bullets}
              bulletColor="bg-emerald-400"
              className="space-y-1.5"
            />
          </Card>
        ))}
      </div>
    </div>
  </Section>
);

export default Experience;
