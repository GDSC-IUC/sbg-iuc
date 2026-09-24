"use client";

import { useTranslation } from "../providers/LanguageProvider";

export default function AtmosphereTiles() {
  const { t } = useTranslation();

  return (
    <section
      id="atmosphere"
      className="section-padding"
      style={{ backgroundColor: "#090909" }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left column — Violet card (tall) + stats row */}
          <div className="flex flex-col gap-4">
            {/* Main spotlight card — violet */}
            <div
              className="card-spotlight-violet relative overflow-hidden"
              style={{ padding: "40px 36px", minHeight: "360px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              {/* Noise texture overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "repeat",
                  mixBlendMode: "overlay",
                }}
              />
              {/* Glow orb */}
              <div
                className="absolute"
                style={{
                  top: "-40px",
                  right: "-40px",
                  width: "220px",
                  height: "220px",
                  borderRadius: "100%",
                  background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div className="relative z-10">
                <span
                  className="font-mono text-white"
                  style={{ fontSize: "11px", letterSpacing: "0.14em", opacity: 0.6, textTransform: "uppercase" }}
                >
                  01
                </span>
                <h3 className="text-display-lg text-ink mt-3" style={{ lineHeight: "0.95" }}>
                  {t("atmosphere.card1.titleP1")}<br />{t("atmosphere.card1.titleP2")}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-body-lg text-white" style={{ opacity: 0.82, lineHeight: "1.55", marginBottom: "24px", maxWidth: "360px" }}>
                  {t("atmosphere.card1.desc")}
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="font-display text-white" style={{ fontSize: "36px", fontWeight: 800, fontStyle: "italic", letterSpacing: "-0.04em" }}>
                      2+
                    </div>
                    <div className="text-caption text-white" style={{ opacity: 0.6 }}>{t("atmosphere.card1.stat1Title")}</div>
                  </div>
                  <div>
                    <div className="font-display text-white" style={{ fontSize: "36px", fontWeight: 800, fontStyle: "italic", letterSpacing: "-0.04em" }}>
                      500+
                    </div>
                    <div className="text-caption text-white" style={{ opacity: 0.6 }}>{t("atmosphere.card1.stat2Title")}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small stat card */}
            <div
              className="card-surface-2"
              style={{ padding: "24px", display: "flex", alignItems: "center", gap: "20px" }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #6a4cf5, #4f35d4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 3L13.5 8.5L20 9.5L15.5 14L16.5 20.5L11 17.5L5.5 20.5L6.5 14L2 9.5L8.5 8.5L11 3Z" fill="white" />
                </svg>
              </div>
              <div>
                <div className="text-headline text-ink" style={{ fontSize: "16px" }}>{t("atmosphere.card2.title")}</div>
                <div className="text-caption" style={{ color: "#999" }}>{t("atmosphere.card2.desc")}</div>
              </div>
            </div>
          </div>

          {/* Right column — Magenta tall card */}
          <div className="flex flex-col gap-4">
            {/* Small info card */}
            <div
              className="card-surface-1"
              style={{ padding: "24px", display: "flex", alignItems: "center", gap: "20px" }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #d44df0, #b030d4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="8.5" stroke="white" strokeWidth="1.8" />
                  <path d="M7 11.5L10 14L15 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-headline text-ink" style={{ fontSize: "16px" }}>{t("atmosphere.card3.title")}</div>
                <div className="text-caption" style={{ color: "#999" }}>{t("atmosphere.card3.desc")}</div>
              </div>
            </div>

            {/* Main spotlight card — magenta */}
            <div
              className="card-spotlight-magenta relative overflow-hidden flex-1"
              style={{ padding: "40px 36px", minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              {/* Noise */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "repeat",
                  mixBlendMode: "overlay",
                }}
              />
              {/* Glow orb bottom-left */}
              <div
                className="absolute"
                style={{
                  bottom: "-50px",
                  left: "-50px",
                  width: "250px",
                  height: "250px",
                  borderRadius: "100%",
                  background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div className="relative z-10">
                <span
                  className="font-mono text-white"
                  style={{ fontSize: "11px", letterSpacing: "0.14em", opacity: 0.6, textTransform: "uppercase" }}
                >
                  02
                </span>
                <h3 className="text-display-lg text-ink mt-3" style={{ lineHeight: "0.95" }}>
                  {t("atmosphere.card4.titleP1")}<br />{t("atmosphere.card4.titleP2")}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-body-lg text-white" style={{ opacity: 0.82, lineHeight: "1.55", marginBottom: "24px", maxWidth: "360px" }}>
                  {t("atmosphere.card4.desc")}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    borderRadius: "100px",
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#fff" }}
                  />
                  <span className="text-caption text-white">{t("atmosphere.card4.location")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

