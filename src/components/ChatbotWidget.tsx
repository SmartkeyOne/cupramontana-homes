
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, X } from "lucide-react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const getButtonText = () => {
    switch (language) {
      case 'de': return '🤖 Frag Marken!';
      case 'it': return '🤖 Chiedi alle Marche!';
      case 'nl': return '🤖 Vraag Marche!';
      default: return '🤖 Ask Marche!';
    }
  };

  const getSystemPrompt = () => {
    switch (language) {
      case 'de': 
        return 'Du bist ein freundlicher Assistent für die italienische Region Marken. Antworte auf Fragen rund um Immobilien, Jobs und Tourismus für deutschsprachige Nutzer.';
      case 'it': 
        return 'Sei un assistente gentile per la regione italiana delle Marche. Rispondi a domande su immobili, lavoro e turismo per utenti di lingua italiana.';
      case 'nl': 
        return 'Je bent een vriendelijke assistent voor de Italiaanse regio Marche. Beantwoord vragen over onroerend goed, banen en toerisme voor Nederlandstalige gebruikers.';
      default: 
        return 'You are a helpful assistant for the Italian region of Marche. Answer questions about real estate, jobs, and tourism for English-speaking users.';
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const chatURL = `https://lovable.dev/chat?model=gpt-4&apiKey=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&system=${encodeURIComponent(getSystemPrompt())}`;

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <Button
          onClick={toggleChatbot}
          className="rounded-full bg-black text-white hover:bg-gray-800 px-4 py-2 shadow-lg"
          size="lg"
        >
          {getButtonText()}
        </Button>
      </div>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 z-50">
          <Card className="w-[350px] h-[500px] shadow-xl overflow-hidden">
            <div className="flex justify-between items-center p-3 bg-black text-white">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4" />
                <span className="font-medium">Marche Assistant</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChatbot}
                className="text-white hover:bg-gray-700 p-1 h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <iframe
              src={chatURL}
              className="w-full h-[calc(100%-48px)] border-none"
              title="Marche Chatbot"
            />
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
