
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type BeachType = 'Kiesel' | 'Sand' | 'Fels' | 'Boot' | 'all';

interface Beach {
  name: string;
  type: BeachType;
  description: string;
  mapEmbed: string;
}

const BeachesTab: React.FC = () => {
  const [filter, setFilter] = useState<BeachType>('all');
  
  const beaches: Beach[] = [
    {
      name: "Spiaggia delle Due Sorelle",
      type: "Boot",
      description: "Ikonischer Kiesstrand mit zwei Felsnadeln. Nur per Boot erreichbar.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2366048033713!2d13.6138962!3d43.5107957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132e4d3d9e35049d%3A0xe6763273ff38ddc4!2sSpiaggia%20delle%20Due%20Sorelle!5e0!3m2!1sde!2sch!4v1716385000000!5m2!1sde!2sch"
    },
    {
      name: "Spiaggia di San Michele",
      type: "Kiesel",
      description: "Langer Kiesstrand, erreichbar zu Fuß ab Sirolo. Ruhig und naturnah.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1480744015696!2d13.609475!3d43.508188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132e4d3d7df3aa6b%3A0x4f71c8d42a6a7fdf!2sSpiaggia%20di%20San%20Michele!5e0!3m2!1sde!2sch!4v1716385010000!5m2!1sde!2sch"
    },
    {
      name: "Spiaggia Urbani",
      type: "Kiesel",
      description: "Beliebter Strand direkt unter Sirolo mit Restaurants und Steilküste.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.102087694746!2d13.610975!3d43.506859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132e4d3d5a7b8fd9%3A0xc1bfe6f3053f49df!2sSpiaggia%20Urbani!5e0!3m2!1sde!2sch!4v1716385020000!5m2!1sde!2sch"
    },
    {
      name: "Sassi Neri",
      type: "Fels",
      description: "Naturbelassene Felsenküste, perfekt für Ruhe und Schnorcheln.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1805980284284!2d13.6082215!3d43.5090721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132e4d3d8c1728cb%3A0xf1a97d1d326e24de!2sSpiaggia%20Sassi%20Neri!5e0!3m2!1sde!2sch!4v1716385030000!5m2!1sde!2sch"
    },
    {
      name: "Spiaggia di Mezzavalle",
      type: "Sand",
      description: "Weitläufiger Naturstrand mit Wanderzugang oder Boot. Keine Infrastruktur.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5248482843515!2d13.5856525!3d43.4915366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132e4c4d4d5dc5fd%3A0x3c47aa416e9a9bcb!2sSpiaggia%20di%20Mezzavalle!5e0!3m2!1sde!2sch!4v1716385040000!5m2!1sde!2sch"
    },
    {
      name: "Spiaggia Velluta",
      type: "Sand",
      description: "Berühmter feinsandiger Strand in Senigallia, mit hervorragender Infrastruktur und dem typischen samtweichen Sand.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.7636707052156!2d13.217841!3d43.7109995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d1051daaaaaab%3A0xf4c04b198b011b!2sSpiaggia%20di%20Velluto!5e0!3m2!1sde!2sch!4v1716431265894!5m2!1sde!2sch"
    }
  ];
  
  const filteredBeaches = beaches.filter(beach => 
    filter === 'all' || beach.type === filter
  );
  
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-center mb-6">Strände im Conero-Gebiet</h1>
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center">
          <label htmlFor="beach-filter" className="mr-2 text-sm font-medium">Strandtyp:</label>
          <select
            id="beach-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value as BeachType)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 p-2"
          >
            <option value="all">Alle</option>
            <option value="Kiesel">Kiesel</option>
            <option value="Sand">Sand</option>
            <option value="Fels">Fels</option>
            <option value="Boot">Zugang nur per Boot</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredBeaches.map((beach, index) => (
          <Card key={index} className="overflow-hidden shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2">{beach.name}</h2>
              <p className="mb-2"><strong>Typ:</strong> {beach.type}</p>
              <p className="mb-4">{beach.description}</p>
              <div className="rounded-md overflow-hidden h-72">
                <iframe 
                  src={beach.mapEmbed} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${beach.name}`}
                ></iframe>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BeachesTab;
