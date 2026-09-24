"use client";

import Image from "next/image";
import { useTranslation } from "../providers/LanguageProvider";

const TEAM = [
  {
    name: "Andy Tchouta",
    role: "AWS SBG Leader",
    initials: "AT",
    gradient: "linear-gradient(135deg, #6a4cf5, #d44df0)",
    image: "/team/andy.jpg",
  },
  {
    name: "Ngoh Precious Fon",
    role: "AWS Co-SBG Lead",
    initials: "NF",
    gradient: "linear-gradient(135deg, #ff7a3d, #FF9900)",
    image: "/team/ngoh.png",
  },
  {
    name: "Ajichei Chazyloyang",
    role: "Event & Community Manager",
    initials: "AC",
    gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    image: "/team/ajichei.jpg",
  },
  {
    name: "Willy Steve Massoh",
    role: "Design & Communications Lead",
    initials: "WM",
    gradient: "linear-gradient(135deg, #d44df0, #9020b8)",
    image: "/team/steve.jpeg",
  },
  {
    name: "Arolle Aguekeng",
    role: "Technical Lead",
    initials: "AA",
    gradient: "linear-gradient(135deg, #AA2020, #FF5050)",
    image: "/team/arolle.png",
  },
  {
    name: "Elongo Sitambe Gildas",
    role: "IT & On-Site Support Lead",
    initials: "EG",
    gradient: "linear-gradient(135deg, #3030d4, #6a4cf5)",
    image: "/team/gildas.jpg",
  },
  {
    name: "Didier Kombou",
    role: "Design Team",
    initials: "DK",
    gradient: "linear-gradient(135deg, #888888, #444444)",
    image: "/team/didier.jpg",
  },
];

function AvatarPlaceholder({
  initials,
  gradient,
  size = 80,
}: {
  initials: string;
  gradient: string;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.3,
        fontWeight: 800,
        color: "white",
        fontFamily: "AmazonEmberDisplay, sans-serif",
        fontStyle: "italic",
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

export default function TeamSection() {
  const { t } = useTranslation();
  return (
    <section
      id="team"
      className="section-padding"
      style={{ backgroundColor: "#090909", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-12">
          <span className="eyebrow mb-4 block">{t("team.eyebrow")}</span>
          <h2 className="text-display-xl text-ink">
            {t("team.titleP1")}<br />{t("team.titleP2")}
          </h2>
          <p className="text-body-lg mt-4" style={{ color: "#999", maxWidth: "480px" }}>
            {t("team.desc")}
          </p>
        </div>

        {/* Team grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          }}
        >
          {TEAM.map((member) => (
            <div
              key={member.role}
              className="card-surface-1 group transition-all duration-300 hover:border-hairline flex flex-col items-center text-center"
              style={{ padding: "32px 24px", gap: "16px" }}
            >
              {member.image ? (
                <div className="relative" style={{ width: "112px", height: "112px", borderRadius: "50%", overflow: "hidden", display: "flex", flexShrink: 0, border: "2px solid #1a1a1a" }}>
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
              ) : (
                <AvatarPlaceholder initials={member.initials} gradient={member.gradient} />
              )}
              <div>
                <h3 className="text-headline text-ink" style={{ fontSize: "17px", marginBottom: "4px" }}>
                  {member.name}
                </h3>
                <p className="text-caption" style={{ color: "#666" }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-caption mt-8" style={{ color: "#444" }}>
          {t("team.footer")}
        </p>
      </div>
    </section>
  );
}
