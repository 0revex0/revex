export const defaultLanguage = "ar";

export const languages = ["ar", "fr", "en"] as const;

export type Language = (typeof languages)[number];

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}
