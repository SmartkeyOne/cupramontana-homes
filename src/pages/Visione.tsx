import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { useLanguage } from '../contexts/LanguageContext';

const Visione = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title={t('visione.title')}
        description={t('visione.subtitle')}
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
            <h1 className="text-4xl font-bold mb-6">{t('visione.title')}</h1>
            <p className="text-lg mb-4">
              {t('visione.hero.description1')}
            </p>
            <p className="text-lg mb-4">
              {t('visione.hero.description2')}
            </p>
            <p className="text-lg">
              {t('visione.hero.description3')}
            </p>
          </div>
        </section>

        {/* Additional Content */}
        <section className="p-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-green-800">{t('visione.objectives.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{t('visione.quality.title')}</h3>
                <p>{t('visione.quality.description')}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{t('visione.sustainability.title')}</h3>
                <p>{t('visione.sustainability.description')}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{t('visione.territorial.title')}</h3>
                <p>{t('visione.territorial.description')}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{t('visione.cultural.title')}</h3>
                <p>{t('visione.cultural.description')}</p>
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