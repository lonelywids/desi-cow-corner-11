
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Leaf, Users, School } from "lucide-react";

const WhyVolunteer = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 font-playfair text-center">Why Volunteer at Vardini Farms?</h2>
        <p className="text-lg mb-6">
          Volunteering at Vardini Farms offers a unique opportunity to connect with nature, serve animals, and be part of a movement that's preserving our cultural heritage. Whether you're looking to learn about sustainable farming, contribute to animal welfare, or simply spend time in a peaceful rural setting, we have something for everyone.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Heart className="h-8 w-8 text-terracotta-500" />
              <CardTitle>Connect with Cows</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Build relationships with our rescued cows while helping with their daily care and understanding their unique personalities.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Leaf className="h-8 w-8 text-green-600" />
              <CardTitle>Learn Sustainable Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Gain hands-on experience in sustainable farming, natural cow care, and eco-friendly agricultural techniques.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="h-8 w-8 text-blue-600" />
              <CardTitle>Community Connection</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Meet like-minded individuals, form lasting friendships, and be part of a community dedicated to making a difference.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <School className="h-8 w-8 text-amber-600" />
              <CardTitle>Cultural Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn about the cultural significance of indigenous cows in Indian heritage and traditional knowledge systems.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyVolunteer;
