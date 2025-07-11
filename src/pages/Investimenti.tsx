import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Investimenti = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <SEOHelmet 
        title="Investimenti - Verdicchio Territorio"
        description="Opportunità di investimento nel progetto Verdicchio Territorio"
        keywords="investimenti, Verdicchio, territorio, opportunità, finanziamenti"
        canonicalUrl="https://cupramontana.homes/investimenti"
      />
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Investimenti</h1>
          <div className="prose prose-lg text-gray-700">
            <p className="text-xl mb-6">
              Opportunità di investimento sostenibile nel territorio del Verdicchio, 
              per creare valore condiviso e sviluppo duraturo.
            </p>
            <p>
              Contenuto della pagina Investimenti in sviluppo...
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Investimenti;