
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

const SEOHelmet = ({
  title = "Cupramontana.homes",
  description = "Ihr umfassender Ratgeber für Immobilienkauf, Tourismus und Leben in der malerischen Region Marken.",
  keywords = "Cupramontana, Marken, Italien, Immobilien, Tourismus, Jobs",
  canonicalUrl = "https://cupramontana.homes",
  ogType = "website",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png"
}: SEOHelmetProps) => {
  const { language } = useLanguage();
  const fullTitle = `${title} | Cupramontana.homes`;
  
  // Determine language-specific meta attributes
  const htmlLang = language;
  const ogLocale = {
    'de': 'de_DE',
    'it': 'it_IT',
    'en': 'en_US',
    'nl': 'nl_NL'
  }[language] || 'de_DE';
  
  // Generate alternate language URLs
  const alternateUrls = {
    'de': canonicalUrl,
    'it': canonicalUrl,
    'en': canonicalUrl,
    'nl': canonicalUrl
  };
  
  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate language links */}
      {Object.entries(alternateUrls).map(([lang, url]) => (
        <link 
          key={lang}
          rel="alternate" 
          hrefLang={lang} 
          href={url} 
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={alternateUrls.en} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHelmet;
