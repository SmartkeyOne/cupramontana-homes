
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="section pt-20 md:pt-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Willkommen auf Ihrer neuen Website
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Professionelle Webdesign-Lösungen für Ihr Unternehmen. Modern, schnell und benutzerfreundlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg">Jetzt starten</Button>
            <Button size="lg" variant="outline">Mehr erfahren</Button>
          </div>
        </div>
      </div>
      <div className="mt-16 bg-gradient-to-b from-primary/10 to-transparent h-32 w-full"></div>
    </section>
  );
};

export default Hero;
