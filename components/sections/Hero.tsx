"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Music, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep black background */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Artist photo — dark, faded on the side */}
      <div className="absolute inset-0 flex justify-end pointer-events-none">
        <div className="relative w-full md:w-1/2 h-full opacity-20">
          <Image
            src="/images/guedzz.jpg"
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
          {/* Fade to black on left and bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        </div>
      </div>

      {/* Neon glow blobs — rare, subtle */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[var(--neon-blue)] opacity-[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-[var(--neon-pink)] opacity-[0.04] blur-[80px] pointer-events-none" />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(160,32,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(160,32,240,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Tag line */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-[var(--text-muted)] text-xs font-semibold uppercase tracking-[0.3em] mb-6"
          >
            House • Tech • Minimal
          </motion.p>

          {/* Name with neon glow */}
          <h1
            className="text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none text-white mb-2"
            style={{ textShadow: "0 0 60px rgba(160,32,240,0.3), 0 0 120px rgba(160,32,240,0.1)" }}
          >
            GuedZZ
          </h1>

          {/* Accent line */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-[var(--neon-blue)] opacity-60" style={{ boxShadow: "0 0 8px var(--neon-blue)" }} />
            <span className="text-[var(--accent)] text-sm font-medium tracking-widest uppercase" style={{ textShadow: "var(--glow-purple)" }}>
              Music is the answer
            </span>
            <div className="h-px w-12 bg-[var(--neon-blue)] opacity-60" style={{ boxShadow: "0 0 8px var(--neon-blue)" }} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
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
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
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
