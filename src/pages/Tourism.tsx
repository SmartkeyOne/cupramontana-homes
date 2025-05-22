import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SEOHelmet from '../components/SEOHelmet';
import { useLanguage } from '../contexts/LanguageContext';
import { Bus, Train, Clock, MapPin, ExternalLink, Smartphone, Star, Utensils, Navigation } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Tourism = () => {
  const { language } = useLanguage();
  const [openStopInfo, setOpenStopInfo] = useState<string | null>(null);
  
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

  // Updated restaurants data within 15km radius with recent reviews in the last 12 months
  const topRatedRestaurants = [
    {
      id: 1,
      name: "La Taverna dei Santi",
      location: "Via Roma 47, Cupramontana",
      cuisine: "Traditionelle Marken-Küche",
      priceRange: "€€",
      rating: 4.7,
      reviewCount: 124,
      recentReviews: true,
      distance: 0.1,
      specialties: ["Hausgemachte Pasta", "Verdicchio-Weine", "Saisonale Gerichte"],
      address: "Via Roma 47, 60034 Cupramontana AN",
      phone: "+39 0731 780123",
      website: "https://www.tavernadeisanti.it",
      hours: "12:30-14:30, 19:30-22:30, Mo geschlossen",
      image: "taverna-santi"
    },
    {
      id: 2,
      name: "Osteria della Piazza",
      location: "Piazza Cavour 8, Cupramontana",
      cuisine: "Regionale Küche & Weinbar",
      priceRange: "€€",
      rating: 4.4,
      reviewCount: 98,
      recentReviews: true,
      distance: 0.2,
      specialties: ["Weinverkostungen", "Antipasti", "Trüffelgerichte"],
      address: "Piazza Cavour 8, 60034 Cupramontana AN",
      phone: "+39 0731 780456",
      website: "https://www.osteriadellapiazza.it",
      hours: "18:00-23:00, Di geschlossen",
      image: "osteria-piazza"
    },
    {
      id: 3,
      name: "Agriturismo Il Castagno",
      location: "Contrada San Lorenzo 5, Staffolo",
      cuisine: "Bio-Bauernhofküche",
      priceRange: "€€",
      rating: 4.6,
      reviewCount: 156,
      recentReviews: true,
      distance: 4.8,
      specialties: ["Hausgemachte Produkte", "Biologischer Anbau", "Panoramaterrasse"],
      address: "Contrada San Lorenzo 5, 60039 Staffolo AN",
      phone: "+39 0731 856321",
      website: "https://www.agriturismoilcastagno.it",
      hours: "Nur Wochenende: 12:00-15:00, 19:00-22:00",
      image: "il-castagno"
    },
    {
      id: 4,
      name: "Trattoria Marchegiana",
      location: "Via Garibaldi 12, Serra San Quirico",
      cuisine: "Traditionelle Hausmannskost",
      priceRange: "€",
      rating: 4.5,
      reviewCount: 87,
      recentReviews: true,
      distance: 7.3,
      specialties: ["Hausgemachte Pasta", "Lokale Fleischgerichte", "Familiäre Atmosphäre"],
      address: "Via Garibaldi 12, 60048 Serra San Quirico AN",
      phone: "+39 0731 879012",
      website: null,
      hours: "12:00-14:30, 19:00-21:30, Mi geschlossen",
      image: "trattoria-marchegiana"
    },
    {
      id: 5,
      name: "Ristorante Belvedere",
      location: "Via Monte 34, Maiolati Spontini",
      cuisine: "Gehobene italienische Küche",
      priceRange: "€€€",
      rating: 4.7,
      reviewCount: 203,
      recentReviews: true,
      distance: 8.2,
      specialties: ["Meeresfrüchte", "Hausgemachtes Tiramisu", "Weinauswahl"],
      address: "Via Monte 34, 60030 Maiolati Spontini AN",
      phone: "+39 0731 701432",
      website: "https://www.ristorantebelvedere.it",
      hours: "12:30-14:30, 19:30-23:00, Mo-Di geschlossen",
      image: "belvedere"
    },
    {
      id: 6,
      name: "Pizzeria Da Vinci",
      location: "Via Roma 52, Staffolo",
      cuisine: "Italienische Pizzeria & Pasta",
      priceRange: "€",
      rating: 4.3,
      reviewCount: 112,
      recentReviews: true,
      distance: 5.1,
      specialties: ["Steinofenpizza", "Hausgemachte Nudeln", "Schneller Service"],
      address: "Via Roma 52, 60039 Staffolo AN",
      phone: "+39 0731 893421",
      website: null,
      hours: "18:00-22:30, täglich geöffnet",
      image: "da-vinci"
    },
    {
      id: 7,
      name: "La Cantina del Verdicchio",
      location: "Via Verdicchio 15, Montecarotto",
      cuisine: "Weinbar mit kleinen Speisen",
      priceRange: "€€",
      rating: 4.8,
      reviewCount: 76,
      recentReviews: true,
      distance: 9.4,
      specialties: ["Verdicchio-Weine", "Lokale Käseplatten", "Weinproben"],
      address: "Via Verdicchio 15, 60036 Montecarotto AN",
      phone: "+39 0731 892345",
      website: "https://www.cantinadelverdicchio.it",
      hours: "17:00-24:00, Mo geschlossen",
      image: "cantina-verdicchio"
    },
    {
      id: 8,
      name: "Osteria dei Folli",
      location: "Piazza del Teatro 3, Jesi",
      cuisine: "Kreative Marken-Küche",
      priceRange: "€€€",
      rating: 4.6,
      reviewCount: 183,
      recentReviews: true,
      distance: 14.8,
      specialties: ["Innovative Gerichte", "Regionale Neuinterpretationen", "Cocktails"],
      address: "Piazza del Teatro 3, 60035 Jesi AN",
      phone: "+39 0731 543210",
      website: "https://www.osteriadeifolli.it",
      hours: "19:00-24:00, So-Mo geschlossen",
      image: "dei-folli"
    },
    {
      id: 9,
      name: "Agriturismo La Quercia",
      location: "Strada Provinciale 11, Serra San Quirico",
      cuisine: "Bauernhofküche & Landgut",
      priceRange: "€€",
      rating: 4.9,
      reviewCount: 145,
      recentReviews: true,
      distance: 8.5,
      specialties: ["Eigene Produkte", "Panoramablick", "Familienbetrieb"],
      address: "Strada Provinciale 11, 60048 Serra San Quirico AN",
      phone: "+39 0731 879876",
      website: "https://www.agriturismolaquercia.it",
      hours: "12:00-15:00, 19:00-22:00, Di-Mi geschlossen",
      image: "la-quercia"
    },
    {
      id: 10,
      name: "Ristorante Vecchio Mulino",
      location: "Via del Fiume 23, Apiro",
      cuisine: "Rustikale Marken-Küche",
      priceRange: "€€",
      rating: 4.5,
      reviewCount: 92,
      recentReviews: true,
      distance: 11.3,
      specialties: ["Wildgerichte", "Pilzspezialitäten", "Historisches Ambiente"],
      address: "Via del Fiume 23, 60030 Apiro MC",
      phone: "+39 0733 611543",
      website: "https://www.ristorantevecchiomulino.it",
      hours: "12:30-14:30, 19:30-22:30, Do geschlossen",
      image: "vecchio-mulino"
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
            
            <Tabs defaultValue="attractions" className="mb-16">
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
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Restaurants im Umkreis von 15 km</h3>
                    <p className="text-sm text-muted-foreground">Restaurants mit aktuellen Bewertungen aus den letzten 12 Monaten</p>
                  </div>
                  <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">Aktuelle Bewertungen</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topRatedRestaurants.map((restaurant) => (
                    <Card key={restaurant.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="bg-muted/30 h-48 flex items-center justify-center relative">
                        <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/90 px-2 py-1 rounded text-sm">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          <span className="font-medium">{restaurant.rating}</span>
                          <span className="text-xs text-muted-foreground">({restaurant.reviewCount})</span>
                        </div>
                        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-background/90 px-2 py-1 rounded text-xs text-muted-foreground">
                          <Navigation className="h-3 w-3" />
                          <span>{restaurant.distance} km</span>
                        </div>
                        <Utensils className="h-12 w-12 text-primary/40" />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base font-semibold">{restaurant.name}</CardTitle>
                          <span className="text-xs bg-primary/10 px-2 py-0.5 rounded">
                            {restaurant.priceRange}
                          </span>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {restaurant.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 pt-0">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{restaurant.cuisine}</p>
                          <div className="flex flex-wrap gap-1">
                            {restaurant.specialties.map((specialty, idx) => (
                              <span key={idx} className="text-xs bg-muted px-2 py-0.5 rounded-full">
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="pt-2 flex flex-col gap-1.5 border-t text-sm">
                          <div className="flex items-start gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                            <span>{restaurant.address}</span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-muted-foreground mt-0.5" />
                            <span>{restaurant.hours}</span>
                          </div>
                          {restaurant.website && (
                            <a 
                              href={restaurant.website} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-primary hover:underline flex items-center gap-1.5"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              Website besuchen
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    Google Maps für aktuelle Restaurants
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Alle aufgeführten Restaurants befinden sich in einem Umkreis von 15 Kilometern um Cupramontana 
                    und haben mindestens eine Bewertung in den letzten 12 Monaten erhalten.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a 
                      href="https://www.google.com/maps/search/restaurant+near+Cupramontana/@43.5103609,13.0932025,13z/data=!3m1!4b1!4m8!2m7!3m6!1srestaurant+near+Cupramontana!2sCupramontana,+Province+of+Ancona,+Italy!3s0x132dbed78f63798f:0x83039db98ef2b335!4m2!1d13.1177052!2d43.5074814" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Alle Restaurants auf Google Maps anzeigen
                    </a>
                    <a 
                      href="https://www.google.com/maps/search/restaurant+near+Cupramontana/@43.5103609,13.0932025,13z/data=!4m5!2m4!5m3!5srestaurant!10s2024-05-22!11s2023-05-22" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full hover:bg-muted/80 transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Nach aktuellen Bewertungen filtern
                    </a>
                    <a 
                      href="https://www.google.com/maps/search/restaurant+near+Cupramontana/@43.5103609,13.0932025,13z/radius:15000" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full hover:bg-muted/80 transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Radius auf 15km einschränken
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
                
                {/* Neue Sektion: Apps für öffentlichen Verkehr */}
                <Card className="mb-8">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Empfohlene Apps für öffentlichen Verkehr</CardTitle>
                    </div>
                    <CardDescription>
                      Diese Apps helfen Ihnen bei der Planung und Nutzung des öffentlichen Verkehrs in Italien
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {transportApps.map((app, index) => (
                        <Card key={index} className="border bg-muted/5">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-base">{app.name}</CardTitle>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                {app.platforms}
                              </span>
                            </div>
                            <CardDescription className="line-clamp-2">{app.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div>
                                <h4 className="text-sm font-medium mb-1">Funktionen:</h4>
                                <ul className="list-disc pl-5 text-xs space-y-1 text-muted-foreground">
                                  {app.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium">Abdeckung:</h4>
                                <p className="text-xs text-muted-foreground">{app.regions}</p>
                              </div>
                              <div className="pt-2">
                                <a 
                                  href={app.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-primary hover:underline text-sm flex items-center"
                                >
                                  Zur Webseite <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                      <h4 className="text-sm font-semibold mb-2">Tipps für die App-Nutzung in Italien</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                        <li>Laden Sie die Apps vor Ihrer Reise herunter und machen Sie sich mit ihnen vertraut</li>
                        <li>Speichern Sie wenn möglich Offline-Karten, da nicht überall eine stabile Internetverbindung verfügbar ist</li>
                        <li>In ländlichen Gebieten wie Cupramontana sind die Fahrplaninformationen manchmal nicht in Echtzeit verfügbar</li>
                        <li>Die Kombination mehrerer Apps (z.B. Moovit für den Busverkehr und Trenitalia für Zugfahrten) kann sinnvoll sein</li>
                        <li>Viele Apps bieten auch Mehrsprachigkeit an, darunter oft auch Deutsch und Englisch</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Bushaltestellen in Cupramontana */}
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
                
                {/* Busverbindungen und Zugverbindungen */}
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
