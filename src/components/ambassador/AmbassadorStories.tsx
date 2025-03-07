
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AmbassadorStories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 font-playfair">Meet Our Ambassadors</h2>
          <p className="text-lg text-earth-700 max-w-3xl mx-auto">
            Hear from the individuals who are already making an impact as Vardini Farms Ambassadors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" 
                alt="Rajesh Sharma" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-2">Rajesh Sharma</h3>
              <p className="text-sm text-earth-500 mb-4">Ambassador since 2022</p>
              <p className="text-earth-700">
                "Being an ambassador for Vardini Farms has connected me with like-minded individuals passionate about preserving our cultural heritage and protecting indigenous cow breeds. I've learned so much about sustainable farming and have been able to share this knowledge with my community in Mumbai."
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" 
                alt="Priya Patel" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-2">Priya Patel</h3>
              <p className="text-sm text-earth-500 mb-4">Ambassador since 2021</p>
              <p className="text-earth-700">
                "As someone with a background in digital marketing, becoming an ambassador allowed me to use my skills for a cause I deeply care about. It's incredibly rewarding to see how my content has helped raise awareness about desi cows and encouraged people in Bangalore to support ethical dairy practices."
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Vikram Mehta" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-2">Vikram Mehta</h3>
              <p className="text-sm text-earth-500 mb-4">Ambassador since 2020</p>
              <p className="text-earth-700">
                "What started as a simple passion for sustainable living has turned into a meaningful journey as a Vardini Farms Ambassador. I've been able to organize workshops in Delhi, connect urban residents with their roots, and help people understand the importance of preserving indigenous cow breeds."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorStories;
