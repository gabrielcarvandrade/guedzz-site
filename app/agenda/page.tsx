"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import EventCard from "@/components/ui/EventCard";
import PageBackground from "@/components/ui/PageBackground";
import PageHeader from "@/components/ui/PageHeader";
import eventsData from "@/data/events.json";

export default function AgendaPage() {
  const [showPast, setShowPast] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  const upcoming = eventsData.filter((e) => !e.past);
  const past = eventsData.filter((e) => e.past);
  const nextEvent = upcoming[0];

  // Countdown timer
  useEffect(() => {
    if (!nextEvent) return;
    
    const targetDate = new Date(nextEvent.date).getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [nextEvent]);

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      <PageBackground variant="waves" intensity="low" />
      
      <div className="max-w-4xl mx-auto px-5 relative z-10">
        <PageHeader
          tag="Shows"
          title="Agenda"
          description="Proximas apresentacoes - garanta seu ingresso com antecedencia."
        />

        {/* Next Event Countdown */}
        {nextEvent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 p-6 md:p-8 rounded-xl border border-[var(--accent)]/30 bg-gradient-to-br from-[var(--surface)] to-[var(--background)] relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--accent)] rounded-full blur-[100px] opacity-20" />
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--accent)] to-transparent" />
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[var(--accent)] to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[var(--neon-blue)] to-transparent" />
              <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-[var(--neon-blue)] to-transparent" />
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[var(--neon-red)] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[var(--accent)]">Proximo Evento</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{nextEvent.name}</h3>
            
            <div className="flex flex-wrap gap-4 text-[var(--text-muted)] text-sm mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[var(--accent)]" />
                {nextEvent.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[var(--neon-pink)]" />
                {nextEvent.location}
              </span>
            </div>
            
            {/* Countdown boxes */}
            <div className="grid grid-cols-4 gap-3 max-w-md">
              {[
                { value: countdown.days, label: "Dias" },
                { value: countdown.hours, label: "Horas" },
                { value: countdown.mins, label: "Min" },
                { value: countdown.secs, label: "Seg" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center p-3 rounded-lg bg-[var(--background)] border border-[var(--border)]"
                >
                  <div 
                    className="text-2xl md:text-3xl font-bold font-mono"
                    style={{ textShadow: "0 0 20px var(--accent)" }}
                  >
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Timeline Events */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent)] via-[var(--neon-blue)] to-[var(--border)]" />
          
          <div className="space-y-4 pl-8">
            {upcoming.length > 0 ? (
              upcoming.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-4 w-4 h-4 rounded-full bg-[var(--accent)] border-2 border-[var(--background)]" 
                       style={{ boxShadow: "0 0 10px var(--accent)" }} />
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
        </div>

        {/* Past events */}
        {past.length > 0 && (
          <div className="mt-12">
            <button
              onClick={() => setShowPast(!showPast)}
              className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-sm font-medium mb-5 group"
            >
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 group-hover:text-[var(--accent)] ${showPast ? "rotate-180" : ""}`}
              />
              {showPast ? "Ocultar" : "Ver"} eventos passados ({past.length})
            </button>

            {showPast && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="relative pl-8"
              >
                {/* Faded timeline */}
                <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[var(--border)] opacity-50" />
                
                <div className="space-y-3">
                  {past.map((event, i) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="relative"
                    >
                      <div className="absolute -left-8 top-4 w-4 h-4 rounded-full bg-[var(--border)] border-2 border-[var(--background)]" />
                      <EventCard event={event} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm text-center relative overflow-hidden"
        >
          {/* Decorative lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-[var(--neon-blue)] to-transparent" />
          </div>
          
          <h2 className="text-2xl font-bold mb-2">Quer contratar para um evento?</h2>
          <p className="text-[var(--text-muted)] text-sm mb-6 max-w-md mx-auto">
            Entre em contato com nosso time de booking para datas, valores e rider tecnico.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="mailto:booking@artista.com.br"
              className="px-6 py-3 rounded-lg bg-[var(--accent)] text-black text-sm font-semibold hover:bg-[var(--accent-hover)] transition-all hover:shadow-[0_0_20px_rgba(160,32,240,0.4)]"
            >
              E-mail para booking
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text-muted)] text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:shadow-[0_0_15px_rgba(160,32,240,0.2)]"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
