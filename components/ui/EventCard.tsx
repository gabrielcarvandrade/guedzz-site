import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface Event {
  id: string;
  date: string;
  title: string;
  venue: string;
  city: string;
  ticketUrl: string;
  past: boolean;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const date = new Date(event.date);
  const day = date.toLocaleDateString("pt-BR", { day: "2-digit" });
  const month = date.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "").toUpperCase();
  const weekday = date.toLocaleDateString("pt-BR", { weekday: "long" });
  const time = date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

  return (
    <div
      className={`flex items-center gap-5 p-5 rounded-lg border border-[var(--border)] transition-colors duration-200 ${
        event.past
          ? "opacity-50"
          : "hover:border-[var(--accent)] hover:bg-[var(--surface)]"
      }`}
    >
      {/* Date block */}
      <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-md bg-[var(--surface)] border border-[var(--border)]">
        <span className="text-[var(--accent)] text-xs font-semibold tracking-widest leading-none">
          {month}
        </span>
        <span className="text-white text-2xl font-bold leading-tight">{day}</span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[var(--text-primary)] truncate">{event.title}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
          <span className="flex items-center gap-1 text-[var(--text-muted)] text-sm">
            <MapPin size={12} />
            {event.venue} — {event.city}
          </span>
          <span className="flex items-center gap-1 text-[var(--text-muted)] text-sm">
            <Calendar size={12} />
            {weekday.charAt(0).toUpperCase() + weekday.slice(1)}, {time}h
          </span>
        </div>
      </div>

      {/* CTA */}
      {!event.past && (
        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-md border border-[var(--accent)] text-[var(--accent)] text-sm font-medium hover:bg-[var(--accent)] hover:text-black transition-colors duration-200"
        >
          Ingressos
          <ExternalLink size={12} />
        </a>
      )}
    </div>
  );
}
