"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import EventCard from "@/components/ui/EventCard";
import eventsData from "@/data/events.json";

export default function AgendaPage() {
  const [showPast, setShowPast] = useState(false);

  const upcoming = eventsData.filter((e) => !e.past);
  const past = eventsData.filter((e) => e.past);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Shows
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agenda</h1>
          <p className="text-[var(--text-muted)] text-lg">
            Próximas apresentações — garanta seu ingresso com antecedência.
          </p>
        </motion.div>

        {/* Upcoming events */}
        <div className="space-y-3 mb-16">
          {upcoming.length > 0 ? (
            upcoming.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <EventCard event={event} />
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 text-[var(--text-muted)]">
              <p>Sem eventos agendados no momento.</p>
              <p className="text-sm mt-2">Siga nas redes sociais para novidades!</p>
            </div>
          )}
        </div>

        {/* Past events */}
        {past.length > 0 && (
          <div>
            <button
              onClick={() => setShowPast(!showPast)}
              className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium mb-5"
            >
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${showPast ? "rotate-180" : ""}`}
              />
              {showPast ? "Ocultar" : "Ver"} eventos passados ({past.length})
            </button>

            {showPast && (
              <div className="space-y-3">
                {past.map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <EventCard event={event} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-center"
        >
          <h2 className="text-xl font-bold mb-2">Quer contratar para um evento?</h2>
          <p className="text-[var(--text-muted)] text-sm mb-5 max-w-md mx-auto">
            Entre em contato com nosso time de booking para datas, valores e rider técnico.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="mailto:booking@artista.com.br"
              className="px-5 py-2.5 rounded-md bg-[var(--accent)] text-black text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              E-mail para booking
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md border border-[var(--border)] text-[var(--text-muted)] text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
