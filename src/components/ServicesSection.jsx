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
              className={`p-6 rounded-xl shadow-md border transition-transform transform hover:scale-[1.02] hover:shadow-lg ${
                theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  theme === "dark" ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheckCircle
                      className={`mt-[2px] w-5 h-5 flex-shrink-0 ${
                        theme === "dark" ? "text-emerald-300" : "text-emerald-500"
                      }`}
                    />
                    <span
                      className={`leading-relaxed ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
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
