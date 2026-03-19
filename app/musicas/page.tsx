"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ReleaseCard from "@/components/ui/ReleaseCard";
import PageBackground from "@/components/ui/PageBackground";
import PageHeader from "@/components/ui/PageHeader";
import releasesData from "@/data/releases.json";

const filters = [
  { value: "all", label: "Todos" },
  { value: "album", label: "Albums" },
  { value: "ep", label: "EPs" },
  { value: "single", label: "Singles" },
];

export default function MusicasPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? releasesData
      : releasesData.filter((r) => r.type === filter);

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <PageBackground variant="waves" intensity="low" />
      
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <PageHeader
          tag="Discografia"
          title="Musicas"
          description="Albums, EPs e singles - toda a producao musical em um so lugar."
        />

        {/* Featured Track Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Neon accent corner */}
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[var(--accent)] to-transparent" />
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[var(--accent)] to-transparent" />
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[var(--accent)]">Em destaque</span>
          </div>
          
          <h3 className="text-xl font-bold mb-2">Player Integrado</h3>
          <p className="text-[var(--text-muted)] text-sm mb-4">
            Clique em qualquer release para ouvir diretamente do SoundCloud.
          </p>
          
          {/* Audio visualizer bars (decorative) */}
          <div className="flex items-end gap-1 h-8">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-[var(--accent)] to-[var(--neon-blue)] rounded-full"
                animate={{
                  height: [8, 20 + Math.random() * 20, 8],
                }}
                transition={{
                  duration: 0.5 + Math.random() * 0.5,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-2 mb-10 flex-wrap"
        >
          {filters.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                filter === value
                  ? "bg-[var(--accent)] text-black"
                  : "border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text-primary)] hover:shadow-[0_0_15px_rgba(160,32,240,0.3)]"
              }`}
            >
              {label}
              {filter === value && (
                <motion.div
                  layoutId="filter-active"
                  className="absolute inset-0 bg-[var(--accent)] -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((release, i) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <ReleaseCard release={release} showEmbed />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[var(--text-muted)] py-20"
          >
            Nenhum release encontrado.
          </motion.p>
        )}
      </div>
    </div>
  );
}
