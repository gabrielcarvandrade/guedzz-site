"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "/images/gallery/pioneer-set.jpg",
    alt: "No Pioneer",
    accent: "var(--accent)",
    objectPosition: "top",
  },
  {
    src: "/images/gallery/party-night.jpg",
    alt: "Party Night",
    accent: "var(--neon-blue)",
    objectPosition: "center",
  },
  {
    src: "/images/gallery/neon-setup.jpg",
    alt: "Setup",
    accent: "var(--neon-pink)",
    objectPosition: "center",
  },
  {
    src: "/images/gallery/recording.jpg",
    alt: "Bastidores",
    accent: "var(--accent)",
    objectPosition: "center",
  },
  {
    src: "/images/gallery/portrait.jpg",
    alt: "GuedZZ",
    accent: "var(--neon-red)",
    objectPosition: "top",
  },
  {
    src: "/images/guedzz.jpg",
    alt: "GuedZZ",
    accent: "var(--neon-blue)",
    objectPosition: "top",
  },
];

export default function PhotoGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-5 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-[var(--accent)] text-xs font-semibold uppercase tracking-[0.3em] mb-2"
          style={{ textShadow: "var(--glow-purple)" }}
        >
          Galeria
        </p>
        <h2 className="text-3xl font-bold flex items-center gap-3">
          Momentos
          <span className="text-sm font-normal text-[var(--text-muted)] font-mono tracking-wide">
            — arraste →
          </span>
        </h2>
      </motion.div>

      <div
        ref={containerRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
      >
        <motion.div
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.08}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          className="flex gap-4 px-5 w-max"
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className="relative flex-shrink-0 w-64 md:w-80 aspect-[3/4] rounded-xl overflow-hidden border border-[var(--border)]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover pointer-events-none"
                style={{ objectPosition: photo.objectPosition }}
                draggable={false}
              />

              {/* Neon hover overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: `linear-gradient(to top, ${photo.accent}44 0%, transparent 55%)`,
                  boxShadow: `inset 0 0 40px ${photo.accent}22`,
                }}
              />

              {/* Caption on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none"
                initial={{ opacity: 0, y: 8 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p
                  className="text-xs text-white font-medium tracking-widest uppercase"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
                >
                  {photo.alt}
                </p>
              </motion.div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-6 h-6 border-t border-r rounded-tr-xl opacity-50"
                style={{ borderColor: photo.accent }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Edge fades */}
        <div
          className="absolute inset-y-0 left-0 w-16 pointer-events-none z-10"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-16 pointer-events-none z-10"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
        />
      </div>
    </section>
  );
}
