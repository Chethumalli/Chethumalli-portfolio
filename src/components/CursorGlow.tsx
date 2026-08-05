"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX - 20}px, ${
          e.clientY - 20
        }px)`;
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full bg-blue-500/20 blur-xl transition-transform duration-75"
    />
  );
}