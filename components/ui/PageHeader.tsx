"use client";

import { motion } from "framer-motion";

interface Props {
  tag: string;
  title: string;
  description?: string;
  glitch?: boolean;
}

export default function PageHeader({ tag, title, description, glitch = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-12 relative"
    >
      {/* Decorative corner */}
      <div className="absolute -left-4 -top-4 w-8 h-8 border-l-2 border-t-2 border-[var(--accent)] opacity-40" />
      
      <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
        {tag}
      </p>
      
      <h1 
        className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ${glitch ? "glitch-text" : ""}`}
        style={{
          textShadow: "0 0 40px rgba(160, 32, 240, 0.3), 0 0 80px rgba(160, 32, 240, 0.1)",
        }}
      >
        {title}
      </h1>
      
      {description && (
        <p className="text-[var(--text-muted)] text-lg max-w-xl leading-relaxed">
          {description}
        </p>
      )}

      {/* Neon line under header */}
      <motion.div
        className="absolute -bottom-4 left-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, var(--accent), var(--neon-blue), transparent)",
          boxShadow: "0 0 10px var(--accent)",
        }}
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </motion.div>
  );
}
