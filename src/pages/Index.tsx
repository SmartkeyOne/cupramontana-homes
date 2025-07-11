
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  // Define schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Verdicchio Territorio",
    "url": "https://verdicchio-territorio.it",
    "description": "Progetto di valorizzazione del territorio del Verdicchio - Un viaggio tra tradizione, innovazione e sviluppo sostenibile",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://verdicchio-territorio.it/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title="Verdicchio Territorio - Progetto di Valorizzazione"
        description="Progetto di valorizzazione del territorio del Verdicchio - Un viaggio tra tradizione, innovazione e sviluppo sostenibile"
        keywords="Verdicchio, territorio, valorizzazione, vino, Marche, tradizione, innovazione, sostenibilità"
        canonicalUrl="https://verdicchio-territorio.it"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                Verdicchio Territorio
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
                Un progetto di valorizzazione del territorio che unisce tradizione e innovazione
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button size="lg" className="text-lg px-8 py-4">
                  Scopri la Visione
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Esplora le Azioni
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduzione Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Il Territorio del Verdicchio
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Una terra ricca di storia, tradizioni e potenzialità, dove il vino Verdicchio rappresenta 
                  l'eccellenza e l'identità di un territorio unico nelle Marche.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🍇</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Tradizione</h3>
                    <p className="text-muted-foreground">
                      Secoli di sapienza vinicola e tradizioni che si tramandano di generazione in generazione.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Innovazione</h3>
                    <p className="text-muted-foreground">
                      Tecnologie moderne e pratiche sostenibili per valorizzare il territorio e le sue risorse.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Sviluppo</h3>
                    <p className="text-muted-foreground">
                      Progetti strategici per promuovere il turismo, l'economia locale e la qualità della vita.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-lg p-8 md:p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Un Futuro Sostenibile per il Verdicchio
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Il nostro progetto mira a creare un ecosistema integrato che valorizzi le eccellenze del territorio, 
                    promuova il turismo enogastronomico e generi opportunità di sviluppo sostenibile per le comunità locali. 
                    Attraverso investimenti mirati e azioni concrete, lavoriamo per costruire un futuro che onori il passato 
                    e abbracci l'innovazione.
                  </p>
                  <Button size="lg" className="text-lg px-8 py-4">
                    Partecipa al Progetto
                  </Button>
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

export default Index;
