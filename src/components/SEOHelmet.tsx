
import React from 'react';
import { Helmet } from 'react-helmet-async';

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
  const fullTitle = `${title} | Cupramontana.homes`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="de_DE" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHelmet;
