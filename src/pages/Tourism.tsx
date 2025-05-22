
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
  const { t } = useLanguage();
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
  
  // Example data for events
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
        title={t('tourism.seo.title')}
        description={t('tourism.seo.description')}
        keywords={t('tourism.seo.keywords')}
        canonicalUrl="https://cupramontana.homes/tourism"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="section pt-16 md:pt-24">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('tourism.title')}</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              {t('tourism.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('tourism.region.title')}</h2>
                <p className="mb-4">
                  {t('tourism.region.description1')}
                </p>
                <p>
                  {t('tourism.region.description2')}
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
                <TabsTrigger value="attractions">{t('tourism.tabs.attractions')}</TabsTrigger>
                <TabsTrigger value="wine">{t('tourism.tabs.wine')}</TabsTrigger>
                <TabsTrigger value="restaurants">{t('tourism.tabs.restaurants')}</TabsTrigger>
                <TabsTrigger value="beaches">{t('tourism.tabs.beaches')}</TabsTrigger>
                <TabsTrigger value="transport">{t('tourism.tabs.transport')}</TabsTrigger>
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
