
import React from 'react';
import { Home, Compass, Briefcase, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: "Immobilien",
    description: "Umfassender Leitfaden zum Immobilienkauf in Cupramontana - von rechtlichen Aspekten über Finanzierungsmöglichkeiten bis hin zu Steuervorteilen für Prima und Seconda Casa."
  },
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: "Tourismus",
    description: "Entdecken Sie die Schönheit der Marken - von der Conero Riviera bis zu den malerischen Hügeln. Inklusive Restaurant-Empfehlungen, Sehenswürdigkeiten und aktuellem Eventkalender."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Arbeit",
    description: "Aktuelle Stellenangebote in der Region, Informationen zu Ausbildungsprogrammen und staatlichen Fördermöglichkeiten für Arbeitssuchende und Unternehmensgründer."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Mehrsprachig",
    description: "Alle Informationen verfügbar in Italienisch, Englisch und Niederländisch - für Einheimische und internationale Interessenten gleichermaßen zugänglich."
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Unsere Rubriken</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cupramontana.homes bietet Ihnen umfassende Informationen zu allen wichtigen Themen rund um Cupramontana
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-card transition-all duration-200 hover:shadow-md">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
