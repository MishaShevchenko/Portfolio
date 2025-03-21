import { useState, useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ServicesSection from "./components/ServicesSection";
import Skills from "./components/Skills";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-emerald-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} toggleTheme={toggleTheme} />
      <Skills />
      <ServicesSection theme={theme}  toggleTheme={toggleTheme} />
      <About />
      <Projects theme={theme}  toggleTheme={toggleTheme}/>
      <Footer />
    </div>
  );
};

export default App;
