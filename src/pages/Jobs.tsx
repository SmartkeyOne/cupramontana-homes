
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { useLanguage } from '../contexts/LanguageContext';

const Jobs = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title={t('jobs.seo.title')}
        description={t('jobs.seo.description')}
        keywords={t('jobs.seo.keywords')}
        canonicalUrl="https://cupramontana.homes/jobs"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="section pt-16 md:pt-24">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('jobs.title')}</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              {t('jobs.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('jobs.market.title')}</h2>
                <p>
                  {t('jobs.market.description')}
                </p>
              </div>
            </div>
            
            {/* Placeholder for future job listings */}
            <div className="bg-muted p-8 rounded-lg text-center">
              <h2 className="text-xl font-medium mb-2">{t('jobs.coming.title')}</h2>
              <p>
                {t('jobs.coming.description')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
