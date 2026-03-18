import { useState, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/@#!%&";
const DURATION_MS = 500;
const INTERVAL_MS = 40;

export function useScramble(originalText: string) {
  const [displayText, setDisplayText] = useState(originalText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const trigger = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const resolvedCount = Math.floor(progress * originalText.length);

      setDisplayText(
        originalText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolvedCount) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (progress >= 1) {
        clearInterval(intervalRef.current!);
        setDisplayText(originalText);
      }
    }, INTERVAL_MS);
  }, [originalText]);

  return { displayText, trigger };
}
