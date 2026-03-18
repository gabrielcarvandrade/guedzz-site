"use client";

import { motion } from "framer-motion";

interface WaveformProps {
  variant?: "divider" | "corner";
  color?: string;
  width?: number;
  height?: number;
  frequency?: number;
  amplitude?: number;
}

export default function Waveform({
  variant = "divider",
  color = "var(--accent)",
  width = 800,
  height = 60,
  frequency = 4,
  amplitude = 18,
}: WaveformProps) {
  const steps = 200;
  const points = Array.from({ length: steps + 1 }, (_, i) => {
    const x = (i / steps) * width;
    const y = height / 2 + Math.sin((i / steps) * Math.PI * 2 * frequency) * amplitude;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");

  const pathLength = width * 1.2;

  if (variant === "corner") {
    return (
      <div className="absolute bottom-8 right-8 opacity-20 pointer-events-none">
        <motion.svg
          width={160}
          height={40}
          viewBox={`0 0 ${width} ${height}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <defs>
            <filter id="wf-glow-corner">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <motion.polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="2"
            filter="url(#wf-glow-corner)"
            initial={{ strokeDasharray: pathLength, strokeDashoffset: pathLength }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden py-2 pointer-events-none" aria-hidden>
      <motion.svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <defs>
          <filter id="wf-glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="wf-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor={color} stopOpacity="0" />
            <stop offset="15%"  stopColor={color} stopOpacity="1" />
            <stop offset="85%"  stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.polyline
          points={points}
          fill="none"
          stroke="url(#wf-grad)"
          strokeWidth="1.5"
          filter="url(#wf-glow)"
          initial={{ strokeDasharray: pathLength, strokeDashoffset: pathLength }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}
