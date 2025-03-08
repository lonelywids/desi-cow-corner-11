
import React from "react";
import { Helmet } from "react-helmet";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CorporateHero from "@/components/corporate/CorporateHero";
import PartnershipOverview from "@/components/corporate/PartnershipOverview";
import PartnershipModels from "@/components/corporate/PartnershipModels";
import PartnerTestimonials from "@/components/corporate/PartnerTestimonials";
import CallToAction from "@/components/corporate/CallToAction";

const CorporatePartnership = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Partnership | Vardini Farms</title>
        <meta name="description" content="Partner with Vardini Farms to promote ethical dairy practices and support our cow rescue mission." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <CorporateHero />
          <PartnershipOverview />
          <Separator />
          <PartnershipModels />
          <PartnerTestimonials />
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CorporatePartnership;
