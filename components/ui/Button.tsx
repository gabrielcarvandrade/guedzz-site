"use client";

import { ButtonHTMLAttributes, forwardRef, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const MAGNETIC_RADIUS = 80;
const MAX_OFFSET = 8;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-md";

    const variants = {
      primary:
        "bg-[var(--accent)] text-black hover:bg-[var(--accent-hover)] active:scale-95",
      outline:
        "border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black active:scale-95",
      ghost:
        "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)]",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm gap-1.5",
      md: "px-5 py-2.5 text-sm gap-2",
      lg: "px-7 py-3.5 text-base gap-2",
    };

    const magnetRef = useRef<HTMLDivElement>(null);
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const x = useSpring(rawX, { stiffness: 200, damping: 20 });
    const y = useSpring(rawY, { stiffness: 200, damping: 20 });

    useEffect(() => {
      if (variant !== "primary") return;

      const handleMouseMove = (e: MouseEvent) => {
        const el = magnetRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAGNETIC_RADIUS) {
          const force = (MAGNETIC_RADIUS - dist) / MAGNETIC_RADIUS;
          rawX.set((dx / MAGNETIC_RADIUS) * MAX_OFFSET * force);
          rawY.set((dy / MAGNETIC_RADIUS) * MAX_OFFSET * force);
        } else {
          rawX.set(0);
          rawY.set(0);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [variant, rawX, rawY]);

    const buttonEl = (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );

    if (variant === "primary") {
      return (
        <motion.div style={{ x, y }} ref={magnetRef} className="inline-flex">
          {buttonEl}
        </motion.div>
      );
    }

    return buttonEl;
  }
);

Button.displayName = "Button";
export default Button;
