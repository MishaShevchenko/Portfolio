import { services } from "../data";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const ServicesSection = ({ theme }) => {
  return (
    <section
      id="services"
      className={`py-12 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="align-element">
        <SectionTitle text="My Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  theme === "dark" ? "text-emerald-300" : "text-emerald-700"
                }`}
              >
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle
                      className={`mt-[2px] w-5 h-5 flex-shrink-0 ${
                        theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    />
                    <span
                      className={`leading-relaxed ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
