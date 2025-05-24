
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Map, Wine } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const NavigationButtons = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const handleWineClick = () => {
    // Navigate to the tourism page with the wine tab parameter
    navigate('/tourism?tab=wine');
    // Add a small delay to ensure the page loads before we try to scroll
    setTimeout(() => {
      const wineSection = document.querySelector('[value="wine"]');
      if (wineSection) {
        wineSection.scrollIntoView({ behavior: 'smooth' });
        // Trigger a click on the wine tab if it's not already active
        const tabsTrigger = document.querySelector('[value="wine"]');
        if (tabsTrigger && !tabsTrigger.classList.contains('data-[state=active]')) {
          (tabsTrigger as HTMLElement).click();
        }
      }
    }, 100);
  };

  const handleMapClick = () => {
    // Navigate to the tourism page with a restaurants query parameter
    navigate('/tourism?tab=restaurants');
    // Add a small delay to ensure the page loads before we try to scroll
    setTimeout(() => {
      const restaurantSection = document.querySelector('[value="restaurants"]');
      if (restaurantSection) {
        restaurantSection.scrollIntoView({ behavior: 'smooth' });
        // Trigger a click on the restaurants tab if it's not already active
        const tabsTrigger = document.querySelector('[value="restaurants"]');
        if (tabsTrigger && !tabsTrigger.classList.contains('data-[state=active]')) {
          (tabsTrigger as HTMLElement).click();
        }
      }
    }, 100);
  };
  
  return (
    <div className="mt-8 animate-fade-in flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.6s' }}>
      <Button 
        onClick={handleWineClick} 
        variant="default" 
        className="gap-2"
      >
        <Wine className="h-5 w-5" /> {t('hero.wineButton')}
      </Button>
      <Button 
        onClick={handleMapClick} 
        variant="outline" 
        className="gap-2 hover:bg-primary hover:text-white transition-all"
      >
        <Map className="h-5 w-5" /> {t('hero.restaurantsButton')}
      </Button>
    </div>
  );
};

export default NavigationButtons;
