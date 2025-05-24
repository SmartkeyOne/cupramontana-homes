
import { Translations } from '../../types/languageTypes';
import { tourismTranslations } from './index';
import { attractionsTranslations } from './attractions';
import { eventsTranslations } from './events';
import { restaurantsTranslations } from './restaurants';

// Merge all tourism-related translations
export const allTourismTranslations: Translations = {
  ...tourismTranslations,
  ...attractionsTranslations,
  ...eventsTranslations,
  ...restaurantsTranslations
};
