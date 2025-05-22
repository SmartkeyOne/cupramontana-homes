
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wine, MapPin, CalendarDays } from 'lucide-react';

const WineTab: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6 text-center">Verdicchio - Das Gold der Marken</h1>
        
        <div className="mb-12">
          <div className="relative h-60 md:h-80 overflow-hidden rounded-lg mb-6">
            <img 
              src="https://www.castellidelverdicchio.it/wp-content/uploads/2022/02/wines-hills-2.jpg" 
              alt="Verdicchio Weinberge"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Die Heimat des Verdicchio</h2>
                <p className="text-white/90">Cupramontana ist bekannt als die historische Hauptstadt des Verdicchio-Weins</p>
              </div>
            </div>
          </div>
          
          <p className="mb-4">
            Der Verdicchio dei Castelli di Jesi ist einer der berühmtesten und hochwertigsten Weißweine Italiens, der seit Jahrhunderten in den sanften Hügeln um Cupramontana angebaut wird. 
            Die Region erhielt ihre DOC-Zertifizierung (kontrollierte Herkunftsbezeichnung) im Jahr 1968 und die renommiertere DOCG-Zertifizierung für die Spitzenqualität des Verdicchio Riserva im Jahr 2010.
          </p>
          
          <p className="mb-8">
            Die Verdicchio-Traube gedeiht besonders gut im Mikroklima dieser Region, das von den nahen Apenninen und der Adria geprägt wird. Der Wein zeichnet sich durch seine strohgelbe Farbe mit grünlichen Reflexen, 
            frische Säure, mineralische Noten und Aromen von Mandeln, grünen Äpfeln und Zitrusfrüchten aus.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wine className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Weingeschichte</h3>
                </div>
                <p className="text-sm">
                  Der Weinbau hat hier antike Wurzeln, die bis in die Zeit der Etrusker und Römer zurückreichen. Cupramontana beherbergt ein Museum des Verdicchio-Weins.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Weinterroir</h3>
                </div>
                <p className="text-sm">
                  Die kalkhaltigen Böden, südliche Ausrichtung der Hänge und die perfekte Balance zwischen Bergluft und Meeresbrise schaffen ideale Bedingungen für den Verdicchio.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarDays className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Weinfeste</h3>
                </div>
                <p className="text-sm">
                  Die Sagra dell'Uva (Weinfest) im Oktober ist das wichtigste Ereignis des Jahres, bei dem der neue Jahrgang gefeiert wird.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Weingüter und Verkostungen</h2>
        <p className="mb-6">
          In und um Cupramontana gibt es zahlreiche Weingüter, die Führungen und Verkostungen anbieten. Viele der familiengeführten Betriebe pflegen Traditionen, die über Generationen weitergegeben wurden.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">Empfohlene Weingüter</h3>
            <ul className="space-y-2 list-disc pl-4">
              <li>Colonnara - Viticultori in Cupramontana</li>
              <li>Azienda Agricola Stefano Mancinelli</li>
              <li>Azienda Agricola Benrani</li>
              <li>Cantina Comunale di Cupramontana</li>
              <li>Vallerosa Bonci</li>
            </ul>
          </div>
          
          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-2">Weintouren</h3>
            <p className="mb-4 text-sm">
              Viele lokale Anbieter organisieren Weintouren, die mehrere Weingüter umfassen und oft mit lokaler Gastronomie kombiniert werden.
            </p>
            <Button className="gap-2">
              <Wine className="h-4 w-4" />
              Weintouren entdecken
            </Button>
          </div>
        </div>

        <div className="rounded-md overflow-hidden h-72 mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d46152.71941282637!2d13.052802379260252!3d43.50383092164185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scantine%20cupramontana!5e0!3m2!1sde!2sch!4v1716487695309!5m2!1sde!2sch"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Weingüter in Cupramontana"
          ></iframe>
        </div>

        <h2 className="text-2xl font-bold mb-4">Die Qualitätsstufen des Verdicchio</h2>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-primary/10">
                <th className="border border-gray-300 px-4 py-2 text-left">Klassifikation</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Eigenschaften</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Reifung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Verdicchio dei Castelli di Jesi DOC Classico</td>
                <td className="border border-gray-300 px-4 py-2">Frisch, lebendig, mineralisch mit Noten von grünen Äpfeln und Mandeln</td>
                <td className="border border-gray-300 px-4 py-2">Junge Weine, ideal für den unmittelbaren Genuss</td>
              </tr>
              <tr className="bg-primary/5">
                <td className="border border-gray-300 px-4 py-2">Verdicchio dei Castelli di Jesi DOC Classico Superiore</td>
                <td className="border border-gray-300 px-4 py-2">Komplexer, intensiver mit höherem Alkoholgehalt</td>
                <td className="border border-gray-300 px-4 py-2">Mindestens ein Jahr Reifung</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Verdicchio dei Castelli di Jesi DOCG Riserva Classico</td>
                <td className="border border-gray-300 px-4 py-2">Reich, komplex, mit Honig- und Harz-Noten, große Alterungsfähigkeit</td>
                <td className="border border-gray-300 px-4 py-2">Mindestens 18 Monate Reifung, davon 6 in der Flasche</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WineTab;
