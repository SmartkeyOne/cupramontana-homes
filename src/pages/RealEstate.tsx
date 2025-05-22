
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { ExternalLink } from 'lucide-react';

const RealEstate = () => {
  const [loanAmount, setLoanAmount] = useState<string>("200000");
  const [interestRate, setInterestRate] = useState<string>("3.2");
  const [loanTerm, setLoanTerm] = useState<string>("25");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);

  // Berechnet die monatliche Rate, Gesamtzinsen und Gesamtrückzahlung
  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount) || 0;
    const interest = (parseFloat(interestRate) || 0) / 100 / 12;
    const payments = (parseFloat(loanTerm) || 0) * 12;
    
    if (principal > 0 && interest > 0 && payments > 0) {
      // Formel für monatliche Rate: P * r * (1+r)^n / ((1+r)^n - 1)
      const monthly = (principal * interest * Math.pow(1 + interest, payments)) / (Math.pow(1 + interest, payments) - 1);
      
      setMonthlyPayment(monthly);
      setTotalInterest((monthly * payments) - principal);
      setTotalPayment(monthly * payments);
    } else {
      setMonthlyPayment(0);
      setTotalInterest(0);
      setTotalPayment(0);
    }
  };

  // Führt Berechnung aus, wenn sich die Eingabewerte ändern
  React.useEffect(() => {
    calculateMortgage();
  }, [loanAmount, interestRate, loanTerm]);

  // Formatiert Zahlen als Euro-Beträge
  const formatCurrency = (value: number | null): string => {
    if (value === null) return "€ --";
    return new Intl.NumberFormat('de-DE', { 
      style: 'currency', 
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

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
            
            {/* Sektion: Digitale Identität und Kommunikation in Italien */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Digitale Identität & Kommunikation mit Behörden</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Zertifizierte E-Mail (PEC)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      In Italien ist eine zertifizierte E-Mail (Posta Elettronica Certificata - PEC) für die Kommunikation mit Behörden obligatorisch.
                    </CardDescription>
                    <div className="space-y-3 text-sm">
                      <p>
                        Die PEC funktioniert wie eine normale E-Mail, hat jedoch rechtliche Gültigkeit und dient als elektronisches Einschreiben. 
                        Sie ist unerlässlich für:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Offizielle Kommunikation mit Behörden</li>
                        <li>Einreichung von Dokumenten</li>
                        <li>Erhalt von amtlichen Mitteilungen</li>
                        <li>Immobilientransaktionen</li>
                      </ul>
                      <p className="mt-4">
                        Eine PEC-Adresse können Sie bei verschiedenen Anbietern wie Poste Italiane, Aruba oder Infocert beantragen. 
                        Die Kosten liegen typischerweise bei 5-30€ pro Jahr.
                      </p>
                      <div className="mt-6 space-y-2">
                        <p className="font-medium">Empfohlene PEC-Anbieter:</p>
                        <div className="flex items-center gap-2">
                          <a href="https://www.poste.it/prodotti/posta-elettronica-certificata.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            Poste Italiane PEC <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href="https://www.aruba.it/servizi/posta-certificata.aspx" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            Aruba PEC <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href="https://www.infocert.it/prodotti/legalmail-pec/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            Infocert Legalmail <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Digitale Identität (SPID)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Das SPID (Sistema Pubblico di Identità Digitale) ist das italienische System für digitale Identität und ermöglicht den Zugang zu öffentlichen Online-Diensten.
                    </CardDescription>
                    <div className="space-y-3 text-sm">
                      <p>
                        Ein SPID-Account ist für Immobilienkäufer sehr nützlich, um auf verschiedene behördliche Dienste zuzugreifen:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Grundbuchauszüge einsehen</li>
                        <li>Steuererklärungen einreichen</li>
                        <li>Kommunale Dienste nutzen</li>
                        <li>Baugenehmigungen beantragen</li>
                      </ul>
                      <p className="mt-4 font-medium">So erhalten Sie einen SPID-Account:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Registrieren Sie sich bei einem zugelassenen Anbieter (z.B. Poste ID)</li>
                        <li>Identifizieren Sie sich mit gültigem Ausweis und Steuernummer (Codice Fiscale)</li>
                        <li>Bestätigen Sie Ihre Identität (persönlich, per Webcam oder mit elektronischer Signatur)</li>
                        <li>Nach erfolgreicher Verifizierung erhalten Sie Ihre SPID-Zugangsdaten</li>
                      </ol>
                      <p className="mt-4">
                        Ausländische Bürger können ebenfalls einen SPID-Account beantragen, benötigen jedoch eine italienische Steuernummer.
                      </p>

                      <div className="mt-6 space-y-2">
                        <p className="font-medium">Offizielle SPID-Links:</p>
                        <div className="flex items-center gap-2">
                          <a href="https://www.spid.gov.it/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            Offizielle SPID-Website <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href="https://posteid.poste.it/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            Poste ID (SPID-Anbieter) <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/istanze/richiesta-ts_cf/come-si-richiede-il-codice-fiscale" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            Codice Fiscale beantragen <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href="https://www.spid.gov.it/en/what-is-spid/how-to-activate-spid/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            SPID für Ausländer (Englisch) <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
                        <p className="text-muted-foreground mb-4">
                          Unser Hypothekenrechner hilft Ihnen, Ihre monatlichen Raten zu berechnen.
                        </p>
                        <p className="text-sm mb-6">
                          Geben Sie Ihre Werte ein und erhalten Sie sofort eine Berechnung Ihrer monatlichen Rate.
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Darlehensbetrag (€)</label>
                            <input 
                              type="number" 
                              className="w-full p-2 border rounded" 
                              placeholder="z.B. 200000" 
                              value={loanAmount}
                              onChange={(e) => setLoanAmount(e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-1">Zinssatz (%)</label>
                            <input 
                              type="number" 
                              className="w-full p-2 border rounded" 
                              placeholder="z.B. 3.2" 
                              step="0.1" 
                              value={interestRate}
                              onChange={(e) => setInterestRate(e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-1">Laufzeit (Jahre)</label>
                            <input 
                              type="number" 
                              className="w-full p-2 border rounded" 
                              placeholder="z.B. 25" 
                              value={loanTerm}
                              onChange={(e) => setLoanTerm(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted p-6 rounded-md">
                        <h3 className="text-xl font-medium mb-4">Ergebnis</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Monatliche Rate</p>
                            <p className="text-2xl font-bold">{formatCurrency(monthlyPayment)}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">Gesamtzinsen</p>
                            <p className="text-lg font-semibold">{formatCurrency(totalInterest)}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">Gesamtrückzahlung</p>
                            <p className="text-lg font-semibold">{formatCurrency(totalPayment)}</p>
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
