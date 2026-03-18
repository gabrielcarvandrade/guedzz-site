"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Music, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedWaves from "@/components/ui/AnimatedWaves";

const taglines = [
  { text: "Music is the answer 🎶", color: "var(--accent)", glow: "var(--glow-purple)" },
  { text: "Art in motion.", color: "var(--neon-blue)", glow: "var(--glow-blue)" },
  { text: "Soul in expansion.", color: "var(--neon-pink)", glow: "var(--glow-pink)" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep black base */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Animated neon waves — club background */}
      <AnimatedWaves />

      {/* Artist photo */}
      <div className="absolute inset-0 flex justify-end pointer-events-none" style={{ zIndex: 1 }}>
        <div className="relative w-full md:w-2/3 h-full opacity-[0.38]">
          <Image
            src="/images/guedzz.jpg"
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        </div>
      </div>

      {/* Neon glow blobs — pulsing, all colors */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--accent)] blur-[130px] pointer-events-none"
        animate={{ opacity: [0.07, 0.13, 0.07] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[var(--neon-blue)] blur-[110px] pointer-events-none"
        animate={{ opacity: [0.05, 0.10, 0.05] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ zIndex: 1 }}
      />
      <motion.div
        className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-[var(--neon-pink)] blur-[90px] pointer-events-none"
        animate={{ opacity: [0.04, 0.09, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ zIndex: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/5 w-48 h-48 rounded-full bg-[var(--neon-red)] blur-[80px] pointer-events-none"
        animate={{ opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ zIndex: 1 }}
      />

      {/* BPM Badge */}
      <motion.div
        className="absolute top-8 right-6 z-20 hidden md:flex flex-col items-end gap-0.5"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 3 }}
      >
        <div className="flex items-center gap-2">
          <span
            className="block w-2 h-2 rounded-full bg-[var(--accent)]"
            style={{
              animation: "bpm-pulse 0.469s ease-in-out infinite",
              boxShadow: "0 0 8px var(--accent), 0 0 16px rgba(160,32,240,0.4)",
            }}
          />
          <span
            className="text-xs font-mono font-bold tracking-widest"
            style={{ color: "var(--accent)", textShadow: "var(--glow-purple)" }}
          >
            128 BPM
          </span>
        </div>
        <span className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] font-mono">
          4 / 4
        </span>
      </motion.div>

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(160,32,240,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative text-center px-5 max-w-4xl mx-auto" style={{ zIndex: 10 }}>
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-[var(--text-muted)] text-xs font-semibold uppercase tracking-[0.3em] mb-6"
        >
          House • Tech • Minimal
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="glitch-text text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none text-white mb-6">
            GuedZZ
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-1 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.4, delayChildren: 0.8 } },
          }}
        >
          {taglines.map(({ text, color, glow }) => (
            <motion.p
              key={text}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-sm font-medium italic tracking-wide"
              style={{ color, textShadow: glow }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2 }}
          className="flex flex-col sm:flex-row gap-3 items-center justify-center"
        >
          <Link href="/musicas">
            <Button variant="primary" size="lg">
              <Music size={16} />
              Ouvir Agora
            </Button>
          </Link>
          <Link href="/agenda">
            <Button variant="outline" size="lg">
              <Calendar size={16} />
              Ver Agenda
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        style={{ zIndex: 10 }}
      >
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
