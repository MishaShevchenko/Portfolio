import { services } from "../data";
import { FaCheckCircle } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-emerald-400 mb-8">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-emerald-300 mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <FaCheckCircle className="text-emerald-400 mt-[2px] w-5 h-5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
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
