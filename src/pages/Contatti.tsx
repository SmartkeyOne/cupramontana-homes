import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet 
        title="Contatti - Verdicchio Territorio"
        description="Contattaci per informazioni, collaborazioni o per aderire al progetto di valorizzazione del Verdicchio"
        keywords="Verdicchio, contatti, collaborazioni, informazioni"
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-800 to-green-600 text-white p-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contattaci</h1>
            <p className="text-lg">
              Per informazioni, collaborazioni o per aderire al progetto di valorizzazione del Verdicchio, 
              compila il modulo qui sotto oppure scrivici all'indirizzo e-mail ufficiale del Comune.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="p-10 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800">Invia un Messaggio</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Il tuo nome completo"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="la.tua.email@esempio.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold">Messaggio *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 h-32"
                        placeholder="Scrivi qui il tuo messaggio..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-green-800 hover:bg-green-700 text-white"
                    >
                      Invia Messaggio
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-800">Informazioni di Contatto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Email Ufficiale</h3>
                        <p className="text-gray-600">comune@cupramontana.gov.it</p>
                        <p className="text-sm text-gray-500">Per comunicazioni ufficiali e collaborazioni</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Telefono</h3>
                        <p className="text-gray-600">+39 0731 780001</p>
                        <p className="text-sm text-gray-500">Lun-Ven 9:00-17:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Indirizzo</h3>
                        <p className="text-gray-600">
                          Piazza Cavour, 1<br />
                          60034 Cupramontana (AN)<br />
                          Marche, Italia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-green-800">Orari di Apertura</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Lunedì - Venerdì</span>
                        <span className="font-semibold">9:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sabato</span>
                        <span className="font-semibold">9:00 - 12:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domenica</span>
                        <span className="text-gray-500">Chiuso</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-green-800">Come Raggiungerci</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Cupramontana si trova nel cuore delle Marche, facilmente raggiungibile da:
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Autostrada A14: Uscita Ancona Nord (30 km)</li>
                      <li>• Aeroporto Ancona Falconara: 45 km</li>
                      <li>• Stazione FS Jesi: 15 km</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contatti;