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
            I am a frontend developer with a passion for crafting exceptional
            user experiences. My expertise lies in HTML, CSS, SCSS, JavaScript,
            and React, where I combine design aesthetics with technical
            proficiency to create engaging interfaces. Practicing a
            comprehensive approach to web development, I seamlessly blend
            frontend development with Agile principles, insights from IT
            support, and cybersecurity. This allows me to prioritize user
            experience while ensuring the reliability and security of web
            applications.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
