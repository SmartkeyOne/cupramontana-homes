import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Visione = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title="Visione Strategica - Verdicchio Territorio"
        description="Una visione strategica per promuovere qualità, cultura e identità vitivinicola nelle Marche"
        keywords="Verdicchio, Marche, vino, strategia, territorio"
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="text-white p-20 min-h-[400px] flex items-center"
          style={{
            backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Vigneti_Marche.jpg/1280px-Vigneti_Marche.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="bg-black bg-opacity-60 p-8 rounded max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Visione Strategica</h1>
            <p className="text-lg mb-4">
              Il Verdicchio non è solo un vino: è espressione del nostro paesaggio, della nostra cultura, della nostra identità marchigiana.
            </p>
            <p className="text-lg mb-4">
              La nostra visione mira a trasformare il territorio del Verdicchio in un modello di eccellenza vitivinicola, dove tradizione e innovazione si incontrano per creare valore economico, sociale e culturale.
            </p>
            <p className="text-lg">
              Attraverso un approccio integrato che coinvolge produttori, istituzioni e comunità locali, puntiamo a elevare la qualità del prodotto e a rafforzare l'identità territoriale delle Marche nel panorama vitivinicolo nazionale e internazionale.
            </p>
          </div>
        </section>

        {/* Additional Content */}
        <section className="p-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-green-800">I Nostri Obiettivi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Qualità del Prodotto</h3>
                <p>Elevare gli standard qualitativi attraverso ricerca, innovazione tecnologica e rispetto per le tradizioni.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Sostenibilità</h3>
                <p>Promuovere pratiche viticole sostenibili che rispettino l'ambiente e preservino il territorio per le future generazioni.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Valorizzazione Territoriale</h3>
                <p>Sviluppare l'enoturismo e le attività collegate per creare un ecosistema economico virtuoso.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Identità Culturale</h3>
                <p>Rafforzare il legame tra vino, territorio e comunità locale attraverso iniziative culturali e formative.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Visione;