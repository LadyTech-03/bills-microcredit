import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Preloader from "./components/Preloader";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import MediaGallery from "./pages/MediaGallery";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import Management from "./pages/Management";
import Ambassadors from "./pages/Ambassadors";
import TeamMemberDetail from "./pages/TeamMemberDetail";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* Preloader */}
        <Preloader onLoadingComplete={() => setShowPreloader(false)} />
        
        {/* Main App - Only render after preloader */}
        {!showPreloader && (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/products" element={<Product />} /> */}
              <Route path="/gallery" element={<MediaGallery />} />
              <Route path="/contact" element={<ContactUs />} />
              
              {/* Team Routes */}
              <Route path="/team/board-of-directors" element={<BoardOfDirectors />} />
              <Route path="/team/management" element={<Management />} />
              <Route path="/team/ambassador" element={<Ambassadors />} />
              <Route path="/team/:category/:id" element={<TeamMemberDetail />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
