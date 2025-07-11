import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <SEOHelmet 
        title="Contatti - Verdicchio Territorio"
        description="Contatta il team del progetto Verdicchio Territorio per informazioni, collaborazioni o per aderire al progetto"
        keywords="contatti, Verdicchio, territorio, collaborazioni, informazioni"
        canonicalUrl="https://cupramontana.homes/contatti"
      />
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-green-800 mb-6">Contattaci</h1>
            <p className="text-lg text-gray-700 mb-8">
              Per informazioni, collaborazioni o per aderire al progetto di valorizzazione del Verdicchio, 
              compila il modulo qui sotto oppure scrivici all'indirizzo e-mail ufficiale del Comune.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nome" className="block mb-2 font-semibold text-gray-900">Nome</Label>
                <Input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block mb-2 font-semibold text-gray-900">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Label htmlFor="messaggio" className="block mb-2 font-semibold text-gray-900">Messaggio</Label>
                <Textarea
                  id="messaggio"
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  required
                  className="w-full min-h-32"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Invia
              </Button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contatti;