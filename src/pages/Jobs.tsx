
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

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
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('jobs.market.title')}</h2>
                <p className="mb-4">
                  {t('jobs.market.description')}
                </p>
                <p className="mb-4">
                  {t('jobs.market.opportunities')}
                </p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">{t('jobs.region.title')}</h2>
                <p className="mb-4">
                  {t('jobs.region.description')}
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t('jobs.region.feature1')}</li>
                  <li>{t('jobs.region.feature2')}</li>
                  <li>{t('jobs.region.feature3')}</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">{t('jobs.sectors.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>{t('jobs.sectors.tourism.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{t('jobs.sectors.tourism.description')}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>{t('jobs.sectors.agriculture.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{t('jobs.sectors.agriculture.description')}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>{t('jobs.sectors.craft.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{t('jobs.sectors.craft.description')}</p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">{t('jobs.listings.title')}</h2>
            <div className="space-y-6 mb-16">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">{t('jobs.coming.title')}</h3>
                <p className="mb-4">
                  {t('jobs.coming.description')}
                </p>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-2">{t('jobs.resources.title')}</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.indeed.it/offerte-lavoro-Cupramontana" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center text-primary hover:underline">
                        Indeed Italia <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </li>
                    <li>
                      <a href="https://it.linkedin.com/jobs/cupramontana-offerte-di-lavoro" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center text-primary hover:underline">
                        LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 p-8 rounded-lg mb-10">
              <h2 className="text-2xl font-bold mb-4">{t('jobs.contact.title')}</h2>
              <p className="mb-6">{t('jobs.contact.description')}</p>
              <Button>
                {t('jobs.contact.button')}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
