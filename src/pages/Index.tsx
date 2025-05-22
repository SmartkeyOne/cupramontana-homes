
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const { t, language } = useLanguage();
  
  // Define schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cupramontana.homes",
    "url": "https://cupramontana.homes",
    "description": "Ihr umfassender Ratgeber für Immobilienkauf, Tourismus und Leben in der malerischen Region Marken.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cupramontana.homes/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title={language === 'de' ? "Startseite" : (language === 'it' ? "Pagina Iniziale" : (language === 'nl' ? "Startpagina" : "Home"))}
        description={language === 'de' 
          ? "Ihr umfassender Ratgeber für Immobilienkauf, Tourismus und Leben in der malerischen Region Marken."
          : (language === 'it' 
              ? "La tua guida completa all'acquisto di immobili, al turismo e alla vita nella pittoresca regione delle Marche." 
              : (language === 'nl'
                  ? "Uw uitgebreide gids voor het kopen van onroerend goed, toerisme en leven in de schilderachtige regio Marche."
                  : "Your comprehensive guide to real estate purchases, tourism, and living in the picturesque Marche region."))}
        keywords={language === 'de'
          ? "Cupramontana, Marken, Italien, Immobilien, Tourismus, Jobs, Verdicchio, Weinregion"
          : (language === 'it'
              ? "Cupramontana, Marche, Italia, immobili, turismo, lavoro, Verdicchio, regione vinicola"
              : (language === 'nl'
                  ? "Cupramontana, Marche, Italië, vastgoed, toerisme, banen, Verdicchio, wijnstreek"
                  : "Cupramontana, Marche, Italy, real estate, tourism, jobs, Verdicchio, wine region"))}
        canonicalUrl="https://cupramontana.homes"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
