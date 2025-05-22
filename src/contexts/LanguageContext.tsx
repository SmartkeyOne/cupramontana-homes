
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
  // Jobs page
  'jobs.seo.title': {
    de: 'Stellenangebote in Cupramontana',
    it: 'Offerte di lavoro a Cupramontana',
    en: 'Job opportunities in Cupramontana',
    nl: 'Vacatures in Cupramontana',
  },
  'jobs.seo.description': {
    de: 'Aktuelle Stellenangebote und Karrieremöglichkeiten in Cupramontana und der Region Marken, Italien.',
    it: 'Offerte di lavoro attuali e opportunità di carriera a Cupramontana e nella regione Marche, Italia.',
    en: 'Current job listings and career opportunities in Cupramontana and the Marche region, Italy.',
    nl: 'Actuele vacatures en carrièremogelijkheden in Cupramontana en de regio Marche, Italië.',
  },
  'jobs.seo.keywords': {
    de: 'Jobs Cupramontana, Stellenangebote Italien, Karriere Marken, Arbeiten in Italien',
    it: 'Lavoro Cupramontana, Offerte di lavoro Italia, Carriera Marche, Lavorare in Italia',
    en: 'Jobs Cupramontana, Job opportunities Italy, Career Marche, Working in Italy',
    nl: 'Banen Cupramontana, Vacatures Italië, Carrière Marche, Werken in Italië',
  },
  'jobs.title': {
    de: 'Stellenangebote in Cupramontana',
    it: 'Offerte di lavoro a Cupramontana',
    en: 'Job opportunities in Cupramontana',
    nl: 'Vacatures in Cupramontana',
  },
  'jobs.subtitle': {
    de: 'Entdecken Sie aktuelle Karrieremöglichkeiten und Stellenangebote in Cupramontana und der umliegenden Region Marken.',
    it: 'Scopri opportunità di carriera e offerte di lavoro attuali a Cupramontana e nella regione Marche circostante.',
    en: 'Discover current career opportunities and job offers in Cupramontana and the surrounding Marche region.',
    nl: 'Ontdek actuele carrièremogelijkheden en vacatures in Cupramontana en de omringende regio Marche.',
  },
  'jobs.market.title': {
    de: 'Arbeitsmarkt in den Marken',
    it: 'Mercato del lavoro nelle Marche',
    en: 'Job market in Marche',
    nl: 'Arbeidsmarkt in Marche',
  },
  'jobs.market.description': {
    de: 'Die Region Marken bietet vielfältige Beschäftigungsmöglichkeiten in verschiedenen Branchen, insbesondere in Tourismus, Landwirtschaft und Weinbau, sowie im handwerklichen Sektor.',
    it: 'La regione Marche offre diverse opportunità di lavoro in vari settori, in particolare nel turismo, nell\'agricoltura e nella vinificazione, nonché nel settore artigianale.',
    en: 'The Marche region offers diverse employment opportunities in various industries, particularly in tourism, agriculture and viticulture, as well as in the craft sector.',
    nl: 'De regio Marche biedt diverse werkgelegenheidsmogelijkheden in verschillende sectoren, met name in toerisme, landbouw en wijnbouw, evenals in de ambachtelijke sector.',
  },
  'jobs.coming.title': {
    de: 'Demnächst verfügbar',
    it: 'Presto disponibile',
    en: 'Coming soon',
    nl: 'Binnenkort beschikbaar',
  },
  'jobs.coming.description': {
    de: 'Stellenangebote für Cupramontana werden in Kürze hier erscheinen. Schauen Sie bald wieder vorbei!',
    it: 'Le offerte di lavoro per Cupramontana appariranno qui a breve. Torna presto a controllare!',
    en: 'Job listings for Cupramontana will appear here soon. Check back soon!',
    nl: 'Vacatures voor Cupramontana verschijnen hier binnenkort. Kom snel terug!',
  },
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
