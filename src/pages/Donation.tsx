
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationHero from "@/components/donation/DonationHero";
import ImpactSection from "@/components/donation/ImpactSection";
import DonationForm from "@/components/donation/DonationForm";
import TestimonialsSection from "@/components/donation/TestimonialsSection";
import FaqSection from "@/components/donation/FaqSection";
import DonationCta from "@/components/donation/DonationCta";

const Donation = () => {
  return (
    <>
      <Helmet>
        <title>Make a Donation | Vardini Farms</title>
        <meta name="description" content="Support our mission to rescue and rehabilitate desi cows while preserving Indian cultural heritage." />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <DonationHero />
        <ImpactSection />
        <DonationForm />
        <TestimonialsSection />
        <FaqSection />
        <DonationCta />
      </main>

      <Footer />
    </>
  );
};

export default Donation;
