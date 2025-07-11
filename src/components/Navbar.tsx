
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-green-800 text-white">
      <nav className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-lg text-white">Verdicchio Territorio</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-white hover:underline">Home</Link>
          <Link to="/visione" className="text-sm font-medium text-white hover:underline">Visione</Link>
          <Link to="/azioni" className="text-sm font-medium text-white hover:underline">Azioni</Link>
          <Link to="/investimenti" className="text-sm font-medium text-white hover:underline">Investimenti</Link>
          <Link to="/contatti" className="text-sm font-medium text-white hover:underline">Contatti</Link>
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
          <div className="absolute top-16 left-0 right-0 bg-green-800 border-b p-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium text-white hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/visione" className="text-sm font-medium text-white hover:underline" onClick={() => setIsOpen(false)}>Visione</Link>
              <Link to="/azioni" className="text-sm font-medium text-white hover:underline" onClick={() => setIsOpen(false)}>Azioni</Link>
              <Link to="/investimenti" className="text-sm font-medium text-white hover:underline" onClick={() => setIsOpen(false)}>Investimenti</Link>
              <Link to="/contatti" className="text-sm font-medium text-white hover:underline" onClick={() => setIsOpen(false)}>Contatti</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
