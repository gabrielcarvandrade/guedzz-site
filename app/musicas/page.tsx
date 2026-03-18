"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ReleaseCard from "@/components/ui/ReleaseCard";
import releasesData from "@/data/releases.json";

const filters = [
  { value: "all", label: "Todos" },
  { value: "album", label: "Álbuns" },
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
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Discografia
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Músicas</h1>
          <p className="text-[var(--text-muted)] text-lg max-w-xl">
            Álbuns, EPs e singles — toda a produção musical do artista em um só lugar.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 mb-10 flex-wrap"
        >
          {filters.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === value
                  ? "bg-[var(--accent)] text-black"
                  : "border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filtered.map((release, i) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ReleaseCard release={release} showEmbed />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--text-muted)] py-20">
            Nenhum release encontrado.
          </p>
        )}
      </div>
    </div>
  );
}
