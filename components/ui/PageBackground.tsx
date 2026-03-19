"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  variant?: "waves" | "grid" | "particles";
  intensity?: "low" | "medium" | "high";
}

export default function PageBackground({ variant = "waves", intensity = "low" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const opacityMap = { low: 0.08, medium: 0.15, high: 0.25 };
  const baseOpacity = opacityMap[intensity];

  useEffect(() => {
    if (variant !== "waves") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let time = 0;
    let lastT = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const waves = [
      { color: "#A020F0", freq: 0.004, amp: 30, speed: 0.2, yRatio: 0.3, opacity: baseOpacity },
      { color: "#00C8FF", freq: 0.006, amp: 25, speed: 0.3, yRatio: 0.5, opacity: baseOpacity * 0.8 },
      { color: "#FF00AA", freq: 0.003, amp: 35, speed: 0.15, yRatio: 0.7, opacity: baseOpacity * 0.6 },
    ];

    const draw = (t: number) => {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;
      time += dt;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = wave.opacity;
        ctx.shadowColor = wave.color;
        ctx.shadowBlur = 8;

        const baseY = canvas.height * wave.yRatio;

        for (let x = 0; x <= canvas.width; x += 6) {
          const y = baseY + Math.sin(x * wave.freq + time * wave.speed) * wave.amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      });

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [variant, baseOpacity]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Blobs neon */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: baseOpacity * 1.5,
          top: "-10%",
          right: "-10%",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--neon-blue) 0%, transparent 70%)",
          opacity: baseOpacity,
          bottom: "10%",
          left: "-5%",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--neon-pink) 0%, transparent 70%)",
          opacity: baseOpacity * 0.8,
          top: "40%",
          left: "50%",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid sutil */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(160, 32, 240, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(160, 32, 240, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Canvas para waves */}
      {variant === "waves" && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 1 }}
        />
      )}
    </div>
  );
}
