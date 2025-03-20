import { motion } from "framer-motion";
import { skills } from "../data";

const Skills = () => {
  return (
    <motion.section
      className="py-20 align-element overflow-hidden"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5, once: false }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        My Tech Stack
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-14 text-6xl" // Увеличил размер иконок
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }} // Сделал прокрутку медленнее
          style={{ display: "flex", minWidth: "200%" }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center w-32 h-32" // Увеличил размер контейнера
              whileHover={{ scale: 1.2, rotate: 5 }} // Добавил эффект анимации при наведении
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill.icon}
              <p className="text-sm mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
