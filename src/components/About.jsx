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
            I am a 12-year-old aspiring developer with a knack for creating cool
            stuff on the web. I love playing around with video editing in
            Shortcut, editing photos, and drawing cartoons with IbisPaint X.
            I have also got the hang of making simple web pages using HTML and
            CSS. I enjoy making things look good and work well, and I am always
            excited to learn more about coding!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
