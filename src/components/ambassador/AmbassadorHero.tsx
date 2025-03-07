
import React from "react";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";

const AmbassadorHero = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac')] bg-cover bg-center py-24 relative">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">Become Our Ambassador</h1>
          <p className="text-xl text-white/90 mb-8">
            Help us spread the message of cow protection, sustainable farming, and cultural heritage preservation as a Vardini Farms Ambassador.
          </p>
          <Button 
            size="lg" 
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
            onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Flag className="mr-2 h-5 w-5" />
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorHero;
