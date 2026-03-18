"use client";

import { useEffect, useRef } from "react";

const COLORS = ["var(--accent)", "var(--neon-blue)", "var(--neon-pink)"];

export default function ClickRipple() {
  const indexRef = useRef(0);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const color = COLORS[indexRef.current % COLORS.length];
      indexRef.current++;

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        border: 1.5px solid ${color};
        box-shadow: 0 0 8px ${color}, 0 0 20px ${color};
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9997;
        animation: ripple-expand 0.6s ease-out forwards;
      `;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 620);
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return null;
}
