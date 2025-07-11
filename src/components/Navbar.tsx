
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
    { label: "Investimenti", href: "/investimenti" },
    { label: "Contatti", href: "/contatti" }
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
              className="gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
              onMouseEnter={() => setIsVerdicchioOpen(true)}
              onMouseLeave={() => setIsVerdicchioOpen(false)}
            >
              Verdicchio
              <ChevronDown className="h-4 w-4" />
            </Button>
            <div 
              className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border z-50 ${
                isVerdicchioOpen ? 'visible opacity-100' : 'invisible opacity-0'
              } transition-all duration-200`}
              onMouseEnter={() => setIsVerdicchioOpen(true)}
              onMouseLeave={() => setIsVerdicchioOpen(false)}
            >
              <div className="py-1">
                {verdicchioItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                    onClick={() => setIsVerdicchioOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Language selection desktop */}
          <div className="relative group">
            <Button variant="ghost" size="sm" className="gap-1">
              <Globe className="h-4 w-4" />
              <span className="uppercase">{language}</span>
            </Button>
            <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-background border border-border invisible group-hover:visible z-50">
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
              <div className="border-t pt-4">
                <p className="text-xs text-muted-foreground mb-2 font-semibold">Verdicchio</p>
                <div className="space-y-2">
                  {verdicchioItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm font-medium text-muted-foreground hover:text-foreground pl-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Language selection mobile */}
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
