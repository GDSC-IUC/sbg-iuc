"use client";

import { useState } from "react";
import { useTranslation } from "../providers/LanguageProvider";

interface SessionItem {
  time: string;
  duration: string;
  category: "GENERAL" | "KEYNOTE" | "TALK" | "SPONSOR" | "GAMES";
  typeColor: string;
  icon: string;
  type: {
    fr: string;
    en: string;
  };
  title: {
    fr: string;
    en: string;
  };
  speaker: {
    fr: string;
    en: string;
  };
  tags: {
    fr: string[];
    en: string[];
  };
}

const SESSIONS: SessionItem[] = [
  // 1. Opening & Speeches
  {
    time: "08:00",
    duration: "45 min",
    category: "GENERAL",
    typeColor: "#999999",
    icon: "👋",
    type: {
      fr: "ACCUEIL",
      en: "CHECK-IN",
    },
    title: {
      fr: "Accueil, Enregistrement & Installation des participants",
      en: "Welcome, Registration & Attendee Check-in",
    },
    speaker: {
      fr: "Équipe AWS SBG IUC",
      en: "AWS SBG IUC Team",
    },
    tags: {
      fr: ["Accueil", "Check-in", "Networking"],
      en: ["Welcome", "Check-in", "Networking"],
    },
  },
  {
    time: "08:45",
    duration: "15 min",
    category: "GENERAL",
    typeColor: "#999999",
    icon: "🏛️",
    type: {
      fr: "ALLOCUTION",
      en: "WELCOME ADDRESS",
    },
    title: {
      fr: "Mot de bienvenue de l'Administration de l'IUC",
      en: "Welcome Address by the IUC Administration",
    },
    speaker: {
      fr: "Administration de l'IUC — Institut Universitaire de la Côte",
      en: "IUC Administration — Institut Universitaire de la Côte",
    },
    tags: {
      fr: ["IUC", "Allocution", "Campus Denver"],
      en: ["IUC", "Address", "Denver Campus"],
    },
  },
  {
    time: "09:00",
    duration: "15 min",
    category: "GENERAL",
    typeColor: "#999999",
    icon: "🚀",
    type: {
      fr: "OUVERTURE",
      en: "OPENING",
    },
    title: {
      fr: "Mot d'ouverture du SBG Leader",
      en: "Opening Address by SBG Leader",
    },
    speaker: {
      fr: "Andy Tchouta — AWS SBG Leader IUC",
      en: "Andy Tchouta — AWS SBG Leader IUC",
    },
    tags: {
      fr: ["Vision", "AWS SBG", "Communauté"],
      en: ["Vision", "AWS SBG", "Community"],
    },
  },

  // 2. Keynote
  {
    time: "09:15",
    duration: "35 min",
    category: "KEYNOTE",
    typeColor: "#FF9900",
    icon: "🌟",
    type: {
      fr: "KEYNOTE",
      en: "KEYNOTE",
    },
    title: {
      fr: "Keynote d'ouverture — L'impact de l'éducation et des communautés AWS",
      en: "Opening Keynote — The Impact of AWS Education & Communities",
    },
    speaker: {
      fr: "Lisa Bagley — Lead - Content, Education & Research, AWS Community Groups",
      en: "Lisa Bagley — Lead - Content, Education & Research, AWS Community Groups",
    },
    tags: {
      fr: ["Keynote", "AWS Education", "Global Community"],
      en: ["Keynote", "AWS Education", "Global Community"],
    },
  },

  // 3. Block 1 — Community & Cloud Foundations
  {
    time: "09:50",
    duration: "25 min",
    category: "TALK",
    typeColor: "#6a4cf5",
    icon: "🗣️",
    type: {
      fr: "TALK",
      en: "TALK",
    },
    title: {
      fr: "Build a Student Community: The AWS SBG Model",
      en: "Build a Student Community: The AWS SBG Model",
    },
    speaker: {
      fr: "Cabrel Domfang — Tech Evangelist",
      en: "Cabrel Domfang — Tech Evangelist",
    },
    tags: {
      fr: ["Community", "AWS SBG", "Leadership"],
      en: ["Community", "AWS SBG", "Leadership"],
    },
  },
  {
    time: "10:15",
    duration: "30 min",
    category: "TALK",
    typeColor: "#6a4cf5",
    icon: "☁️",
    type: {
      fr: "TALK",
      en: "TALK",
    },
    title: {
      fr: "AWS Cloud Engineering: A Beginner’s Guide",
      en: "AWS Cloud Engineering: A Beginner’s Guide",
    },
    speaker: {
      fr: "Ngu Helon — Software Engineer - Solutions Architect",
      en: "Ngu Helon — Software Engineer - Solutions Architect",
    },
    tags: {
      fr: ["Cloud Engineering", "AWS", "Solutions Architect"],
      en: ["Cloud Engineering", "AWS", "Solutions Architect"],
    },
  },
  {
    time: "10:45",
    duration: "25 min",
    category: "TALK",
    typeColor: "#6a4cf5",
    icon: "🤝",
    type: {
      fr: "TALK",
      en: "TALK",
    },
    title: {
      fr: "Contribution in the AWS Community",
      en: "Contribution in the AWS Community",
    },
    speaker: {
      fr: "Ngoh Precious — AWS Community Builder",
      en: "Ngoh Precious — AWS Community Builder",
    },
    tags: {
      fr: ["Community Builder", "Open Source", "Contribution"],
      en: ["Community Builder", "Open Source", "Contribution"],
    },
  },

  // 4. Block 2 — Data, AI & Amazon Bedrock
  {
    time: "11:10",
    duration: "30 min",
    category: "TALK",
    typeColor: "#6a4cf5",
    icon: "📊",
    type: {
      fr: "TALK",
      en: "TALK",
    },
    title: {
      fr: "Understanding the Power of Data – Guide to Data Science",
      en: "Understanding the Power of Data – Guide to Data Science",
    },
    speaker: {
      fr: "Ajichei Chazyloyang — Data Scientist",
      en: "Ajichei Chazyloyang — Data Scientist",
    },
    tags: {
      fr: ["Data Science", "Analytics", "Big Data"],
      en: ["Data Science", "Analytics", "Big Data"],
    },
  },
  {
    time: "11:40",
    duration: "30 min",
    category: "TALK",
    typeColor: "#6a4cf5",
    icon: "🤖",
    type: {
      fr: "TALK",
      en: "TALK",
    },
    title: {
      fr: "Inside AI Agents with Strands and Amazon Bedrock",
      en: "Inside AI Agents with Strands and Amazon Bedrock",
    },
    speaker: {
      fr: "Jerry Davis Ndjana — Senior Graduate Intern",
      en: "Jerry Davis Ndjana — Senior Graduate Intern",
    },
    tags: {
      fr: ["Amazon Bedrock", "AI Agents", "Strands"],
      en: ["Amazon Bedrock", "AI Agents", "Strands"],
    },
  },
  {
    time: "12:10",
    duration: "30 min",
    category: "TALK",
    typeColor: "#6a4cf5",
    icon: "🧠",
    type: {
      fr: "TALK",
      en: "TALK",
    },
    title: {
      fr: "AWS Communities in Cameroon and Building an AI Bot with Amazon Bedrock",
      en: "AWS Communities in Cameroon and Building an AI Bot with Amazon Bedrock",
    },
    speaker: {
      fr: "Dinnyuy Fru Angu — AWS User Group Lead Douala",
      en: "Dinnyuy Fru Angu — AWS User Group Lead Douala",
    },
    tags: {
      fr: ["Amazon Bedrock", "AI Bot", "User Group Douala"],
      en: ["Amazon Bedrock", "AI Bot", "User Group Douala"],
    },
  },

  // 5. Sponsor Time & Midday Break
  {
    time: "12:40",
    duration: "20 min",
    category: "SPONSOR",
    typeColor: "#22c55e",
    icon: "🛡️",
    type: {
      fr: "SPONSOR TIME",
      en: "SPONSOR TIME",
    },
    title: {
      fr: "Cybersécurité & Protection Numérique : Enjeux et Bonnes Pratiques",
      en: "Cybersecurity & Digital Protection: Challenges & Best Practices",
    },
    speaker: {
      fr: "Kamlewa Technologies — ONG de Cybersécurité & Partenaire Officiel",
      en: "Kamlewa Technologies — Cybersecurity NGO & Official Partner",
    },
    tags: {
      fr: ["Cybersécurité", "Partenaire Officiel", "Protection Numérique"],
      en: ["Cybersecurity", "Official Partner", "Digital Safety"],
    },
  },
  {
    time: "13:00",
    duration: "30 min",
    category: "GAMES",
    typeColor: "#d44df0",
    icon: "🎯",
    type: {
      fr: "JEUX & NETWORKING",
      en: "GAMES & NETWORKING",
    },
    title: {
      fr: "Pause Détente, Mini-Networking & Défis : Bottle Flip, Spin & Maze Puzzle",
      en: "Break, Mini-Networking & Challenges: Bottle Flip, Spin & Maze Puzzle",
    },
    speaker: {
      fr: "Équipe Animation SBG IUC",
      en: "SBG IUC Animation Team",
    },
    tags: {
      fr: ["Bottle Flip", "Maze Puzzle", "Networking"],
      en: ["Bottle Flip", "Maze Puzzle", "Networking"],
    },
  },

  // 6. Block 3 — DevOps, Security & Serverless
  {
    time: "13:30",
    duration: "30 min",
    category: "TALK",
    typeColor: "#6a4cf5",
    icon: "⚙️",
    type: {
      fr: "TALK",
      en: "TALK",
    },
    title: {
      fr: "Building a CI/CD Pipeline on AWS",
      en: "Building a CI/CD Pipeline on AWS",
    },
    speaker: {
      fr: "Tidding Ramsey Binda — Cloud and DevOps Engr",
      en: "Tidding Ramsey Binda — Cloud and DevOps Engr",
    },
    tags: {
      fr: ["CI/CD", "DevOps", "AWS CodePipeline"],
      en: ["CI/CD", "DevOps", "AWS CodePipeline"],
    },
  },
  {
    time: "14:00",
    duration: "30 min",
    category: "TALK",
    typeColor: "#6a4cf5",
    icon: "🔐",
    type: {
      fr: "TALK",
      en: "TALK",
    },
    title: {
      fr: "365 Days at Zero: The Untold Journey",
      en: "365 Days at Zero: The Untold Journey",
    },
    speaker: {
      fr: "Claude Ndanda — Software Engineer × Pentester",
      en: "Claude Ndanda — Software Engineer × Pentester",
    },
    tags: {
      fr: ["Security", "Pentesting", "DevSecOps"],
      en: ["Security", "Pentesting", "DevSecOps"],
    },
  },
  {
    time: "14:30",
    duration: "30 min",
    category: "TALK",
    typeColor: "#6a4cf5",
    icon: "⚡",
    type: {
      fr: "TALK",
      en: "TALK",
    },
    title: {
      fr: "When serverless gets expensive, run away",
      en: "When serverless gets expensive, run away",
    },
    speaker: {
      fr: "Youmbi Leo Lordson — Software Engineer",
      en: "Youmbi Leo Lordson — Software Engineer",
    },
    tags: {
      fr: ["Serverless", "AWS Lambda", "Cost Optimization"],
      en: ["Serverless", "AWS Lambda", "Cost Optimization"],
    },
  },

  // 7. Closing Festivities, Kahoot Quiz, Awards, Karaoke & Refreshments
  {
    time: "15:00",
    duration: "20 min",
    category: "GAMES",
    typeColor: "#d44df0",
    icon: "🎮",
    type: {
      fr: "KAHOOT QUIZ",
      en: "KAHOOT QUIZ",
    },
    title: {
      fr: "Quiz Récapitulatif des Sessions en Direct — Activité Kahoot",
      en: "Live Session Recap Quiz — Kahoot Activity",
    },
    speaker: {
      fr: "Équipe Animation SBG IUC (Questions des Speakers)",
      en: "SBG IUC Animation Team (Speakers' Questions)",
    },
    tags: {
      fr: ["Kahoot", "Live Quiz", "Top 3"],
      en: ["Kahoot", "Live Quiz", "Top 3"],
    },
  },
  {
    time: "15:20",
    duration: "20 min",
    category: "KEYNOTE",
    typeColor: "#FF9900",
    icon: "🏆",
    type: {
      fr: "CHALLENGE & PRIX",
      en: "AWARDS & CHALLENGE",
    },
    title: {
      fr: "Récompenses des Jeux & Prix du Challenge #IWillBeThere",
      en: "Game Rewards & #IWillBeThere Online Challenge Prize",
    },
    speaker: {
      fr: "Comité d'Organisation SBG IUC",
      en: "SBG IUC Organizing Committee",
    },
    tags: {
      fr: ["#IWillBeThere", "Prix", "Récompenses"],
      en: ["#IWillBeThere", "Prizes", "Awards"],
    },
  },
  {
    time: "15:40",
    duration: "35 min",
    category: "GAMES",
    typeColor: "#d44df0",
    icon: "🎤",
    type: {
      fr: "KARAOKE PARTY",
      en: "KARAOKE PARTY",
    },
    title: {
      fr: "Karaoke Party — Les plus courageux prennent le micro ! 🎤",
      en: "Karaoke Party — The bravest take the mic! 🎤",
    },
    speaker: {
      fr: "Tous les participants",
      en: "All Attendees",
    },
    tags: {
      fr: ["Karaoke", "Musique", "Ambiance"],
      en: ["Karaoke", "Music", "Vibes"],
    },
  },
  {
    time: "16:15",
    duration: "45 min",
    category: "GENERAL",
    typeColor: "#999999",
    icon: "🍕",
    type: {
      fr: "CLÔTURE & SNACKS",
      en: "CLOSING & SNACKS",
    },
    title: {
      fr: "Collation, Nourriture, Networking & Photo de famille officielle",
      en: "Snacks, Refreshments, Networking & Official Group Photo",
    },
    speaker: {
      fr: "Toute la communauté AWS SCD IUC",
      en: "Entire AWS SCD IUC Community",
    },
    tags: {
      fr: ["Collation", "Photo de famille", "Networking"],
      en: ["Snacks", "Family Photo", "Networking"],
    },
  },
];

