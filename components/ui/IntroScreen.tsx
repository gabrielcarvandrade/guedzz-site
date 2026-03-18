"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "guedzz_intro_shown";

export default function IntroScreen() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<"enter" | "glitch" | "exit">("enter");

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(SESSION_KEY)) {
        setShow(true);
        sessionStorage.setItem(SESSION_KEY, "1");
      }
    } catch {
      // sessionStorage bloqueado (modo privado restrito)
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    const t1 = setTimeout(() => setPhase("glitch"), 700);
    const t2 = setTimeout(() => setPhase("exit"),   1200);
    const t3 = setTimeout(() => setShow(false),     1900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#080808]"
          animate={phase === "exit" ? { opacity: 0, filter: "blur(8px)" } : { opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(160,32,240,0.1) 0%, transparent 70%)",
            }}
          />

          {/* Title */}
          <motion.h1
            className="text-7xl md:text-9xl font-black tracking-tighter text-white select-none relative z-10"
            initial={{ opacity: 0, y: 24 }}
            animate={
              phase === "glitch"
                ? {
                    opacity: 1,
                    y: 0,
                    x: [-3, 3, -2, 1, 0],
                    textShadow: [
                      "0 0 60px rgba(160,32,240,0.5)",
                      "3px 0 #00C8FF, -3px 0 #FF00AA",
                      "2px 0 #00C8FF, -2px 0 #FF00AA",
                      "-1px 0 #FF00AA",
                      "0 0 60px rgba(160,32,240,0.3)",
                    ],
                  }
                : { opacity: 1, y: 0 }
            }
            transition={
              phase === "glitch"
                ? { duration: 0.35, times: [0, 0.25, 0.5, 0.75, 1] }
                : { duration: 0.6, ease: "easeOut" }
            }
          >
            GuedZZ
          </motion.h1>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-1/3 left-1/2 -translate-x-1/2 h-[1px] w-32"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.4, times: [0, 0.08, 0.85, 1], ease: "easeInOut" }}
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 12px var(--accent)",
              transformOrigin: "left",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
