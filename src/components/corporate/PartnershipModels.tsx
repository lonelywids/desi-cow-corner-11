
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PartnershipModels = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Partnership Models</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-t-4 border-t-amber-600">
            <CardHeader>
              <CardTitle>Sponsor a Cow</CardTitle>
              <CardDescription>Support our cow rescue efforts</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Fund the rescue and care of abandoned desi cows</li>
                <li>• Regular updates on the sponsored cow</li>
                <li>• Recognition on our website and premises</li>
                <li>• Visits to meet the rescued cows</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
          
          <Card className="border-t-4 border-t-emerald-600">
            <CardHeader>
              <CardTitle>Fund an Initiative</CardTitle>
              <CardDescription>Support our educational programs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Fund workshops on indigenous farming</li>
                <li>• Support school educational programs</li>
                <li>• Co-create awareness campaigns</li>
                <li>• Branding opportunities at events</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
          
          <Card className="border-t-4 border-t-blue-600">
            <CardHeader>
              <CardTitle>Strategic Alliance</CardTitle>
              <CardDescription>Long-term partnership opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Co-branded product development</li>
                <li>• Exclusive supply arrangements</li>
                <li>• Joint research and development</li>
                <li>• Knowledge sharing and collaboration</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnershipModels;
