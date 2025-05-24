
import React, { createContext, useContext, ReactNode } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { LanguageContextType, SupportedLanguage } from '../types/languageTypes';

// Create the context with undefined as default
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { language, setLanguage, t } = useTranslations();
  
  // Language options for UI components
  const languages = [
    { code: 'de' as SupportedLanguage, label: t('language.de') },
    { code: 'it' as SupportedLanguage, label: t('language.it') },
    { code: 'en' as SupportedLanguage, label: t('language.en') },
    { code: 'nl' as SupportedLanguage, label: t('language.nl') }
  ];

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
    languages
  };

  return (
    <LanguageContext.Provider value={contextValue}>
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

// Re-export types for convenience
export type { SupportedLanguage } from '../types/languageTypes';
export type { Translations } from '../types/languageTypes';
