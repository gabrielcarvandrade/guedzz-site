"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const [mounted, setMounted] = useState(false);
  const scrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(scrollProgress, { stiffness: 100, damping: 30 });
  const width = useTransform(smoothProgress, (v) => `${v}%`);

  useEffect(() => {
    setMounted(true);

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      scrollProgress.set(progress * 100);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [scrollProgress]);

  if (!mounted) return null;

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
