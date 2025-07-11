import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Azioni = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title="Azioni Concrete - Verdicchio Territorio"
        description="Azioni concrete per la valorizzazione del territorio del Verdicchio"
        keywords="Verdicchio, azioni, zonazione, formazione, marketing, enoturismo"
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="text-white p-20 min-h-[400px] flex items-center"
          style={{
            backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Cupramontana_panorama.JPG/1280px-Cupramontana_panorama.JPG)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="bg-black bg-opacity-60 p-8 rounded max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Azioni Concrete</h1>
            <p className="text-lg mb-4">
              Un piano d'azione strutturato per trasformare la visione in risultati tangibili e misurabili.
            </p>
          </div>
        </section>

        {/* Azioni Content */}
        <section className="p-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Zonazione Agronomica</h3>
                <p className="mb-4">Mappatura dettagliata dei micro-terroir per identificare le zone più vocate alla produzione di Verdicchio di eccellenza.</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Analisi pedoclimatiche approfondite</li>
                  <li>Studio delle caratteristiche del suolo</li>
                  <li>Monitoraggio microclimatico</li>
                  <li>Definizione di protocolli di coltivazione specifici per zona</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Formazione e Cura del Vigneto</h3>
                <p className="mb-4">Programmi formativi e consulenze specializzate per elevare le competenze tecniche dei viticoltori.</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Corsi di potatura e gestione del vigneto</li>
                  <li>Tecniche di vinificazione innovative</li>
                  <li>Pratiche di agricoltura sostenibile</li>
                  <li>Consulenze personalizzate aziendali</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">Marketing Territoriale</h3>
                <p className="mb-4">Strategie di comunicazione per raccontare l'autenticità e l'unicità del territorio del Verdicchio.</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Storytelling autentico del territorio</li>
                  <li>Campagne digitali mirate</li>
                  <li>Partnership con influencer del settore</li>
                  <li>Presenza in fiere e eventi internazionali</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                <h3 className="text-2xl font-bold mb-4 text-orange-800">Enoturismo</h3>
                <p className="mb-4">Sviluppo di percorsi turistici integrati che valorizzino il patrimonio vitivinicolo e culturale.</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Sentieri del vino tra i vigneti</li>
                  <li>Eventi enogastronomici stagionali</li>
                  <li>Degustazioni guidate nelle cantine</li>
                  <li>Collaborazioni con strutture ricettive locali</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Azioni;