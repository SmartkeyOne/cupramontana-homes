
// Define supported languages
export type SupportedLanguage = 'de' | 'it' | 'en' | 'nl';

// Interface for translations
export interface Translations {
  [key: string]: {
    [key in SupportedLanguage]: string;
  };
}

// Context interface
export interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
  languages: { code: SupportedLanguage; label: string }[];
}
