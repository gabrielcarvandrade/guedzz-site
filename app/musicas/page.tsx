"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink, Headphones } from "lucide-react";
import PageBackground from "@/components/ui/PageBackground";
import PageHeader from "@/components/ui/PageHeader";

// SoundCloud profile URL
const SOUNDCLOUD_PROFILE = "guedz-228285479";

export default function MusicasPage() {
  const [activeTab, setActiveTab] = useState<"tracks" | "likes">("tracks");

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <PageBackground variant="waves" intensity="low" />
      
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <PageHeader
          tag="Discografia"
          title="Musicas"
          description="Todos os remixes, edits e producoes - direto do SoundCloud."
        />

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {[
            { label: "Tracks", value: "20+", icon: Play },
            { label: "Remixes", value: "15+", icon: Headphones },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm relative overflow-hidden group hover:border-[var(--accent)] transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <stat.icon className="w-5 h-5 text-[var(--accent)] mb-2" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
            </div>
          ))}
          
          {/* SoundCloud Link */}
          <a
            href={`https://soundcloud.com/${SOUNDCLOUD_PROFILE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 p-5 rounded-xl border border-[var(--border)] bg-gradient-to-r from-[#ff5500]/10 to-[#ff7700]/10 backdrop-blur-sm flex items-center justify-between group hover:border-[#ff5500] transition-all"
          >
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-[#ff5500]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.054-.049-.1-.084-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.014.057.045.094.09.094s.089-.037.099-.094l.19-1.308-.19-1.332c-.01-.057-.044-.094-.078-.094zm1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.104.106.104.061 0 .12-.044.12-.104l.24-2.458-.24-2.563c0-.06-.059-.104-.121-.104zm.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.138l.225-2.544-.225-2.64c-.015-.075-.06-.135-.166-.135zm.96-.091c-.089 0-.165.075-.165.165l-.195 2.731.195 2.609c0 .09.075.165.165.165.09 0 .165-.075.18-.165l.21-2.609-.225-2.731c-.015-.09-.09-.165-.165-.165zm1.02-.045c-.105 0-.195.09-.21.195l-.165 2.775.18 2.67c.015.105.09.195.21.195.105 0 .195-.09.21-.195l.195-2.67-.21-2.775c-.015-.105-.09-.195-.21-.195zm1.065-.12c-.121 0-.225.105-.225.225l-.165 2.895.165 2.715c0 .12.105.225.225.225.121 0 .225-.105.225-.225l.195-2.715-.195-2.895c0-.12-.105-.225-.225-.225zm1.065.165c-.135 0-.24.105-.255.24l-.15 2.73.15 2.73c.015.135.12.24.255.24.135 0 .24-.105.255-.24l.165-2.73-.165-2.73c-.015-.135-.12-.24-.255-.24zm1.11-.404c-.149 0-.27.12-.27.27l-.15 2.865.15 2.775c0 .15.121.27.27.27.15 0 .27-.12.285-.27l.165-2.775-.165-2.865c-.015-.15-.135-.27-.285-.27zm1.095-.569c-.165 0-.3.135-.315.3l-.135 3.135.135 2.82c.015.165.15.3.315.3.165 0 .3-.135.315-.3l.15-2.82-.15-3.135c-.015-.165-.15-.3-.315-.3zm1.155.075c-.18 0-.33.15-.33.33l-.135 3.03.12 2.85c0 .18.15.33.33.33s.33-.15.345-.33l.135-2.85-.135-3.03c-.015-.18-.165-.33-.345-.33zm1.155.27c-.195 0-.36.165-.36.36l-.12 2.76.12 2.865c0 .195.165.36.36.36.195 0 .36-.165.375-.36l.12-2.865-.12-2.76c-.015-.195-.18-.36-.375-.36zm1.155.33c-.21 0-.375.165-.39.375l-.105 2.43.105 2.865c.015.21.18.375.39.375.21 0 .375-.165.39-.375l.12-2.865-.12-2.43c-.015-.21-.18-.375-.39-.375zm1.23.21c-.225 0-.405.18-.42.405l-.09 2.22.105 2.865c.015.225.195.405.42.405.225 0 .405-.18.42-.405l.105-2.865-.105-2.22c-.015-.225-.195-.405-.42-.405zm7.02.855c-.345 0-.675.06-.99.165-.21-2.37-2.19-4.215-4.62-4.215-.585 0-1.155.105-1.68.3-.195.075-.255.15-.255.3v8.505c0 .15.12.285.27.3h7.275c1.605 0 2.895-1.305 2.895-2.895 0-1.59-1.29-2.46-2.895-2.46z"/>
              </svg>
              <div>
                <div className="font-semibold">Seguir no SoundCloud</div>
                <div className="text-sm text-[var(--text-muted)]">@guedzz</div>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[#ff5500] transition-colors" />
          </a>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-2 mb-8"
        >
          {[
            { value: "tracks" as const, label: "Todas as Tracks" },
            { value: "likes" as const, label: "Curtidas" },
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === value
                  ? "bg-[var(--accent)] text-black"
                  : "border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Main SoundCloud Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm overflow-hidden relative"
        >
          {/* Neon accent corners */}
          <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--accent)] to-transparent" />
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[var(--accent)] to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[var(--neon-blue)] to-transparent" />
            <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-[var(--neon-blue)] to-transparent" />
          </div>

          {/* Header */}
          <div className="p-5 border-b border-[var(--border)] flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-sm font-medium">
              {activeTab === "tracks" ? "Todas as Producoes" : "Tracks Curtidas"}
            </span>
            
            {/* Audio visualizer */}
            <div className="flex items-end gap-0.5 h-4 ml-auto">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 bg-[var(--accent)] rounded-full"
                  animate={{
                    height: [4, 12 + Math.random() * 8, 4],
                  }}
                  transition={{
                    duration: 0.4 + Math.random() * 0.3,
                    repeat: Infinity,
                    delay: i * 0.05,
                  }}
                />
              ))}
            </div>
          </div>

          {/* SoundCloud Embed */}
          <div className="p-4">
            {activeTab === "tracks" ? (
              <iframe
                width="100%"
                height="600"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${SOUNDCLOUD_PROFILE}&color=%23a020f0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false`}
                className="rounded-lg"
              />
            ) : (
              <iframe
                width="100%"
                height="600"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${SOUNDCLOUD_PROFILE}/likes&color=%23a020f0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false`}
                className="rounded-lg"
              />
            )}
          </div>
        </motion.div>

        {/* Individual Track Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--accent)]" />
            Destaques
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Carlinhos Brown - Maria Caipirinha (GuedZZ Remix)",
                description: "Remix oficial com toques de tech house",
                trackUrl: "carlinhos-brown-maria-caipirinha-guedzz-remix",
              },
              {
                title: "Latest Release",
                description: "Confira a producao mais recente",
                trackUrl: "",
              },
            ].map((track, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm hover:border-[var(--accent)] transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">{track.description}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center group-hover:bg-[var(--accent)] transition-all">
                    <Play className="w-4 h-4 text-[var(--accent)] group-hover:text-black transition-colors" />
                  </div>
                </div>
                
                {track.trackUrl && (
                  <iframe
                    width="100%"
                    height="120"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${SOUNDCLOUD_PROFILE}/${track.trackUrl}&color=%23a020f0&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
                    className="rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
