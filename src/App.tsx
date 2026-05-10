import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FieldDetail from "./pages/FieldDetail.tsx";
import Explore from "./pages/Explore.tsx";
import Intake from "./pages/Intake.tsx";
import Plan from "./pages/Plan.tsx";
import Browse from "./pages/Browse.tsx";
import NotFound from "./pages/NotFound.tsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/intake" element={<Intake />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/field/:slug" element={<FieldDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </TooltipProvider>
);

export default App;
