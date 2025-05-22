
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const RealEstate = () => {
  const { t, language } = useLanguage();
  const [loanAmount, setLoanAmount] = useState<string>("200000");
  const [interestRate, setInterestRate] = useState<string>("3.2");
  const [loanTerm, setLoanTerm] = useState<string>("25");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);

  // Calculate mortgage payment, total interest, and total payment
  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount) || 0;
    const interest = (parseFloat(interestRate) || 0) / 100 / 12;
    const payments = (parseFloat(loanTerm) || 0) * 12;
    
    if (principal > 0 && interest > 0 && payments > 0) {
      // Formula for monthly payment: P * r * (1+r)^n / ((1+r)^n - 1)
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

  // Run calculation when input values change
  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, interestRate, loanTerm]);

  // Format numbers as Euro amounts
  const formatCurrency = (value: number | null): string => {
    if (value === null) return "€ --";
    
    const locale = 
      language === 'de' ? 'de-DE' : 
      language === 'it' ? 'it-IT' : 
      language === 'nl' ? 'nl-NL' : 'en-US';
    
    return new Intl.NumberFormat(locale, { 
      style: 'currency', 
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title={t('realestate.seo.title')}
        description={t('realestate.seo.description')}
        keywords="Cupramontana, Real Estate, Property, Immobili, Immobilien, Marche, Italy"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="section pt-16 md:pt-24">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('realestate.title')}</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              {t('realestate.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>{t('realestate.card1.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('realestate.card1.description')}
                  </CardDescription>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>{t('realestate.card1.item1')}</li>
                    <li>{t('realestate.card1.item2')}</li>
                    <li>{t('realestate.card1.item3')}</li>
                    <li>{t('realestate.card1.item4')}</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>{t('realestate.card2.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('realestate.card2.description')}
                  </CardDescription>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>{t('realestate.card2.item1')}</li>
                    <li>{t('realestate.card2.item2')}</li>
                    <li>{t('realestate.card2.item3')}</li>
                    <li>{t('realestate.card2.item4')}</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>{t('realestate.card3.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {t('realestate.card3.description')}
                  </CardDescription>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>{t('realestate.card3.item1')}</li>
                    <li>{t('realestate.card3.item2')}</li>
                    <li>{t('realestate.card3.item3')}</li>
                    <li>{t('realestate.card3.item4')}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Digital Identity & Communication with Authorities Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">{t('realestate.digital.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('realestate.pec.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {t('realestate.pec.description')}
                    </CardDescription>
                    <div className="space-y-3 text-sm">
                      <p>
                        La PEC funziona come una normale e-mail, ma ha validità legale e serve come raccomandata elettronica.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Comunicazione ufficiale con le autorità</li>
                        <li>Presentazione di documenti</li>
                        <li>Ricezione di comunicazioni ufficiali</li>
                        <li>Transazioni immobiliari</li>
                      </ul>
                      <p className="mt-4">
                        È possibile richiedere un indirizzo PEC presso vari fornitori come Poste Italiane, Aruba o Infocert.
                        I costi sono generalmente compresi tra 5 e 30€ all'anno.
                      </p>
                      <div className="mt-6 space-y-2">
                        <p className="font-medium">Fornitori PEC consigliati:</p>
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
                    <CardTitle>{t('realestate.spid.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {t('realestate.spid.description')}
                    </CardDescription>
                    <div className="space-y-3 text-sm">
                      <p>
                        Un account SPID è molto utile per gli acquirenti di immobili per accedere a vari servizi governativi:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Visualizzazione degli estratti catastali</li>
                        <li>Presentazione di dichiarazioni fiscali</li>
                        <li>Accesso ai servizi comunali</li>
                        <li>Richiesta di permessi di costruzione</li>
                      </ul>
                      <p className="mt-4 font-medium">Come ottenere un account SPID:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Registrarsi presso un fornitore autorizzato (es. Poste ID)</li>
                        <li>Identificarsi con un documento d'identità valido e codice fiscale</li>
                        <li>Confermare la propria identità (di persona, via webcam o con firma elettronica)</li>
                        <li>Dopo la verifica, riceverai le credenziali SPID</li>
                      </ol>
                      <p className="mt-4">
                        Anche i cittadini stranieri possono richiedere un account SPID, ma è necessario un codice fiscale italiano.
                      </p>

                      <div className="mt-6 space-y-2">
                        <p className="font-medium">Link SPID ufficiali:</p>
                        <div className="flex items-center gap-2">
                          <a href="https://www.spid.gov.it/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            Sito ufficiale SPID <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href="https://posteid.poste.it/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            Poste ID (fornitore SPID) <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href="https://www.agenziaentrate.gov.it/portale/web/guest/schede/istanze/richiesta-ts_cf/come-si-richiede-il-codice-fiscale" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            Richiesta Codice Fiscale <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <a href="https://www.spid.gov.it/en/what-is-spid/how-to-activate-spid/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                            SPID per stranieri (Inglese) <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Mortgage Calculator */}
            <h2 className="text-2xl font-bold mb-6">{t('realestate.mortgage.title')}</h2>
            <Tabs defaultValue="calculator">
              <TabsList className="mb-6">
                <TabsTrigger value="calculator">{t('realestate.tabs.calculator')}</TabsTrigger>
                <TabsTrigger value="rates">{t('realestate.tabs.rates')}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="calculator" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-muted-foreground mb-4">
                          {t('realestate.mortgage.help')}
                        </p>
                        <p className="text-sm mb-6">
                          {t('realestate.mortgage.instruction')}
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">{t('realestate.mortgage.loanamount')}</label>
                            <input 
                              type="number" 
                              className="w-full p-2 border rounded" 
                              placeholder="z.B. 200000" 
                              value={loanAmount}
                              onChange={(e) => setLoanAmount(e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-1">{t('realestate.mortgage.interestrate')}</label>
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
                            <label className="block text-sm font-medium mb-1">{t('realestate.mortgage.term')}</label>
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
                        <h3 className="text-xl font-medium mb-4">{t('realestate.mortgage.result')}</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-muted-foreground">{t('realestate.mortgage.monthlypayment')}</p>
                            <p className="text-2xl font-bold">{formatCurrency(monthlyPayment)}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">{t('realestate.mortgage.totalinterest')}</p>
                            <p className="text-lg font-semibold">{formatCurrency(totalInterest)}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">{t('realestate.mortgage.totalpayment')}</p>
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
                    <h3 className="text-xl font-medium mb-4">{t('realestate.rates.title')}</h3>
                    <p className="text-muted-foreground mb-6">
                      {t('realestate.rates.updated')}
                    </p>
                    
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{t('realestate.rates.bank')}</TableHead>
                          <TableHead>{t('realestate.rates.fixed20')}</TableHead>
                          <TableHead>{t('realestate.rates.fixed10')}</TableHead>
                          <TableHead>{t('realestate.rates.variable')}</TableHead>
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
                      {t('realestate.rates.disclaimer')}
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
