import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ServicesSection from "./components/ServicesSection";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <ServicesSection/>
      <About />
      <Projects />
    </>
  );
};
export default App;
