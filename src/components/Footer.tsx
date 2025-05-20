
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-10 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Cupramontana.homes</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Informationsportal für Cupramontana und die Region Marken.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Startseite</Link></li>
              <li><Link to="/real-estate" className="text-muted-foreground hover:text-foreground">Immobilien</Link></li>
              <li><Link to="/tourism" className="text-muted-foreground hover:text-foreground">Tourismus</Link></li>
              <li><Link to="/jobs" className="text-muted-foreground hover:text-foreground">Arbeitsmarkt</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Sprachen</h4>
            <ul className="space-y-2">
              <li><button className="text-muted-foreground hover:text-foreground">Deutsch</button></li>
              <li><button className="text-muted-foreground hover:text-foreground">Italiano</button></li>
              <li><button className="text-muted-foreground hover:text-foreground">English</button></li>
              <li><button className="text-muted-foreground hover:text-foreground">Nederlands</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Cupramontana.homes. Alle Rechte vorbehalten. Informatives Non-Profit-Projekt.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
