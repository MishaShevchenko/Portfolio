import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutTerminal = () => {
  const [lines, setLines] = useState([]);
  const [step, setStep] = useState(0);

  const commands = [
    {
      prompt: "~",
      text: " whoami",
      output: "mykhailo-shevchenko",
      color: "text-emerald-400",
    },
    {
      prompt: "~",
      text: " cat location.txt",
      output: "Veghel, Netherlands 🇳🇱",
      color: "text-blue-400",
    },
    {
      prompt: "~",
      text: " ls experience/",
      output: "drukwerkdeal/  hackyourfuture/  epam/  freelance/",
      color: "text-yellow-400",
    },
    {
      prompt: "~",
      text: " cat stack.json",
      output:
        '{ "frontend": ["React", "TS", "Tailwind"], "backend": ["Node.js", "PostgreSQL"] }',
      color: "text-purple-400",
    },
    {
      prompt: "~",
      text: " uptime",
      output: "3+ years in web development",
      color: "text-cyan-400",
    },
  ];

  useEffect(() => {
    if (step >= commands.length) return;
    const cmd = commands[step];
    let charIdx = 0;

    const interval = setInterval(() => {
      charIdx++;
      setLines((prev) => {
        const next = [...prev];
        next[step] = { ...cmd, visible: cmd.text.slice(0, charIdx) };
        return next;
      });

      if (charIdx >= cmd.text.length) {
        clearInterval(interval);
        setTimeout(() => {
          setLines((prev) => {
            const next = [...prev];
            next[step] = { ...cmd, visible: cmd.text, showOutput: true };
            return next;
          });
          setStep((s) => s + 1);
        }, 400);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [step]);

  return (
    <motion.div
      className="w-full max-w-[480px] mx-auto md:mx-0"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 font-mono text-xs sm:text-sm">
        <div className="bg-gray-800 px-3 py-2 flex items-center gap-1.5 border-b border-gray-700">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="ml-2 text-gray-500 text-[10px]">about — zsh</span>
        </div>

        {/* Фиксированная высота — секция не прыгает */}
        <div className="p-3 sm:p-4 h-[260px] sm:h-[280px] overflow-hidden">
          {lines.map((line, i) => (
            <div key={i} className="mb-1.5">
              <span className="text-emerald-600">mykhailo@portfolio</span>
              <span className="text-gray-500">{line.prompt}</span>
              <span className="text-gray-300">{line.visible}</span>
              {line.showOutput && (
                <div className={`${line.color} mt-0.5 ml-4`}>{line.output}</div>
              )}
              {!line.showOutput && i === lines.length - 1 && (
                <span className="inline-block w-1.5 h-3.5 bg-gray-400 ml-0.5 animate-pulse" />
              )}
            </div>
          ))}

          {step >= commands.length && (
            <div className="mt-2">
              <span className="text-emerald-600">mykhailo@portfolio</span>
              <span className="text-gray-500">~</span>
              <span className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-1 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export { AboutTerminal };
