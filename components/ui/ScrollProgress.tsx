"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full"
        style={{
          width,
          background: "linear-gradient(90deg, var(--accent), var(--neon-blue), var(--neon-pink))",
          boxShadow: "0 0 8px var(--accent), 0 0 16px rgba(160,32,240,0.4)",
        }}
      />
    </div>
  );
}
