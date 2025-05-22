
import React from 'react';
import HeroContent from './hero/HeroContent';
import NewsWidget from './NewsWidget';

const Hero = () => {
  return (
    <section className="section pt-20 md:pt-28">
      <div className="container">
        <HeroContent />
      </div>

      {/* News Widget Section */}
      <div className="container mt-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <NewsWidget />
      </div>
      
      <div className="mt-16 bg-gradient-to-b from-primary/10 to-transparent h-32 w-full"></div>
    </section>
  );
};

export default Hero;
