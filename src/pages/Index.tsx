
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FeaturedProducts from "@/components/FeaturedProducts";
import CowProfiles from "@/components/CowProfiles";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <FeaturedProducts />
      <CowProfiles />
      <MissionSection />
      <Footer />
    </div>
  );
};

export default Index;
