"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "../providers/LanguageProvider";

export default function SpeakersTalkSection() {
  const { t } = useTranslation();
  return (
    <section
      id="speakers"
      className="section-padding"
      style={{ borderTop: "1px solid #1a1a1a", backgroundColor: "#090909" }}
    >
      <div className="container-main">
        <div
          className="card-spotlight-orange relative overflow-hidden"
          style={{ padding: "48px 40px" }}
        >
          {/* Noise overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              mixBlendMode: "overlay",
            }}
          />
          {/* Glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-60px",
              right: "-60px",
              width: "300px",
              height: "300px",
              borderRadius: "100%",
              background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
            }}
          />

          <div
            className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div style={{ maxWidth: "560px" }}>
              <span className="font-mono text-white text-xs uppercase tracking-widest opacity-60 block mb-4">
                {t("speakers.eyebrow")}
              </span>
              <h2 className="text-display-lg text-white" style={{ marginBottom: "16px" }}>
                {t("speakers.titleP1")}<br />{t("speakers.titleP2")}
              </h2>
              <p className="text-body-lg text-white" style={{ opacity: 0.82, lineHeight: "1.60" }}>
                {t("speakers.desc")}
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  t("speakers.bullets.0"),
                  t("speakers.bullets.1"),
                  t("speakers.bullets.2"),
                ].map((b) => (
                  <span
                    key={b}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "6px 14px",
                      borderRadius: "100px",
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="https://forms.gle/1KwnJWoy5jM3L97B9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "16px 32px", fontSize: "15px", backgroundColor: "white", color: "black" }}
              >
                <span className="flex items-center gap-1">{t("speakers.btnTalk")} <ArrowRight className="w-4 h-4 ml-1" /></span>
              </a>
              <a
                href="https://forms.gle/4mabCrhG5cRfVCdF9"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 32px",
                  borderRadius: "100px",
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "15px",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
              >
                {t("speakers.btnVolunteer")}
              </a>
              <div className="text-white text-xs text-center font-mono mt-1" style={{ opacity: 0.65, lineHeight: "1.6" }}>
                <div>{t("speakers.deadline1")} <strong>16 Octobre 2026</strong></div>
                <div>{t("speakers.deadline2")} <strong>22 Octobre 2026</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
