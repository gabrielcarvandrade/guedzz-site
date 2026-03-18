import Link from "next/link";
import { Instagram, Music2 } from "lucide-react";
import SoundcloudIcon from "@/components/ui/SoundcloudIcon";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/guedzz.wav/", icon: Instagram, isCustom: false },
  { label: "SoundCloud", href: "https://soundcloud.com/guedz-228285479", icon: null, isCustom: true },
  { label: "Spotify", href: "https://open.spotify.com/user/bernardoguedes796?si=0QTF3IMoRQya52C1IjBS6A", icon: Music2, isCustom: false },
];

const links = [
  { href: "/musicas", label: "Músicas" },
  { href: "/agenda", label: "Agenda" },
  { href: "/bio", label: "Bio" },
  { href: "/loja", label: "Loja" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p
              className="font-black text-xl text-white"
              style={{ textShadow: "0 0 20px rgba(160,32,240,0.5)" }}
            >
              GuedZZ
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-2 leading-relaxed">
              House • Tech • Minimal. Art in motion. Soul in expansion.
            </p>
            <p className="text-[var(--text-muted)] text-xs mt-1">Lavras, MG</p>
            <div className="flex gap-3 mt-4">
              {socials.map(({ label, href, icon: Icon, isCustom }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors duration-200"
                >
                  {isCustom ? <SoundcloudIcon size={15} /> : Icon && <Icon size={15} />}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
              Navegação
            </p>
            <ul className="space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
              Contato
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Para shows, entrevistas e parcerias:
            </p>
            <a
              href="mailto:contato@guedzz.com.br"
              className="text-sm text-[var(--accent)] hover:underline mt-1 block"
            >
              contato@guedzz.com.br
            </a>
            <a
              href="https://www.instagram.com/guedzz.wav/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] hover:underline mt-1 block transition-colors"
            >
              @guedzz.wav
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-2 text-[var(--text-muted)] text-xs">
          <p>© {new Date().getFullYear()} GuedZZ. Todos os direitos reservados.</p>
          <p className="italic opacity-60">"Music is the answer"</p>
        </div>
      </div>
    </footer>
  );
}
