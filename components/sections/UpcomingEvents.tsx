"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EventCard from "@/components/ui/EventCard";

interface Event {
  id: string;
  date: string;
  title: string;
  venue: string;
  city: string;
  ticketUrl: string;
  past: boolean;
}

interface UpcomingEventsProps {
  events: Event[];
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  const upcoming = events.filter((e) => !e.past).slice(0, 3);

  return (
    <section className="bg-[var(--surface)] py-20 relative">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-[0.3em] mb-2">
              Shows
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Proximos Eventos</h2>
          </div>
          <Link
            href="/agenda"
            className="hidden sm:flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            Ver agenda completa <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="space-y-3">
          {upcoming.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        <Link
          href="/agenda"
          className="sm:hidden mt-6 flex items-center justify-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
        >
          Ver agenda completa <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
