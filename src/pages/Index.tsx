
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Index = () => {
  
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <SEOHelmet 
        title="Home - Verdicchio Territorio"
        description="Progetto di valorizzazione del Verdicchio - Un territorio, un vino, una tradizione da preservare e valorizzare"
        keywords="Verdicchio, territorio, vino, valorizzazione, Marche, tradizione"
        canonicalUrl="https://cupramontana.homes"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Verdicchio Territorio
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Un progetto ambizioso per la valorizzazione del territorio del Verdicchio, 
            unendo tradizione e innovazione per costruire un futuro sostenibile e prosperoso.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Scopri la Visione
            </button>
            <button className="border border-green-800 text-green-800 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors">
              Le Nostre Azioni
            </button>
          </div>
        </div>
      </section>

      {/* Introduzione Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
            Il Nostro Impegno per il Territorio
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              Il progetto Verdicchio Territorio nasce dalla volontà di valorizzare uno dei patrimoni 
              più preziosi delle Marche: il vitigno Verdicchio e il territorio che lo ospita. 
              Attraverso un approccio integrato e sostenibile, vogliamo promuovere lo sviluppo 
              economico, culturale e turistico di questa straordinaria area.
            </p>
            <p className="mb-6">
              La nostra missione è quella di creare sinergie tra produttori, istituzioni, 
              operatori del settore e comunità locali, per costruire un modello di sviluppo 
              che rispetti l'ambiente, valorizzi le tradizioni e apra nuove opportunità per le 
              generazioni future.
            </p>
            <p>
              Con il supporto di investimenti mirati e azioni concrete, intendiamo posizionare 
              il territorio del Verdicchio come eccellenza riconosciuta a livello nazionale e internazionale, 
              creando valore condiviso per tutti gli stakeholder coinvolti.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
