import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am a full-stack developer with a passion for crafting exceptional
            user experiences. My expertise spans HTML, CSS, SCSS, JavaScript,
            React, Node.js, and MySQL, where I seamlessly combine design
            aesthetics with technical proficiency to create engaging and robust
            interfaces. Embracing a comprehensive approach to web development, I
            integrate frontend and backend development with Agile principles,
            drawing on insights from IT support and cybersecurity. This allows
            me to prioritize user experience while ensuring the reliability,
            security, and scalability of web applications.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
