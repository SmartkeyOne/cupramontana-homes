import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Contatti = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <SEOHelmet 
        title="Contatti - Verdicchio Territorio"
        description="Contatta il progetto Verdicchio Territorio per informazioni, collaborazioni o per aderire al progetto"
        keywords="Contatti, Verdicchio, territorio, collaborazioni, informazioni"
        canonicalUrl="https://cupramontana.homes/contatti"
      />
      <Navbar />
      
      {/* Contatti */}
      <section className="p-10 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Contattaci</h1>
          <p className="mb-6">Per informazioni, collaborazioni o per aderire al progetto di valorizzazione del Verdicchio, compila il modulo qui sotto oppure scrivici all'indirizzo e-mail ufficiale del Comune.</p>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Nome</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input type="email" className="w-full border border-gray-300 p-2 rounded" required />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Messaggio</label>
              <textarea className="w-full border border-gray-300 p-2 rounded h-32" required></textarea>
            </div>
            <button type="submit" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700">Invia</button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contatti;