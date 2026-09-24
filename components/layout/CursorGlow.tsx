"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!glowRef.current) return;
      // We update the DOM style directly to avoid React re-renders on every mouse move
      glowRef.current.style.background = `radial-gradient(600px circle at ${ev.clientX}px ${ev.clientY}px, rgba(255, 255, 255, 0.035), transparent 40%)`;
    };

    window.addEventListener("mousemove", updateMousePosition);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ mixBlendMode: "screen" }}
      aria-hidden="true"
    />
  );
}
