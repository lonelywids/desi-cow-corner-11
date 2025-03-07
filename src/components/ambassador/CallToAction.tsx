
import React from "react";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-earth-800 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
              alt="Cows at Vardini Farms" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-cream-100 mb-8">
              Join our ambassador program today and help us protect indigenous cow breeds, promote sustainable farming, and preserve our rich cultural heritage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
                size="lg"
              >
                <Flag className="w-5 h-5 mr-2" />
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
