
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { useLanguage } from '../contexts/LanguageContext';
import { formatCurrency } from '../utils/formatters';
import InfoCardSection from '../components/realEstate/InfoCardSection';
import DigitalIdentitySection from '../components/realEstate/DigitalIdentitySection';
import MortgageTabs from '../components/realEstate/MortgageTabs';

const RealEstate = () => {
  const { t, language } = useLanguage();

  // Currency formatter that uses the current language
  const formatCurrencyWithCurrentLang = (value: number | null): string => {
    return formatCurrency(value, language);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title={t('realestate.seo.title')}
        description={t('realestate.seo.description')}
        keywords="Cupramontana, Real Estate, Property, Immobili, Immobilien, Marche, Italy"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="section pt-16 md:pt-24">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('realestate.title')}</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              {t('realestate.subtitle')}
            </p>
            
            {/* Info Cards */}
            <InfoCardSection />
            
            {/* Digital Identity Section */}
            <DigitalIdentitySection />
            
            {/* Mortgage Calculator */}
            <MortgageTabs formatCurrency={formatCurrencyWithCurrentLang} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RealEstate;
