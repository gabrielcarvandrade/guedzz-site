"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Instagram, Music2, MapPin, Headphones } from "lucide-react";
import SoundcloudIcon from "@/components/ui/SoundcloudIcon";
import Button from "@/components/ui/Button";

const stats = [
  { label: "Gênero", value: "House" },
  { label: "Sub-gênero", value: "Tech • Minimal" },
  { label: "Cidade", value: "Lavras, MG" },
  { label: "Estilo", value: "Art in Motion" },
];

const skills = [
  "Tech House",
  "Minimal Techno",
  "Mixing",
  "Live Sets",
  "Produção Musical",
  "Sound Design",
];

const neonColors = [
  { label: "purple", color: "var(--accent)", glow: "var(--glow-purple)" },
  { label: "blue", color: "var(--neon-blue)", glow: "var(--glow-blue)" },
  { label: "pink", color: "var(--neon-pink)", glow: "var(--glow-pink)" },
];

export default function BioPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-[0.3em] mb-3"
             style={{ textShadow: "var(--glow-purple)" }}>
            Press Kit
          </p>
          <h1
            className="text-5xl md:text-6xl font-black mb-3"
            style={{ textShadow: "0 0 40px rgba(160,32,240,0.25)" }}
          >
            GuedZZ
          </h1>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-[var(--text-muted)] text-sm">
            <span className="flex items-center gap-1.5">
              <Headphones size={13} className="text-[var(--accent)]" />
              House • Tech • Minimal
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[var(--neon-blue)]" />
              Lavras, MG
            </span>
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div
              className="aspect-[3/4] rounded-xl overflow-hidden bg-[var(--surface)] border border-[var(--border)] relative"
              style={{ boxShadow: "0 0 60px rgba(160,32,240,0.12)" }}
            >
              <Image
                src="/images/guedzz.jpg"
                alt="GuedZZ"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle neon gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(160,32,240,0.15)] via-transparent to-transparent pointer-events-none" />
              {/* Neon corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)] rounded-tl-xl opacity-70" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--neon-blue)] rounded-br-xl opacity-70" />
            </div>

            {/* Actions */}
            <div className="mt-5 space-y-3">
              <Button variant="outline" className="w-full gap-2" size="md">
                <Download size={14} />
                Baixar Press Kit (PDF)
              </Button>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/guedzz.wav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md border border-[var(--border)] text-sm text-[var(--text-muted)] hover:text-[var(--neon-pink)] hover:border-[var(--neon-pink)] transition-colors"
                >
                  <Instagram size={14} /> Instagram
                </a>
                <a
                  href="https://open.spotify.com/user/bernardoguedes796?si=0QTF3IMoRQya52C1IjBS6A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md border border-[var(--border)] text-sm text-[var(--text-muted)] hover:text-[#1DB954] hover:border-[#1DB954] transition-colors"
                >
                  <Music2 size={14} /> Spotify
                </a>
                <a
                  href="https://soundcloud.com/guedz-228285479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md border border-[var(--border)] text-sm text-[var(--text-muted)] hover:text-[#FF5500] hover:border-[#FF5500] transition-colors"
                >
                  <SoundcloudIcon size={14} /> SoundCloud
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Phrases em destaque */}
            <div className="space-y-2">
              {[
                { text: "Music is the answer 🎶", color: "var(--accent)", glow: "var(--glow-purple)" },
                { text: "Art in motion.", color: "var(--neon-blue)", glow: "var(--glow-blue)" },
                { text: "Soul in expansion.", color: "var(--neon-pink)", glow: "var(--glow-pink)" },
              ].map(({ text, color, glow }) => (
                <p
                  key={text}
                  className="text-lg font-semibold italic"
                  style={{ color, textShadow: glow }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Bio text */}
            <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
              <p>
                Bernardo Guedes, conhecido artisticamente como <span className="text-white font-semibold">GuedZZ</span>, é um DJ e produtor nascido em Lavras, MG. Sua sonoridade transita entre o House, Tech e Minimal — gêneros que combinam grooves hipnóticos, texturas orgânicas e uma energia que conecta corpo e mente na pista.
              </p>
              <p>
                Com uma abordagem que vai além do simples entretenimento, GuedZZ enxerga a música como expressão pura: cada set é uma narrativa, cada track é uma janela para um estado interior. A arte não é decoração — ela está em movimento, respirando junto com quem ouve.
              </p>
              <p>
                Referenciado em sons contemporâneos da cena eletrônica global, mas com uma voz própria que cresce a cada apresentação, GuedZZ constrói uma trajetória baseada em autenticidade e expansão constante.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(({ label, value }, i) => {
                const colors = ["var(--accent)", "var(--neon-blue)", "var(--neon-pink)", "var(--neon-red)"];
                return (
                  <div
                    key={label}
                    className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-center"
                  >
                    <p
                      className="text-sm font-bold"
                      style={{ color: colors[i], textShadow: `0 0 10px ${colors[i]}66` }}
                    >
                      {value}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{label}</p>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div>
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
                Especialidades
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => {
                  const colors = [
                    "rgba(160,32,240,0.15)",
                    "rgba(0,200,255,0.1)",
                    "rgba(255,0,170,0.1)",
                    "rgba(255,23,68,0.1)",
                    "rgba(160,32,240,0.15)",
                    "rgba(0,200,255,0.1)",
                  ];
                  const borders = [
                    "rgba(160,32,240,0.4)",
                    "rgba(0,200,255,0.3)",
                    "rgba(255,0,170,0.3)",
                    "rgba(255,23,68,0.3)",
                    "rgba(160,32,240,0.4)",
                    "rgba(0,200,255,0.3)",
                  ];
                  return (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm text-[var(--text-muted)]"
                      style={{
                        background: colors[i],
                        border: `1px solid ${borders[i]}`,
                      }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Booking CTA */}
            <div
              className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
              style={{ boxShadow: "0 0 30px rgba(160,32,240,0.06)" }}
            >
              <p className="font-semibold mb-1">Booking & Contratações</p>
              <p className="text-[var(--text-muted)] text-sm mb-4">
                Para shows, festivais, entrevistas e parcerias:
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a href="mailto:contato@guedzz.com.br">
                  <Button variant="primary" size="sm">
                    E-mail para booking
                  </Button>
                </a>
                <a
                  href="https://www.instagram.com/guedzz.wav/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Instagram
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
