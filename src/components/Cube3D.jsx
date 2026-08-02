import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Cube3D = () => {
  const [rotation, setRotation] = useState({ x: -15, y: 30 });
  const [isHovering, setIsHovering] = useState(false);
  const frameRef = useRef();

  const faces = [
    { text: "React", sub: "⚛️", color: "bg-blue-500/20 border-blue-400 text-blue-300", transform: "rotateY(0deg) translateZ(80px)" },
    { text: "Node.js", sub: "🟢", color: "bg-green-500/20 border-green-400 text-green-300", transform: "rotateY(90deg) translateZ(80px)" },
    { text: "TypeScript", sub: "🔷", color: "bg-blue-600/20 border-blue-500 text-blue-200", transform: "rotateY(180deg) translateZ(80px)" },
    { text: "Next.js", sub: "▲", color: "bg-gray-500/20 border-gray-400 text-gray-200", transform: "rotateY(-90deg) translateZ(80px)" },
    { text: "MongoDB", sub: "🍃", color: "bg-green-600/20 border-green-500 text-green-200", transform: "rotateX(90deg) translateZ(80px)" },
    { text: "Tailwind", sub: "💨", color: "bg-cyan-500/20 border-cyan-400 text-cyan-200", transform: "rotateX(-90deg) translateZ(80px)" },
  ];

  useEffect(() => {
    let angle = 30;
    const animate = () => {
      if (!isHovering) {
        angle += 0.4;
        setRotation({ x: -15 + Math.sin(angle * 0.02) * 10, y: angle });
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [isHovering]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 8;
    const y = (e.clientX - rect.left - rect.width / 2) / 8;
    setRotation({ x: -x, y: y });
  };

  return (
    <motion.div
      className="w-full flex justify-center items-center py-8"
      style={{ perspective: "800px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px]"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isHovering ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
      >
        {faces.map((face, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col items-center justify-center rounded-xl border-2 backdrop-blur-sm ${face.color}`}
            style={{
              transform: face.transform,
              backfaceVisibility: "hidden",
            }}
          >
            <span className="text-3xl sm:text-4xl mb-2">{face.sub}</span>
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
              {face.text}
            </span>
          </div>
        ))}

        {/* Glow center */}
        <div
          className="absolute inset-0 rounded-full bg-emerald-400/10 blur-2xl"
          style={{ transform: "translateZ(-50px)" }}
        />
      </div>
    </motion.div>
  );
};

export default Cube3D;