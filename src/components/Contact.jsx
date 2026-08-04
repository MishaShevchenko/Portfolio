import { useState } from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

const EMAIL = "msheva.dev@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
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
    <Section id="contact" bg="bg-white/80 dark:bg-gray-900/80" particles>
      <SectionTitle text="get in touch" />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-4 text-center text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto"
      >
        I'm open to full-time roles, freelance projects, and interesting collaborations.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
        {/* Email */}
        <Card as="button" onClick={copyEmail} className="flex flex-col items-center gap-3 p-6 bg-white/70 dark:bg-gray-800/70 cursor-pointer w-full">
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span key="check" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}>
                <FaCheck className="text-3xl text-emerald-500" />
              </motion.span>
            ) : (
              <motion.span key="env" initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}>
                <FaEnvelope className="text-3xl text-emerald-500" />
              </motion.span>
            )}
          </AnimatePresence>
          <span className="font-semibold text-gray-800 dark:text-gray-100">Email</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{copied ? "Copied!" : EMAIL}</span>
        </Card>

        {/* GitHub */}
        <Card as="a" href="https://github.com/MishaShevchenko" target="_blank" rel="noopener noreferrer" delay={0.1} className="flex flex-col items-center gap-3 p-6 bg-white/70 dark:bg-gray-800/70">
          <FaGithubSquare className="text-3xl text-emerald-500" />
          <span className="font-semibold text-gray-800 dark:text-gray-100">GitHub</span>
          <span className="text-sm text-center break-all text-gray-500 dark:text-gray-400">github.com/MishaShevchenko</span>
        </Card>

        {/* LinkedIn */}
        <Card as="a" href="https://www.linkedin.com/in/misha-shevchenko/" target="_blank" rel="noopener noreferrer" delay={0.2} className="flex flex-col items-center gap-3 p-6 bg-white/70 dark:bg-gray-800/70">
          <FaLinkedin className="text-3xl text-emerald-500" />
          <span className="font-semibold text-gray-800 dark:text-gray-100">LinkedIn</span>
          <span className="text-sm text-center text-gray-500 dark:text-gray-400">linkedin.com/in/misha-shevchenko</span>
        </Card>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-10 text-center">
        <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
          <FaEnvelope /> Say Hello
        </a>
      </motion.div>
    </Section>
  );
};

export default Contact;