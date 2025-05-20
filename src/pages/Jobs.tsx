
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Jobs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="section pt-16 md:pt-24">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Arbeitsmarkt in Cupramontana</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Erfahren Sie alles über Arbeitsmöglichkeiten, Ausbildungsprogramme und Fördermöglichkeiten in Cupramontana und der Region Marken.
            </p>
            
            <Tabs defaultValue="jobs" className="mb-16">
              <TabsList className="mb-6">
                <TabsTrigger value="jobs">Stellenangebote</TabsTrigger>
                <TabsTrigger value="education">Ausbildung</TabsTrigger>
                <TabsTrigger value="funding">Förderprogramme</TabsTrigger>
              </TabsList>
              
              <TabsContent value="jobs" className="space-y-6">
                <div className="bg-muted/50 p-6 rounded-lg mb-8">
                  <h2 className="text-lg font-medium mb-4">Arbeitsmarktüberblick</h2>
                  <p className="mb-4">
                    Die Region Marken bietet verschiedene Beschäftigungsmöglichkeiten, besonders in den Bereichen:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Landwirtschaft und Weinbau</li>
                    <li>Tourismus und Gastgewerbe</li>
                    <li>Handwerk und traditionelle Produktion</li>
                    <li>Lebensmittelverarbeitung</li>
                    <li>Kleinindustrie und Dienstleistungen</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-4">Aktuelle Stellenangebote</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Position</TableHead>
                      <TableHead>Unternehmen</TableHead>
                      <TableHead>Standort</TableHead>
                      <TableHead>Beschäftigungsart</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Weinbautechniker</TableCell>
                      <TableCell>Cantina Sociale Cupramontana</TableCell>
                      <TableCell>Cupramontana</TableCell>
                      <TableCell>Vollzeit</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Hotelfachkraft</TableCell>
                      <TableCell>Hotel Villa Serena</TableCell>
                      <TableCell>Jesi</TableCell>
                      <TableCell>Saisonal</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Koch/Köchin</TableCell>
                      <TableCell>Ristorante Da Marco</TableCell>
                      <TableCell>Cupramontana</TableCell>
                      <TableCell>Vollzeit</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Verkaufsberater</TableCell>
                      <TableCell>Agenzia Immobiliare Mazzini</TableCell>
                      <TableCell>Cupramontana</TableCell>
                      <TableCell>Teilzeit</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Olivenölproduzent</TableCell>
                      <TableCell>Frantoio Olive Marchigiane</TableCell>
                      <TableCell>Serra de' Conti</TableCell>
                      <TableCell>Vollzeit</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Job-Ressourcen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Lokale Arbeitsvermittlung</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">
                          Das Centro per l'Impiego (Arbeitszentrum) bietet Unterstützung bei der Arbeitssuche.
                        </CardDescription>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Centro per l'Impiego di Jesi</li>
                          <li>Viale del Lavoro 32, Jesi</li>
                          <li>Öffnungszeiten: Mo-Fr 9:00-13:00</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Online-Jobbörsen</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">
                          Diese Webseiten bieten aktuelle Stellenangebote in der Region Marken.
                        </CardDescription>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Indeed Italia</li>
                          <li>InfoJobs.it</li>
                          <li>Monster.it</li>
                          <li>Regionale Arbeitsagentur Marken</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="education">
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Berufsbildungszentren</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        Die Region bietet verschiedene Berufsbildungsprogramme an, die speziell auf lokale Industrien 
                        zugeschnitten sind. Diese Programme sind oft kostengünstig oder durch EU-Mittel gefördert.
                      </p>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Einrichtung</TableHead>
                            <TableHead>Kurse</TableHead>
                            <TableHead>Standort</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Centro Formazione Professionale</TableCell>
                            <TableCell>Weinbau, Gastgewerbe, Handwerk</TableCell>
                            <TableCell>Jesi</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Scuola Alberghiera</TableCell>
                            <TableCell>Hotellerie, Gastronomie</TableCell>
                            <TableCell>Senigallia</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Istituto Tecnico Agrario</TableCell>
                            <TableCell>Landwirtschaft, Weinbau</TableCell>
                            <TableCell>Macerata</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Universitäten und Hochschulen</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        In der Region gibt es mehrere Hochschulen mit spezialisierten Studiengängen, die auf die lokale 
                        Wirtschaft ausgerichtet sind.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-2">Università Politecnica delle Marche</h3>
                          <p className="text-sm mb-2">Ancona</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Agrarwissenschaften</li>
                            <li>Wirtschaftswissenschaften</li>
                            <li>Ingenieurwesen</li>
                            <li>Medizin</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-2">Università degli Studi di Urbino</h3>
                          <p className="text-sm mb-2">Urbino</p>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Geisteswissenschaften</li>
                            <li>Tourismus und kulturelles Erbe</li>
                            <li>Naturwissenschaften</li>
                            <li>Sozialwissenschaften</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Sprachkurse</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Das Erlernen der italienischen Sprache ist entscheidend für eine erfolgreiche Integration 
                        in den lokalen Arbeitsmarkt. Verschiedene Anbieter bieten Sprachkurse an:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">Scuola di Lingua Italiana per Stranieri</span>
                          <p className="text-sm text-muted-foreground">Jesi - Kurse für alle Niveaus, flexible Zeiten</p>
                        </li>
                        <li>
                          <span className="font-medium">Università per Stranieri di Perugia</span>
                          <p className="text-sm text-muted-foreground">Perugia - Intensive Kurse und Zertifizierungen</p>
                        </li>
                        <li>
                          <span className="font-medium">Volkshochschule-Partnerprogramme</span>
                          <p className="text-sm text-muted-foreground">Online und Präsenzunterricht mit europäischer Zertifizierung</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="funding">
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>EU-Förderprogramme</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Die Europäische Union bietet verschiedene Förderprogramme für Menschen, die in ländlichen Regionen wie den Marken arbeiten 
                        oder ein Unternehmen gründen möchten:
                      </p>
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <span className="font-medium">ELER (Europäischer Landwirtschaftsfonds für die Entwicklung des ländlichen Raums)</span>
                          <p className="text-sm text-muted-foreground">
                            Fördert die Entwicklung ländlicher Regionen durch Unterstützung landwirtschaftlicher Betriebe und anderer ländlicher Unternehmen.
                          </p>
                        </li>
                        <li>
                          <span className="font-medium">ESF (Europäischer Sozialfonds)</span>
                          <p className="text-sm text-muted-foreground">
                            Bietet Ausbildungs- und Beschäftigungsmöglichkeiten für junge Menschen und Arbeitssuchende.
                          </p>
                        </li>
                        <li>
                          <span className="font-medium">Erasmus für Unternehmer</span>
                          <p className="text-sm text-muted-foreground">
                            Ermöglicht angehenden Unternehmern, von erfahrenen Geschäftsinhabern in anderen EU-Ländern zu lernen.
                          </p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Regionale Förderprogramme</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Die Region Marken bietet verschiedene Förderprogramme für Einheimische und Zugezogene:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-2">Für Unternehmensgründer</h3>
                          <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>Zuschüsse für Jungunternehmer</li>
                            <li>Steuervergünstigungen für Startups</li>
                            <li>Mikrokredite für kleine Unternehmen</li>
                            <li>Beratungsdienstleistungen und Mentoring</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-2">Für Arbeitnehmer und Familien</h3>
                          <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>Umschulungsprogramme</li>
                            <li>Unterstützung für Telearbeit</li>
                            <li>Integrationsprogramme für Zugezogene</li>
                            <li>Familien- und Kinderbetreuungszuschüsse</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Beratungsstellen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Diese Stellen bieten kostenlose Beratung zu verfügbaren Förderprogrammen:
                      </p>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Dienstleistungen</TableHead>
                            <TableHead>Kontakt</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Sportello Europa</TableCell>
                            <TableCell>Beratung zu EU-Fördermitteln</TableCell>
                            <TableCell>Jesi, Via Roma 45</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Camera di Commercio</TableCell>
                            <TableCell>Unterstützung für Unternehmen</TableCell>
                            <TableCell>Ancona, Piazza XXIV Maggio</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Associazione Industriali</TableCell>
                            <TableCell>Beratung für Industrieunternehmen</TableCell>
                            <TableCell>Ancona, Via Industria 10</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
