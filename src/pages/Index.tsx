
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
    "description": t('hero.subtitle'),
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cupramontana.homes/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Get localized SEO content
  const getLocalizedTitle = () => {
    switch (language) {
      case 'de': return "Startseite";
      case 'it': return "Pagina Iniziale";
      case 'nl': return "Startpagina";
      default: return "Home";
    }
  };

  const getLocalizedKeywords = () => {
    switch (language) {
      case 'de': return "Cupramontana, Marken, Italien, Immobilien, Tourismus, Jobs, Verdicchio, Weinregion";
      case 'it': return "Cupramontana, Marche, Italia, immobili, turismo, lavoro, Verdicchio, regione vinicola";
      case 'nl': return "Cupramontana, Marche, Italië, vastgoed, toerisme, banen, Verdicchio, wijnstreek";
      default: return "Cupramontana, Marche, Italy, real estate, tourism, jobs, Verdicchio, wine region";
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title={getLocalizedTitle()}
        description={t('hero.subtitle')}
        keywords={getLocalizedKeywords()}
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
