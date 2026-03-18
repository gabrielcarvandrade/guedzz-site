"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Music } from "lucide-react";
import SoundcloudIcon from "./SoundcloudIcon";

interface Release {
  id: string;
  title: string;
  type: string;
  year: number;
  coverImage: string;
  spotifyUrl: string;
  soundcloudUrl: string;
  description: string;
}

interface ReleaseCardProps {
  release: Release;
  showEmbed?: boolean;
}

const typeLabel: Record<string, string> = {
  album: "Álbum",
  ep: "EP",
  single: "Single",
};

// Extract SoundCloud track/playlist ID for embedding
function getSoundcloudEmbedUrl(url: string) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23A020F0&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`;
}

export default function ReleaseCard({ release, showEmbed = false }: ReleaseCardProps) {
  const [embedOpen, setEmbedOpen] = useState(false);

  return (
    <div className="group rounded-lg overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[var(--accent)]/50 transition-all duration-300"
         style={{ transition: "border-color 0.3s, box-shadow 0.3s" }}
         onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 30px rgba(160,32,240,0.1), inset 0 0 30px rgba(160,32,240,0.03)")}
         onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
    >
      {/* Cover image */}
      <div className="relative aspect-square overflow-hidden bg-[var(--border)]">
        <Image
          src={release.coverImage}
          alt={release.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        {/* Fallback cover */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--surface)] to-[#1a0a2e]">
          <Music size={48} className="text-[var(--accent)] opacity-30" />
        </div>

        {/* Play overlay */}
        {showEmbed && (
          <button
            onClick={() => setEmbedOpen(!embedOpen)}
            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "var(--accent)", boxShadow: "var(--glow-purple)" }}
            >
              <Play size={20} className="text-white ml-1" />
            </div>
          </button>
        )}
      </div>

      {/* SoundCloud embed */}
      {showEmbed && embedOpen && (
        <div className="w-full" style={{ height: "80px" }}>
          <iframe
            src={getSoundcloudEmbedUrl(release.soundcloudUrl)}
            title={release.title}
            allow="autoplay"
            className="w-full h-full"
            scrolling="no"
            frameBorder="0"
          />
        </div>
      )}

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--accent)", textShadow: "var(--glow-purple)" }}
          >
            {typeLabel[release.type] || release.type}
          </span>
          <span className="text-xs text-[var(--text-muted)]">{release.year}</span>
        </div>
        <h3 className="font-semibold text-[var(--text-primary)]">{release.title}</h3>
        <p className="text-[var(--text-muted)] text-sm mt-1 line-clamp-2">
          {release.description}
        </p>

        {/* Links */}
        <div className="flex gap-2 mt-3">
          <a
            href={release.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
            style={{ background: "#1DB954", color: "#000" }}
          >
            Spotify
          </a>
          <a
            href={release.soundcloudUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
            style={{ background: "#FF5500", color: "#fff" }}
          >
            <SoundcloudIcon size={12} />
            SoundCloud
          </a>
        </div>
      </div>
    </div>
  );
}
