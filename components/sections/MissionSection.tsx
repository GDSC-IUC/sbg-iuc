"use client";

import { useTranslation } from "../providers/LanguageProvider";

export default function MissionSection() {
  const { t } = useTranslation();

  const CARDS = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#FF9900" fillOpacity="0.15" />
          <path d="M8 20L12 12L16 18L20 14L24 20" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="12" r="2" fill="#FF9900" />
        </svg>
      ),
      tag: t("mission.cards.labs.tag"),
      title: t("mission.cards.labs.title"),
      description: t("mission.cards.labs.desc"),
      highlights: [t("mission.cards.labs.h1"), t("mission.cards.labs.h2"), t("mission.cards.labs.h3")],
      accent: "#FF9900",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#6a4cf5" fillOpacity="0.15" />
          <circle cx="10" cy="16" r="3" stroke="#6a4cf5" strokeWidth="1.8" />
          <circle cx="22" cy="10" r="3" stroke="#6a4cf5" strokeWidth="1.8" />
          <circle cx="22" cy="22" r="3" stroke="#6a4cf5" strokeWidth="1.8" />
          <line x1="13" y1="15" x2="19" y2="11" stroke="#6a4cf5" strokeWidth="1.5" />
          <line x1="13" y1="17" x2="19" y2="21" stroke="#6a4cf5" strokeWidth="1.5" />
        </svg>
      ),
      tag: t("mission.cards.network.tag"),
      title: t("mission.cards.network.title"),
      description: t("mission.cards.network.desc"),
      highlights: [t("mission.cards.network.h1"), t("mission.cards.network.h2"), t("mission.cards.network.h3")],
      accent: "#6a4cf5",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#22c55e" fillOpacity="0.12" />
          <path d="M16 8L18.5 13L24 13.5L20 17.5L21 23L16 20L11 23L12 17.5L8 13.5L13.5 13L16 8Z" stroke="#22c55e" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      ),
      tag: t("mission.cards.career.tag"),
      title: t("mission.cards.career.title"),
      description: t("mission.cards.career.desc"),
      highlights: [t("mission.cards.career.h1"), t("mission.cards.career.h2"), t("mission.cards.career.h3")],
      accent: "#22c55e",
    },
  ];

  return (
    <section
      id="mission"
      className="section-padding"
      style={{ backgroundColor: "#090909" }}
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-16">
          <span className="eyebrow mb-4 block">{t("mission.eyebrow")}</span>
          <h2 className="text-display-xl text-ink" style={{ maxWidth: "700px" }}>
            {t("mission.titleP1")}{" "}
            <span className="text-gradient-violet">{t("mission.titleP2")}</span>{" "}
            {t("mission.titleP3")}
          </h2>
        </div>

        {/* Cards grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="card-surface-1 group transition-all duration-300 hover:border-hairline"
              style={{ padding: "28px" }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                {card.icon}
                <span
                  className="eyebrow"
                  style={{ color: card.accent }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-headline text-ink mb-3"
                style={{ fontSize: "20px" }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-body" style={{ color: "#888", lineHeight: "1.65", marginBottom: "20px" }}>
                {card.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-2">
                {card.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2">
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: card.accent }}
                    />
                    <span className="text-caption" style={{ color: "#999999" }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
