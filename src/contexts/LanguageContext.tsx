
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
  // Jobs page - SEO
  'jobs.seo.title': {
    de: 'Stellenangebote in Cupramontana | Arbeitsmarkt in den Marken',
    it: 'Offerte di lavoro a Cupramontana | Mercato del lavoro nelle Marche',
    en: 'Job Opportunities in Cupramontana | Labor Market in Marche, Italy',
    nl: 'Vacatures in Cupramontana | Arbeidsmarkt in Marche, Italië',
  },
  'jobs.seo.description': {
    de: 'Entdecken Sie Karrieremöglichkeiten in Cupramontana und der Weinregion Marken. Stellenangebote in Tourismus, Landwirtschaft und Handwerk.',
    it: 'Scopri opportunità di carriera a Cupramontana e nella regione vinicola delle Marche. Offerte di lavoro nel turismo, agricoltura e artigianato.',
    en: 'Discover career opportunities in Cupramontana and the Marche wine region. Job openings in tourism, agriculture and craftsmanship sectors.',
    nl: 'Ontdek carrièremogelijkheden in Cupramontana en de wijnstreek Marche. Vacatures in toerisme, landbouw en ambachtelijke sectoren.',
  },
  'jobs.seo.keywords': {
    de: 'Jobs Cupramontana, Stellenangebote Italien, Karriere Marken, Arbeiten in Italien, Verdicchio Weinregion, Tourismus Jobs',
    it: 'Lavoro Cupramontana, Offerte di lavoro Italia, Carriera Marche, Lavorare in Italia, Regione del vino Verdicchio, Lavori turistici',
    en: 'Jobs Cupramontana, Job opportunities Italy, Career Marche, Working in Italy, Verdicchio wine region, Tourism jobs',
    nl: 'Banen Cupramontana, Vacatures Italië, Carrière Marche, Werken in Italië, Verdicchio wijnstreek, Toerisme banen',
  },
  'jobs.title': {
    de: 'Stellenangebote in Cupramontana',
    it: 'Offerte di lavoro a Cupramontana',
    en: 'Job opportunities in Cupramontana',
    nl: 'Vacatures in Cupramontana',
  },
  'jobs.subtitle': {
    de: 'Entdecken Sie aktuelle Karrieremöglichkeiten und Stellenangebote in Cupramontana und der umliegenden Region Marken, bekannt für den berühmten Verdicchio-Wein.',
    it: 'Scopri opportunità di carriera e offerte di lavoro attuali a Cupramontana e nella regione Marche circostante, famosa per il rinomato vino Verdicchio.',
    en: 'Discover current career opportunities and job offers in Cupramontana and the surrounding Marche region, famous for its renowned Verdicchio wine.',
    nl: 'Ontdek actuele carrièremogelijkheden en vacatures in Cupramontana en de omringende regio Marche, bekend om zijn beroemde Verdicchio-wijn.',
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
  'jobs.market.opportunities': {
    de: 'Mit einer wachsenden Tourismusbranche und der internationalen Anerkennung der Weine aus der Region entstehen kontinuierlich neue Arbeitsplätze für Einheimische und Ausländer mit verschiedenen Qualifikationen.',
    it: 'Con un settore turistico in crescita e il riconoscimento internazionale dei vini della regione, continuano a emergere nuove opportunità di lavoro per residenti e stranieri con diverse qualifiche.',
    en: 'With a growing tourism industry and international recognition of the region\'s wines, new job opportunities continue to emerge for locals and foreigners with various qualifications.',
    nl: 'Met een groeiende toeristische sector en internationale erkenning van de wijnen uit de regio, blijven er nieuwe banen ontstaan voor lokale bewoners en buitenlanders met verschillende kwalificaties.',
  },
  'jobs.region.title': {
    de: 'Die Region Cupramontana',
    it: 'La regione di Cupramontana',
    en: 'The Cupramontana Region',
    nl: 'De regio Cupramontana',
  },
  'jobs.region.description': {
    de: 'Cupramontana liegt im Herzen der Marken und ist bekannt als die "Hauptstadt des Verdicchio-Weins". Die Region bietet eine hervorragende Infrastruktur und Lebensqualität.',
    it: 'Cupramontana si trova nel cuore delle Marche ed è conosciuta come la "capitale del vino Verdicchio". La regione offre eccellenti infrastrutture e qualità della vita.',
    en: 'Cupramontana is located in the heart of Marche and is known as the "capital of Verdicchio wine". The region offers excellent infrastructure and quality of life.',
    nl: 'Cupramontana ligt in het hart van Marche en staat bekend als de "hoofdstad van de Verdicchio-wijn". De regio biedt uitstekende infrastructuur en levenskwaliteit.',
  },
  'jobs.region.feature1': {
    de: 'Gute Verkehrsanbindung zum Flughafen Ancona (45 min) und zur Adriaküste',
    it: 'Buoni collegamenti di trasporto con l\'aeroporto di Ancona (45 minuti) e la costa adriatica',
    en: 'Good transport connections to Ancona Airport (45 min) and the Adriatic coast',
    nl: 'Goede transportverbindingen naar Ancona Airport (45 min) en de Adriatische kust',
  },
  'jobs.region.feature2': {
    de: 'Reiche kulturelle Traditionen und jährliche Weinfeste',
    it: 'Ricche tradizioni culturali e festival annuali del vino',
    en: 'Rich cultural traditions and annual wine festivals',
    nl: 'Rijke culturele tradities en jaarlijkse wijnfestivals',
  },
  'jobs.region.feature3': {
    de: 'Hervorragende lokale Gastronomie und hohe Lebensqualität',
    it: 'Eccellente gastronomia locale e alta qualità della vita',
    en: 'Excellent local gastronomy and high quality of life',
    nl: 'Uitstekende lokale gastronomie en hoge levenskwaliteit',
  },
  'jobs.sectors.title': {
    de: 'Hauptbeschäftigungssektoren',
    it: 'Principali settori di occupazione',
    en: 'Main Employment Sectors',
    nl: 'Belangrijkste werkgelegenheidssectoren',
  },
  'jobs.sectors.tourism.title': {
    de: 'Tourismus & Gastgewerbe',
    it: 'Turismo e ospitalità',
    en: 'Tourism & Hospitality',
    nl: 'Toerisme & Horeca',
  },
  'jobs.sectors.tourism.description': {
    de: 'Mit wachsendem Interesse an authentischen italienischen Erlebnissen bietet der Tourismussektor zahlreiche Möglichkeiten in Hotels, Restaurants, Weingütern und bei touristischen Dienstleistungen.',
    it: 'Con il crescente interesse per le esperienze italiane autentiche, il settore del turismo offre numerose opportunità in hotel, ristoranti, cantine vinicole e servizi turistici.',
    en: 'With growing interest in authentic Italian experiences, the tourism sector offers numerous opportunities in hotels, restaurants, wineries and tourist services.',
    nl: 'Met de groeiende interesse in authentieke Italiaanse ervaringen, biedt de toerismesector talrijke mogelijkheden in hotels, restaurants, wijnhuizen en toeristische diensten.',
  },
  'jobs.sectors.agriculture.title': {
    de: 'Landwirtschaft & Weinbau',
    it: 'Agricoltura e viticoltura',
    en: 'Agriculture & Viticulture',
    nl: 'Landbouw & Wijnbouw',
  },
  'jobs.sectors.agriculture.description': {
    de: 'Die Produktion des berühmten Verdicchio-Weins und anderer landwirtschaftlicher Erzeugnisse bietet saisonale und ganzjährige Beschäftigungsmöglichkeiten in Weingütern und landwirtschaftlichen Betrieben.',
    it: 'La produzione del famoso vino Verdicchio e di altri prodotti agricoli offre opportunità di lavoro stagionali e annuali in cantine e aziende agricole.',
    en: 'The production of the famous Verdicchio wine and other agricultural products offers seasonal and year-round employment opportunities in wineries and farms.',
    nl: 'De productie van de beroemde Verdicchio-wijn en andere landbouwproducten biedt seizoensgebonden en het hele jaar door werkgelegenheid in wijnmakerijen en boerderijen.',
  },
  'jobs.sectors.craft.title': {
    de: 'Handwerk & Kunstgewerbe',
    it: 'Artigianato e mestieri d\'arte',
    en: 'Crafts & Artisanal Skills',
    nl: 'Ambachten & Kunstnijverheid',
  },
  'jobs.sectors.craft.description': {
    de: 'Traditionelle Handwerkskunst und Restaurierungsarbeiten an historischen Gebäuden bieten Beschäftigungsmöglichkeiten für qualifizierte Handwerker und Kunsthandwerker.',
    it: 'L\'artigianato tradizionale e i lavori di restauro su edifici storici offrono opportunità di lavoro per artigiani e artigiani qualificati.',
    en: 'Traditional craftsmanship and restoration work on historic buildings offer employment opportunities for skilled craftsmen and artisans.',
    nl: 'Traditioneel vakmanschap en restauratiewerk aan historische gebouwen bieden werkgelegenheid voor geschoolde ambachtslieden en kunstenaars.',
  },
  'jobs.listings.title': {
    de: 'Aktuelle Stellenangebote',
    it: 'Offerte di lavoro attuali',
    en: 'Current Job Listings',
    nl: 'Actuele vacatures',
  },
  'jobs.coming.title': {
    de: 'Stellenausschreibungen bald verfügbar',
    it: 'Annunci di lavoro presto disponibili',
    en: 'Job listings coming soon',
    nl: 'Vacatures binnenkort beschikbaar',
  },
  'jobs.coming.description': {
    de: 'Stellenangebote für Cupramontana werden in Kürze hier erscheinen. Folgen Sie uns für Updates oder nutzen Sie unsere externen Ressourcen, um nach aktuellen Positionen zu suchen.',
    it: 'Le offerte di lavoro per Cupramontana appariranno qui a breve. Seguici per gli aggiornamenti o utilizza le nostre risorse esterne per cercare posizioni attuali.',
    en: 'Job listings for Cupramontana will appear here soon. Follow us for updates or use our external resources to search for current positions.',
    nl: 'Vacatures voor Cupramontana verschijnen hier binnenkort. Volg ons voor updates of gebruik onze externe bronnen om naar huidige posities te zoeken.',
  },
  'jobs.resources.title': {
    de: 'Externe Jobbörsen',
    it: 'Portali di lavoro esterni',
    en: 'External Job Portals',
    nl: 'Externe vacatureportals',
  },
  'jobs.contact.title': {
    de: 'Haben Sie eine Stelle anzubieten?',
    it: 'Hai un\'offerta di lavoro da pubblicare?',
    en: 'Do you have a job to offer?',
    nl: 'Heeft u een baan aan te bieden?',
  },
  'jobs.contact.description': {
    de: 'Wenn Sie in Cupramontana oder der Region Marken eine Stelle zu besetzen haben, kontaktieren Sie uns, um Ihre Anzeige hier zu veröffentlichen.',
    it: 'Se hai una posizione da coprire a Cupramontana o nella regione Marche, contattaci per pubblicare il tuo annuncio qui.',
    en: 'If you have a position to fill in Cupramontana or the Marche region, contact us to publish your listing here.',
    nl: 'Als u een functie te vervullen heeft in Cupramontana of de regio Marche, neem dan contact met ons op om uw advertentie hier te publiceren.',
  },
  'jobs.contact.button': {
    de: 'Kontaktieren Sie uns',
    it: 'Contattaci',
    en: 'Contact us',
    nl: 'Neem contact met ons op',
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
