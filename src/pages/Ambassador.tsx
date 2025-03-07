
import React from "react";
import { Helmet } from "react-helmet";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbassadorHero from "@/components/ambassador/AmbassadorHero";
import AmbassadorRole from "@/components/ambassador/AmbassadorRole";
import AmbassadorBenefits from "@/components/ambassador/AmbassadorBenefits";
import AmbassadorResponsibilities from "@/components/ambassador/AmbassadorResponsibilities";
import SocialMediaSection from "@/components/ambassador/SocialMediaSection";
import AmbassadorStories from "@/components/ambassador/AmbassadorStories";
import ApplicationForm from "@/components/ambassador/ApplicationForm";
import CallToAction from "@/components/ambassador/CallToAction";

const Ambassador = () => {
  return (
    <>
      <Helmet>
        <title>Become an Ambassador | Vardini Farms</title>
        <meta name="description" content="Join our mission as a Vardini Farms Ambassador and help spread awareness about desi cow protection and sustainable farming." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <AmbassadorHero />
          <AmbassadorRole />
          <Separator />
          <AmbassadorBenefits />
          <AmbassadorResponsibilities />
          <SocialMediaSection />
          <AmbassadorStories />
          <ApplicationForm />
          <CallToAction />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Ambassador;
