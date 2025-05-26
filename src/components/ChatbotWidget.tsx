
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bot, X, Send, User } from "lucide-react";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message
      setMessages([{
        role: 'assistant',
        content: language === 'de' ? 'Hallo! Wie kann ich Ihnen bei Fragen zu den Marken helfen?' :
                language === 'it' ? 'Ciao! Come posso aiutarti con le Marche?' :
                language === 'nl' ? 'Hallo! Hoe kan ik je helpen met vragen over Marche?' :
                'Hello! How can I help you with questions about Marche?'
      }]);
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-openai', {
        body: {
          messages: updatedMessages,
          systemPrompt: getSystemPrompt()
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling chat function:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: language === 'de' ? 'Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut.' :
                language === 'it' ? 'Scusa, c\'è stato un errore. Riprova.' :
                language === 'nl' ? 'Sorry, er was een fout. Probeer het opnieuw.' :
                'Sorry, there was an error. Please try again.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

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
          <Card className="w-[350px] h-[500px] shadow-xl overflow-hidden flex flex-col">
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

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${
                      message.role === 'user'
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                      <User className="h-3 w-3 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="bg-gray-100 p-2 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    language === 'de' ? 'Nachricht eingeben...' :
                    language === 'it' ? 'Scrivi un messaggio...' :
                    language === 'nl' ? 'Typ een bericht...' :
                    'Type a message...'
                  }
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
