"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const TRAIL_LENGTH = 10;

function RgbCursor() {
  const hue = useRef(0);
  const frame = useRef(0);

  useEffect(() => {
    let raf: number;
    const loop = () => {
      frame.current++;
      if (frame.current % 2 === 0) {
        hue.current = (hue.current + 2) % 360;
        const color = `hsl(${hue.current},100%,50%)`;
        const stroke = `hsl(${(hue.current + 180) % 360},100%,20%)`;
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M4 2L4 20L8.5 15.5L12 22L14.5 20.5L11 14L17.5 14Z' fill='${color}' stroke='${stroke}' stroke-width='1.2'/></svg>`;
        document.documentElement.style.cursor = `url("data:image/svg+xml,${encodeURIComponent(svg)}") 4 2, auto`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      document.documentElement.style.cursor = "";
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}

export default function CustomCursor() {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");
  const [isTouch, setIsTouch] = useState<boolean | null>(null);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const mouse = useRef({ x: -300, y: -300 });
  const ring = useRef({ x: -300, y: -300 });
  const hover = useRef(false);
  const history = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -300, y: -300 }))
  );

  useEffect(() => {
    if (isTouch === null || isTouch || isStudio) return;

    document.documentElement.classList.add("hide-cursor");

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const isInteractive = (el: Element | null) =>
      !!el?.closest("a, button, [role='button'], input, textarea, select, label");

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) hover.current = true;
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) hover.current = false;
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    let raf: number;

    const loop = () => {
      const { x, y } = mouse.current;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      }

      const lerp = hover.current ? 0.50 : 0.38;
      ring.current.x += (x - ring.current.x) * lerp;
      ring.current.y += (y - ring.current.y) * lerp;

      if (ringRef.current) {
        const size = hover.current ? 54 : 32;
        ringRef.current.style.transform = `translate(${ring.current.x - size / 2}px, ${ring.current.y - size / 2}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
      }

      history.current = [{ x, y }, ...history.current.slice(0, TRAIL_LENGTH - 1)];
      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const p = history.current[i];
        const size = Math.max(1.5, 5 - i * 0.4);
        el.style.transform = `translate(${p.x - size / 2}px, ${p.y - size / 2}px)`;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        el.style.opacity = String(Math.max(0, 0.55 - i * 0.055));
      });

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("hide-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [isTouch, isStudio]);

  if (isTouch === null || isTouch) return null;
  if (isStudio) return <RgbCursor />;

  return (
    <>
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          className="cursor-trail fixed top-0 left-0 rounded-full pointer-events-none"
          style={{ zIndex: 9996 - i }}
        />
      ))}

      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none z-[9999]"
        style={{
          background: "#fff",
          boxShadow: "0 0 6px var(--cursor-section-color, var(--accent)), 0 0 14px var(--cursor-section-color, var(--accent)), 0 0 28px color-mix(in srgb, var(--cursor-section-color, var(--accent)) 60%, transparent)",
        }}
      />

      <div
        ref={ringRef}
        className="rgb-ring fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          width: 32,
          height: 32,
          border: "1.5px solid",
          transition: "width 0.22s ease, height 0.22s ease",
        }}
      />
    </>
  );
}
