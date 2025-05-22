
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { useLanguage } from '../contexts/LanguageContext';
import JobMarketOverview from '../components/jobs/JobMarketOverview';
import RegionOverview from '../components/jobs/RegionOverview';
import SectorOverview from '../components/jobs/SectorOverview';
import EmploymentGuidance from '../components/jobs/EmploymentGuidance';
import JobBoards from '../components/jobs/JobBoards';

const Jobs = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title={t('jobs.seo.title')}
        description={t('jobs.seo.description')}
        keywords={t('jobs.seo.keywords')}
        canonicalUrl="https://cupramontana.homes/jobs"
        ogImage="/images/jobs-cupramontana.jpg"
        ogType="website"
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
              <JobMarketOverview />
              <RegionOverview />
            </div>
            
            <SectorOverview />
            <EmploymentGuidance />
            <JobBoards />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
