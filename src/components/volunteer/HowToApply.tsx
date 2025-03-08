
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const HowToApply = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="bg-earth-800 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516467508483-a7212febe31a" 
            alt="Volunteers at Vardini Farms" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6 font-playfair text-center">How to Apply</h2>
          <p className="text-lg mb-8 text-center">
            Ready to make a difference? Follow these simple steps to join our volunteer program:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold mb-2">Fill the Form</h3>
              <p>Complete our online volunteer application form with your details and interests.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold mb-2">Orientation</h3>
              <p>Attend a virtual or in-person orientation session to learn about our work.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold mb-2">Start Volunteering</h3>
              <p>Choose your preferred activities and schedule your first volunteering session.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-terracotta-500 hover:bg-terracotta-600">
              <Calendar className="mr-2 h-5 w-5" />
              Apply to Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
