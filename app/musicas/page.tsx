"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock, Calendar, Disc3, Sparkles } from "lucide-react";
import PageBackground from "@/components/ui/PageBackground";
import PageHeader from "@/components/ui/PageHeader";

// SoundCloud profile URL
const SOUNDCLOUD_PROFILE = "guedz-228285479";

// Template releases (placeholders)
const templateReleases = [
  {
    id: 1,
    title: "Track Name",
    type: "Original Mix",
    genre: "Tech House",
    bpm: 126,
    date: "2024",
    cover: "/images/placeholder-cover.jpg",
  },
  {
    id: 2,
    title: "Track Name",
    type: "Remix",
    genre: "House",
    bpm: 124,
    date: "2024",
    cover: "/images/placeholder-cover.jpg",
  },
  {
    id: 3,
    title: "Track Name",
    type: "Edit",
    genre: "Deep House",
    bpm: 122,
    date: "2024",
    cover: "/images/placeholder-cover.jpg",
  },
  {
    id: 4,
    title: "Track Name",
    type: "Bootleg",
    genre: "Tech House",
    bpm: 128,
    date: "2023",
    cover: "/images/placeholder-cover.jpg",
  },
  {
    id: 5,
    title: "Track Name",
    type: "Original Mix",
    genre: "Minimal",
    bpm: 130,
    date: "2023",
    cover: "/images/placeholder-cover.jpg",
  },
  {
    id: 6,
    title: "Track Name",
    type: "Remix",
    genre: "Afro House",
    bpm: 120,
    date: "2023",
    cover: "/images/placeholder-cover.jpg",
  },
];

const filters = ["Todos", "Original Mix", "Remix", "Edit", "Bootleg"];

export default function MusicasPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredReleases = activeFilter === "Todos" 
    ? templateReleases 
    : templateReleases.filter(r => r.type === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <PageBackground variant="waves" intensity="low" />
      
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <PageHeader
          tag="Discografia"
          title="Musicas"
          description="Todos os remixes, edits e producoes originais."
        />

        {/* Ultimo Lancamento - Summer Feelings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/30">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              <span className="text-sm font-medium text-[var(--accent)]">Ultimo Lancamento</span>
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm overflow-hidden relative group">
            {/* Neon accent corners */}
            <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--accent)] to-transparent" />
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[var(--accent)] to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[var(--neon-blue)] to-transparent" />
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-[var(--neon-blue)] to-transparent" />
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 via-transparent to-[var(--neon-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Cover Art Placeholder */}
                <div className="w-full md:w-48 h-48 rounded-xl bg-gradient-to-br from-[var(--accent)]/30 via-[var(--surface)] to-[var(--neon-blue)]/30 flex items-center justify-center relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] animate-shimmer" />
                  <Disc3 className="w-16 h-16 text-[var(--accent)] animate-spin-slow" />
                </div>

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-medium rounded bg-[var(--accent)]/20 text-[var(--accent)]">
                      NEW
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">Tech House</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                    Summer Feelings
                  </h3>
                  
                  <p className="text-[var(--text-muted)] mb-4">
                    GuedZZ - Original Mix
                  </p>

                  <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-6">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>3:45</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>2024</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[var(--accent)]">126 BPM</span>
                    </div>
                  </div>

                  {/* SoundCloud Embed */}
                  <iframe
                    width="100%"
                    height="120"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${SOUNDCLOUD_PROFILE}/summer-feelings&color=%23a020f0&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[var(--accent)] text-black"
                  : "border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Releases Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredReleases.map((release, i) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm overflow-hidden hover:border-[var(--accent)] transition-all duration-300"
            >
              {/* Cover placeholder */}
              <div className="aspect-square bg-gradient-to-br from-[var(--surface)] to-[var(--background)] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Disc3 className="w-20 h-20 text-[var(--border)] group-hover:text-[var(--accent)] transition-colors group-hover:animate-spin-slow" />
                </div>
                
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--accent)] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-black ml-1" />
                  </div>
                </div>

                {/* Type badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 text-xs font-medium rounded bg-black/60 backdrop-blur-sm">
                    {release.type}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold mb-1 group-hover:text-[var(--accent)] transition-colors">
                  {release.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                  <span>{release.genre}</span>
                  <span>{release.bpm} BPM</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--text-muted)]">
            Mais tracks em breve...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
