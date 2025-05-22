
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define supported languages
export type SupportedLanguage = 'de' | 'it' | 'en' | 'nl';

// Interface for translations
export interface Translations {
  [key: string]: {
    [key in SupportedLanguage]: string;
  };
}

// Context interface
interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object - we'll start with a basic set
const translations: Translations = {
  // Navigation
  'nav.home': {
    de: 'Startseite',
    it: 'Home',
    en: 'Home',
    nl: 'Startpagina',
  },
  'nav.realEstate': {
    de: 'Immobilien',
    it: 'Immobili',
    en: 'Real Estate',
    nl: 'Vastgoed',
  },
  'nav.tourism': {
    de: 'Tourismus',
    it: 'Turismo',
    en: 'Tourism',
    nl: 'Toerisme',
  },
  'nav.jobs': {
    de: 'Arbeitsmarkt',
    it: 'Lavoro',
    en: 'Jobs',
    nl: 'Banen',
  },
  // Footer
  'footer.info': {
    de: 'Informationsportal für Cupramontana und die Region Marken.',
    it: 'Portale informativo per Cupramontana e la regione Marche.',
    en: 'Information portal for Cupramontana and the Marche region.',
    nl: 'Informatieportaal voor Cupramontana en de regio Marken.',
  },
  'footer.rights': {
    de: 'Alle Rechte vorbehalten. Informatives Non-Profit-Projekt.',
    it: 'Tutti i diritti riservati. Progetto informativo senza scopo di lucro.',
    en: 'All rights reserved. Informative non-profit project.',
    nl: 'Alle rechten voorbehouden. Informatief non-profit project.',
  },
  // Languages
  'language.de': {
    de: 'Deutsch',
    it: 'Tedesco',
    en: 'German',
    nl: 'Duits',
  },
  'language.it': {
    de: 'Italienisch',
    it: 'Italiano',
    en: 'Italian',
    nl: 'Italiaans',
  },
  'language.en': {
    de: 'Englisch',
    it: 'Inglese',
    en: 'English',
    nl: 'Engels',
  },
  'language.nl': {
    de: 'Niederländisch',
    it: 'Olandese',
    en: 'Dutch',
    nl: 'Nederlands',
  },
  'language.change': {
    de: 'Sprache ändern',
    it: 'Cambia lingua',
    en: 'Change language',
    nl: 'Taal wijzigen',
  },
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('de');

  // Set initial language based on browser language on mount
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0] as SupportedLanguage;
    if (['de', 'it', 'en', 'nl'].includes(browserLang)) {
      setLanguageState(browserLang);
    }
  }, []);

  // Save language preference to localStorage
  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || translations[key]['en'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
