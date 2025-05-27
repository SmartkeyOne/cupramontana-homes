
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import ChatbotWidget from "./components/ChatbotWidget";
import Index from "./pages/Index";
import RealEstate from "./pages/RealEstate";
import Tourism from "./pages/Tourism";
import Jobs from "./pages/Jobs";
import SportelloDigitale from "./pages/SportelloDigitale";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/real-estate" element={<RealEstate />} />
              <Route path="/tourism" element={<Tourism />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/sportello-digitale" element={<SportelloDigitale />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatbotWidget />
          </BrowserRouter>
        </LanguageProvider>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
