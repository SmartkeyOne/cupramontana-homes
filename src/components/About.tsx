
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('about.description1')}
            </p>
            <p className="text-muted-foreground mb-6">
              {t('about.description2')}
            </p>
            <p className="text-muted-foreground">
              {t('about.description3')}
            </p>
          </div>
          
          <Card className="overflow-hidden border-none bg-primary/10 p-1">
            <CardContent className="grid grid-cols-2 gap-1 p-0">
              <div className="bg-primary h-40 rounded"></div>
              <div className="bg-primary/80 h-40 rounded"></div>
              <div className="bg-primary/60 h-40 rounded"></div>
              <div className="bg-primary/40 h-40 rounded"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
