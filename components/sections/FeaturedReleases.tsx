"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReleaseCard from "@/components/ui/ReleaseCard";

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

interface FeaturedReleasesProps {
  releases: Release[];
}

export default function FeaturedReleases({ releases }: FeaturedReleasesProps) {
  return (
    <section className="max-w-6xl mx-auto px-5 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-[0.3em] mb-2">
            Discografia
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Ultimos Releases</h2>
        </div>
        <Link
          href="/musicas"
          className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
        >
          Ver todos <ArrowRight size={14} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {releases.map((release, i) => (
          <motion.div
            key={release.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ReleaseCard release={release} showEmbed />
          </motion.div>
        ))}
      </div>

      <Link
        href="/musicas"
        className="sm:hidden mt-6 flex items-center justify-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
      >
        Ver todos <ArrowRight size={14} />
      </Link>
    </section>
  );
}
