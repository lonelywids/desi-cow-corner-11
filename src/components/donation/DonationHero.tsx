
import React from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const DonationHero = () => {
  return (
    <section className="bg-earth-50 py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-earth-800 mb-6">
              Your Donation Makes a Difference
            </h1>
            <p className="text-lg text-earth-700 mb-8">
              Every contribution helps us rescue more desi cows from slaughter, provide them a loving home, and preserve our rich cultural heritage for future generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('our-impact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn About Our Impact
              </Button>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
              alt="Rescued cow at Vardini Farms" 
              className="w-full h-[400px] object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
              <p className="text-white text-lg font-medium">Lakshmi, rescued from a slaughterhouse in 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationHero;
