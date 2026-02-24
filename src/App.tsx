import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { LoadingScreen } from "@/components/LoadingScreen";

// Lazy load the AI Chat Widget to avoid impacting initial page load
const AIChatWidget = lazy(() => 
  import('@/components/chat/AIChatWidget').then(module => ({
    default: module.AIChatWidget
  }))
);
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import Features from "./pages/Features";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import Resources from "./pages/Resources";
import Trust from "./pages/Trust";
import Contact from "./pages/Contact";

import NotFound from "./pages/NotFound";

// Platform Pages
import DeliveryManagement from "./pages/platform/DeliveryManagement";
import MobileApp from "./pages/platform/MobileApp";
import Optimizer from "./pages/platform/Optimizer";
import Multicarrier from "./pages/platform/Multicarrier";
import ProductInsights from "./pages/platform/ProductInsights";

// Industry Pages
import LastMile from "./pages/industries/LastMile";
import Couriers from "./pages/industries/Couriers";
import ExpressParcel from "./pages/industries/ExpressParcel";
import RetailEcommerce from "./pages/industries/RetailEcommerce";
import Logistics3PL from "./pages/industries/Logistics3PL";
import Hyperlocal from "./pages/industries/Hyperlocal";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setIsLoading(false);
      setShowApp(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasLoaded', 'true');
    setIsLoading(false);
    setTimeout(() => setShowApp(true), 100);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        {(showApp || !isLoading) && (
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/platform" element={<DeliveryManagement />} />
                <Route path="/platform/delivery-management" element={<DeliveryManagement />} />
                <Route path="/platform/mobile-app" element={<MobileApp />} />
                <Route path="/platform/optimizer" element={<Optimizer />} />
                <Route path="/platform/multicarrier" element={<Multicarrier />} />
                <Route path="/platform/insights" element={<ProductInsights />} />
                <Route path="/platform/*" element={<Platform />} />
                 <Route path="/industries/*" element={<LastMile />} />
                <Route path="/industries/last-mile" element={<LastMile />} />
                <Route path="/industries/couriers" element={<Couriers />} />
                <Route path="/industries/express-parcel" element={<ExpressParcel />} />
                <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
                <Route path="/industries/logistics-3pl" element={<Logistics3PL />} />
                <Route path="/industries/hyperlocal" element={<Hyperlocal />} />
                <Route path="/features" element={<Features />} />
                <Route path="/features/*" element={<Features />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/:jobId" element={<JobDetail />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/*" element={<Resources />} />
                <Route path="/trust" element={<Trust />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Route>
             
            </Routes>
            
            {/* AI Chat Widget - Lazy loaded after 5s or on interaction */}
            <Suspense fallback={null}>
              <AIChatWidget />
            </Suspense>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
