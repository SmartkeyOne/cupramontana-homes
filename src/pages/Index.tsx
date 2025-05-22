
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title="Startseite" 
        description="Ihr umfassender Ratgeber für Immobilienkauf, Tourismus und Leben in der malerischen Region Marken."
        canonicalUrl="https://cupramontana.homes"
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
