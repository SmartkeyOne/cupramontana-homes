
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { Bus, Clock, MapPin, Train } from 'lucide-react';

const TransportTab: React.FC = () => {
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

  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default TransportTab;
