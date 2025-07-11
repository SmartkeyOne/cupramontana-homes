import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Visione = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <SEOHelmet 
        title="Visione - Verdicchio Territorio"
        description="La visione del progetto Verdicchio Territorio: un futuro sostenibile per il territorio del Verdicchio"
        keywords="visione, Verdicchio, territorio, sostenibilità, futuro"
        canonicalUrl="https://cupramontana.homes/visione"
      />
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-green-800 mb-8">La Nostra Visione</h1>
          <div className="prose prose-lg text-gray-700">
            <p className="text-xl mb-6">
              Immaginare un territorio del Verdicchio che sia modello di eccellenza, 
              sostenibilità e innovazione nel panorama vitivinicolo italiano e internazionale.
            </p>
            <p>
              Contenuto della pagina Visione in sviluppo...
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Visione;