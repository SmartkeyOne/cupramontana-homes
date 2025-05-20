
import React from 'react';
import { CheckCircle, Globe, Lock, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Responsive Design",
    description: "Ihre Website wird auf allen Geräten perfekt angezeigt, vom Desktop bis zum Smartphone."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Schnelle Ladezeiten",
    description: "Optimierte Performance für ein besseres Nutzererlebnis und höhere Conversion-Raten."
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Sicherheit an erster Stelle",
    description: "Modernste Sicherheitsmaßnahmen zum Schutz Ihrer Daten und der Ihrer Kunden."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "SEO-optimiert",
    description: "Bessere Platzierung in Suchmaschinen durch professionelle Suchmaschinenoptimierung."
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Unsere Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir bieten moderne und effektive Lösungen für Ihre Online-Präsenz
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
