
import React from 'react';
import { ExternalLink, Utensils } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const RestaurantsTab: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{t('tourism.restaurants.title')}</h3>
        <p className="text-sm text-muted-foreground mb-4">{t('tourism.restaurants.subtitle')}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* First map shows only Restaurants in Cupramontana */}
        <div className="w-full">
          <h4 className="text-lg font-medium mb-3">{t('tourism.restaurants.cupramontana')}</h4>
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2887.32!2d13.1165!3d43.4431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants+in+cupramontana!5e0!3m2!1sde!2sch!4v1716400000000!5m2!1sde!2sch"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurants in Cupramontana"
              className="w-full h-full"
            />
          </div>
        </div>
        
        {/* Second map now shows accommodations instead of restaurants */}
        <div className="w-full">
          <h4 className="text-lg font-medium mb-3">{t('tourism.restaurants.accommodation')}</h4>
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2887.32!2d13.1165!3d43.4431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbed+and+breakfast+agriturismo+in+cupramontana!5e0!3m2!1sde!2sch!4v1716400000000!5m2!1sde!2sch"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Unterkünfte in Cupramontana"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-primary/5 rounded-lg">
        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
          <ExternalLink className="h-4 w-4 text-primary" />
          {t('tourism.restaurants.surrounding.title')}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
          <a 
            href="https://www.google.com/maps/search/restaurants+in+Staffolo,+Italy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm bg-primary/10 text-primary px-3 py-2 rounded hover:bg-primary/20 transition-colors flex items-center gap-2"
          >
            <Utensils className="h-4 w-4" />
            {t('tourism.restaurants.staffolo')}
          </a>
          <a 
            href="https://www.google.com/maps/search/restaurants+in+Apiro,+Italy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm bg-primary/10 text-primary px-3 py-2 rounded hover:bg-primary/20 transition-colors flex items-center gap-2"
          >
            <Utensils className="h-4 w-4" />
            {t('tourism.restaurants.apiro')}
          </a>
          <a 
            href="https://www.google.com/maps/search/restaurants+in+Poggio+San+Vicino,+Italy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm bg-primary/10 text-primary px-3 py-2 rounded hover:bg-primary/20 transition-colors flex items-center gap-2"
          >
            <Utensils className="h-4 w-4" />
            {t('tourism.restaurants.poggio')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsTab;
