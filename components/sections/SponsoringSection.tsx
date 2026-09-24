"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "../providers/LanguageProvider";

const PACKS = [
  {
    id: "starter",
    codename: "Lambda Tier",
    price: "100 000",
    currency: "FCFA",
    gradient: null,
    bg: "#141414",
    border: "#262626",
    badge: { label: "STARTER", color: "#999999", bg: "rgba(153,153,153,0.1)" },
    featured: false,
  },
  {
    id: "booster",
    codename: "EC2 Tier",
    price: "350 000",
    currency: "FCFA",
    gradient: "linear-gradient(135deg, #ff7a3d 0%, #f05010 80%)",
    bg: null,
    border: "transparent",
    badge: { label: "POPULAIRE", color: "#ffffff", bg: "rgba(255,255,255,0.2)" },
    featured: false,
    accentIcon: "⚡",
  },
  {
    id: "propulseur",
    codename: "Bedrock Tier",
    price: "600 000",
    currency: "FCFA",
    gradient: "linear-gradient(135deg, #6a4cf5 0%, #3820c8 80%)",
    bg: null,
    border: "transparent",
    badge: { label: "PREMIUM", color: "#ffffff", bg: "rgba(255,255,255,0.2)" },
    featured: true,
    accentIcon: "🚀",
  },
  {
    id: "nature",
    codename: "In-Kind Sponsor",
    price: "Nous parler",
    currency: "",
    gradient: null,
    bg: "#1c1c1c",
    border: "#262626",
    badge: { label: "IN-KIND", color: "#FF9900", bg: "rgba(255,153,0,0.1)" },
    featured: false,
    accentIcon: "🤝",
  },
];

export default function SponsoringSection() {
  const { t } = useTranslation();
  
  return (
    <section
      id="sponsoring"
      className="section-padding"
      style={{ backgroundColor: "#090909", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-4">
          <span className="eyebrow mb-4 block">{t("sponsors.eyebrow")}</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-display-xl text-ink">
              {t("sponsors.titleP1")}<br />{t("sponsors.titleP2")}
            </h2>
            <p className="text-body-lg" style={{ color: "#999", maxWidth: "320px" }}>
              {t("sponsors.desc")}
            </p>
          </div>
        </div>

        {/* Packs grid */}
        <div
          className="grid gap-4 mt-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {PACKS.map((pack, index) => (
            <div
              key={pack.id}
              className="relative overflow-hidden flex flex-col"
              style={{
                borderRadius: "20px",
                background: pack.gradient ?? pack.bg ?? "#141414",
                border: `1px solid ${pack.border}`,
                padding: "28px",
              }}
            >
              {/* Noise on gradient cards */}
              {pack.gradient && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.07'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "repeat",
                    mixBlendMode: "overlay",
                  }}
                />
              )}

              {/* Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="sponsor-badge"
                    style={{
                      backgroundColor: pack.badge.bg,
                      color: pack.badge.color,
                    }}
                  >
                    {pack.badge.label}
                  </span>
                  {pack.accentIcon && <span className="text-2xl">{pack.accentIcon}</span>}
                </div>

                <h3
                  className="text-headline"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    marginBottom: "2px",
                  }}
                >
                  {t(`sponsors.packs.${index}.name`)}
                </h3>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    color: pack.gradient ? "rgba(255,255,255,0.55)" : "#555",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  {pack.codename}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-display"
                    style={{
                      fontSize: pack.price === "Nous parler" ? "28px" : "36px",
                      fontWeight: 800,
                      fontStyle: "italic",
                      color: "white",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {pack.price === "Nous parler" ? t("sponsors.speakBtn") : pack.price}
                  </span>
                  {pack.currency && (
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "13px",
                        color: pack.gradient ? "rgba(255,255,255,0.6)" : "#666",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {pack.currency}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p
                className="text-body relative z-10"
                style={{
                  color: pack.gradient ? "rgba(255,255,255,0.78)" : "#888",
                  lineHeight: "1.60",
                  marginBottom: "20px",
                }}
              >
                {t(`sponsors.packs.${index}.description`)}
              </p>

              {/* Divider */}
              <div
                className="relative z-10 mb-4"
                style={{
                  borderTop: `1px solid ${pack.gradient ? "rgba(255,255,255,0.2)" : "#1a1a1a"}`,
                }}
              />

              {/* Perks */}
              <ul className="relative z-10 flex flex-col gap-2 mb-6 flex-1">
                {(t(`sponsors.packs.${index}.perks`) as unknown as string[]).map((perk: string) => (
                  <li key={perk} className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 shrink-0"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7.5"
                        fill={pack.gradient ? "rgba(255,255,255,0.15)" : "#1c1c1c"}
                        stroke={pack.gradient ? "rgba(255,255,255,0.2)" : "#262626"}
                      />
                      <path
                        d="M5 8L7 10L11 6"
                        stroke={pack.gradient ? "white" : "#22c55e"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className="text-caption"
                      style={{
                        color: pack.gradient ? "rgba(255,255,255,0.75)" : "#888",
                        lineHeight: "1.5",
                      }}
                    >
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`mailto:awscloudclubiuc@gmail.com?subject=Intérêt Sponsorship`}
                className="relative z-10"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 20px",
                  borderRadius: "100px",
                  fontFamily: "AmazonEmberDuospace, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "-0.14px",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  background: pack.gradient ? "rgba(255,255,255,1)" : "#ffffff",
                  color: pack.gradient ? "#000" : "#000",
                  cursor: "pointer",
                }}
              >
                {pack.price === "Nous parler" ? (
                  <span className="flex items-center gap-1">{t("sponsors.speakBtn")} <ArrowRight className="w-3.5 h-3.5" /></span>
                ) : (
                  <span className="flex items-center gap-1">{t("sponsors.sponsorBtn")} <ArrowRight className="w-3.5 h-3.5" /></span>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-caption mt-8 text-center" style={{ color: "#444" }}>
          {t("sponsors.footerText")}
          <a href="mailto:awscloudclubiuc@gmail.com" className="link-accent ml-1">
            awscloudclubiuc@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
