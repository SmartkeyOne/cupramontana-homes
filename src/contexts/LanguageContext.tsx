
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
  languages: { code: SupportedLanguage; label: string }[];
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Import translation files
import { navigationTranslations } from '../translations/navigation';
import { footerTranslations } from '../translations/footer';
import { commonTranslations } from '../translations/common';
import { jobsTranslations } from '../translations/jobs';
import { realEstateTranslations } from '../translations/realEstate';
import { tourismTranslations } from '../translations/tourism';

// Merge all translations
const translations: Translations = {
  ...navigationTranslations,
  ...footerTranslations,
  ...commonTranslations,
  ...jobsTranslations,
  ...realEstateTranslations,
  ...tourismTranslations
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('de');

  // On first load, check localStorage for saved preference
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') as SupportedLanguage;
    if (savedLang && ['de', 'it', 'en', 'nl'].includes(savedLang)) {
      setLanguageState(savedLang);
    } else {
      // Fallback to browser language if no saved preference
      const browserLang = navigator.language.split('-')[0] as SupportedLanguage;
      if (['de', 'it', 'en', 'nl'].includes(browserLang)) {
        setLanguageState(browserLang);
      }
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

  // Language options for UI components
  const languages = [
    { code: 'de' as SupportedLanguage, label: t('language.de') },
    { code: 'it' as SupportedLanguage, label: t('language.it') },
    { code: 'en' as SupportedLanguage, label: t('language.en') },
    { code: 'nl' as SupportedLanguage, label: t('language.nl') }
  ];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
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
