import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SEOHelmet from '../components/SEOHelmet';
import { useLanguage } from '../contexts/LanguageContext';
import { Bus, Train, Clock, MapPin, ExternalLink, Smartphone, Star, Utensils, Navigation, Map as MapIcon } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Tourism = () => {
  const { language } = useLanguage();
  const [openStopInfo, setOpenStopInfo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("attractions");
  const location = useLocation();
  
  // Handle tab selection from URL parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab && ["attractions", "restaurants", "beaches", "transport"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [location]);
  
  // Toggle function for bus stop collapsibles
  const toggleStopInfo = (stopId: string) => {
    if (openStopInfo === stopId) {
      setOpenStopInfo(null);
    } else {
      setOpenStopInfo(stopId);
    }
  };
  
  // Bus stops data
  const busStops = [
    {
      id: "stop1",
      name: "Piazza Cavour",
      description: "Haupthaltestelle im Zentrum von Cupramontana",
      facilities: ["Wartehäuschen", "Sitzgelegenheiten", "Fahrplaninformation"],
      lines: ["342"],
      nearbyAttractions: ["Rathaus", "Cafés", "Einkaufsmöglichkeiten"]
    },
    {
      id: "stop2",
      name: "Via Roma / Scuola",
      description: "Haltestelle in der Nähe der lokalen Schulen",
      facilities: ["Sitzgelegenheit"],
      lines: ["342"],
      nearbyAttractions: ["Schulen", "Kleine Geschäfte"]
    },
    {
      id: "stop3",
      name: "Ospedale",
      description: "Haltestelle beim örtlichen Krankenhaus",
      facilities: ["Wartehäuschen", "Sitzgelegenheiten"],
      lines: ["342"],
      nearbyAttractions: ["Krankenhaus", "Apotheke"]
    },
    {
      id: "stop4",
      name: "Zona Industriale",
      description: "Haltestelle am Stadtrand im Industriegebiet",
      facilities: ["Einfache Haltestelle"],
      lines: ["342"],
      nearbyAttractions: ["Industriegebiet", "Weinproduktion"]
    }
  ];
  
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

  // Transportdaten
  const transportData = {
    bus: [
      {
        line: "342",
        route: "Cupramontana - Jesi",
        schedule: [
          { departure: "06:30", arrival: "07:10", days: "Mo-Fr" },
          { departure: "08:15", arrival: "08:55", days: "Mo-Fr" },
          { departure: "12:30", arrival: "13:10", days: "Mo-Fr" },
          { departure: "17:45", arrival: "18:25", days: "Mo-Fr" },
          { departure: "09:30", arrival: "10:10", days: "Sa" }
        ]
      },
      {
        line: "342",
        route: "Jesi - Cupramontana",
        schedule: [
          { departure: "07:15", arrival: "07:55", days: "Mo-Fr" },
          { departure: "13:15", arrival: "13:55", days: "Mo-Fr" },
          { departure: "14:45", arrival: "15:25", days: "Mo-Fr" },
          { departure: "19:00", arrival: "19:40", days: "Mo-Fr" },
          { departure: "12:30", arrival: "13:10", days: "Sa" }
        ]
      }
    ],
    train: [
      {
        line: "Ancona-Roma",
        station: "Jesi",
        schedule: [
          { departure: "06:12", destination: "Roma Termini", days: "Mo-Su" },
          { departure: "08:43", destination: "Roma Termini", days: "Mo-Su" },
          { departure: "07:22", destination: "Ancona", days: "Mo-Su" },
          { departure: "15:51", destination: "Ancona", days: "Mo-Su" }
        ]
      }
    ]
  };

  // Neue Daten für Transportapps
  const transportApps = [
    {
      name: "Moovit",
      description: "Umfassende App mit Verbindungen für öffentliche Verkehrsmittel in ganz Italien, inkl. Echtzeit-Updates und detaillierter Navigation.",
      platforms: "iOS, Android",
      features: ["Echtzeit-Fahrplanauskunft", "Routenplanung", "Offline-Karten", "Mehrsprachig", "Haltestellen in der Nähe anzeigen"],
      url: "https://moovitapp.com/",
      regions: "Landesweit"
    },
    {
      name: "Muoversi in Marche",
      description: "Offizielle App für öffentlichen Nahverkehr in der Region Marken mit lokalen Busverbindungen und regionalem Zugverkehr.",
      platforms: "iOS, Android",
      features: ["Regionale Fahrpläne", "Live-Updates", "Ticketkauf möglich"],
      url: "http://www.muoversinmarche.it/",
      regions: "Region Marken"
    },
    {
      name: "Trenitalia",
      description: "Offizielle App der italienischen Staatsbahnen für Zugverbindungen mit Ticketkauf und Kundenservice.",
      platforms: "iOS, Android",
      features: ["Zugfahrpläne", "Ticketkauf", "Sitzplatzreservierung", "Verspätungsbenachrichtigungen"],
      url: "https://www.trenitalia.com/",
      regions: "Landesweit (nur Züge)"
    },
    {
      name: "Google Maps",
      description: "Bekannte Navigations-App mit guter Integration von ÖPNV-Daten in größeren Städten Italiens.",
      platforms: "iOS, Android, Web",
      features: ["Umfassende Navigation", "ÖPNV-Integration", "Offline-Nutzung möglich", "In vielen Sprachen verfügbar"],
      url: "https://maps.google.com/",
      regions: "Landesweit (besser in größeren Städten)"
    }
  ];

  // Google Maps URL for restaurants in Cupramontana area
  const restaurantMapUrl = "https://www.google.ch/maps/search/Restaurants/@43.4498466,13.1021109,4483m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D";

  // Corrected and verified restaurants data with proper Google Maps URLs
  const localRestaurants = [
    {
      id: 1,
      name: "Ristorante Sant'Ubaldo da Mario",
      location: "Cupramontana",
      rating: 4.5,
      priceRange: "€€",
      cuisine: "Traditionelle Marken-Küche",
      address: "Via Colmorino, 60034 Cupramontana AN",
      mapsUrl: "https://maps.app.goo.gl/vSBV1jbVWfdHNUf77"
    },
    {
      id: 2,
      name: "Osteria Santa Caterina",
      location: "Cupramontana",
      rating: 4.6,
      priceRange: "€€",
      cuisine: "Authentische italienische Küche",
      address: "Via Pianello, 18, 60034 Cupramontana AN",
      mapsUrl: "https://maps.app.goo.gl/Jsma2SriamNSEUEV6"
    },
    {
      id: 3,
      name: "Bacchus Caffetteria Ristoro",
      location: "Cupramontana",
      rating: 4.4,
      priceRange: "€",
      cuisine: "Bar & Café mit Speisen",
      address: "Corso Leopardi, 4, 60034 Cupramontana AN",
      mapsUrl: "https://maps.app.goo.gl/ysUZo8PXGw23ty1q7"
    },
    {
      id: 4,
      name: "La Cantina di San Michele",
      location: "Staffolo",
      rating: 4.8,
      priceRange: "€€",
      cuisine: "Traditionelle Küche & Weinbar",
      address: "Contrada San Michele, 87, 60039 Staffolo AN",
      mapsUrl: "https://maps.app.goo.gl/t3bHG46X9z8M1VRu9"
    },
    {
      id: 5,
      name: "Pizzeria Margherita",
      location: "Staffolo",
      rating: 4.3,
      priceRange: "€",
      cuisine: "Pizza & Italienische Küche",
      address: "Via Roma, 77, 60039 Staffolo AN",
      mapsUrl: "https://maps.app.goo.gl/VkU6idVduMpj9hmJ6"
    },
    {
      id: 6,
      name: "Ristorante La Cantinetta",
      location: "Apiro",
      rating: 4.7,
      priceRange: "€€",
      cuisine: "Regionale Spezialitäten",
      address: "Via Giacomo Leopardi, 15, 62021 Apiro MC",
      mapsUrl: "https://maps.app.goo.gl/PhxKT9kGz7QE1DXg9"
    },
    {
      id: 7,
      name: "Ristorante Pizzeria La Nocicchia",
      location: "Apiro",
      rating: 4.6,
      priceRange: "€€",
      cuisine: "Pizza & Italienische Spezialitäten",
      address: "Via San Salvatore, 62021 Apiro MC",
      mapsUrl: "https://maps.app.goo.gl/kdTX2yQEQFeiW5kS7"
    },
    {
      id: 8,
      name: "Trattoria del Borgo",
      location: "Poggio San Vicino",
      rating: 4.5,
      priceRange: "€€",
      cuisine: "Hausgemachte Pasta & Lokale Spezialitäten",
      address: "Via Roma, 12, 62022 Poggio San Vicino MC",
      mapsUrl: "https://maps.app.goo.gl/S6ddsKGTZwcErzMu7"
    },
    {
      id: 9,
      name: "Bar Ristorante Da Mara",
      location: "Cupramontana",
      rating: 4.2,
      priceRange: "€",
      cuisine: "Bar mit traditioneller Küche",
      address: "Via Staffolo, 7, 60034 Cupramontana AN",
      mapsUrl: "https://maps.app.goo.gl/cQx9jdGy97BRYn9f7"
    },
    {
      id: 10,
      name: "Cucina Contadina",
      location: "Staffolo",
      rating: 4.5,
      priceRange: "€€",
      cuisine: "Hausmannskost & Agriturismo",
      address: "Contrada Ponte Musone, 60039 Staffolo AN",
      mapsUrl: "https://maps.app.goo.gl/sC8xGwNhESJrteQi6"
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
        keywords={language === 'de' ? "Cupramontana, Marken, Tourismus, Sehenswürdigkeiten, Restaurants, Strände, öffentliche Verkehrsmittel" : 
                (language === 'it' ? "Cupramontana, Marche, turismo, attrazioni, ristoranti, spiagge, trasporto pubblico" : 
                (language === 'nl' ? "Cupramontana, Marche, toerisme, bezienswaardigheden, restaurants, stranden, openbaar vervoer" : 
                "Cupramontana, Marche, tourism, attractions, restaurants, beaches, public transport"))}
      />
      <Navbar />
      <main className="flex-grow">
        <section className="section pt-16 md:pt-24">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Tourismus in Cupramontana</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Entdecken Sie die Schönheit Cupramentanas und der Region Marken - von historischen Städten 
              über wunderschöne Strände bis hin zu kulinarischen Erlebnissen.
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
              
              <Card className="overflow-hidden border-none bg-primary/10 h-64">
                <CardContent className="p-0 h-full">
                  <div className="bg-primary/60 h-full rounded flex items-center justify-center text-white text-lg font-medium">
                    Panorama von Cupramontana
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="mb-16">
              <TabsList className="mb-6">
                <TabsTrigger value="attractions">Sehenswürdigkeiten</TabsTrigger>
                <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
                <TabsTrigger value="beaches">Strände</TabsTrigger>
                <TabsTrigger value="transport">Öffentlicher Verkehr</TabsTrigger>
              </TabsList>
              
              <TabsContent value="attractions" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Historisches Zentrum</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Erkunden Sie die mittelalterlichen Gassen und Plätze von Cupramontana, 
                        mit seiner charmanten Architektur und historischen Gebäuden.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Museo del Vino</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Besuchen Sie das Weinmuseum und erfahren Sie mehr über die reiche 
                        Weinbautradition der Region und den berühmten Verdicchio.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Conero Nationalpark</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Nur eine kurze Fahrt entfernt bietet der Monte Conero spektakuläre 
                        Ausblicke auf die Adriaküste und wunderschöne Wanderwege.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="restaurants" className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Restaurants in der Region</h3>
                  <p className="text-sm text-muted-foreground mb-4">Verifizierte Restaurants in Cupramontana, Apiro, Staffolo und Poggio San Vicino</p>
                  
                  <a 
                    href={restaurantMapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mb-6"
                  >
                    <Button variant="default" className="flex items-center gap-2">
                      <MapIcon className="h-5 w-5" />
                      Alle Restaurants auf Google Maps anzeigen
                    </Button>
                  </a>
                </div>
                
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Ort</TableHead>
                          <TableHead className="hidden md:table-cell">Küche</TableHead>
                          <TableHead className="text-center">Bewertung</TableHead>
                          <TableHead className="text-center">Preisklasse</TableHead>
                          <TableHead className="text-right">Google Maps</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {localRestaurants.map((restaurant) => (
                          <TableRow key={restaurant.id}>
                            <TableCell className="font-medium">{restaurant.name}</TableCell>
                            <TableCell>{restaurant.location}</TableCell>
                            <TableCell className="hidden md:table-cell">{restaurant.cuisine}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex items-center justify-center gap-1">
                                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                <span>{restaurant.rating}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">{restaurant.priceRange}</TableCell>
                            <TableCell className="text-right">
                              <a 
                                href={restaurant.mapsUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label={`Google Maps: ${restaurant.name}`}
                                className="text-primary hover:underline flex items-center justify-end gap-1"
                              >
                                <MapPin className="h-4 w-4" />
                                <span className="sr-only sm:not-sr-only">Karte</span>
                              </a>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    Restaurants in der Region auf Google Maps
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                    <a 
                      href="https://www.google.com/maps/search/restaurants+in+Cupramontana,+Italy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm bg-primary/10 text-primary px-3 py-2 rounded hover:bg-primary/20 transition-colors flex items-center gap-2"
                    >
                      <Utensils className="h-4 w-4" />
                      Restaurants in Cupramontana
                    </a>
                    <a 
                      href="https://www.google.com/maps/search/restaurants+in+Staffolo,+Italy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm bg-primary/10 text-primary px-3 py-2 rounded hover:bg-primary/20 transition-colors flex items-center gap-2"
                    >
                      <Utensils className="h-4 w-4" />
                      Restaurants in Staffolo
                    </a>
                    <a 
                      href="https://www.google.com/maps/search/restaurants+in+Apiro,+Italy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm bg-primary/10 text-primary px-3 py-2 rounded hover:bg-primary/20 transition-colors flex items-center gap-2"
                    >
                      <Utensils className="h-4 w-4" />
                      Restaurants in Apiro
                    </a>
                    <a 
                      href="https://www.google.com/maps/search/restaurants+in+Poggio+San+Vicino,+Italy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm bg-primary/10 text-primary px-3 py-2 rounded hover:bg-primary/20 transition-colors flex items-center gap-2"
                    >
                      <Utensils className="h-4 w-4" />
                      Restaurants in Poggio San Vicino
                    </a>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="beaches" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Riviera del Conero</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        Die Conero-Riviera bietet einige der schönsten Strände Mittelitaliens, 
                        umgeben von weißen Klippen und kristallklarem Wasser.
                      </CardDescription>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Spiaggia delle Due Sorelle (nur mit Boot erreichbar)</li>
                        <li>Spiaggia di San Michele (Sirolo)</li>
                        <li>Spiaggia Urbani (Sirolo)</li>
                        <li>Spiaggia di Numana</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Senigallia</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        Bekannt als "Spiaggia di Velluto" (Samtstrände) mit feinstem Sand und 
                        flach abfallendem Wasser - ideal für Familien mit Kindern.
                      </CardDescription>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Langer Sandstrand mit zahlreichen Strandbädern</li>
                        <li>Gut ausgestattete Einrichtungen und Services</li>
                        <li>Viele Restaurants und Cafés direkt am Strand</li>
                        <li>Ausgezeichnete Wasserqualität (Blaue Flagge)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="transport" className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Öffentlicher Verkehr in der Region</h3>
                
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Bus className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Bushaltestellen in Cupramontana</CardTitle>
                    </div>
                    <CardDescription>
                      Informationen zu den wichtigsten Bushaltestellen in Cupramontana für Ihre Planung
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {busStops.map((stop) => (
                        <Collapsible 
                          key={stop.id}
                          open={openStopInfo === stop.id} 
                          onOpenChange={() => toggleStopInfo(stop.id)}
                          className="border rounded-md overflow-hidden"
                        >
                          <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-3">
                              <Bus className="h-4 w-4 text-primary" />
                              <span className="font-medium">{stop.name}</span>
                            </div>
                            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {stop.lines.join(", ")}
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-4 border-t bg-muted/20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-semibold mb-2">Beschreibung</h4>
                                <p className="text-sm text-muted-foreground mb-4">{stop.description}</p>
                                
                                <h4 className="text-sm font-semibold mb-2">Ausstattung</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mb-4">
                                  {stop.facilities.map((facility, idx) => (
                                    <li key={idx}>{facility}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold mb-2">In der Nähe</h4>
                                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                  {stop.nearbyAttractions.map((attraction, idx) => (
                                    <li key={idx}>{attraction}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                      <h4 className="text-sm font-semibold mb-2">Nützliches zur Busnutzung in Cupramontana</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                        <li>Tickets können direkt beim Busfahrer oder in ausgewählten Tabacchi-Läden erworben werden</li>
                        <li>Eine Entwertung des Tickets ist beim Einsteigen im Bus erforderlich</li>
                        <li>An Feiertagen verkehren die Busse nach einem reduzierten Fahrplan</li>
                        <li>Die Buslinie 342 verbindet alle wichtigen Haltestellen in Cupramontana</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Bus className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Busverbindungen</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {transportData.bus.map((busRoute, index) => (
                          <div key={index} className="border-b border-border pb-4 last:border-0">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <p className="font-medium">Linie {busRoute.line}</p>
                                <p className="text-sm text-muted-foreground">{busRoute.route}</p>
                              </div>
                            </div>
                            <div className="space-y-2 mt-3">
                              {busRoute.schedule.map((time, timeIndex) => (
                                <div key={timeIndex} className="flex items-center justify-between text-sm">
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                    <span>{time.departure} - {time.arrival}</span>
                                  </div>
                                  <span className="text-muted-foreground bg-muted px-2 py-0.5 rounded-sm text-xs">{time.days}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">
                        Die Fahrpläne können sich ändern. Bitte überprüfen Sie die aktuellen Zeiten beim lokalen Verkehrsunternehmen.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Train className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">Zugverbindungen</CardTitle>
                      </div>
                      <CardDescription>
                        Nächstgelegener Bahnhof: Jesi (15 km von Cupramontana)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {transportData.train.map((trainRoute, index) => (
                          <div key={index} className="border-b border-border pb-4 last:border-0">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <p className="font-medium">{trainRoute.line}</p>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <MapPin className="h-3.5 w-3.5" />
                                  <span>Bahnhof: {trainRoute.station}</span>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2 mt-3">
                              {trainRoute.schedule.map((time, timeIndex) => (
                                <div key={timeIndex} className="flex items-center justify-between text-sm">
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                    <span>{time.departure}</span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <span>{time.destination}</span>
                                    <span className="text-muted-foreground bg-muted px-2 py-0.5 rounded-sm text-xs">{time.days}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 bg-muted/50 p-3 rounded-md">
                        <h4 className="text-sm font-medium mb-1">Transporttipp</h4>
                        <p className="text-xs text-muted-foreground">
                          Für die Verbindung vom Bahnhof Jesi nach Cupramontana nutzen Sie bitte die Buslinie 342. 
                          Taxi-Services sind am Bahnhof ebenfalls verfügbar.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            
            <h2 className="text-2xl font-bold mb-6">Veranstaltungskalender</h2>
            <div className="space-y-4 mb-16">
              {events.map((event) => (
                <Card key={event.id}>
                  <CardHeader className="pb-2">
                    <CardTitle>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm font-medium">Datum</p>
                        <p className="text-muted-foreground">{event.date}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Ort</p>
                        <p className="text-muted-foreground">{event.location}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm font-medium">Beschreibung</p>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tourism;
