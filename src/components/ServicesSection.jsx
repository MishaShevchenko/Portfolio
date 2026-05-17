import { services } from "../data";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const ServicesSection = ({ theme }) => {
  return (
    <section
      id="services"
      className={`py-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="align-element">
        <SectionTitle text="What I Do" />
        <p className="text-center text-slate-500 dark:text-slate-400 mt-3 mb-12 max-w-xl mx-auto">
          From interactive UIs to scalable APIs — here&apos;s where I can add value
          to your team or project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className={`rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                {/* Photo header with gradient overlay */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.photo}
                    alt={service.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                  {/* Colored tint overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40`} />

                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-3">
                    <Icon className="text-white text-2xl" />
                  </div>

                  {/* Title at bottom of image */}
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white drop-shadow-md">
                    {service.title}
                  </h3>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {service.techs.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className={`h-px ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`} />

                  {/* Bullet list */}
                  <ul className="space-y-2 flex-1">
                    {service.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${service.gradient}`}
                        />
                        <span
                          className={`text-sm leading-relaxed ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
