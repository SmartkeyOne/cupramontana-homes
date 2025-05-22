import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Jobs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title="Stellenangebote in Cupramontana" 
        description="Aktuelle Stellenangebote und Karrieremöglichkeiten in Cupramontana und der Region Marken, Italien."
        keywords="Jobs Cupramontana, Stellenangebote Italien, Karriere Marken, Arbeiten in Italien"
        canonicalUrl="https://cupramontana.homes/jobs"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="section pt-16 md:pt-24">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Stellenangebote in Cupramontana</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
              Entdecken Sie aktuelle Karrieremöglichkeiten und Stellenangebote in Cupramontana und der umliegenden Region Marken.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Arbeitsmarkt in den Marken</h2>
                <p>
                  Die Region Marken bietet vielfältige Beschäftigungsmöglichkeiten in verschiedenen Branchen, 
                  insbesondere in Tourismus, Landwirtschaft und Weinbau, sowie im handwerklichen Sektor.
                </p>
              </div>
            </div>
            
            {/* Placeholder für zukünftige Joblistings */}
            <div className="bg-muted p-8 rounded-lg text-center">
              <h2 className="text-xl font-medium mb-2">Demnächst verfügbar</h2>
              <p>
                Stellenangebote für Cupramontana werden in Kürze hier erscheinen. Schauen Sie bald wieder vorbei!
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
