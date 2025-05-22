
import { useState, useEffect } from 'react';
import { SupportedLanguage, Translations } from '../types/languageTypes';

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

export const useTranslations = () => {
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

  return {
    language,
    setLanguage,
    t,
    translations
  };
};
