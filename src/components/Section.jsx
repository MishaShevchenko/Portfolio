import ParticlesBackground from "./ParticlesBackground";

const Section = ({
  id,
  children,
  bg = "bg-white dark:bg-gray-900",
  particles = false,
  minHeight = "min-h-[80vh]",
  center = true,
  className = "",
}) => (
  <section
    id={id}
    className={`relative ${bg} py-24 ${minHeight} ${
      center ? "flex items-center" : ""
    } transition-colors duration-300 backdrop-blur-sm ${className}`}
  >
    {particles && <ParticlesBackground />}
    <div className="align-element relative z-10 w-full">{children}</div>
  </section>
);

export default Section;