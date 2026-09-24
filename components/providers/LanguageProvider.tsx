"use client";

import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
  locale: initialLocale,
  dictionaries,
}: {
  children: React.ReactNode;
  locale: string;
  dictionaries: Record<string, Record<string, any>>;
}) {
  const [locale, setLocaleState] = useState(initialLocale);

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale);
    Cookies.set("NEXT_LOCALE", newLocale, { expires: 365, path: "/" });
  };

  const getNestedTranslation = (obj: any, path: string) => {
    return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
  };

  const t = (key: string): string => {
    const dictionary = dictionaries[locale] || dictionaries["fr"];
    const translation = getNestedTranslation(dictionary, key);
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
