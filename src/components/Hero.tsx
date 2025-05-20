
import React from 'react';
import Features from './Features';

const Hero = () => {
  return (
    <section className="section pt-20 md:pt-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Entdecken Sie Cupramontana
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ihr umfassender Ratgeber für Immobilienkauf, Tourismus und Leben in der malerischen Region Marken.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Features />
          </div>
        </div>
      </div>
      <div className="mt-16 bg-gradient-to-b from-primary/10 to-transparent h-32 w-full"></div>
    </section>
  );
};

export default Hero;
