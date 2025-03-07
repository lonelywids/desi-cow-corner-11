
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import MeetOurCows from "./pages/MeetOurCows";
import RescueMission from "./pages/RescueMission";
import FarmExperience from "./pages/FarmExperience";
import DesiInitiatives from "./pages/DesiInitiatives";
import AdoptACow from "./pages/AdoptACow";
import Donation from "./pages/Donation";
import Volunteer from "./pages/Volunteer";
import VolunteerOpportunities from "./pages/VolunteerOpportunities";
import Ambassador from "./pages/Ambassador";
import CorporatePartnership from "./pages/CorporatePartnership";
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
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<ProductDetail />} />
          <Route path="/meet-our-cows" element={<MeetOurCows />} />
          <Route path="/rescue-mission" element={<RescueMission />} />
          <Route path="/farm-experience" element={<FarmExperience />} />
          <Route path="/desi-initiatives" element={<DesiInitiatives />} />
          <Route path="/adopt-a-cow" element={<AdoptACow />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/volunteer-opportunities" element={<VolunteerOpportunities />} />
          <Route path="/ambassador" element={<Ambassador />} />
          <Route path="/corporate-partnership" element={<CorporatePartnership />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
