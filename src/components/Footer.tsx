
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-10 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">WebDesign</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Wir entwickeln moderne Websites, die nicht nur gut aussehen, sondern auch Ergebnisse liefern.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground">Über uns</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@webdesign.de</li>
              <li>+49 123 456789</li>
              <li>Berlin, Deutschland</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} WebDesign. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