const FILTER_CHIPS = [
  { id: "ALL", labelFr: "TOUS", labelEn: "ALL", color: "#e5e5e5" },
  { id: "KEYNOTE", labelFr: "KEYNOTE & PRIX", labelEn: "KEYNOTE & AWARDS", color: "#FF9900" },
  { id: "TALK", labelFr: "TALK", labelEn: "TALK", color: "#6a4cf5" },
  { id: "SPONSOR", labelFr: "SPONSOR", labelEn: "SPONSOR", color: "#22c55e" },
  { id: "GAMES", labelFr: "GAMES & FUN", labelEn: "GAMES & FUN", color: "#d44df0" },
];

export default function ProgrammeSection() {
  const { t, locale } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const isEn = locale === "en";

  const filteredSessions = activeFilter === "ALL"
    ? SESSIONS
    : SESSIONS.filter((session) => session.category === activeFilter);

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

          {/* Filter / Legend Chips */}
          <div className="flex flex-wrap gap-2.5">
            {FILTER_CHIPS.map((chip) => {
              const isSelected = activeFilter === chip.id;
              const label = isEn ? chip.labelEn : chip.labelFr;
              return (
                <button
                  key={chip.id}
                  onClick={() => setActiveFilter(chip.id)}
                  type="button"
                  className="tag-chip transition-all duration-200 cursor-pointer text-xs font-mono tracking-wider font-semibold"
                  style={{
                    borderColor: isSelected ? chip.color : chip.color + "33",
                    backgroundColor: isSelected ? chip.color + "22" : "transparent",
                    color: isSelected ? chip.color : chip.color + "cc",
                    boxShadow: isSelected ? `0 0 12px ${chip.color}33` : "none",
                  }}
                  aria-pressed={isSelected}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Session list */}
        <div>
          {filteredSessions.map((session, i) => {
            const currentType = isEn ? session.type.en : session.type.fr;
            const currentTitle = isEn ? session.title.en : session.title.fr;
            const currentSpeaker = isEn ? session.speaker.en : session.speaker.fr;
            const currentTags = isEn ? session.tags.en : session.tags.fr;

            return (
              <div
                key={`${session.time}-${i}`}
                className="group flex flex-col md:flex-row md:items-start gap-3 md:gap-5 py-5 transition-colors duration-150"
                style={{ borderBottom: "1px solid #1a1a1a" }}
              >
                {/* Mobile top meta: Time & Emoji */}
                <div className="flex items-center md:items-start gap-3 md:w-[110px] shrink-0">
                  {/* Emoji / Icon */}
                  <div className="text-lg md:mt-0.5 w-[24px] text-center shrink-0">
                    {session.icon}
                  </div>
                  {/* Time & Duration */}
                  <div className="flex items-baseline gap-2 md:block">
                    <div className="font-mono text-ink-muted" style={{ fontSize: "13px", letterSpacing: "0.04em" }}>
                      {session.time}
                    </div>
                    <div className="font-mono text-[#555] md:mt-0.5" style={{ fontSize: "11px" }}>
                      <span className="md:hidden">• </span>{session.duration}
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 pl-[36px] md:pl-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="font-mono font-medium"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.08em",
                        color: session.typeColor,
                        textTransform: "uppercase",
                      }}
                    >
                      {currentType}
                    </span>
                  </div>
                  <h3
                    className="text-headline text-ink group-hover:text-aws-orange transition-colors"
                    style={{ fontSize: "16px", marginBottom: "6px", lineHeight: "1.4" }}
                  >
                    {currentTitle}
                  </h3>
                  <p className="text-caption" style={{ color: "#888" }}>
                    {currentSpeaker}
                  </p>

                  {/* Tags for mobile (Inline under content) */}
                  <div className="flex flex-wrap gap-1.5 mt-3 md:hidden">
                    {currentTags.map((tag) => (
                      <span key={tag} className="tag-chip">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Tags for desktop (Right aligned column) */}
                <div className="hidden md:flex flex-wrap gap-1.5 justify-end w-[220px] shrink-0">
                  {currentTags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-caption mt-8" style={{ color: "#555" }}>
          {t("programme.note")}
        </p>
      </div>
    </section>
  );
}
