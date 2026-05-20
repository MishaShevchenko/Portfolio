import { useState } from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL = "msheva.dev@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // fallback for browsers that block clipboard API
      const el = document.createElement("textarea");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300"
    >
      <div className="align-element">
        <SectionTitle text="get in touch" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-center text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto"
        >
          I'm open to full-time roles, freelance projects, and interesting
          collaborations. I enjoy translating business requirements into clean,
          working software. Feel free to reach out. I typically reply within a
          day.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {/* Email card — copy to clipboard */}
          <motion.button
            onClick={copyEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800 hover:border-emerald-400 dark:hover:border-emerald-500
              hover:shadow-md transition-all duration-300 group cursor-pointer w-full"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaCheck className="text-3xl text-emerald-500" />
                </motion.span>
              ) : (
                <motion.span
                  key="envelope"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope className="text-3xl text-emerald-500" />
                </motion.span>
              )}
            </AnimatePresence>
            <span className="font-semibold text-gray-800 dark:text-gray-100">Email</span>
            <span className="text-sm text-center text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {copied ? "Copied to clipboard!" : EMAIL}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
              <FaCopy className="text-xs" />
              {copied ? "Done" : "Click to copy"}
            </span>
          </motion.button>

          {/* GitHub */}
          <motion.a
            href="https://github.com/MishaShevchenko"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800 hover:border-emerald-400 dark:hover:border-emerald-500
              hover:shadow-md transition-all duration-300 group"
          >
            <FaGithubSquare className="text-3xl text-emerald-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-100">GitHub</span>
            <span className="text-sm text-center break-all text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              github.com/MishaShevchenko
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/misha-shevchenko/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 dark:border-gray-700
              bg-gray-50 dark:bg-gray-800 hover:border-emerald-400 dark:hover:border-emerald-500
              hover:shadow-md transition-all duration-300 group"
          >
            <FaLinkedin className="text-3xl text-emerald-500" />
            <span className="font-semibold text-gray-800 dark:text-gray-100">LinkedIn</span>
            <span className="text-sm text-center text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              linkedin.com/in/misha-shevchenko
            </span>
          </motion.a>
        </div>

        {/* Say Hello CTA — opens mail client */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href={`mailto:${EMAIL}?subject=Hey Mykhailo — let's connect&body=Hi Mykhailo,%0D%0A%0D%0A`}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            <FaEnvelope />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
