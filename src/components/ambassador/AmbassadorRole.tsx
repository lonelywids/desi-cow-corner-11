
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Heart, Users } from "lucide-react";

const AmbassadorRole = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 font-playfair">What is a Vardini Farms Ambassador?</h2>
          <p className="text-lg text-earth-700">
            Ambassadors are passionate individuals who share our vision of protecting indigenous cow breeds, 
            promoting sustainable farming, and preserving our rich cultural heritage. They help spread our 
            message across various platforms and communities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 border-t-4 border-terracotta-500">
            <CardContent className="pt-6">
              <div className="bg-terracotta-100 p-3 rounded-full inline-flex mb-4">
                <Share2 className="h-8 w-8 text-terracotta-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Spread Awareness</h3>
              <p className="text-earth-600">
                Share our mission, stories, and content with your network to raise awareness about indigenous cow protection.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-t-4 border-amber-500">
            <CardContent className="pt-6">
              <div className="bg-amber-100 p-3 rounded-full inline-flex mb-4">
                <Heart className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Inspire Action</h3>
              <p className="text-earth-600">
                Motivate others to support our cause through donations, volunteering, or adopting our sustainable practices.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 border-t-4 border-green-500">
            <CardContent className="pt-6">
              <div className="bg-green-100 p-3 rounded-full inline-flex mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium mb-3">Build Community</h3>
              <p className="text-earth-600">
                Connect with like-minded individuals and help grow our community of supporters across India.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorRole;
