"use client";

import { useEffect, useRef } from "react";

interface WaveDef {
  color: string;
  freq: number;
  amp: number;
  speed: number;
  yRatio: number;
  opacity: number;
  lineWidth: number;
  blur: number;
}

const WAVES: WaveDef[] = [
  { color: "#A020F0", freq: 0.007, amp: 50, speed: 0.35, yRatio: 0.18, opacity: 0.22, lineWidth: 1.5, blur: 14 },
  { color: "#00C8FF", freq: 0.010, amp: 38, speed: 0.55, yRatio: 0.35, opacity: 0.18, lineWidth: 1.2, blur: 12 },
  { color: "#FF00AA", freq: 0.006, amp: 60, speed: 0.22, yRatio: 0.52, opacity: 0.16, lineWidth: 1.5, blur: 14 },
  { color: "#FF1744", freq: 0.013, amp: 28, speed: 0.72, yRatio: 0.68, opacity: 0.13, lineWidth: 1.0, blur: 10 },
  { color: "#A020F0", freq: 0.009, amp: 44, speed: 0.30, yRatio: 0.82, opacity: 0.15, lineWidth: 1.2, blur: 12 },
  { color: "#00C8FF", freq: 0.005, amp: 65, speed: 0.14, yRatio: 0.94, opacity: 0.11, lineWidth: 1.0, blur: 10 },
];

interface Props {
  className?: string;
}

export default function AnimatedWaves({ className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    let raf: number;
    let time = 0;
    let lastT = 0;

    const resize = () => {
      canvas.width = parent?.offsetWidth ?? window.innerWidth;
      canvas.height = parent?.offsetHeight ?? window.innerHeight;
    };

    resize();

    const ro = new ResizeObserver(resize);
    if (parent) ro.observe(parent);

    const draw = (t: number) => {
      const dt = Math.min((t - lastT) / 1000, 0.05); // cap to avoid jumps
      lastT = t;
      time += dt;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      WAVES.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;
        ctx.globalAlpha = wave.opacity;
        ctx.shadowColor = wave.color;
        ctx.shadowBlur = wave.blur;

        const baseY = canvas.height * wave.yRatio;

        for (let x = 0; x <= canvas.width; x += 4) {
          const y =
            baseY +
            Math.sin(x * wave.freq + time * wave.speed) * wave.amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      });

      // Reset
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
