"use client";

import React from "react";
import { useTranslation } from "../providers/LanguageProvider";

export default function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  const toggleLanguage = (nextLocale: "fr" | "en") => {
    if (locale === nextLocale) return;
    setLocale(nextLocale);
  };

  return (
    <div className="flex bg-[#0f111a] rounded-lg border border-[#1f2937] overflow-hidden w-[80px] h-[32px] cursor-pointer">
      <div 
        onClick={() => toggleLanguage("fr")}
        className={`flex-1 flex items-center justify-center font-bold text-[13px] transition-colors ${
          locale === "fr" ? "bg-[#FF9900] text-[#0f111a]" : "text-[#9ca3af] hover:text-white"
        }`}
      >
        FR
      </div>
      <div 
        onClick={() => toggleLanguage("en")}
        className={`flex-1 flex items-center justify-center font-bold text-[13px] transition-colors ${
          locale === "en" ? "bg-[#FF9900] text-[#0f111a]" : "text-[#9ca3af] hover:text-white"
        }`}
      >
        EN
      </div>
    </div>
  );
}
