
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const RealEstate = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="section pt-16 md:pt-24">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Immobilienkauf in Cupramontana</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Erfahren Sie alles über den Immobilienkauf in Cupramontana - von den ersten Schritten bis zum Abschluss.
              Hier finden Sie wertvolle Informationen und Tools, die Ihnen helfen, Ihre Traumimmobilie in Italien zu finden.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>Der Kaufprozess</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Der Kauf einer Immobilie in Italien unterscheidet sich vom Prozess in anderen Ländern.
                  </CardDescription>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Vorvertrag (Compromesso)</li>
                    <li>Notarielle Beglaubigung</li>
                    <li>Eigentumsübertragung</li>
                    <li>Benötigte Dokumente</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Prima & Seconda Casa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Die Unterscheidung zwischen Erst- und Zweitwohnsitz hat steuerliche Auswirkungen.
                  </CardDescription>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Steuervorteile bei Prima Casa</li>
                    <li>Anforderungen für Prima Casa</li>
                    <li>Regelungen für ausländische Käufer</li>
                    <li>Grundsteuern und jährliche Abgaben</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Finanzierung</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Informationen zur Finanzierung Ihrer Immobilie in Italien.
                  </CardDescription>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Hypothekenoptionen für Ausländer</li>
                    <li>Italienische Kreditgeber</li>
                    <li>Voraussetzungen für eine Hypothek</li>
                    <li>Typische Zinssätze und Laufzeiten</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Hypothekenrechner */}
            <h2 className="text-2xl font-bold mb-6">Hypothekenrechner</h2>
            <Tabs defaultValue="calculator">
              <TabsList className="mb-6">
                <TabsTrigger value="calculator">Rechner</TabsTrigger>
                <TabsTrigger value="rates">Aktuelle Zinssätze</TabsTrigger>
              </TabsList>
              
              <TabsContent value="calculator" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        {/* Hier würde der eigentliche Rechner implementiert werden */}
                        <p className="text-muted-foreground mb-4">
                          Unser Hypothekenrechner hilft Ihnen, Ihre monatlichen Raten zu berechnen.
                        </p>
                        <p className="text-sm mb-6">
                          Geben Sie Ihre Werte ein und erhalten Sie sofort eine Berechnung Ihrer monatlichen Rate.
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Darlehensbetrag (€)</label>
                            <input type="number" className="w-full p-2 border rounded" placeholder="z.B. 200000" />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-1">Zinssatz (%)</label>
                            <input type="number" className="w-full p-2 border rounded" placeholder="z.B. 3.2" step="0.1" />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-1">Laufzeit (Jahre)</label>
                            <input type="number" className="w-full p-2 border rounded" placeholder="z.B. 25" />
                          </div>
                          
                          <Button className="w-full">Berechnen</Button>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-6 rounded-md">
                        <h3 className="text-xl font-medium mb-4">Ergebnis</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Monatliche Rate</p>
                            <p className="text-2xl font-bold">€ --</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">Gesamtzinsen</p>
                            <p className="text-lg font-semibold">€ --</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">Gesamtrückzahlung</p>
                            <p className="text-lg font-semibold">€ --</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="rates">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-4">Aktuelle Hypothekenzinssätze</h3>
                    <p className="text-muted-foreground mb-6">
                      Die folgenden Zinssätze wurden zuletzt am 20.05.2025 aktualisiert.
                    </p>
                    
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Bank</TableHead>
                          <TableHead>Festzins (20 J.)</TableHead>
                          <TableHead>Festzins (10 J.)</TableHead>
                          <TableHead>Variabler Zins</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Intesa Sanpaolo</TableCell>
                          <TableCell>3.45%</TableCell>
                          <TableCell>2.95%</TableCell>
                          <TableCell>2.50%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>UniCredit</TableCell>
                          <TableCell>3.60%</TableCell>
                          <TableCell>3.10%</TableCell>
                          <TableCell>2.70%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>BNL BNP Paribas</TableCell>
                          <TableCell>3.50%</TableCell>
                          <TableCell>3.00%</TableCell>
                          <TableCell>2.60%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Banco BPM</TableCell>
                          <TableCell>3.55%</TableCell>
                          <TableCell>3.05%</TableCell>
                          <TableCell>2.55%</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    
                    <p className="text-xs text-muted-foreground mt-4">
                      * Diese Angaben dienen nur zur Information und stellen keine Zusage eines Kreditangebotes dar.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RealEstate;
