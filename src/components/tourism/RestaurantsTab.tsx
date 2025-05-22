
import React from 'react';
import { ExternalLink, Utensils } from 'lucide-react';

const RestaurantsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Übernachten und Essen in Cupramontana</h3>
        <p className="text-sm text-muted-foreground mb-4">Unterkünfte und Restaurants in und um Cupramontana</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Unterkünfte */}
        <div className="w-full">
          <h4 className="text-lg font-medium mb-3">Unterkünfte in Cupramontana</h4>
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3196!2d13.1164!3d43.4431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132e5714492c4b69%3A0xc1f9a1b3b1117be2!2sCupramontana!5e0!3m2!1sde!2sch!4v1716363600000!5m2!1sde!2sch"
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
        
        {/* Restaurants */}
        <div className="w-full">
          <h4 className="text-lg font-medium mb-3">Restaurants in Cupramontana</h4>
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1716368000000!6m8!1m7!1sRestaurants+in+Cupramontana!2m2!1d13.1165!2d43.4431!3f0!4f0!5f0!1sde!2sch"
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
      </div>
      
      <div className="mt-6 p-4 bg-primary/5 rounded-lg">
        <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
          <ExternalLink className="h-4 w-4 text-primary" />
          Weitere Restaurants in der Umgebung von Cupramontana
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4">
          <a 
            href="https://www.google.com/maps/search/restaurants+in+Staffolo,+Italy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm bg-primary/10 text-primary px-3 py-2 rounded hover:bg-primary/20 transition-colors flex items-center gap-2"
          >
            <Utensils className="h-4 w-4" />
            Restaurants in Staffolo
          </a>
          <a 
            href="https://www.google.com/maps/search/restaurants+in+Apiro,+Italy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm bg-primary/10 text-primary px-3 py-2 rounded hover:bg-primary/20 transition-colors flex items-center gap-2"
          >
            <Utensils className="h-4 w-4" />
            Restaurants in Apiro
          </a>
          <a 
            href="https://www.google.com/maps/search/restaurants+in+Poggio+San+Vicino,+Italy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm bg-primary/10 text-primary px-3 py-2 rounded hover:bg-primary/20 transition-colors flex items-center gap-2"
          >
            <Utensils className="h-4 w-4" />
            Restaurants in Poggio San Vicino
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsTab;
