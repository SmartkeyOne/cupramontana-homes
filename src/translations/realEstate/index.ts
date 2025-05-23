
import { Translations } from '../../types/languageTypes';
import { realEstateSEOTranslations } from './seo';
import { realEstateGeneralTranslations } from './general';
import { realEstateInfoCardTranslations } from './infoCards';
import { realEstateDigitalIdentityTranslations } from './digitalIdentity';
import { realEstateMortgageTranslations } from './mortgage';
import { realEstateRatesTranslations } from './rates';

// Merge all real estate translations
export const realEstateTranslations: Translations = {
  ...realEstateSEOTranslations,
  ...realEstateGeneralTranslations,
  ...realEstateInfoCardTranslations,
  ...realEstateDigitalIdentityTranslations,
  ...realEstateMortgageTranslations,
  ...realEstateRatesTranslations
};
