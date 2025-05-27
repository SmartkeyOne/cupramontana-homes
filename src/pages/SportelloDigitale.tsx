
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText, Users, Globe, Bot, Clock, Database, Rocket } from "lucide-react";

const SportelloDigitale = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: "SPID",
      description: "Sistema Pubblico di Identità Digitale",
      icon: Users,
      url: "https://www.spid.gov.it/",
    },
    {
      title: "PEC",
      description: "Posta Elettronica Certificata", 
      icon: FileText,
      url: "https://www.agid.gov.it/it/piattaforme/posta-elettronica-certificata",
    },
    {
      title: "Anagrafe Nazionale",
      description: "Servizi demografici online",
      icon: Globe,
      url: "https://www.anagrafenazionale.interno.it/",
    }
  ];

  const aiFeatures = [
    {
      title: "24/7 verfügbarer Chatbot für Bürgeranfragen",
      icon: Clock,
    },
    {
      title: "Integration vorhandener Informationen in eine Masterdatenbank",
      icon: Database,
    },
    {
      title: "Pilotphase mit minimalem Aufwand für Gemeinden",
      icon: Rocket,
    }
  ];

  return (
    <>
      <SEOHelmet 
        title={t('nav.sportelloDigitale')}
        description="Accesso ai servizi digitali della Pubblica Amministrazione italiana"
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          <div className="container py-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">{t('nav.sportelloDigitale')}</h1>
                <p className="text-xl text-muted-foreground">
                  Accesso facilitato ai servizi digitali della Pubblica Amministrazione italiana
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <service.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <a href={service.url} target="_blank" rel="noopener noreferrer">
                          Accedi al servizio
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-muted p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-semibold mb-4">Informazioni Utili</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>SPID (Sistema Pubblico di Identità Digitale)</strong> è la soluzione che permette 
                    di accedere ai servizi online della Pubblica Amministrazione con un'unica identità digitale.
                  </p>
                  <p>
                    <strong>PEC (Posta Elettronica Certificata)</strong> è l'equivalente digitale della 
                    raccomandata con ricevuta di ritorno tradizionale.
                  </p>
                  <p>
                    <strong>ANPR (Anagrafe Nazionale della Popolazione Residente)</strong> permette di 
                    richiedere certificati anagrafici online in modo semplice e veloce.
                  </p>
                </div>
              </div>

              {/* New AI Citizen Assistant Section */}
              <div className="border-t pt-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Bot className="h-10 w-10 text-primary" />
                    <h2 className="text-3xl font-bold">AI-gestützter Bürgerassistent</h2>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Unser AI-gestützter Bürgerassistent hilft Gemeinden, häufige Anfragen automatisiert, 
                    sicher und rund um die Uhr zu beantworten.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {aiFeatures.map((feature, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader>
                        <div className="flex items-center justify-center mb-2">
                          <feature.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button asChild size="lg" className="text-lg px-8 py-3">
                    <a href="/kontakt">
                      Jetzt Pilotregion werden
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SportelloDigitale;
