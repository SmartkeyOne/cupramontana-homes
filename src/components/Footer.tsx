
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language, setLanguage, t, languages } = useLanguage();
  
  return (
    <footer className="bg-muted py-10 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Cupramontana.homes</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t('footer.info')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('nav.home')}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">{t('nav.home')}</Link></li>
              <li><Link to="/real-estate" className="text-muted-foreground hover:text-foreground">{t('nav.realEstate')}</Link></li>
              <li><Link to="/tourism" className="text-muted-foreground hover:text-foreground">{t('nav.tourism')}</Link></li>
              <li><Link to="/jobs" className="text-muted-foreground hover:text-foreground">{t('nav.jobs')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('language.change')}</h4>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button 
                    className={`text-muted-foreground hover:text-foreground ${language === lang.code ? 'font-medium text-primary' : ''}`}
                    onClick={() => setLanguage(lang.code)}
                  >
                    {lang.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Cupramontana.homes. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
