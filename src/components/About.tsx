
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Über uns</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Wir sind ein Team von erfahrenen Webdesignern und Entwicklern, die sich auf die Erstellung von hochwertigen Websites spezialisiert haben.
            </p>
            <p className="text-muted-foreground mb-6">
              Seit über 10 Jahren arbeiten wir mit Unternehmen jeder Größe zusammen, um ihre Online-Präsenz zu verbessern und ihre digitale Strategie zu stärken.
            </p>
            <p className="text-muted-foreground">
              Unser Ziel ist es, Websites zu erstellen, die nicht nur ästhetisch ansprechend sind, sondern auch funktional und benutzerfreundlich.
            </p>
          </div>
          
          <Card className="overflow-hidden border-none bg-primary/10 p-1">
            <CardContent className="grid grid-cols-2 gap-1 p-0">
              <div className="bg-primary h-40 rounded"></div>
              <div className="bg-primary/80 h-40 rounded"></div>
              <div className="bg-primary/60 h-40 rounded"></div>
              <div className="bg-primary/40 h-40 rounded"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
