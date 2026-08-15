"use client";

import { createContext, useContext } from "react";
import { useLanguage } from "./LanguageProvider";
import { getMessages } from "@/lib/i18n";

type TranslationContextType = {
  t: (key: string) => string;
};

const TranslationContext =
  createContext<TranslationContextType | null>(null);

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();

  const messages = getMessages(language);

 const t = (key: string) => {
  const topLevel = (messages as Record<string, any>)[key];

  const content = (messages as Record<string, any>).content;

  return topLevel ?? content?.[key] ?? key;
};
  return (
    <TranslationContext.Provider value={{ t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error(
      "useTranslation must be used inside TranslationProvider"
    );
  }

  return context;
}