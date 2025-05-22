
import { SupportedLanguage } from '../types/languageTypes';

/**
 * Format a number as a currency value
 * @param value - The number to format or null
 * @param language - The language code to use for formatting
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number | null, language: SupportedLanguage): string => {
  if (value === null) return "€ --";
  
  const locale = 
    language === 'de' ? 'de-DE' : 
    language === 'it' ? 'it-IT' : 
    language === 'nl' ? 'nl-NL' : 'en-US';
  
  return new Intl.NumberFormat(locale, { 
    style: 'currency', 
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};
