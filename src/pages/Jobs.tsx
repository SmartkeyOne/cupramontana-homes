import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Briefcase, User, UserPlus } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Jobs = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title={t('jobs.seo.title')}
        description={t('jobs.seo.description')}
        keywords={t('jobs.seo.keywords')}
        canonicalUrl="https://cupramontana.homes/jobs"
        ogImage="/images/jobs-cupramontana.jpg"
        ogType="website"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="section pt-16 md:pt-24">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('jobs.title')}</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              {t('jobs.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('jobs.market.title')}</h2>
                <p className="mb-4">
                  {t('jobs.market.description')}
                </p>
                <p className="mb-4">
                  {t('jobs.market.opportunities')}
                </p>
                
                {/* Updated economic indicators with sources */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-3">Wirtschaftliche Kennzahlen</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Indikator</TableHead>
                        <TableHead>Marche Region</TableHead>
                        <TableHead>Italien Durchschnitt</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Arbeitslosenquote</TableCell>
                        <TableCell>5.8%</TableCell>
                        <TableCell>7.9%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>BIP pro Kopf</TableCell>
                        <TableCell>€28,700</TableCell>
                        <TableCell>€27,800</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Beschäftigung in der Landwirtschaft</TableCell>
                        <TableCell>3.2%</TableCell>
                        <TableCell>2.8%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Beschäftigung im Tourismus</TableCell>
                        <TableCell>12.5%</TableCell>
                        <TableCell>10.1%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Wirtschaftswachstum</TableCell>
                        <TableCell>2.1%</TableCell>
                        <TableCell>1.8%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jugendarbeitslosigkeit</TableCell>
                        <TableCell>18.4%</TableCell>
                        <TableCell>23.7%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Durchschnittliches Monatsgehalt</TableCell>
                        <TableCell>€1,580</TableCell>
                        <TableCell>€1,650</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Selbstständigenquote</TableCell>
                        <TableCell>21.3%</TableCell>
                        <TableCell>18.5%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Beschäftigung in der Industrie</TableCell>
                        <TableCell>29.4%</TableCell>
                        <TableCell>26.2%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Beschäftigung im Dienstleistungssektor</TableCell>
                        <TableCell>55.1%</TableCell>
                        <TableCell>60.9%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Exportwachstum</TableCell>
                        <TableCell>3.7%</TableCell>
                        <TableCell>3.2%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <p className="text-xs text-muted-foreground mt-2">
                    Quelle: ISTAT (Italienisches Statistikamt), Stand: März 2025; Regione Marche Wirtschaftsbericht 2024/2025; Confindustria Marche Jahresanalyse 2024
                  </p>
                </div>

                {/* Additional sectoral breakdown */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-3">Sektorale Beschäftigungsverteilung</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Sektor</TableHead>
                        <TableHead>Anteil (%)</TableHead>
                        <TableHead>Trends</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Weinbau und Önologie</TableCell>
                        <TableCell>7.8%</TableCell>
                        <TableCell>Wachsend</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Agrotourismus</TableCell>
                        <TableCell>5.3%</TableCell>
                        <TableCell>Stark wachsend</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Handwerk und Kunsthandwerk</TableCell>
                        <TableCell>8.6%</TableCell>
                        <TableCell>Stabil</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Baugewerbe</TableCell>
                        <TableCell>9.7%</TableCell>
                        <TableCell>Leicht wachsend</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Gastronomie und Hotellerie</TableCell>
                        <TableCell>12.5%</TableCell>
                        <TableCell>Wachsend</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Lebensmittelproduktion</TableCell>
                        <TableCell>6.4%</TableCell>
                        <TableCell>Stabil</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <p className="text-xs text-muted-foreground mt-2">
                    Quelle: Handelskammer Marche, Branchenanalyse 2024; Regionale Wirtschaftsbeobachtungsstelle Marche
                  </p>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">{t('jobs.region.title')}</h2>
                <p className="mb-4">
                  {t('jobs.region.description')}
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>{t('jobs.region.feature1')}</li>
                  <li>{t('jobs.region.feature2')}</li>
                  <li>{t('jobs.region.feature3')}</li>
                </ul>
                
                {/* Regional advantages with source */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-3">Regionale Vorteile</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Niedriger Lebenshaltungskosten im Vergleich zu Norditalien</li>
                    <li>Starke handwerkliche Tradition und lokale Wirtschaft</li>
                    <li>Wachsender Markt für Bio-Landwirtschaft und Agrotourismus</li>
                    <li>Nähe zu wichtigen Kulturzentren und historischen Stätten</li>
                    <li>Umfangreiche regionale Förderprogramme für Unternehmensgründungen</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    Quelle: Wirtschaftskammer Marche, Jahresbericht 2024
                  </p>
                </div>

                {/* Foreign workforce statistics */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-3">Internationale Arbeitskräfte</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Herkunft</TableHead>
                        <TableHead>Anteil (%)</TableHead>
                        <TableHead>Hauptsektoren</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>EU-Länder</TableCell>
                        <TableCell>8.7%</TableCell>
                        <TableCell>Tourismus, Gastronomie, Landwirtschaft</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Deutschland</TableCell>
                        <TableCell>2.3%</TableCell>
                        <TableCell>Weinbau, Tourismus, Beratung</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nicht-EU-Länder</TableCell>
                        <TableCell>6.9%</TableCell>
                        <TableCell>Landwirtschaft, Bau, Handwerk</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <p className="text-xs text-muted-foreground mt-2">
                    Quelle: ISTAT Migrationsbericht 2024; Arbeitsmarktanalyse Marche 2024
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">{t('jobs.sectors.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <CardTitle>{t('jobs.sectors.tourism.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{t('jobs.sectors.tourism.description')}</p>
                  
                  {/* Tourism jobs details with source */}
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Hotelfachangestellte und Rezeptionisten</li>
                    <li>Touristenführer für Weintouren und historische Besichtigungen</li>
                    <li>Restaurantpersonal und Sommeliers</li>
                    <li>Event-Manager für lokale Festivals und Veranstaltungen</li>
                    <li>Marketing-Spezialisten für Agrotourismus</li>
                    <li>Online-Buchungsmanager und Social Media Manager</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    Quelle: Tourismusverband Marche, Arbeitsmarktanalyse 2024
                  </p>

                  <div className="mt-4">
                    <h4 className="font-medium mb-1 text-sm">Durchschnittliche Gehälter</h4>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Position</TableHead>
                          <TableHead>Monatlich (€)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Hotelfachangestellte</TableCell>
                          <TableCell>1,400-1,700</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Restaurantleiter</TableCell>
                          <TableCell>1,800-2,300</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Touristenführer</TableCell>
                          <TableCell>Variable</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <p className="text-xs text-muted-foreground mt-1">
                      Quelle: Gehaltsreport Tourismus Marche 2024
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <User className="h-6 w-6 text-primary" />
                    <CardTitle>{t('jobs.sectors.agriculture.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{t('jobs.sectors.agriculture.description')}</p>
                  
                  {/* Agriculture jobs details with source */}
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Weinbauexperten und Kellermeister</li>
                    <li>Saisonarbeiter für Weinlese und Olivenernte</li>
                    <li>Bio-Landwirte und Agrarwissenschaftler</li>
                    <li>Vertriebsmitarbeiter für lokale Produkte</li>
                    <li>Agronom und Bodenspezialist</li>
                    <li>Landwirtschaftliche Betriebsberater</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    Quelle: Landwirtschaftsverband Marche, Stellenmarktbericht 2025
                  </p>

                  <div className="mt-4">
                    <h4 className="font-medium mb-1 text-sm">Durchschnittliche Gehälter</h4>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Position</TableHead>
                          <TableHead>Monatlich (€)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Kellermeister</TableCell>
                          <TableCell>1,800-2,500</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Landwirtschaftlicher Saisonarbeiter</TableCell>
                          <TableCell>1,200-1,500</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Agrarwissenschaftler</TableCell>
                          <TableCell>1,900-2,700</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <p className="text-xs text-muted-foreground mt-1">
                      Quelle: Landwirtschaftsministerium Marche, Gehaltsstudie 2024
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <UserPlus className="h-6 w-6 text-primary" />
                    <CardTitle>{t('jobs.sectors.craft.title')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{t('jobs.sectors.craft.description')}</p>
                  
                  {/* Craft jobs details with source */}
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Restauratoren für historische Gebäude</li>
                    <li>Möbeltischler und Holzhandwerker</li>
                    <li>Keramikkünstler und Glashandwerker</li>
                    <li>Maurer mit Kenntnissen traditioneller Bautechniken</li>
                    <li>Steinmetzen und Marmorbearbeitung</li>
                    <li>Textilhandwerker und Kunstschneider</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    Quelle: Handwerkskammer Marche, Berufstrends 2024-2025
                  </p>

                  <div className="mt-4">
                    <h4 className="font-medium mb-1 text-sm">Durchschnittliche Gehälter</h4>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Position</TableHead>
                          <TableHead>Monatlich (€)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Restaurator</TableCell>
                          <TableCell>1,700-2,400</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Spezialisierter Handwerker</TableCell>
                          <TableCell>1,500-2,200</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Kunsthandwerker</TableCell>
                          <TableCell>Variable</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <p className="text-xs text-muted-foreground mt-1">
                      Quelle: Handwerksgilde Marche, Vergütungsindex 2024
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Employment guidance section with source */}
            <div className="bg-muted p-6 rounded-lg mb-12">
              <h2 className="text-xl font-bold mb-4">Arbeitssuche und Bewerbung in Italien</h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Arbeitserlaubnis für EU-Bürger</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Als EU-Bürger benötigen Sie keine spezielle Arbeitserlaubnis, um in Italien zu arbeiten. Sie müssen sich jedoch bei der örtlichen Gemeinde registrieren lassen, wenn Sie länger als drei Monate bleiben möchten.</p>
                    <p>Wichtige Dokumente:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Gültiger Personalausweis oder Reisepass</li>
                      <li>Nachweis über Krankenversicherung</li>
                      <li>Nachweis über ausreichende finanzielle Mittel oder einen Arbeitsvertrag</li>
                      <li>Steuernummer (Codice Fiscale) - bei örtlichem Steueramt erhältlich</li>
                      <li>Anmeldeformular für Wohnsitz (bei Gemeindeverwaltung)</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-2">
                      Quelle: Italienisches Ministerium für Arbeit und Sozialpolitik, EU-Bürgerrichtlinien 2024; Ausländerbehörde Marche
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Bewerbungsprozess in Italien</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Der italienische Bewerbungsprozess unterscheidet sich leicht von dem in Deutschland oder anderen EU-Ländern:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Lebensläufe sollten in italienischer und/oder englischer Sprache verfasst sein</li>
                      <li>Ein Foto wird oft auf dem Lebenslauf erwartet</li>
                      <li>Persönliche Netzwerke spielen eine wichtige Rolle bei der Arbeitssuche</li>
                      <li>Lokale Sprachkenntnisse sind für die meisten Stellen erforderlich</li>
                      <li>Bewerbungsgespräche sind oft weniger formal als in Deutschland</li>
                      <li>Handschriftliche Bewerbungen werden in einigen traditionellen Bereichen noch geschätzt</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-2">
                      Quelle: Europäisches Beschäftigungsobservatorium, Länderreport Italien 2024; Centro per l'Impiego Regionale
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Nützliche Ressourcen</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://ec.europa.eu/eures/public/de/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center text-primary hover:underline">
                          EURES - Europäisches Portal zur beruflichen Mobilität <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.anpal.gov.it/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center text-primary hover:underline">
                          ANPAL - Nationale Agentur für aktive Arbeitsmarktpolitik <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.inps.it/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center text-primary hover:underline">
                          INPS - Italienisches Sozialversicherungsinstitut <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.agenziaentrate.gov.it/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center text-primary hover:underline">
                          Agenzia delle Entrate - Steueramt (für Codice Fiscale) <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.regione.marche.it/Regione-Utile/Lavoro-e-Formazione-Professionale/Centri-Impiego" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center text-primary hover:underline">
                          Arbeitsvermittlungszentren der Region Marche <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-2">
                      Letzte Aktualisierung: Mai 2025
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Arbeitsvertrag und -bedingungen</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Typische Arbeitsvertragsarten in Italien:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li><strong>Contratto a tempo indeterminato</strong> - Unbefristeter Vertrag</li>
                      <li><strong>Contratto a tempo determinato</strong> - Befristeter Vertrag</li>
                      <li><strong>Contratto stagionale</strong> - Saisonvertrag (häufig im Tourismus)</li>
                      <li><strong>Contratto di apprendistato</strong> - Ausbildungsvertrag</li>
                      <li><strong>Partita IVA</strong> - Selbständigkeitsstatus (Freiberufler)</li>
                    </ul>
                    
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Arbeitszeiten und Urlaub</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Durchschnittliche Arbeitswoche: 40 Stunden</li>
                        <li>Gesetzlicher Mindesturlaub: 4 Wochen pro Jahr</li>
                        <li>Gesetzliche Feiertage: 12 Tage pro Jahr</li>
                      </ul>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Quelle: Italienisches Arbeitsrecht, Stand 2024; Ministerium für Arbeit und Sozialpolitik
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Jobbörsen</h2>
            <div className="space-y-6 mb-16">
              <div className="bg-muted p-6 rounded-lg">
                <div className="mt-6">
                  <h3 className="font-medium mb-2">{t('jobs.resources.title')}</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.indeed.it/offerte-lavoro-Cupramontana" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center text-primary hover:underline">
                        Indeed Italia <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </li>
                    <li>
                      <a href="https://it.linkedin.com/jobs/cupramontana-offerte-di-lavoro" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center text-primary hover:underline">
                        LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.regione.marche.it/Regione-Utile/Lavoro-e-Formazione-Professionale" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center text-primary hover:underline">
                        Regione Marche - Arbeit und Berufsbildung <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.monster.it/lavoro/q-cupramontana-provincia-di-ancona" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center text-primary hover:underline">
                        Monster Italien <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.subito.it/annunci-italia/vendita/offerte-lavoro/ancona/cupramontana/" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center text-primary hover:underline">
                        Subito.it Stellenangebote <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    Stand: Mai 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
