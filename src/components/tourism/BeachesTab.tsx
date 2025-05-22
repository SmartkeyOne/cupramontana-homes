
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BeachesTab: React.FC = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default BeachesTab;
