import "server-only";

const dictionaries = {
  fr: () => import("./i18n/dictionaries/fr.json").then((module) => module.default),
  en: () => import("./i18n/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: "fr" | "en") => dictionaries[locale]();
