"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { DEFAULT_LANGUAGE, getMessages, Language } from "@/lib/i18n";

type TranslationContextType = {
  language: Language;
  messages: Record<string, any>;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<TranslationContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] =
    useState<Language>(DEFAULT_LANGUAGE);

 useEffect(() => {
  const saved = localStorage.getItem("revex-language");

  if (
    saved === "ar" ||
    saved === "fr" ||
    saved === "en"
  ) {
    setLanguageState(saved as Language);
  }
}, []);

useEffect(() => {
  document.documentElement.lang = language;
  document.documentElement.dir =
    language === "ar" ? "rtl" : "ltr";
}, [language]);

const setLanguage = (lang: Language) => {
  localStorage.setItem("revex-language", lang);
  setLanguageState(lang);
};

const value = useMemo(
  () => ({
    language,
    messages: getMessages(language),
    setLanguage,
  }),
  [language]
);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}
