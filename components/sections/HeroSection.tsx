"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "../providers/LanguageProvider";

const TARGET_DATE = new Date("2026-10-31T09:00:00+01:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

// Cloud SVG for floating particles
function CloudIcon({ size = 120, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size * 0.62}
      viewBox="0 0 120 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M95 55H25C14 55 5 46 5 35C5 25.5 11.5 17.5 20.5 15C22 8 28.5 3 36.5 3C38.5 3 40.5 3.5 42 4.5C46 1 51.5 0 57 1C68 2.5 76.5 11 76.5 21.5V22C78 21.5 79.5 21.5 81 21.5C91.5 21.5 100 30 100 40.5C100 48.5 95 55 95 55Z"
        fill="white"
        fillOpacity="0.15"
      />
    </svg>
  );
}

export default function HeroSection() {
  const { t, locale } = useTranslation();
  const [time, setTime] = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onScroll = () => {
      const y = window.scrollY;
      const particles = hero.querySelectorAll<HTMLElement>(".cloud-particle");
      particles.forEach((p, i) => {
        const factor = 0.1 + i * 0.05;
        p.style.transform = `translateY(${y * factor}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative overflow-hidden"
      style={{
        minHeight: "75svh",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Hero background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(106,76,245,0.22) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 85% 30%, rgba(212,77,240,0.12) 0%, transparent 50%)",
        }}
      />

      {/* Floating cloud particles */}
      <CloudIcon
        size={200}
        style={{
          position: "absolute",
          top: "8%",
          right: "5%",
          opacity: 0.05,
          animation: "float-slow 9s ease-in-out infinite",
        }}
      />
      <CloudIcon
        size={130}
        style={{
          position: "absolute",
          top: "25%",
          left: "3%",
          opacity: 0.04,
          animation: "float-medium 7s ease-in-out infinite 1s",
        }}
      />
      <CloudIcon
        size={90}
        style={{
          position: "absolute",
          bottom: "22%",
          right: "20%",
          opacity: 0.035,
          animation: "float-slow 11s ease-in-out infinite 2s",
        }}
      />
      <CloudIcon
        size={160}
        style={{
          position: "absolute",
          bottom: "35%",
          left: "12%",
          opacity: 0.03,
          animation: "float-medium 8s ease-in-out infinite 3s",
        }}
      />

      {/* AWS dot-grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="container-main relative z-10 py-14 md:py-20 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="eyebrow">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: "#FF9900", boxShadow: "0 0 8px #FF9900" }}
            />
            {t("hero.eyebrow")}
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="text-display-xl text-ink mb-8"
          style={{ 
            maxWidth: "1200px",
            fontSize: locale === "fr" ? "clamp(24px, 5.5vw, 68px)" : undefined
          }}
        >
          {t("hero.titleP1")}{" "}
          <span className="text-gradient-aws">{t("hero.titleP2")}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-display-md"
          style={{
            color: "#999999",
            maxWidth: "700px",
            marginBottom: "32px",
          }}
        >
          {t("hero.subtitle")}
        </p>

        {/* Body paragraph */}
        <p
          className="text-body-lg"
          style={{
            color: "#999999",
            maxWidth: "560px",
            marginBottom: "40px",
            lineHeight: "1.6",
          }}
        >
          {t("hero.descriptionP1")}{" "}
          <span className="text-ink font-bold">{t("hero.descriptionAndy")}</span> {t("hero.descriptionP2")}{" "}
          <span className="text-ink font-bold">AWS Student Builder Group IUC</span>,
          {t("hero.descriptionP3")}
        </p>

        {/* CTA group */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a
            href="https://ly.reckot.com/aws-scd-iuc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "14px 28px", fontSize: "15px" }}
          >
            {t("hero.ctaPrimary")}
          </a>
          <a
            href="#speakers"
            className="btn-secondary"
            style={{ padding: "14px 28px", fontSize: "15px" }}
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>

        {/* Countdown */}
        <div className="flex flex-col items-center mt-12">
          <p className="eyebrow mb-6">{t("hero.countdownOpening")}</p>
          <div className="flex items-start gap-6 sm:gap-10">
            {[
              { value: mounted ? pad(time.days) : "--", label: t("hero.countdownDays") },
              { value: mounted ? pad(time.hours) : "--", label: t("hero.countdownHours") },
              { value: mounted ? pad(time.minutes) : "--", label: t("hero.countdownMinutes") },
              { value: mounted ? pad(time.seconds) : "--", label: t("hero.countdownSeconds") },
            ].map((unit, i) => (
              <div key={unit.label} className="countdown-unit" style={{ animationDelay: `${i * 0.1}s` }}>
                <div
                  className="countdown-value"
                  style={{
                    background: "linear-gradient(180deg, #ffffff 55%, rgba(255,255,255,0.35) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {unit.value}
                </div>
                <div className="countdown-label">{unit.label}</div>
                {i < 3 && (
                  <div
                    className="absolute"
                    style={{
                      display: "none",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #050505)",
        }}
      />
    </section>
  );
}
