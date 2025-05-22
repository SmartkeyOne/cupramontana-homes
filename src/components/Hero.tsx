
import React from 'react';
import Features from './Features';
import { Button } from './ui/button';
import { Map } from 'lucide-react';
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
  
  return (
    <section className="section pt-20 md:pt-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Entdecken Sie Cupramontana
          </h1>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ihr umfassender Ratgeber für Immobilienkauf, Tourismus und Leben in der malerischen Region Marken.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Features />
          </div>
          <div className="mt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
      <div className="mt-16 bg-gradient-to-b from-primary/10 to-transparent h-32 w-full"></div>
    </section>
  );
};

export default Hero;
