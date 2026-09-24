"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const TARGET_DATE = new Date("2026-10-31T09:00:00+01:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function CountdownBanner() {
  const [time, setTime] = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted || !time) return null;

  return (
    <div
      className="relative overflow-hidden z-50"
      style={{
        background: "linear-gradient(90deg, #6a4cf5 0%, #d44df0 35%, #ff7a3d 70%, #FF9900 100%)",
        padding: "10px 24px",
      }}
    >
      {/* Animated shimmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
        }}
      />
      <div className="container-main flex items-center justify-center gap-4 relative z-10">
        <span className="font-mono text-white text-xs uppercase tracking-widest opacity-80 hidden sm:block">
          🗓 31 oct. 2026 · Campus IUC Denver, Douala
        </span>
        <span className="text-white opacity-40 hidden sm:block">·</span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-white text-xs uppercase tracking-widest opacity-80">
            Compte à rebours
          </span>
          <span className="font-mono text-white font-bold text-sm tracking-tight">
            {String(time.days).padStart(2, "0")}j{" "}
            {String(time.hours).padStart(2, "0")}h{" "}
            {String(time.minutes).padStart(2, "0")}m{" "}
            <span
              className="inline-block min-w-[2.5ch] text-center"
              style={{ transition: "color 0.3s" }}
            >
              {String(time.seconds).padStart(2, "0")}s
            </span>
          </span>
        </div>
        <span className="text-white opacity-40 hidden sm:block">·</span>
        <a
          href="#register"
          className="hidden sm:inline-flex items-center gap-1 text-white text-xs font-bold uppercase tracking-wider underline underline-offset-2 hover:no-underline transition-all"
        >
          Réserver ma place <ArrowRight className="w-3.5 h-3.5 inline-block" />
        </a>
      </div>
    </div>
  );
}
