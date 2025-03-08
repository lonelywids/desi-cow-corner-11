
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PartnerTestimonials = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Our Corporate Partners</h2>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>EcoTech Solutions</CardTitle>
            <CardDescription>Technology Partner</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="italic text-gray-600">
              "Our partnership with Vardini Farms has allowed us to truly live our sustainability values. The employee volunteer program has been transformative for our team, connecting them directly with sustainable agriculture practices."
            </p>
          </CardContent>
          <CardFooter className="text-sm text-gray-500">
            - Vikram Mehta, CSR Head
          </CardFooter>
        </Card>
        
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>Green Earth Foundation</CardTitle>
            <CardDescription>Non-profit Partner</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="italic text-gray-600">
              "The joint educational initiatives we've developed with Vardini Farms have reached over 5,000 students in urban areas, helping them understand the importance of indigenous cow breeds and sustainable farming."
            </p>
          </CardContent>
          <CardFooter className="text-sm text-gray-500">
            - Priya Sharma, Executive Director
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default PartnerTestimonials;
