import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Investimenti = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title="Investimenti Attivi - Verdicchio Territorio"
        description="Investimenti e finanziamenti per la valorizzazione del territorio del Verdicchio"
        keywords="Verdicchio, investimenti, finanziamenti, DOCG, PSR, bandi"
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="text-white p-20 min-h-[400px] flex items-center"
          style={{
            backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Uva_verdicchio.jpg/1280px-Uva_verdicchio.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="bg-black bg-opacity-60 p-8 rounded max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Investimenti Attivi</h1>
            <p className="text-lg mb-4">
              Risorse concrete e strategiche per lo sviluppo del territorio del Verdicchio.
            </p>
            <p className="text-lg">
              Un impegno economico significativo che testimonia la fiducia nel potenziale di crescita del nostro territorio.
            </p>
          </div>
        </section>

        {/* Investimenti Content */}
        <section className="p-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Zonazione per la nuova DOCG</h3>
                <p className="text-lg mb-4">
                  Progetto strategico per l'identificazione e la delimitazione delle zone più vocate alla produzione di Verdicchio di massima qualità.
                </p>
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold text-green-700">Obiettivo: Riconoscimento DOCG per il Verdicchio di eccellenza</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">28+ Milioni di Euro Investiti</h3>
                <p className="text-lg mb-4">
                  Un investimento significativo distribuito su più anni per garantire uno sviluppo sostenibile e duraturo del settore.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold text-blue-700 mb-2">Infrastrutture</h4>
                    <p className="text-sm">Modernizzazione delle strutture produttive e logistiche</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-semibold text-blue-700 mb-2">Ricerca & Sviluppo</h4>
                    <p className="text-sm">Innovazione tecnologica e ricerca applicata</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">Bandi Regionali e PSR 2025–2026</h3>
                <p className="text-lg mb-4">
                  Accesso a finanziamenti europei e regionali per supportare l'innovazione e la competitività del settore vitivinicolo.
                </p>
                <ul className="space-y-2">
                  <li className="bg-white p-3 rounded shadow-sm flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span>Sostegno agli investimenti aziendali</span>
                  </li>
                  <li className="bg-white p-3 rounded shadow-sm flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span>Finanziamenti per l'innovazione tecnologica</span>
                  </li>
                  <li className="bg-white p-3 rounded shadow-sm flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    <span>Progetti di valorizzazione territoriale</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-orange-800">Piani Promozionali Digitali</h3>
                <p className="text-lg mb-4">
                  Strategie di marketing digitale per rafforzare la presenza del Verdicchio sui mercati nazionali e internazionali.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded shadow-sm text-center">
                    <h4 className="font-semibold text-orange-700 mb-2">Social Media</h4>
                    <p className="text-sm">Campagne su piattaforme digitali</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm text-center">
                    <h4 className="font-semibold text-orange-700 mb-2">E-commerce</h4>
                    <p className="text-sm">Vendite online dirette</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm text-center">
                    <h4 className="font-semibold text-orange-700 mb-2">Digital PR</h4>
                    <p className="text-sm">Relazioni pubbliche digitali</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-100 to-red-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-red-800">Nuova Legge Regionale Enoturismo</h3>
                <p className="text-lg mb-4">
                  Quadro normativo aggiornato per favorire lo sviluppo dell'enoturismo e delle attività collegate al mondo del vino.
                </p>
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold text-red-700 mb-2">Benefici della nuova legge:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Semplificazione delle procedure burocratiche</li>
                    <li>• Incentivi fiscali per le attività enoturistiche</li>
                    <li>• Sostegno alla creazione di percorsi integrati</li>
                    <li>• Promozione delle eccellenze territoriali</li>
                  </ul>
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

export default Investimenti;