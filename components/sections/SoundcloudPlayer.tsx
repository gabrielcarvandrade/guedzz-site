"use client";

import { motion } from "framer-motion";
import SoundcloudIcon from "@/components/ui/SoundcloudIcon";

export default function SoundcloudPlayer() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p
                className="text-[var(--accent)] text-xs font-semibold uppercase tracking-[0.3em] mb-2"
                style={{ textShadow: "var(--glow-purple)" }}
              >
                Ouça agora
              </p>
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                <span style={{ color: "#FF5500" }}><SoundcloudIcon size={28} /></span>
                SoundCloud
              </h2>
            </div>
            <a
              href="https://soundcloud.com/guedz-228285479"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors hidden sm:block"
            >
              Ver perfil →
            </a>
          </div>

          {/* Embed */}
          <div
            className="rounded-xl overflow-hidden border border-[var(--border)]"
            style={{ boxShadow: "0 0 50px rgba(160,32,240,0.1), 0 0 100px rgba(160,32,240,0.05)" }}
          >
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/guedz-228285479&color=%23A020F0&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              title="GuedZZ no SoundCloud"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
