"use client";

import { useTranslation } from "../providers/LanguageProvider";

const SESSIONS = [
  {
    time: "08:00",
    duration: "60 min",
    type: "ACCUEIL",
    title: "Enregistrement & Networking matinal",
    speaker: "Équipe SBG IUC",
    tags: ["Welcome", "Networking"],
    typeColor: "#999999",
  },
  {
    time: "09:00",
    duration: "30 min",
    type: "KEYNOTE",
    title: "Learn. Build. Deploy. : Vision & Mission",
    speaker: "Andy Tchouta",
    tags: ["Keynote", "AWS"],
    typeColor: "#FF9900",
  },
  {
    time: "09:30",
    duration: "45 min",
    type: "TALK",
    title: "Construire avec Amazon Bedrock : IA générative pour développeurs",
    speaker: "Speaker TBA",
    tags: ["IA", "Bedrock", "GenAI"],
    typeColor: "#6a4cf5",
  },
  {
    time: "10:15",
    duration: "90 min",
    type: "LAB",
    title: "Hands-on : Déploiement d'un agent IA avec Amazon Bedrock",
    speaker: "Équipe Labs AWS",
    tags: ["Hands-on", "Bedrock", "Lambda"],
    typeColor: "#22c55e",
  },
  {
    time: "11:45",
    duration: "15 min",
    type: "PAUSE",
    title: "Pause café & Networking",
    speaker: "—",
    tags: ["Break"],
    typeColor: "#555",
  },
  {
    time: "12:00",
    duration: "45 min",
    type: "TALK",
    title: "Architecture Serverless en production : Patterns et anti-patterns",
    speaker: "Speaker TBA",
    tags: ["Serverless", "Architecture", "Lambda"],
    typeColor: "#6a4cf5",
  },
  {
    time: "12:45",
    duration: "75 min",
    type: "DÉJEUNER",
    title: "Déjeuner & Stands Sponsors",
    speaker: "—",
    tags: ["Break", "Sponsors"],
    typeColor: "#555",
  },
  {
    time: "14:00",
    duration: "45 min",
    type: "TALK",
    title: "DevSecOps sur AWS : Pipelines CI/CD sécurisés avec CodePipeline",
    speaker: "Speaker TBA",
    tags: ["DevSecOps", "CI/CD", "Sécurité"],
    typeColor: "#ff7a3d",
  },
  {
    time: "14:45",
    duration: "90 min",
    type: "LAB",
    title: "Hands-on : Pipeline DevSecOps complet avec AWS CodePipeline",
    speaker: "Équipe Labs AWS",
    tags: ["Hands-on", "DevOps", "CodePipeline"],
    typeColor: "#22c55e",
  },
  {
    time: "16:15",
    duration: "30 min",
    type: "TABLE RONDE",
    title: "Carrières Cloud en Afrique : Parcours & Opportunités",
    speaker: "Panel Professionels",
    tags: ["Carrière", "Panel", "Certifications"],
    typeColor: "#d44df0",
  },
  {
    time: "16:45",
    duration: "30 min",
    type: "CLÔTURE",
    title: "Remise des certificats & Photo de groupe",
    speaker: "Toute l'équipe",
    tags: ["Certificats", "Clôture"],
    typeColor: "#FF9900",
  },
];

const TYPE_ICONS: Record<string, string> = {
  "ACCUEIL": "👋",
  "KEYNOTE": "🎤",
  "TALK": "🗣",
  "LAB": "🧪",
  "PAUSE": "☕",
  "DÉJEUNER": "🍽",
  "TABLE RONDE": "🔵",
  "CLÔTURE": "🏆",
};

export default function ProgrammeSection() {
  const { t } = useTranslation();
  return (
    <section
      id="programme"
      className="section-padding"
      style={{ backgroundColor: "#090909" }}
    >
      <div className="container-main">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="eyebrow mb-4 block">{t("programme.eyebrow")}</span>
            <h2 className="text-display-xl text-ink">
              {t("programme.titleP1")}<br />{t("programme.titleP2")}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "TALK", color: "#6a4cf5" },
              { label: "LAB", color: "#22c55e" },
              { label: "KEYNOTE", color: "#FF9900" },
              { label: "PANEL", color: "#d44df0" },
            ].map((t) => (
              <span key={t.label} className="tag-chip" style={{ borderColor: t.color + "33", color: t.color }}>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Session list */}
        <div>
          {SESSIONS.map((session, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row md:items-start gap-3 md:gap-5 py-5"
              style={{ borderBottom: "1px solid #1a1a1a" }}
            >
              {/* Mobile top meta: Time & Emoji */}
              <div className="flex items-center md:items-start gap-3 md:w-[110px] shrink-0">
                {/* Emoji */}
                <div className="text-lg md:mt-0.5 w-[24px] text-center shrink-0">
                  {TYPE_ICONS[session.type] || "📌"}
                </div>
                {/* Time */}
                <div className="flex items-baseline gap-2 md:block">
                  <div className="font-mono text-ink-muted" style={{ fontSize: "13px", letterSpacing: "0.04em" }}>
                    {session.time}
                  </div>
                  <div className="font-mono text-[#444] md:mt-0.5" style={{ fontSize: "11px" }}>
                    <span className="md:hidden">• </span>{session.duration}
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 pl-[36px] md:pl-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="font-mono"
                    style={{ fontSize: "10px", letterSpacing: "0.1em", color: session.typeColor, textTransform: "uppercase" }}
                  >
                    {session.type}
                  </span>
                </div>
                <h3 className="text-headline text-ink group-hover:text-ink-muted transition-colors" style={{ fontSize: "16px", marginBottom: "6px" }}>
                  {session.title}
                </h3>
                <p className="text-caption" style={{ color: "#666" }}>
                  {session.speaker}
                </p>
                
                {/* Tags for mobile (Inline under content) */}
                <div className="flex flex-wrap gap-1.5 mt-3 md:hidden">
                  {session.tags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Tags for desktop (Right aligned column) */}
              <div className="hidden md:flex flex-wrap gap-1.5 justify-end w-[180px] shrink-0">
                {session.tags.map((tag) => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-caption mt-8" style={{ color: "#555" }}>
          {t("programme.note")}
        </p>
      </div>

    </section>
  );
}
