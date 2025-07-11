import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Azioni = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <SEOHelmet 
        title="Azioni - Verdicchio Territorio"
        description="Le azioni concrete del progetto Verdicchio Territorio per la valorizzazione del territorio"
        keywords="azioni, Verdicchio, territorio, progetti, iniziative"
        canonicalUrl="https://cupramontana.homes/azioni"
      />
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Le Nostre Azioni</h1>
          <div className="prose prose-lg text-gray-700">
            <p className="text-xl mb-6">
              Un piano strategico di azioni concrete per valorizzare il territorio del Verdicchio 
              e le sue eccellenze.
            </p>
            <p>
              Contenuto della pagina Azioni in sviluppo...
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Azioni;