
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage, SupportedLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Sprachoptionen
  const languages = [
    { code: "de" as SupportedLanguage, label: t('language.de') },
    { code: "it" as SupportedLanguage, label: t('language.it') },
    { code: "en" as SupportedLanguage, label: t('language.en') },
    { code: "nl" as SupportedLanguage, label: t('language.nl') }
  ];

  // Navigationsmenüpunkte
  const navItems = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.realEstate'), href: "/real-estate" },
    { label: t('nav.tourism'), href: "/tourism" },
    { label: t('nav.jobs'), href: "/jobs" }
  ];

  const changeLanguage = (langCode: SupportedLanguage) => {
    setLanguage(langCode);
    setIsOpen(false);
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
                    className={`block w-full text-left px-4 py-2 text-sm ${language === lang.code ? 'text-primary font-medium' : 'text-muted-foreground'} hover:bg-muted`}
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
                <p className="text-xs text-muted-foreground mb-2">{t('language.change')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
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
