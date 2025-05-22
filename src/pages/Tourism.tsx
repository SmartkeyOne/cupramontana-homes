
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SEOHelmet from '../components/SEOHelmet';
import { useLanguage } from '../contexts/LanguageContext';
import { useLocation } from 'react-router-dom';

// Import refactored components
import AttractionsTab from '../components/tourism/AttractionsTab';
import RestaurantsTab from '../components/tourism/RestaurantsTab';
import BeachesTab from '../components/tourism/BeachesTab';
import TransportTab from '../components/tourism/TransportTab';
import EventsSection from '../components/tourism/EventsSection';
import WineTab from '../components/tourism/WineTab';

const Tourism = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("attractions");
  const location = useLocation();
  
  // Handle tab selection from URL parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && ["attractions", "restaurants", "beaches", "transport", "wine"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [location]);
  
  // Beispieldaten für Events
  const events = [
    {
      id: 1,
      name: "Sagra dell'Uva",
      date: "Oktober 2025",
      location: "Piazza Cavour, Cupramontana",
      description: "Das wichtigste Weinfest der Region mit lokalen Weinen und Gastronomie."
    },
    {
      id: 2,
      name: "Festa dell'Olio Nuovo",
      date: "November 2025",
      location: "Stadtgebiet, Cupramontana",
      description: "Feier des neuen Olivenöls mit Verkostungen und kulturellen Veranstaltungen."
    },
    {
      id: 3,
      name: "Concerto d'Estate",
      date: "Juli 2025",
      location: "Teatro Comunale, Cupramontana",
      description: "Sommerkonzert mit klassischer Musik und lokalen Künstlern."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title={language === 'de' ? "Tourismus in Cupramontana" : 
              (language === 'it' ? "Turismo a Cupramontana" : 
              (language === 'nl' ? "Toerisme in Cupramontana" : "Tourism in Cupramontana"))}
        description={language === 'de' ? "Entdecken Sie die Schönheit Cupramentanas und der Region Marken - Sehenswürdigkeiten, Restaurants, Strände und öffentliche Verkehrsmittel." : 
                    (language === 'it' ? "Scopri la bellezza di Cupramontana e della regione Marche - attrazioni, ristoranti, spiagge e trasporto pubblico." : 
                    (language === 'nl' ? "Ontdek de schoonheid van Cupramontana en de Marche-regio - bezienswaardigheden, restaurants, stranden en openbaar vervoer." : 
                    "Discover the beauty of Cupramontana and the Marche region - attractions, restaurants, beaches and public transport."))}
        keywords={language === 'de' ? "Cupramontana, Marken, Tourismus, Sehenswürdigkeiten, Restaurants, Strände, öffentliche Verkehrsmittel, Verdicchio Wein" : 
                (language === 'it' ? "Cupramontana, Marche, turismo, attrazioni, ristoranti, spiagge, trasporto pubblico, vino Verdicchio" : 
                (language === 'nl' ? "Cupramontana, Marche, toerisme, bezienswaardigheden, restaurants, stranden, openbaar vervoer, Verdicchio wijn" : 
                "Cupramontana, Marche, tourism, attractions, restaurants, beaches, public transport, Verdicchio wine"))}
      />
      <Navbar />
      <main className="flex-grow">
        <section className="section pt-16 md:pt-24">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Tourismus in Cupramontana</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Entdecken Sie die Schönheit Cupramentanas und der Region Marken - von historischen Städten 
              über wunderschöne Strände bis hin zu kulinarischen Erlebnissen und dem weltberühmten Verdicchio Wein.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Die Region Marken</h2>
                <p className="mb-4">
                  Die Region Marken (Le Marche) ist eine der versteckten Perlen Italiens, oft überschattet 
                  von ihren berühmteren Nachbarn wie der Toskana. Hier finden Sie eine Vielfalt aus spektakulären 
                  Landschaften, von den Apenninen bis zur Adriaküste.
                </p>
                <p>
                  Cupramontana ist bekannt für seinen Verdicchio-Wein und liegt im Herzen der Weinregion. 
                  Von hier aus können Sie bequem andere historische Städte wie Jesi, Ancona und die 
                  berühmte Conero-Riviera erkunden.
                </p>
              </div>
              
              <div className="overflow-hidden border-none bg-primary/10 h-64 rounded">
                <div className="bg-primary/60 h-full rounded flex items-center justify-center text-white text-lg font-medium">
                  Panorama von Cupramontana
                </div>
              </div>
            </div>
            
            <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="mb-16">
              <TabsList className="mb-6">
                <TabsTrigger value="attractions">Sehenswürdigkeiten</TabsTrigger>
                <TabsTrigger value="wine">Verdicchio Wein</TabsTrigger>
                <TabsTrigger value="restaurants">Essen und Schlafen</TabsTrigger>
                <TabsTrigger value="beaches">Strände</TabsTrigger>
                <TabsTrigger value="transport">Öffentlicher Verkehr</TabsTrigger>
              </TabsList>
              
              <TabsContent value="attractions">
                <AttractionsTab />
              </TabsContent>
              
              <TabsContent value="wine">
                <WineTab />
              </TabsContent>
              
              <TabsContent value="restaurants">
                <RestaurantsTab />
              </TabsContent>
              
              <TabsContent value="beaches">
                <BeachesTab />
              </TabsContent>
              
              <TabsContent value="transport">
                <TransportTab />
              </TabsContent>
            </Tabs>
            
            <EventsSection events={events} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tourism;
