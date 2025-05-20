
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("de");

  // Sprachoptionen
  const languages = [
    { code: "de", label: "Deutsch" },
    { code: "it", label: "Italiano" },
    { code: "en", label: "English" },
    { code: "nl", label: "Nederlands" }
  ];

  // Navigationsmenüpunkte
  const navItems = [
    { label: "Startseite", href: "/" },
    { label: "Immobilien", href: "/real-estate" },
    { label: "Tourismus", href: "/tourism" },
    { label: "Arbeitsmarkt", href: "/jobs" }
  ];

  const changeLanguage = (langCode: string) => {
    setLanguage(langCode);
    // Hier könnte später die Sprachänderungslogik implementiert werden
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-heading text-xl font-bold text-primary">Cupramontana.homes</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
          
          {/* Sprachauswahl Desktop */}
          <div className="relative group">
            <Button variant="ghost" size="sm" className="gap-1">
              <Globe className="h-4 w-4" />
              <span className="uppercase">{language}</span>
            </Button>
            <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-background border border-border invisible group-hover:visible">
              <div className="py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-muted"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menü öffnen</span>
        </Button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Sprachauswahl Mobile */}
              <div className="border-t pt-4">
                <p className="text-xs text-muted-foreground mb-2">Sprache ändern</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`text-sm py-1 px-2 rounded-md ${
                        language === lang.code ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
