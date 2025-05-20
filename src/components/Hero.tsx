import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/real-estate">
              <Button variant="default" size="lg" className="w-full">Immobilien</Button>
            </Link>
            <Link to="/tourism">
              <Button variant="outline" size="lg" className="w-full">Tourismus</Button>
            </Link>
            <Link to="/jobs">
              <Button variant="outline" size="lg" className="w-full">Arbeitsmarkt</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16 bg-gradient-to-b from-primary/10 to-transparent h-32 w-full"></div>
    </section>
  );
};

export default Hero;
