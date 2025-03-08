
import React from "react";

const VolunteerHero = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b')] bg-cover bg-center py-20 relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">Volunteer With Us</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">Make a meaningful impact by volunteering your time and skills to help our rescued cows and support sustainable farming practices.</p>
      </div>
    </section>
  );
};

export default VolunteerHero;
