
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const BeachesTab: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Riviera del Conero</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel className="mb-6">
              <CarouselContent>
                <CarouselItem>
                  <div className="h-56 md:h-72 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1591805859566-88bad48c2c6c?q=80&w=1000" 
                      alt="Riviera del Conero Beach" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-56 md:h-72 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1535122511228-d615a49a79e8?q=80&w=1000" 
                      alt="Due Sorelle Beach" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-56 md:h-72 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1548077654-d61446faef88?q=80&w=1000" 
                      alt="Conero Cliffs" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>
            
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
            <Carousel className="mb-6">
              <CarouselContent>
                <CarouselItem>
                  <div className="h-56 md:h-72 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000" 
                      alt="Senigallia Beach" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-56 md:h-72 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1549861208-9ae633b578b4?q=80&w=1000" 
                      alt="Velvet Beach" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-56 md:h-72 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1000" 
                      alt="Calm Sea" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>
            
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
        
        <Card>
          <CardHeader>
            <CardTitle>Porto San Giorgio</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel className="mb-6">
              <CarouselContent>
                <CarouselItem>
                  <div className="h-56 md:h-72 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1531386450850-d8610d2f8f96?q=80&w=1000" 
                      alt="Porto San Giorgio Beach" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-56 md:h-72 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1588085436647-99a7e4f4b829?q=80&w=1000" 
                      alt="Marina View" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>
            
            <CardDescription className="mb-4">
              Einer der schönsten Strände im südlichen Teil der Marken mit ausgezeichneter Infrastruktur und klarem Wasser.
            </CardDescription>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Feiner Sandstrand mit flach abfallendem Wasser</li>
              <li>Malerischer Hafen mit Restaurants und Cafés</li>
              <li>Familienfreundliche Strandbäder</li>
              <li>Wassersportmöglichkeiten</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BeachesTab;
