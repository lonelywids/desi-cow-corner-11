
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const VolunteerTestimonials = () => {
  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Volunteer Testimonials</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white shadow-md">
            <CardContent className="pt-6">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                alt="Volunteer Anita" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg text-center mb-2">Anita Sharma</h3>
              <p className="text-center text-earth-600 mb-4">Volunteer since 2022</p>
              <p className="italic text-gray-600">
                "Volunteering at Vardini Farms has been transformative. The connection I've developed with the cows and the knowledge I've gained about sustainable farming has changed my outlook on life. It's a peaceful place where you can truly make a difference."
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md">
            <CardContent className="pt-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                alt="Volunteer Rahul" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg text-center mb-2">Rahul Mehra</h3>
              <p className="text-center text-earth-600 mb-4">Weekend Volunteer</p>
              <p className="italic text-gray-600">
                "As a corporate professional, my weekend volunteering at Vardini Farms provides the perfect balance to my busy urban life. Working with the cows is therapeutic, and I've learned so much about our cultural heritage that I wouldn't have otherwise."
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md">
            <CardContent className="pt-6">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956" 
                alt="Volunteer Priya" 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg text-center mb-2">Priya Patel</h3>
              <p className="text-center text-earth-600 mb-4">Student Volunteer</p>
              <p className="italic text-gray-600">
                "I started volunteering at Vardini as part of a college project, but it's become a passion. The team is incredibly supportive, and I've gained practical experience in sustainable farming that complements my environmental studies perfectly."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VolunteerTestimonials;
