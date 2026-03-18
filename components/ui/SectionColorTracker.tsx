"use client";

import { useEffect } from "react";

const SECTION_COLORS: Record<string, string> = {
  "section-hero":     "#A020F0",
  "section-music":    "#00C8FF",
  "section-releases": "#00C8FF",
  "section-events":   "#FF00AA",
  "section-products": "#FF1744",
  "section-gallery":  "#FF00AA",
};

export default function SectionColorTracker() {
  useEffect(() => {
    document.documentElement.style.setProperty("--cursor-section-color", "#A020F0");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const color = SECTION_COLORS[entry.target.id] ?? "#A020F0";
            document.documentElement.style.setProperty("--cursor-section-color", color);
          }
        });
      },
      { threshold: 0.25 }
    );

    Object.keys(SECTION_COLORS).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
