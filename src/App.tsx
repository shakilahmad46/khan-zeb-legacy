import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Biography from "./pages/Biography";
import Scholarship from "./pages/Scholarship";
import Peace from "./pages/Peace";
import Elections from "./pages/Elections";
import Assassination from "./pages/Assassination";
import Reaction from "./pages/Reaction";
import Legacy from "./pages/Legacy";
import Quotes from "./pages/Quotes";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/peace" element={<Peace />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/assassination" element={<Assassination />} />
          <Route path="/reaction" element={<Reaction />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/resources" element={<Resources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
