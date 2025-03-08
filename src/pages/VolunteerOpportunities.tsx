
import React from "react";
import { Helmet } from "react-helmet";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VolunteerHero from "@/components/volunteer/VolunteerHero";
import WhyVolunteer from "@/components/volunteer/WhyVolunteer";
import VolunteerOpportunitiesSection from "@/components/volunteer/VolunteerOpportunities";
import HowToApply from "@/components/volunteer/HowToApply";
import VolunteerTestimonials from "@/components/volunteer/VolunteerTestimonials";
import VolunteerFAQ from "@/components/volunteer/VolunteerFAQ";
import VolunteerCTA from "@/components/volunteer/VolunteerCTA";

const VolunteerOpportunities = () => {
  return (
    <>
      <Helmet>
        <title>Volunteer Opportunities | Vardini Farms</title>
        <meta name="description" content="Join our volunteer program and help us care for rescued cows while learning about sustainable farming practices." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <VolunteerHero />
          <WhyVolunteer />
          <Separator />
          <VolunteerOpportunitiesSection />
          <HowToApply />
          <VolunteerTestimonials />
          <VolunteerFAQ />
          <VolunteerCTA />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default VolunteerOpportunities;
