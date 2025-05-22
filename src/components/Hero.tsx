
import React from 'react';
import Features from './Features';
import NewsWidget from './NewsWidget';
import { Button } from './ui/button';
import { Map, Wine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
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
  
  return (
    <section className="section pt-20 md:pt-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Entdecken Sie Cupramontana
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ihr umfassender Ratgeber für Immobilienkauf, Tourismus und Leben in der malerischen Region Marken, 
            der Heimat des weltberühmten Verdicchio-Weins.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Features />
          </div>
          <div className="mt-8 animate-fade-in flex flex-wrap justify-center gap-4" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={handleWineClick} 
              variant="default" 
              className="gap-2"
            >
              <Wine className="h-5 w-5" /> Verdicchio Weinregion erkunden
            </Button>
            <Button 
              onClick={handleMapClick} 
              variant="outline" 
              className="gap-2 hover:bg-primary hover:text-white transition-all"
            >
              <Map className="h-5 w-5" /> Restaurants entdecken
            </Button>
          </div>
        </div>
      </div>

      {/* News Widget Section */}
      <div className="container mt-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <NewsWidget />
      </div>
      
      <div className="mt-16 bg-gradient-to-b from-primary/10 to-transparent h-32 w-full"></div>
    </section>
  );
};

export default Hero;
