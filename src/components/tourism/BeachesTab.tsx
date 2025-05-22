
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
                      src="https://images.unsplash.com/photo-1596133366669-bc2bc3e548b3?q=80&w=1000" 
                      alt="Riviera del Conero Beach" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-56 md:h-72 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000" 
                      alt="Beautiful Beach" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-56 md:h-72 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1000" 
                      alt="Beach View" 
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
                      src="https://images.unsplash.com/photo-1520942702018-0862200e6873?q=80&w=1000" 
                      alt="Senigallia Beach" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-56 md:h-72 rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1536759808958-cdc58fa9beba?q=80&w=1000" 
                      alt="Sandy Beach" 
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
      </div>
    </div>
  );
};

export default BeachesTab;
