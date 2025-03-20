import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-2">
          <a href="https://github.com/MishaShevchenko" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/misha-shevchenko/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400 transition">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Mykhailo Shevchenko. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;