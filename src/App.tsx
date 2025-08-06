import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Budget from "./pages/Budget";
import Engagements from "./pages/Engagements";
import Paiements from "./pages/Paiements";
import Tresorerie from "./pages/Tresorerie";
import Avances from "./pages/Avances";
import Fournisseurs from "./pages/Fournisseurs";
import Reporting from "./pages/Reporting";
import Archives from "./pages/Archives";
import AdminUsers from "./pages/admin/Users";
import AdminSecurity from "./pages/admin/Security";
import AdminSettings from "./pages/admin/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/engagements" element={<Engagements />} />
          <Route path="/paiements" element={<Paiements />} />
          <Route path="/tresorerie" element={<Tresorerie />} />
          <Route path="/avances" element={<Avances />} />
          <Route path="/fournisseurs" element={<Fournisseurs />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/security" element={<AdminSecurity />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
