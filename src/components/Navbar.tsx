
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerdicchioOpen, setIsVerdicchioOpen] = useState(false);
  const { language, setLanguage, t, languages } = useLanguage();

  // Main navigation menu items
  const mainNavItems = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.realEstate'), href: "/real-estate" },
    { label: t('nav.tourism'), href: "/tourism" },
    { label: t('nav.jobs'), href: "/jobs" },
    { label: t('nav.sportelloDigitale'), href: "/sportello-digitale" }
  ];

  // Verdicchio dropdown items
  const verdicchioItems = [
    { label: "Visione", href: "/visione" },
    { label: "Azioni", href: "/azioni" },
    { label: "Investimenti", href: "/investimenti" }
  ];

  const changeLanguage = (langCode: typeof language) => {
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
          {mainNavItems.map((item) => (
            <Link key={item.href} to={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
          
          {/* Verdicchio Dropdown */}
          <div className="relative group">
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onMouseEnter={() => setIsVerdicchioOpen(true)}
              onMouseLeave={() => setIsVerdicchioOpen(false)}
            >
              Verdicchio
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Button>
            <div 
              className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-card border border-border z-50 overflow-hidden ${
                isVerdicchioOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2'
              } transition-all duration-200 ease-out`}
              onMouseEnter={() => setIsVerdicchioOpen(true)}
              onMouseLeave={() => setIsVerdicchioOpen(false)}
            >
              <div className="py-2">
                {verdicchioItems.map((item, index) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-3 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors border-b border-border/50 last:border-b-0"
                    onClick={() => setIsVerdicchioOpen(false)}
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Language selection desktop */}
          <div className="relative group">
            <Button variant="ghost" size="sm" className="gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="h-4 w-4" />
              <span className="uppercase">{language}</span>
              <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
            </Button>
            <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-card border border-border invisible group-hover:visible z-50 overflow-hidden transition-all duration-200">
              <div className="py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-3 text-sm transition-colors border-b border-border/50 last:border-b-0 ${
                      language === lang.code 
                        ? 'text-primary font-semibold bg-accent/50' 
                        : 'text-card-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
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
          <span className="sr-only">Open menu</span>
        </Button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 md:hidden animate-fade-in z-50">
            <div className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Verdicchio section mobile */}
              <div className="border-t border-border pt-4 mt-4">
                <p className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wide">Verdicchio</p>
                <div className="space-y-1 bg-muted/30 rounded-lg p-2">
                  {verdicchioItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm font-medium text-card-foreground hover:text-primary hover:bg-accent/50 px-3 py-2 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Language selection mobile */}
              <div className="border-t border-border pt-4 mt-4">
                <p className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wide">{t('language.change')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`text-sm py-3 px-3 rounded-lg border transition-colors ${
                        language === lang.code 
                          ? 'bg-primary text-primary-foreground border-primary font-semibold' 
                          : 'bg-card text-card-foreground border-border hover:bg-accent hover:text-accent-foreground'
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
