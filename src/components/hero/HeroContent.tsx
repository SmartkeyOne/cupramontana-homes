
import React from 'react';
import Features from '../Features';
import NavigationButtons from './NavigationButtons';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroContent = () => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
        {t('hero.title')}
      </h1>
      <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {t('hero.subtitle')}
      </p>
      <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <Features />
      </div>
      <NavigationButtons />
    </div>
  );
};

export default HeroContent;
