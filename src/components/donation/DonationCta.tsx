
import React from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const DonationCta = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="bg-earth-800 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d" 
              alt="Desi cows at Vardini Farms" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Join Us in Protecting Our Heritage
            </h2>
            <p className="text-lg text-cream-100 mb-8">
              Your donation today will help us rescue more desi cows, expand our educational programs, and preserve our rich cultural heritage for future generations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = "/volunteer"}
              >
                Volunteer With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCta;
