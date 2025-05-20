
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Tourism = () => {
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>La Taverna dei Pescatori</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">Fischerhafen, Ancona</p>
                      <CardDescription>
                        Frische Meeresfrüchte direkt vom Hafen mit atemberaubender 
                        Aussicht auf das Meer. Spezialität: Brodetto all'Anconetana.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Osteria del Castello</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">Zentrum, Cupramontana</p>
                      <CardDescription>
                        Traditionelle Küche der Marken in einem rustikalen Ambiente. 
                        Hausgemachte Pasta und lokale Weine sind ein Muss.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Ristorante La Collina</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">Hügellandschaft bei Jesi</p>
                      <CardDescription>
                        Gehobene regionale Küche mit modernem Touch. Panoramablick 
                        über die Weinberge und hervorragende Weinkarte.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Trattoria Da Vincenzo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">Sirolo, Riviera del Conero</p>
                      <CardDescription>
                        Gemütliches Familienrestaurant mit authentischen Gerichten 
                        und freundlicher Atmosphäre. Günstig und lecker.
                      </CardDescription>
                    </CardContent>
                  </Card>
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
