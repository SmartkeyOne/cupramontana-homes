
import React from 'react';
import Features from '../Features';
import NavigationButtons from './NavigationButtons';

const HeroContent = () => {
  return (
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
      <NavigationButtons />
    </div>
  );
};

export default HeroContent;
