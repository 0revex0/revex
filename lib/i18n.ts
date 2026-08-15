import ar from "../messages/ar.json";
import fr from "../messages/fr.json";
import en from "../messages/en.json";

export const languages = {
  ar,
  fr,
  en,
} as const;

export type Language = keyof typeof languages;

export const DEFAULT_LANGUAGE: Language = "ar";

export function getMessages(language: Language) {
  return languages[language];
}
