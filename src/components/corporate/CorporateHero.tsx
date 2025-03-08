
import React from "react";

const CorporateHero = () => {
  return (
    <section className="bg-[url('/images/farm-panorama.jpg')] bg-cover bg-center py-20 relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">Corporate Partnership</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">Join hands with Vardini Farms to create a sustainable future and make a positive impact on society.</p>
      </div>
    </section>
  );
};

export default CorporateHero;
