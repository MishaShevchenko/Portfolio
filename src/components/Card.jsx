import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  delay = 0,
  hover = true,
  as = "div",
  ...props
}) => {
  const Tag = as === "button" ? motion.button : as === "a" ? motion.a : motion.div;

  return (
    <Tag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4 } : undefined}
      className={`rounded-xl border backdrop-blur-sm transition-all duration-300 ${
        hover
          ? "hover:shadow-lg hover:border-emerald-400 dark:hover:border-emerald-500"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Card;